import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("Error fetching videos:", err));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          🍳 Rasoi Secrets: Cooking Videos
        </h1>

        {videos.map((video) => (
          <div key={video.id} className="mb-12 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
            <div className="aspect-video mb-3">
              <iframe
                className="w-full h-72 rounded-md"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allowFullScreen
              />
            </div>
            <p className="text-gray-700">{video.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
