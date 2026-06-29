import { useEffect,useState } from 'react'

export default function LastUpdated(){

 const [time,setTime] = useState(new Date());

 useEffect(()=>{

   const interval = setInterval(()=>{

      setTime(new Date());

   },1000);

   return ()=>clearInterval(interval);

 },[]);

 return(

<div className="text-xs text-gray-500">

Updated:

{time.toLocaleTimeString()}

</div>

);

}