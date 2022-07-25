import React,{useState} from 'react';
import "../assets/Direction Icons/icofont.min.css";
import "./Style.css";

const UpIcon = () => {


    const[screenChecker, setScreenChecker]=useState(false);


    const toggleVisible = ()=>{
        const scrolled =document.documentElement.scrollTop;
        if(scrolled>300){
            setScreenChecker(true);
        }else if(scrolled<=300){
            setScreenChecker(false);
        }
    }
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    window.addEventListener("scroll", toggleVisible)

  return (
    <div className='myBtn' onClick={scrollToTop}>
      <i  style={{display:screenChecker?"inline":"none", color: "black"}} className='icofont-arrow-up'></i>
    </div>
  );
}

export default UpIcon;
