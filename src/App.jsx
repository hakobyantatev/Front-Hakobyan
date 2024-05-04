import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Posts from './Components/Posts/Posts'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([])
  const [originaPosts, setOriginaPosts] = useState([])
  

  useEffect(() => {
    axios("https://cloud.codesupply.co/endpoint/react/data.json")
    .then(res => res.data)
    .then(data => {
      setPosts(data)
      setOriginaPosts(data)
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      setPosts([]);
      setOriginaPosts([])
    })
  }, [])

  return (
    <>
      <Header setPosts={setPosts} originaPosts ={originaPosts}/>
      <Posts posts={posts}/>
    </>
  )
}

export default App
