import React, { useState } from 'react';
import axios from 'axios';

const VideoAnalyzer = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [rating, setRating] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/analyze', { youtube_link: youtubeLink });

      setRating(response.data.rating);
    } catch (error) {
      console.error('Error analyzing video:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          YouTube Link:
          <input
            type="text"
            value={youtubeLink}
            onChange={(e) => setYoutubeLink(e.target.value)}
          />
        </label>
        <button type="submit">Analyze Video</button>
      </form>
      {rating && <p>Video Rating: {rating}</p>}
    </div>
  );
};

export default VideoAnalyzer;
