import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import VideoCard from './components/VideoCard'
import db from './firebase'
import './App.css'

function App() {
  const [videos, setVidoes] = useState([])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'videos'))
      const videoList = querySnapshot.docs.map((doc) => doc.data())
      setVidoes(videoList)
    })()
  }, [])

  return (
    <div className='app'>
      <div className='app__vidoes'>
        {videos.map(
          ({ url, description, channel, song, likes, messages, shares }, i) => (
            <VideoCard
              key={i}
              url={url}
              description={description}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  )
}

export default App
