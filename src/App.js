import { Link } from 'react-router-link'
import {ReactComponent as Instagram} from './Instagram.svg';
import {ReactComponent as Facebook} from './Vector.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//think the name of this web



//translate the text to Thailanguage
//<div className="donate_button"><p>Donate Us</p></div>
function App() {
  return (
    <div className="App">
      
      <div className="DocHeader">
        <div className="Menubar">
        </div>
        <div className="donate_button header_button"><a href="https://raw.githubusercontent.com/korntimaroon/charity_club/main/image.png">Donate Us</a></div>
      </div>
      <div className="all_section">
        <div className="section_1">
        </div>
        <div className="main-section_1">
            <p>A small step toward a better world</p>
            <p>Donation Date: TBA</p>
            <p>This website is created by us to help raise money to save stray animals such as dogs and cats though various charity.</p>
        </div>
      </div> 
      <div className="section_2">
        <p className="charity_heading">About The Charity</p>
        <p>This website started when we four joined a school club to help donate to animal shelterp. We choose to help 'The Voice Foundation' to help stray dogs or cats. The Voice Foundation Thailand is a non-profit organization dedicated to greatly improve the quality of life for stray animals in Thailand.</p>
        <p>The money we got from you will go to the voice charity as we want to help stray animals. We have to do something rather than stand still and watch them. Your help will be great for them.</p>
        <p>We decided that creating the website is best suitable for gathering donation to help the fondation which in turn, help stray dogs and cats in Thailand. In order to keep them in check, which will indeed need a lot of money for maintaining the health care for such a long period of time. Our goals are to keep them off the streets where danger lies, and into the arms of a new family of friendly adopters.</p>
       </div>
      <div className="Footer_Web">
        <p className="sub_Sub_Title">Please donate. Your changes can change the world. </p>
        <p className="programmer_list">Ryu Year 11 - UI Designer and Programmer</p>
        <p className="programmer_list">Intouch Year 11 - UI Designer and Programmer</p>
        <p className="programmer_list">Memoo Year 11 - UI Designer and Programmer</p>
        <p className="programmer_list">Phum Year 11 - UX and UI Designer</p>
      </div>
    </div>
  );
}



export default App;

