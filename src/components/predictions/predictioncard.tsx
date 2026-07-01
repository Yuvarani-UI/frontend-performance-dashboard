'use client';

import {

growth

}

from '@/src/utils/forecasting';

type Props={

metric:string;

current:number;

predicted:number;

confidence:number;

};

export default function PredictionCard({

metric,

current,

predicted,

confidence

}:Props){

const percentage=

growth(

current,

predicted

);

return(

<div
className="
rounded-xl
bg-slate-800
p-6
shadow
"
>

<h3>

{metric}

</h3>

<p
className="
mt-3
text-3xl
font-bold
"
>

{predicted}

</p>

<p
className="text-green-500"
>

+{percentage}%

</p>

<p
className="
text-xs
text-slate-400
"
>

Confidence:

{confidence}%

</p>

</div>

);

}