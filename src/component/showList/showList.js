import sendAction from "../../store/action";
import { Component } from "react";
import { Provider } from "react-redux";
import store from "../../store/store";

export default class AddList extends Component {
    componentWillMount() {
        sendAction("show_all_list");
    }
    render() {
        return (
            <Provider store={store}>
                <div className="cell">

                </div>
            </Provider>
        )
    }
} 