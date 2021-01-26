import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Resume from "./Resume";
import ProjectCards from "./ProjectCards";
import Lumen from "./Lumen";
import TouchlessInteractions from "./TouchlessInteractions";
import UIPlayground from "./UIPlayground";
import Garden from "./Garden";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Fragment } from "react";
import NoPhone from "./NoPhone";
import { polyfill } from "seamless-scroll-polyfill";
polyfill();

function App() {
  return (
    <div className={`app  max-w-screen-lg mx-auto`}>
      <div className="lg:block hidden">
        <Router>
          <Fragment>
            <ScrollToTop>
              <Nav />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>

                <Route path="/resume">
                  <Resume />
                </Route>

                <Route path="/touchlessInteractions">
                  <TouchlessInteractions />
                </Route>
                <Route path="/craft">
                  <UIPlayground />
                </Route>
                <Route path="/garden">
                  <Garden />
                </Route>
                <Route path="/lumen">
                  <Lumen />
                </Route>

                <Route path="/">
                  <Home />
                  {/* <Lumen /> */}
                  <ProjectCards />
                </Route>
              </Switch>
              <Footer />
            </ScrollToTop>
          </Fragment>
        </Router>
      </div>
      <div className="lg:hidden">
        <NoPhone />
      </div>
    </div>
  );
}

export default App;
