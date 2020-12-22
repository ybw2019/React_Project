import React, { Component } from 'react';
import routes from "./router/router"

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
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