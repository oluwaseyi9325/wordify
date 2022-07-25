import React from 'react'
import NavBar from '../Component/NavBar'
import NewsFeedHeader from '../Component/NewsFeedHeader'
import NewsFeed from '../Component/NewsFeed'

function category() {
  return (
    <div>
       <NewsFeedHeader />

        <NavBar />

      <div className='container'>
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      <NewsFeed />
      </div>
    
    </div>
  )
}

export default category