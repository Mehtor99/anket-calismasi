import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import TagList from '../../utils/TagList.json'
import  { ITag }  from "../../models/ITag"
//1
interface ITagState{
    counter:number,
    tagList: ITag[],
    isTagListLoading: boolean,
}

const initialTagState:ITagState={
    counter:0,
    tagList: TagList,
    isTagListLoading: false
}

//2

//3
const tagSlice = createSlice({
    name: 'tag',
    initialState: initialTagState,
    reducers: {
        aktifTiklama(state, action: PayloadAction<ITag>){
            state.counter--;
            console.log('değer: '+state.counter)
        },
        pasifTiklama(state, action: PayloadAction<ITag>){
            state.counter++;
            console.log('değer: '+state.counter)
        }
    },
    extraReducers: (build)=>{}

});
export const {
    aktifTiklama,pasifTiklama
}=tagSlice.actions;
export default tagSlice.reducer;
