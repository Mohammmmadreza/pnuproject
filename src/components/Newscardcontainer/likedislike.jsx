
// import { AiOutlineLike } from "react-icons/ai";
// import { AiOutlineDislike } from "react-icons/ai";
import React from 'react'
import Like from "./like";
import './Newscardcontainer.css'

export default function Likedislike() {
    
//     const [Toggle, setToggle] = useState(false)
//     const [Count, setCount] = useState(0)
//     const [Togglelike, setTogglelike] = useState(false)
   
//     const reflike=useRef()
//     const refdislike=useRef()
  
//     const clickIconlike = (() => {
//        setTogglelike(prevTogglelike=>!prevTogglelike)
     
//     })
// useEffect(()=>{
//   if (Togglelike) { setCount(prevcount => prevcount + 1)
// reflike.current.classList.add( 'like-click') } 
//   else { setCount(prevcount => 0)
//     reflike.current.classList.remove( 'like-click')
// }if(Togglelike && Toggle){setCount(prevcount => 0) 
//     reflike.current.classList.remove( 'like-click')
// refdislike.current.classList.add('click-dis')}
//   else {}
// console.log(Togglelike)
// },[Togglelike])
//     const clickIcondis = (() => {
//         setToggle(prevToggle => !prevToggle)
//     })
    return (
        <>
            <Like></Like>
            {/* <span ref={reflike} className={ 'like-i '} onClick={clickIconlike} ><AiOutlineLike />{Count}</span>
            <span ref={refdislike} className={ 'dislike-i'} onClick={clickIcondis}><AiOutlineDislike /></span> */}
        </>
    )
}



