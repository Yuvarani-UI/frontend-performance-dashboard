'use client';

import { useEffect, useState } from 'react';

export default function ActivityStream() {

const [items,setItems]=
useState<string[]>([]);

useEffect(()=>{

const timer =
setInterval(()=>{

const event =

`Task ${Math.floor(
Math.random()*1000
)} completed`;

setItems(prev=>

[event,...prev].slice(0,8)

);

},5000);

return ()=>clearInterval(timer);

},[]);

return(

<div
className="
rounded-lg
bg-white
p-5
shadow-sm
dark:bg-slate-800
">

<h3
className="
mb-4
font-semibold
"
>

Live Activity

</h3>

<div className="space-y-2">

{items.map((item,index)=>(

<div
key={index}
className="
border-b
pb-2
text-sm
"
>

{item}

</div>

))}

</div>

</div>

);

}