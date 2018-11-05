import axios from 'axios';
const FETCHED_DATA = 'FETCHED_DATA';

const fetchData = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
            dispatch({
                data: res.data,
                type: FETCHED_DATA
            });
        });
    };
};

export {fetchData, FETCHED_DATA};

