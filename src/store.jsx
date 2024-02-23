import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./redux/reducers/authReducer";
import userReducer from "./redux/reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    user: userReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
