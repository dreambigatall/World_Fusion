//  import axios from 'axios';

// // async function fetchAiData({quetion}){

// //   try{
// //     const response = await axios({
// //       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
// //         import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
// //       }`,
// //       method: "post",
// //       data: {
// //         contents: [{ parts: [{ text: quetion }] }],
// //       },
// //     });
// //     return response;

// //   }catch(err){
// //     throw new Error(err.message);
    
// //   }

// // }

// // export default fetchAiData;
// async function fetchAiData({ question }) {
//   try {
//     const response = await axios({
//       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
//         import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
//       }`,
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       data: {
//         prompt: {
//           text: question,
//         },
//       },
//     });
//     return response.data;
//   } catch (err) {
//     console.error("Error fetching AI data:", err);
//     throw new Error(err.message);
//   }
// }

// export default fetchAiData;
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT;

const fetchAiData = async ({ question }) => {
  try {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, // Using text-bison-001 model
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        prompt: {
          // The request expects 'prompt' to be an object with 'text'
          text: `tele me abot ${question} this country`,
        },
      },
    });
    return response.data;
  } catch (err) {
    // Error handling and logging
    if (err.response) {
      console.error('API error:', err.response.data);
    } else {
      console.error('Request error:', err.message);
    }
    throw new Error('Error fetching AI response');

  }
};

export default fetchAiData;
