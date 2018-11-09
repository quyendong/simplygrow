import axios from 'axios';

export const fetchData = () => async dispatch => {
    const res = await axios.get('/posts');
    dispatch({ type: FETCH_DATA, payload: res.data })
}