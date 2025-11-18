import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterState } from 'src/modules/types'

const initialState : FilterState= {
    carName: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers : {
        setCarName: (state, action: PayloadAction<string>) => {
            state.carName = action.payload
        }
    }
})

export const {setCarName} = filterSlice.actions

export default filterSlice.reducer