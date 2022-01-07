import React from 'react';
import { render } from 'react-dom';
import { Navbar, Home, Footer, Products, Contact } from './Containers';
import { 
  HashRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import GlobalStyle, { BodyContainer } from "./globalStyles";
import ScrollToTop from './ScrollTop';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BodyContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BodyContainer>
      <Footer />
    </>
  );
}

export default App;

const container = document.getElementById('app');
render(
  <Router>
    <ScrollToTop/>
    <App />
  </Router>,
  container,
);