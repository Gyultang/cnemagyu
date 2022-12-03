import {combineReducers} from 'redux';
import movieReducer from './moiveReducer';

export default combineReducers({
    movie: movieReducer,
});