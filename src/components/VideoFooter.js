import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Ticker from 'react-ticker'

import './styles/VideoFooter.css'

function VideoFooter({ channel, description, song }) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__musicIcon' />
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className='videoFooter__disk'
        src='https://static.thenounproject.com/png/934821-200.png'
        alt=''
      />
    </div>
  )
}

export default VideoFooter