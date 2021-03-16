import fetchSpotifyToken from './fetchSpotifyToken.js';
import axios from 'axios'

const fetchSpotifyGenre=async()=>{
  const token=await fetchSpotifyToken()
  const results=await axios(`https://api.spotify.com/v1/browse/categories?locale=sv=US`, {
    method:'GET',
    headers: {'Authorization': 'Bearer ' + token}
  })
  return results.data.categories.items
}


export default fetchSpotifyGenre
