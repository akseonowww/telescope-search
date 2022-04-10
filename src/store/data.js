/* eslint-disable consistent-return */
/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
const axios = require('axios');

// const baseURL = 'https://jsonblob.com/api/jsonBlob/962331985410539520'

// const dataTS = (urlDate) => {
//    let info = 'ля-ля-ля' 



//    return info

//    // console.log(urlDate)
//    // console.log(dataTS)
// }


// const dataTS = async (p_url) => {
//    const params = {
//       method: "GET",
//       headers: {
//          Accept: "application/json",
//          "Content-Type": "application/json"
//       }
//    };
//    const req = await fetch(
//       p_url,
//       params
//    )

//    if (req.ok) {
//       const rep = await req.json();
//       return rep;
//    }
// }


const dataTS = (url) => {

   axios.get(url)
      .then((response) => {
         console.log(1, response.data);
         return response
      })
      .catch((error) => {
         console.log(0, error);
      })
}

export default dataTS