import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middlewareConfig = {
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
};
const isDevTools = process.env.NODE_ENV !== 'production';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfig),
  devTools: isDevTools,
});

export type AppDispatch = typeof store.dispatch;

export default store;
