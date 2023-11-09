import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const fetchApi=createAsyncThunk('fetchApi',async ()=>{
    const response=await fetch('/data/course.json');
    return response.json();
})

const apiSlice=createSlice({
    name:'api',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoading=true
        });
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(fetchApi.rejected,(state,action)=>{
            isError=true
        })
    }
})
export default apiSlice.reducer;