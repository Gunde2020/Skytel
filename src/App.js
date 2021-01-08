import React from "react";
import {HeaderTop} from './HeaderTop.js'
import {About} from './About.js'
import {Users} from './Users.js'
import {Home} from './Home.js'

import {HeaderLarge} from './HeaderLarge.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    
    <Router>
        <header id="header" className="header-showing">
      <div  id="top-bar" className="hidden-sm hidden-xs">
                            <div className="container clearfix">
                                <nav className="responsive-site-nav pull-left">
                                <nav className="site-nav pull-left">
                                    <ul className="">
                                        <li>
                                            <span style={{ color: '0000b4'}}></span>
                                        </li>
                                        <li>
                                            <Link to="/">Хэрэглэгч</Link>
                                        </li>
                                            <li>
                                            <Link to="/home">Байгууллага</Link>
                                            </li>
                                            <li>
                                            <Link to="/about">Скаймедиа</Link>
                                            </li>
                                            <li> 
                                            <Link to="/users">Дилер</Link>
                                            </li>
                                    </ul>
                                </nav>
                                <nav> 
                                            <div className="user-nav">
                                                <ul>
                                                    <li className="dropdown"><a href="/login">Нэвтрэх</a>
                                                    </li>
                                                    <li className="dropdown">
                                                        <span className="shopping-cart-items"><span className="item-count">0</span></span>
                                                        <a href="/shop/basket/"><span className="txt"><i className="fa fa-shopping-cart"></i></span></a>
                                                    </li>
                                                </ul>
                                            </div> 
                                        </nav>  
                            </nav> 
                            </div>
                        </div>
                        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
       
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users/></Route>
          <Route path="/">
            <HeaderTop/></Route>
          <Route path="#">
            <HeaderLarge/></Route>

          
        </Switch>
        
    </Router>
  );
}

