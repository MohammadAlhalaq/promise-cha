const https = require('https')

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
const pikaUrl = makePokeUrl('pikachu')

// const myApiCall = (url, callback) => {
//   https
//     .get(url, resp => {
//       let data = ''
//       resp.on('data', chunk => {
//         data += chunk
//       })
//       resp.on('end', () => {
//         try {
//           callback(null, JSON.parse(data))
//         } catch (e) {
//           callback('Oops, this isn\'t JSON')
//         }
//       })
//     })
//     .on('error', err => {
//       callback(err.message)
//     })
// }

// myApiCall(pikaUrl, (err, res) => {
//   if (err) console.log(res)
//   else console.log(res)
// })

//Now let's make it a Promise

const myPromiseApi = url => new Promise((resolve, reject) => {
  https
  .get(url, res => {
    let allData = '';
    res.on('data', (chunk) => {
      allData += chunk;
    });
    res.on('end', () => {
        // try {
          resolve(JSON.parse(allData));
        // } catch (error) {
          // reject("Oops, this isn\'t JSON" + error);
        // }
    });
    res.on('error', (err) => {
      reject(err.message);
    })
  })

});

//And call it here...
myPromiseApi(pikaUrl)
      .then(res => console.log(res))
      .catch(err => console.log(err))