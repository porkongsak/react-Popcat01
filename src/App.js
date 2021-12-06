
import React, { useState,useEffect } from 'react'
import reactDom from 'react-dom'
import audio from './pop.mp3'
import img1 from './pop1.jpg'
import img2 from './pop2.jpg'
import './App.css'

 function App() {

  const [img, setImg]  = useState(img2)
  const [number, setNumber] = useState(0)

  //  useEffect(()=>{
    
  //  }, [img])
  
  const handleClick = (e) =>{
    if (e.type === "mousedown") {
      e.preventDefault();
      setImg(img1);
      new Audio(audio).play();
      setNumber(number + 1);
  } else{
    e.preventDefault();
    setImg(img2);
  }

  //  if(event.type === "mouseup") {
  //    setImg(img2)
  //   }   
  }
 

  return (
    <>
    <header className="container">
      <div className="container-fornt" >
      <h1 style={{
         color: "green",
         textAlign: "center",
         poSition: "absolute",
         
         }}  >POPCAT.....</h1> 
         <h2 style={{
         textAlign: "center",
         poSition: "relative" 
         }} >{number}</h2>
         
      <div className="imgchang" onMouseUp={handleClick} onMouseDown={handleClick}  >
          {/* {img.data ? <img  src={img1} alt="" />:<img src={img2} alt="" />}    */}
           <img className="img-cat" src={img}    />
           
          </div>
      </div>
    </header>
    </>
  )
}

export default App;
