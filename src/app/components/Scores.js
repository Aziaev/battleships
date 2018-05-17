import React, { Component } from 'react'

export default (props) => {
  const { hits, shots } = props;
  return (
    <div className='scorePanel text-center'>
      <div className='scoreHits'>
        <h2 className='scores'>{hits}</h2>
        <hr/>
        <p className='scoreText'>Hits</p>
      </div>
      <div className='scoreShots'>
        <h2 className='scores'>{shots}</h2>
        <hr/>
        <p className='scoreText'>Shots</p>
      </div>
    </div>
  )
}
