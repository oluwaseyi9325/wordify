import axios from "axios";
import React, { useState } from "react";
import useSWR from "swr";


function NewsComments({postId}) {
 
  const[writeCommets,setWriteCommet]=useState("")
  const [hideComments, setHideComments] = useState(false);
  const [hideText, setHideText] = useState("Show ▼");
  const hideCommentsButton = () => {
    setHideComments(!hideComments ? true : false);
    setHideText(!hideComments ? "Hide ▲" : "Show ▼");
  };
  const { data, error,mutate } = useSWR(`https://newsimefy.onrender.com/brands?postId=${postId}`,
  
  {
    // revalidateOnFocus:false,
    refreshInterval:1000,
    
  }  )

  if(error) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>An error occur, please contact the admin !!!</i>
       </div>
      </div>
  )
  if(!data) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>Processing....</i>
       </div>
      </div>
  )

  const sendCommets=()=>{
    axios.post(`https://newsimefy.onrender.com/brands`,{
      
      "postId":postId,
      "message":writeCommets
      
    })
    mutate()
    setWriteCommet("")
  }

  const deleteComments=(commentsIndex)=>{
    axios.delete(`https://newsimefy.onrender.com/brands/${commentsIndex}`)
    mutate()
  }
  
 
  return (
    <div className="card  card-width">
      <div className="text-center text-muted  card-text mr-0"></div>
      <div className="card-header text-center">
        <section className="row">
          <div className="col-5">
            <span className="" style={{ backgroundColor: "whitesmoke" }}>
              <i className="bi bi-hand-thumbs-up"></i> Like
              <span className="badge badge-info">10</span>
            </span>
          </div>
          <div className="col-7 ">
            <span className="" style={{ backgroundColor: "whitesmoke" }}>
              <i className="bi bi-chat-left"></i>
              <span> Comment</span>
              <span className="badge badge-info">{data.length}</span>
            </span>
          </div>
        </section>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          Comments{" "}
          <button
            className="btn btn-sm btn-primary"
            onClick={() => hideCommentsButton()}
          >
            {hideText}
          </button>
        </h5>

        {hideComments && (
          <div className="" >
            {
              data.map((val,i)=>{
                return(
                  <p
                  className="card-text shadow p-2  row animate__animated animate__fadeInUp" 
                  style={{ borderRadius: "10px" }}
                >
                  <div className="col-10">
                  {val.message} 
                 
                  </div>

                  <div className="col-2">
                     <i className="bi bi-x-circle-fill text-danger" onClick={()=>deleteComments(val.id)}></i>
                  </div>
                 
                </p>
    
                )
              })
            }
          
          
          
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="input-group">
          <input
            value={writeCommets}
            onChange={(e)=>setWriteCommet(e.target.value)}
            type="text"
            placeholder="Enter Your Mail"
            name="text"
            className="form-control"
          />
          <div className="input-group-append" onClick={()=>sendCommets()}>
            <i className="bi bi-send btn btn-info"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComments;
