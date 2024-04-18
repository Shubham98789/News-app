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

  const newtitle = truncateText(title, 9);
  const newdesc = truncateText(description, 4);

  return (
    <div className=" m-4 h-72 w-80 flex-col border-2 border-white rounded-lg p-0 overflow-hidden hover:shadow-2xl ring-white">
      <div className="imgdiv shadow-2xl w-full h-2/5 overflow-hidden ">
        <img className=" w-full h-full object-cover" src={imageUrl} alt="img" />
      </div>
      <div className="textCont h-3/5 flex flex-col justify-between bg-opacity-50 py-1 px-2 bg-blue-950">
        <div className="content w-full flex flex-col gap-1">
          <h5 className="card-title text-slate-50 font-bold text-md">
            {newtitle}
          </h5>
          <p className="card-text text-slate-200 text-sm mb-1">{newdesc}</p>
          <p className="text-slate-400 text-sm mb-1">
            By {author} on {formattedDate}
          </p>
        </div>

        <div className="link w-full m-1">
          <a
            href={newsUrl}
            target="blank"
            className=" text-slate-200 hover:text-yellow-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
