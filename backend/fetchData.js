import fetch from "node-fetch"

const fetchData=async()=>{
  const data=await fetch('https://pokeapi.co/api/v2/ability')
  const res=await data.json()
  const final=res.results
  return res.results
}


export default fetchData
