import React, {useState, useEffect} from 'react'

 
const Stopwatch = () => {
 const[hour,setHour]= useState(0);
 const[min,setMin]= useState(0);
 const[sec,setSec]= useState(0);
 const[msec,setMsec]= useState(0);
 const[stop,setStop]= useState(true);
 
 const onStart =()=>{
   setStop(false);
   setMsec(msec +1)
 }
 const onStop =()=>{
   setStop(true);
 }
 const onReset =()=>{
  setMin(0);
  setSec(0);
  setMsec(0);
  setHour(0); 
 }
 
 useEffect(()=>{
   let interval= null;
   if(!stop){
     interval =setInterval(()=>{
       if (min > 59){
         setHour(hour+1)
         setMin(0);
         clearInterval(interval);
       }
       if (sec > 59){
         setMin(min+1)
         setSec(0);
         clearInterval(interval);
       }
       if (msec >999){
         setSec(sec+1)
         setMsec(0);
         clearInterval(interval);
       }
       if (msec <= 999){
         setMsec(msec+1);
       }
      
     },)
   }
   else{
     clearInterval(interval);
   }
   return()=>{
     clearInterval(interval)
   }
 })
 return (
  <div className="Abc">
   <h1>{hour} : {min} :{sec} :{msec} </h1>
   <button onClick={onStart}> Start </button>
   <button onClick={onStop}> Stop </button>
   <button onClick={onReset}> Reset </button>
  </div>
 )
}
 
export default Stopwatch;
 









