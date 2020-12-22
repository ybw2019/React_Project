import React, { Component } from "react";
import Nav from "../../nav/nav";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div id="container">
                <div id="navbar">
                    <a href="/">
                        <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logonpm" />
                    </a>
                    <input className="search" type="text" placeholder="请输入要搜索的内容"></input>
                    <Nav />
                </div>

                <div id="main">
                    <div id="sidebar">
                        <div className="panel1">
                            <div className="inner">
                                <p>CNode：Node.js专业中文社区</p>
                                <div>
                                    您可以 <a href="http://www.baidu.com">登录 </a>或 <a href="http://www.baidu.com">注册</a> , 也可以
                                    <div className="button">通过 GitHub 登录</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}