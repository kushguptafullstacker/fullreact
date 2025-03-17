import {configureStore} from '@reduxjs/toolkit'
import todoreducer from '../Slice/Cretaeslice'

export const Store=configureStore({
    reducer:todoreducer
})
