import React from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/style.scss';
import './fontawesome';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Delivery from './pages/Delivery';
import Main from './pages/Main';
import Footer from './components/Footer';
import Products from './pages/Products';
import ChosenProduct from './pages/ChosenProduct';

function App() {
  return (
    <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/catalog/" component={Products}/>
          <Route exact path="/delivery/" component={Delivery}/>
          <Route exact path="/catalog/:slug" component={ChosenProduct}/>
          <Route component={Error}/>
        </Switch>
        <Footer/>
    </>
  );
}

export default App;












//import './App.css';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Header from './components/Header';
//import { Home } from './Home';
//import { About } from './About';
//import { Contact } from './Contact';
//import { NoMatch } from './NoMatch';
//import { Layout } from './components/Layout';
//import { NavigationBar } from './components/NavigationBar';
//import { Jumbotron } from './components/Jumbotron';

/* class App extends Component {
  render() {
  return (
      <div className="App">
        <Header/>
        <React.Fragment>
          <NavigationBar/>
          <Jumbotron/>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NoMatch}/>
              </Switch>
            </Router>
          </Layout>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
 */