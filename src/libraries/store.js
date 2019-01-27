import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { loadState, saveState } from './localStorageReduxState';

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  };
}

const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

store.runSaga(rootSaga);

export default store;
