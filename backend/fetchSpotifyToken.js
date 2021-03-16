import axios from 'axios'
import {credentials} from './credentials.js'

const fetchSpotifyToken=async()=>{
  const {clientID}=credentials()
  const {clientSecret}=credentials()

  const data=await axios(`https://accounts.spotify.com/api/token`, {
    method:'POST',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization': `Basic ` + Buffer.from(clientID + ':' + clientSecret).toString('base64')

    },
    data:'grant_type=client_credentials',
  })
  const token=data.data.access_token
  return token
}

export default fetchSpotifyToken
