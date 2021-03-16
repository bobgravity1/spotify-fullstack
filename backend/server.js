import express from 'express';
const app=express()
import axios from 'axios'
import cors from 'cors'
import fetchData from './fetchData.js'
import fetchSpotifyToken from './fetchSpotifyToken.js'
import fetchSpotifyGenre from './fetchSpotifyGenre.js'

app.use(cors())

app.get('/api/data', async (req, res)=>{
  const data=await fetchData()

  res.send(data)
})

app.post('/', async (req, res)=>{
  res.send(`<button><a href='/second'>you logged in</a></button>`)
})

app.get('/api/spotify', cors(), async (req, res)=>{
  const token=await fetchSpotifyToken()

  res.send(token)
})

app.get('/api/spotify/genres', cors(), async (req, res)=>{
  const genres=await fetchSpotifyGenre()
  res.send(genres)
})

app.listen(3000, ()=>{
  console.log('listening on port 3000')
})
