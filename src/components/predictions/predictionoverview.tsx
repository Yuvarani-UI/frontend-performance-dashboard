'use client';

import {

predictions

}

from '@/src/constants/predictions';

import PredictionCard

from './predictioncard';

export default function PredictiveOverview(){

return(

<div
className="
grid
gap-6
md:grid-cols-3
"
>

{

predictions.map(

item=>(

<PredictionCard

key={item.id}

metric={item.metric}

current={item.current}

predicted={item.predicted}

confidence={item.confidence}

/>

)

)

}

</div>

);

}