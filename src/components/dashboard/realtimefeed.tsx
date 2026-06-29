import { useEffect,useState } from 'react';

export default function RealtimeFeed(){

const [events,setEvents]=useState<string[]>([]);

useEffect(()=>{

const interval=setInterval(()=>{

const item=

`Task ${Math.floor(Math.random()*100)}
completed`;

setEvents(prev=>[item,...prev].slice(0,10));

},5000);

return()=>clearInterval(interval);

},[]);

return(

<div>

<h2 className="font-semibold">

Live Activity

</h2>

<ul>

{events.map((e,index)=>(

<li key={index}>

{e}

</li>

))}

</ul>

</div>

);

}