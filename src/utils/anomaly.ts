export function detectAnomaly(

current:number,

predicted:number

){

const deviation=

Math.abs(

current-predicted

);

return deviation>50;

}