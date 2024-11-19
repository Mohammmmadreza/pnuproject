import React from "react";
import { useState ,useRef} from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import './Newscardcontainer.css'


export default function Like() {
  const [likeCount, setLikeCount] = useState(50);
  const [dislikeCount, setDislikeCount] = useState(25);
  const [activeBtn, setActiveBtn] = useState("none");

  const reflike=useRef()
  const refdislike=useRef()
  
  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      refdislike.current.classList.add('click-dis');
      return;
    }
   
    if (activeBtn === 'dislike'){
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      refdislike.current.classList.remove('click-dis');
      return;
    }
  
    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
      refdislike.current.classList.add('click-dis');
      reflike.current.classList.remove('like-click');
    }
  };
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      reflike.current.classList.add('like-click');
      return;
    }
  
    if (activeBtn === 'like'){
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      reflike.current.classList.remove('like-click');
      return;
    }
  
    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
      reflike.current.classList.add('like-click');
      refdislike.current.classList.remove('click-dis');
    }
  };


  return (
    <div className="container">
  <div className="btn-container">
    <button
      className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
      onClick={handleLikeClick}
    >
      <span ref={reflike} className="like-i"><AiOutlineLike></AiOutlineLike></span>
       {likeCount}
    </button>
 
    <button
      className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
      onClick={handleDisikeClick}
    >
      <span ref={refdislike} className="dislike-i"><AiOutlineDislike></AiOutlineDislike></span>
       {dislikeCount}
    </button>
  </div>
</div>
  )
}

