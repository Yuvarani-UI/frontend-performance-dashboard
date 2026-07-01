import {
createSlice
} from '@reduxjs/toolkit';

const initialState={

startDate:'',

endDate:''

};

const analyticsSlice=createSlice({

name:'analytics',

initialState,

reducers:{

setStartDate:(state,action)=>{

state.startDate=
action.payload;

},

setEndDate:(state,action)=>{

state.endDate=
action.payload;

}

}

});

export const{

setStartDate,

setEndDate

}=analyticsSlice.actions;

export default analyticsSlice.reducer;