import Types from '../types';


export default githubReducer = (state = [], action) => {
    switch (action.type) {
        case Types.FETCH_GITHUB_DATA: {
            return action.data;
        }
        default: {
            return state;
        }
    }
};