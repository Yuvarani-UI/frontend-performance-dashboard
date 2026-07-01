export function growth(

current:number,

future:number

){

return (

(

future-current

)

/

current

*100

).toFixed(1);

}