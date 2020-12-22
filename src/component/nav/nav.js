import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/news">新手入门</Link>
                    </li>
                    <li>
                        <Link to="/news">API</Link>
                    </li>
                    <li>
                        <Link to="/news">关于</Link>
                    </li>
                    <li>
                        <Link to="/news">注册</Link>
                    </li>
                    <li>
                        <Link to="/news">登录</Link>
                    </li>
                </ul>
            </div>
        )
    }
}