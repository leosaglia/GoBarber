import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
	const persistConfig = {
		key: 'gobarber',
		storage,
		whiteList: ['auth', 'user'],
	};

	const persistedReducer = persistReducer(persistConfig, reducers);

	return persistedReducer;
};
