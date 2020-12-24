import React, { Component } from 'react';
import routes from "./router/router";
import Api from "./api/api";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    componentWillMount() {
        Api.getAllList();
        Api.getThemeInfo({ id: "5fe2b84498427e7b936a9f8c" });
    }
    render() {
        return (
            <Router>
                <div>
                    {
                        routes.map((value, index) => {
                            if (value.exact) {
                                return <Route exact path={value.path} component={value.component} key={index}></Route>
                            } else {
                                return <Route path={value.path} component={value.component} key={index}></Route>
                            }
                        })
                    }
                </div>
            </Router>
        )
    }
}

export default App;