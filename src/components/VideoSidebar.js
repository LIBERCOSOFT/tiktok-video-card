import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MessageIcon from '@mui/icons-material/Message'
import ShareIcon from '@mui/icons-material/Share'

import './styles/Videosidebar.css'

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__buttons'>
        {liked ? (
          <FavoriteIcon onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className='videoSidebar__buttons'>
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className='videoSidebar__buttons'>
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
