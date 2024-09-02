import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Categories from './reducers/Categories';
import User from './reducers/User';
import Donations from './reducers/Donations';
import {logger} from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore } from 'redux-persist';


const rootReducer = combineReducers({
    user:User,
    donations:Donations,
    categories: Categories,
});
const configuration = {
    key: 'root',
    storage: AsyncStorage,//使用异步存储，类似于localStorage
    version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);//将持久化功能应用到 rootReducer 上，生成一个新的 reducer。

const store = configureStore({
    reducer: persistedReducer,
    //状态记录中间件
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,//禁用序列化检查（因为 redux-persist 可能会存储一些非序列化的数据）
        })
        // .concat(logger);
    },
});

export default store;
export const persistor = persistStore(store);
// persistor.purge();//重置所有reducer的状态