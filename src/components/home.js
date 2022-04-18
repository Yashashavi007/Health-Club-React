import React from "react";
import './style.css';
import Footer from "./footer";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ViewAppointment from "./ViewAppointment";
import MakeAppointment from "./MakeAppointment";
import Query from "./ContactUs"
import Header from "./header"

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayComponent : 0
    }
  }
  render(){
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <br /><br /><br /><br /><br />
          <Routes>
              <Route path='/contact' element={<Query />}></Route>
              <Route path='/view-appointment' element={<ViewAppointment/>} />
              <Route path='/make-appointment' element={<MakeAppointment />} />
          </Routes>
          <br /><br /><br />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}