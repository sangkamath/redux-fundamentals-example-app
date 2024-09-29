import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer,
})

export default rootReducer;