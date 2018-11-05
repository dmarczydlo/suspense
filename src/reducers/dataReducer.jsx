import {FETCHED_DATA} from '../actions/fetch';
const initialState = {};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_DATA: {
            return {
                ...state,
                data: action.data
            };
        }
        default:
            return state;
    }
};

export default dataReducer;
