import React from "react"
import ReactDom from "react-dom"
import Root from "./routes/Root"
import allReducers from "./reducers/users"
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import registerServiceWorker from "./registerServiceWorker"

const store = createStore(
    allReducers
)
ReactDom.render(
    <Root store={store}/>,
    document.getElementById("root")
)
registerServiceWorker()
