import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import counterSlice from "../counterSlice";
import checkSlice from "./checkSlice";

const reducers = combineReducers({
    users : userSlice,
    counter : counterSlice,
    check : checkSlice,
})

const persistConfig = {
    key: 'root',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);  

const store = configureStore({
    reducer: persistedReducer
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
