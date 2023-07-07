// import React, { useState } from 'react';
// import axios from 'axios';

// const VideoAnalyzer = () => {
//   const [youtubeLink, setYoutubeLink] = useState('');
//   const [rating, setRating] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/analyze', { youtube_link: youtubeLink });

//       setRating(response.data.rating);
//     } catch (error) {
//       console.error('Error analyzing video:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           YouTube Link:
//           <input
//             type="text"
//             value={youtubeLink}
//             onChange={(e) => setYoutubeLink(e.target.value)}
//           />
//         </label>
//         <button type="submit">Analyze Video</button>
//       </form>
//       {rating && <p>Video Rating: {rating}</p>}
//     </div>
//   );
// };

// export default VideoAnalyzer;

import React, { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

const VideoAnalyzer = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  // const history = useHistory();

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/analyze', { youtube_link: youtubeLink });
  //     const rating = response.data.rating;

  //     // Navigate to the result page with the rating
  //     history.push(`/result?rating=${rating}`);
  //   } catch (error) {
  //     console.error('Error analyzing video:', error);
  //   }
  // };


  return (
    <div>
      <form 
      // onSubmit={handleFormSubmit}
      >
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
    </div>
  );
};

export default VideoAnalyzer;
