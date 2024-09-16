import React, { useState, useEffect } from "react";
import StoryList from "./components/StoryList";

const App = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch("https://hacker-news-topstories-backend.onrender.com/top-stories");
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const data = await response.json();
        setStories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) {
    return <div className="flex h-screen items-center justify-center text-3xl font-semibold"> Loading...</div>;
  }

  if (error) {
    return <div className="flex h-screen items-center justify-center text-3xl font-semibold">Something went wrong!! {error}</div>;
  }


  return (
    <div>
      <div className="flex justify-center mt-4">
        <h1 className="font-bold text-3xl">Top 10 Hacker News Stories</h1>
      </div>
      <div className="flex justify-center mt-6 mb-4">
        <StoryList stories={stories} />
      </div>
    </div>
  );
}

export default App;
