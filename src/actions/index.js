import Types from '../types';
import axios from 'axios';

const apiUrl = 'https://api.github.com/users/amku91';

export const fetchData = data => ({
    type: Types.FETCH_GITHUB_DATA,
    data: data
});

/**get data from github thorugh axios promise */
export const fetchGithubData = () => {
    return (dispatch) => {
        return axios.get(apiUrl).then(response => {
            dispatch(fetchData(response.data));
        }).catch(err => {
            throw new Error(err);
        })
    };
};