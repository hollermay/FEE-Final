import {search, cart, avatar, burger} from '../assets';
const Navbar = () => {
    return (
      <div className="header">
        <div className="left">
          <img className="hamburger" src={burger} alt="" />
          <div className="links">
            <div className="menu">
              <ul>
                <li><a href="#">TRENDS</a></li>
                <li><a href="#">COLLECTIONS</a></li>
                <li><a href="#">DESIGNERS</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <input type="text" placeholder="Search" />
              <button type="submit"><img src={search}/></button>
            </li>
            <li><img src={cart} alt="" /></li>
            <li><img src={avatar} alt="" /></li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;
