import {createStore,combineReducers} from "redux";

import todos from "./reducers/todo";

const rootReducer = combineReducers({
    todos
})


const store = createStore(
    rootReducer
)


export default store;