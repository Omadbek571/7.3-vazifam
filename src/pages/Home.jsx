import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setPhotos(response.data.slice(0, 25));
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <img src="https://i.gifer.com/6os.gif" alt="Yuklanmoqda..." className="w-24 h-24" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {photos.map(photo => (
        <div key={photo.id} className="bg-slate-300 p-4 shadow-md rounded-lg transition-transform transform hover:scale-105">
          <LazyLoadImage
            src={photo.thumbnailUrl}
            alt={photo.title}
            className="rounded-lg w-full h-auto"
            loading="lazy"
          />
          <h3 className="text-sm font-medium text-gray-700 mt-2 truncate">{photo.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
