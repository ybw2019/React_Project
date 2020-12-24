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

                        <div className="panel2">
                            <div className="header">
                                <p>无人回复的话题</p>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li><a href="http://www.baidu.com" target="_blank" rel="noreferrer">用selenium控制已打开的浏览器</a></li>
                                    <li><a href="http://www.baidu.com" target="_blank" rel="noreferrer">CabloyJS也有工作流引擎了，是你想要的吗？</a></li>
                                    <li><a href="http://www.baidu.com" target="_blank" rel="noreferrer">flutter写的app是不是勉强凑合能用</a></li>
                                    <li><a href="http://www.baidu.com" target="_blank" rel="noreferrer">探索异步迭代器在 Node.js 中的使用</a></li>
                                    <li><a href="http://www.baidu.com" target="_blank" rel="noreferrer">新的开源QQ机器人平台</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel3">
                            <div className="header">
                                <p>积分榜<a href="http://www.baidu.com">TOP 100 {">>"}</a></p>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li>15987<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">jd54s</a></li>
                                    <li>25467<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">asd221sa</a></li>
                                    <li>1524<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">s21d</a></li>
                                    <li>5784<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">er5fa</a></li>
                                    <li>6854<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">sf8a</a></li>
                                    <li>2257<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">ssd45v</a></li>
                                    <li>8652<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">ef6zx5</a></li>
                                    <li>2042<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">dvef6</a></li>
                                    <li>2006<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">vdc5</a></li>
                                    <li>8205<span></span><a href="http://www.baidu.com" target="_blank" rel="noreferrer">5sf445s</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel4">
                            <div className="header">
                                <p>友情社区</p>
                            </div>
                            <div className="inner">
                                <ul>
                                    <li>
                                        <a href="http://ruby-china.org/" target="_blank" rel="noreferrer">
                                            <img src="http://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="ohoh" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://golangtc.com/" target="_blank" rel="noreferrer">
                                            <img src="http://static2.cnodejs.org/public/images/golangtc-logo.png" alt="ohoh" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://learnku.com/laravel" target="_blank" rel="noreferrer">
                                            <img src="http://static2.cnodejs.org/public/images/phphub-logo.png" alt="ohoh" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="panel5">
                            <div className="header">
                                <p>客户端二维码</p>
                            </div>
                            <div className="inner">
                                <img width="200" src="http://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt="ohoh" />
                                <a href="http://www.baidu.com" target="_blank" rel="noreferrer">客户端源码地址</a>
                            </div>
                        </div>
                    </div>

                    <div id="content">
                        <div className="header">
                            <ul>
                                <li className="item1"><a>全部</a></li>
                                <li className="item2"><a>精华</a></li>
                                <li className="item3"><a>分享</a></li>
                                <li className="item4"><a>问答</a></li>
                                <li className="item4"><a>招聘</a></li>
                                <li className="item5"><a>客户端测试</a></li>
                            </ul>
                        </div>
                        <div className="topic_list">
                            <div className="cell">
                                <a className="user_img" href="https://cnodejs.org/user/takayama-lily">
                                    <img src="https://avatars2.githubusercontent.com/u/3049683?v=4&s=120aaaa" title="jj"></img>
                                </a>
                                <div className="count">
                                    <span className="reply">2 </span>
                                    <span className="seperator">/</span>
                                    <span className="visited"> 254</span>
                                </div>
                                <span className="classify">问答</span>
                                <a className="title">目前有没有哪个前端UI框架只用JS就能生成页面的</a>
                                <a className="float_right">
                                    <a className="little_user_img" href="/topic/5fe00b420f99cb5d385e3a74#5fe2b3ec98427efdf16a9f76">
                                        <img src="https://avatars3.githubusercontent.com/u/6591466?v=4&s=120" alt="ss"></img>
                                    </a>
                                    <a className="reply_time">1天前</a>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="footer">
                    <div className="main">
                        <div>
                            <a href="https://cnodejs.org/rss">RSS </a>
                                |
                            <a href="https://github.com/cnodejs/nodeclub/"> 源码地址</a>
                        </div>
                        <div>
                            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                            <p>服务器搭建在&nbsp;
                                <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank" class="sponsor_outlink" data-label="digitalocean">
                                    <img src="//static2.cnodejs.org/public/images/digitalocean.png" title="digitalocean" alt="digitalocean" />
                                </a>
                                ,存储赞助商为&nbsp;
                                <a href="http://www.qiniu.com/?ref=cnode" target="_blank" class="sponsor_outlink" data-label="qiniu_bottom">
                                    <img src="//static2.cnodejs.org/public/images/qiniu.png" title="七牛云存储" alt="七牛云存储" />
                                </a>
                            </p>
                            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a className="spe" href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
