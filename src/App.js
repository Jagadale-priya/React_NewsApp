
import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={this.pageSize} country="in" category="general" />}></Route>
          <Route exact path='/healths' element={<News key="healths" pageSize={this.pageSize} country="in" category="healths" />}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} country="in" category="science" />}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business" />}></Route>
        </Routes>

      </BrowserRouter>
      // <div>
      //   <NavBar/>
      //   <News pageSize={this.pageSize} country="in" category="technology"/>
      // </div>
    )
  }
}
