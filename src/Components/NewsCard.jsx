import React from "react";

function NewsCard({ title, description, imageUrl, newsUrl, author, date }) {
  
  function truncateText(text, maxWords) {
    const words = text.split(" ");
    const truncatedText = words.slice(0, maxWords).join(" ");
    return truncatedText + "...";
  }
  
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const newtitle = truncateText(title, 5);
  const newdesc = truncateText(description, 4);

  return (
    <div className=" m-4 h-88 w-[320px] flex-col text-slate-500 border-2 border-black rounded-lg p-0 z-10">
      <div className="imgdiv  w-full h-28 overflow-hidden rounded-l-lg">
        <img className=" w-full h-full object-cover" src={imageUrl} alt="img" />
      </div>
      <div className="textCont flex-col justify-around py-1 px-2 blur-lg z-10">
        <h5 className="card-title text-slate-800 font-bold text-md ">
          {newtitle}
        </h5>
        <p className="card-text text-slate-600 text-sm mb-1">{newdesc}</p>
        <p className=" text-slate-500 text-sm mb-1">
          By {author} on {formattedDate}
        </p>
        <a href={newsUrl} target="blank" className=" text-slate-800">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
