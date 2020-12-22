import React, { Component } from 'react';
import ReactDOM from 'react-dom';


// function ListItem(props) {
//   return (
//     <li>
//       <h3>{props.index}:{props.data.title}</h3>
//       <p>{props.data.content}</p>
//     </li >
//   )
// }

class ListItem2 extends Component {
    render() {
        return (
            <li onClick={(e) => { this.clickEvent(this.props.index, this.props.data.title, e) }}>
                <h3>{this.props.index}:{this.props.data.title}</h3>
                <p>{this.props.data.content}</p>
            </li>
        )
    }
    clickEvent = (index, title, event) => {
        console.log(index + "-" + title);
        event.preventDefault();
    }
}

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: "第一节",
                    content: "芜湖"
                },
                {
                    title: "第二节",
                    content: "啊这"
                }
            ]
        }
    }
    render() {
        let listArr = this.state.list.map((item, index) => {
            return (
                <ListItem2 data={item} index={index} key={index} />
            )
        })
        return (
            <div>
                <h1>
                    今天的课程内容是
        </h1>

                <ul>
                    {listArr}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));