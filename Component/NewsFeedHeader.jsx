import React from 'react'

function NewsFeedHeader({NewsSec}) {
  return (
    <div className=" pt-2 pb-2 h1  mb-3 text-center text-white container-fluid" style={{backgroundColor:"#6610F2"}}>
    <span className='blog-name-contact'>Category </span> ||
   <i className='getInTouch'> {NewsSec}</i>
     </div>
  )
}

export default NewsFeedHeader