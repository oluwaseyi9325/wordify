import React, { useState } from "react";

function NewsComments() {
  const [hideComments, setHideComments] = useState(false);
  const [hideText, setHideText] = useState("Show ▼");
  const hideCommentsButton = () => {
    setHideComments(!hideComments ? true : false);
    setHideText(!hideComments ? "Hide ▲" : "Show ▼");
  };
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
              <span className="badge badge-info">10</span>
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
          <div className="">
            <p
              className="card-text shadow p-2 animate__animated animate__fadeInDown"
              style={{ borderRadius: "10px" }}
            >
              Some quick example text to build on the card the bulk of the
              card's content.
            </p>

            <p
              className="card-text shadow p-2"
              style={{ borderRadius: "10px" }}
            >
              Some quick example text to build on the card the bulk of the
              card's content.
            </p>
            <p
              className="card-text shadow p-2"
              style={{ borderRadius: "10px" }}
            >
              Some quick example text to build on the card the bulk of the
              card's content.
            </p>
            <p
              className="card-text shadow p-2"
              style={{ borderRadius: "10px" }}
            >
              Some quick example text to build on the card the bulk of the
              card's content.
            </p>
          </div>
        )}
      </div>

      <div className="card-footer">
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Your Mail"
            name="text"
            className="form-control"
          />
          <div className="input-group-append">
            <i className="bi bi-send btn btn-info"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsComments;
