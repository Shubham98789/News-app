import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadSpinner from "./Loader/Loading";
import Skeleton from "./Skeleton";

function Board({ topic, searchQuery, click }) {
  const [newsData, setNewsData] = useState([]);
  const [page, setpage] = useState(1);
  const [loading, setLoading] = useState(true);

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
      let url;
      if (searchQuery) {
        console.log(searchQuery);
        url = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&language=en&apiKey=334dfbb4ede6448a8e7d07bc7210527f&page=${page}&pageSize=12`;
      } else {
        url = `https://newsapi.org/v2/top-headlines?category=${catagory}&language=en&apiKey=334dfbb4ede6448a8e7d07bc7210527f&page=${page}&pageSize=12`;
      }
      const response = await fetch(url);
      console.log("APi is Called");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setNewsData(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error aya", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setNewsData([]);
    setpage(1);
    fetchNews();
  }, [topic, click]);

  const fetchMoreData = async () => {
    setpage((p) => p + 1);
    //const url = `https://newsapi.org/v2/top-headlines?category=${catagory}&language=en&apiKey=334dfbb4ede6448a8e7d07bc7210527f&page=${page}&pageSize=12`;
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
    <div className=" w-full  bg-gradient-to-l from-black via-blue-950 to-black px-2">
<h2 className="font-extrabold sm:text-5xl text-3xl text-center font-serif text-white sm:mt-16 mt-20 pt-2" >
  Top Headlines {searchQuery ? `for ${searchQuery}` : `of ${topic}`}
</h2>


      <InfiniteScroll
        dataLength={newsData.length}
        next={fetchMoreData}
        hasMore={newsData.length !== newsData.totalResults}
        //hasMore={true}
        //loader={<LoadSpinner />}
      >
        <div className=" flex justify-center items-center flex-wrap overflow-hidden">
          {newsData.map((element, index) =>
            loading ? (
              <Skeleton key={index} />
            ) : (
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
            )
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Board;
