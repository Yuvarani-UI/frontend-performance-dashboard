'use client';

import {

predictions

}

from '@/src/constants/predictions';

import {

detectAnomaly

}

from '@/src/utils/anomaly';

export default function AnomalyPanel(){

const alerts=

predictions.filter(

item=>

detectAnomaly(

item.current,

item.predicted

)

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

<h2>

Anomaly Detection

</h2>

{

alerts.length===0

?

(

<p>

No anomalies detected

</p>

)

:

(

alerts.map(

item=>(

<div
key={item.id}
>

{item.metric}

deviation detected

</div>

)

)

)

}

</div>

);

}