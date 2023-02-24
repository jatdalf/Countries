import './App.css';
import {Landing, Home, Detail, Form} from "./views"
import NavBar from "./components/navBar/navBar"
//import { BrowserRouter, Route, useLocation } from 'react-router-dom';
import { Route, useLocation } from 'react-router-dom';
import axios from 'axios';
axios.defaults.baseURL = "https://countries-production-7339.up.railway.app/";



function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/*<h1>Countries</h1>*/}
      {location.pathname !== "/" && <NavBar />}      
      <Route exact path="/" render = {()=> <Landing/>}/>           
      <Route path="/home" render = {()=> <Home/>}/>      
      <Route path="/Detail" render = {()=> <Detail/>}/>      
      <Route path="/Form" render = {()=> <Form/>}/>      
    </div>
  );
}

export default App;
