import {configureStore} from '@reduxjs/toolkit';
import driversReducer from './slices/driversSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      drivers: driversReducer,
    },
  });
};

const store = makeStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
