import React from 'react';

import { pinterest, facebook, twitter } from '../assets';
function Footer() {
    return (
        <div className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
        <h1>Image rights belong to their respective owners.</h1>
      </div>
      <div className="social">
        <div className="social-img">
          <button><img src={pinterest} alt="" /> </button>
          <button><img src={facebook} alt="" /></button>
          <button><img src={twitter} alt="" /></button>
        </div>
        <div className="mails">
          <input
            type="email"
            name=""
            id=""
            placeholder="Get discount codes."
          />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
    );
}

export default Footer;