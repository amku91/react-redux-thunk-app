import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import getGithubData from '../actions';

const createStore = createStore(reducers, applyMiddleware(thunk));

/**dispatch the get github data action also */
createStore.dispatch(getGithubData());

export default createStore;