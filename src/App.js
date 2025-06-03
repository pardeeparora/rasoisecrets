import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const basePath = process.env.PUBLIC_URL || '';
  useEffect(() => {
    fetch(`${basePath}/videos.json`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-green-100 text-center py-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          🍳 Welcome to Indian Rasoi Secrets
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          Discover homemade vegetarian Indian recipes with step-by-step cooking videos.
        </p>
      </header>

      {/* Video Grid */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Latest Recipes
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
            >
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allowFullScreen
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3 text-gray-800">
                {video.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{video.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
