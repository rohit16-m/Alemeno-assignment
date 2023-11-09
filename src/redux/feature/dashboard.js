import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const fetchDashBoard=createAsyncThunk('fetchDashBoard',async ()=>{
    const response=await fetch('/data/studentCourse.json');
    return response.json();
})

const dashboardslice=createSlice({
    name:'dashboard',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDashBoard.pending,(state,action)=>{
            state.isLoading=true
        });
        builder.addCase(fetchDashBoard.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(fetchDashBoard.rejected,(state,action)=>{
            isError=true
        })
    }
})
export default dashboardslice.reducer;