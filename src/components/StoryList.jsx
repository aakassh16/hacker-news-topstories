import React from "react";

function StoryList({ stories }) {
  return (
    <ul>
      {stories.map((story, index) => (
        <li key={index}>
          <div className="border border-slate-600 p-4 m-2 bg-slate-100">
            <a className="flex justify-center text-xl font-semibold mb-1 pb-2 sm:text-lg text-center hover:text-blue-700" href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
            <p className="flex justify-center text-md font-semibold">Author: {story.author}</p>
            <p className="flex justify-center text-md font-semibold">Score: {story.score}</p>
            <p className="flex justify-center text-md font-semibold">Time: {story.time} IST</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default StoryList;
