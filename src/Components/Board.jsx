import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

function Board({ topic }) {
  const [newsData, setNewsData] = useState([]);
  const [page, setpage] = useState(1)

  function makeFirstLetterLowercase(inputString) {
    if (inputString.length === 0) {
      return "";
    }
    return inputString.charAt(0).toLowerCase() + inputString.slice(1);
  }
  const catagory =
    topic === "Today" ? "general" : makeFirstLetterLowercase(topic);

  const fetchNews = async () => {
    try {
      const url=`https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=334dfbb4ede6448a8e7d07bc7210527f&page=${page}&pageSize=8`
      const response = await fetch(url);
      console.log("APi is Called");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setNewsData(data.articles); // Assuming your API returns an array of articles
    } catch (error) {
      console.error("Error aya", error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, [topic]); // Empty dependency array means this effect runs only once after the initial render

  const fetchMoreData = async () => {
    setpage(p => p+1)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=334dfbb4ede6448a8e7d07bc7210527f&page=${page}&pageSize=8`
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch more data");
      }
      const newData = await response.json();
      setNewsData((prevData) => [...prevData, ...newData.articles]);
    } catch (error) {
      console.error("Error fetching more new data:", error);
    }
  };

  return (
    <div className=" bg-purple-600">
      <h2 className=" font-extrabold text-5xl text-center font-serif">
        Top Headlines of {topic}
      </h2>

      <InfiniteScroll
        dataLength={newsData.length}
        next={fetchMoreData}
        hasMore={newsData.length !== newsData.totalResults}
        //hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="bg-purple-600 flex justify-center items-center flex-wrap overflow-hidden">
          {newsData.map((element,index) => (
            <NewsCard
              key={index}
              title={element.title ? element.title : " "}
              description={element.description ? element.description : " "}
              imageUrl={
                element.urlToImage
                  ? element.urlToImage
                  : "https://images.indianexpress.com/2023/11/IND-NED.png"
              }
              newsUrl={element.url}
              author={element.author ? element.author : "Unknown"}
              date={element.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Board;
