import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { fetchGithubData } from '../actions';
import thunk from 'redux-thunk';

const initialState = {};

const configureStore = createStore(reducers, initialState, applyMiddleware(thunk));

/**dispatch the get github data action also */
configureStore.dispatch(fetchGithubData());

export default configureStore;