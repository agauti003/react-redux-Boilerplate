import "babel-polyfill"
import React from "react"
import {Provider} from "react-redux"
import PropTypes from "prop-types"
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import App from "../components/userApp/App"

const Root = ({ store }) => (
    <Provider store={store}>
        <Router basename="/">
            <Switch>
                <Route path="/home" render={()=>{return(<div>home</div>)}} />
                <Route path="/" exact component={App} />
            </Switch>
        </Router>
    </Provider>
)
Root.propTypes = {
    store: PropTypes.object.isRequired
}
export default Root