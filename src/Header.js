import React from "react";

import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div>
          <h1>
            <img src="./images/logo-dark-groww.svg" alt="Logo" />
          </h1>
        </div>
        <div className="explore_investments">
          <a href={`https://groww.in/stocks/user/explore`}>Explore</a>
          <a href={`https://groww.in/stocks/user/investments`}>Investments</a>
        </div>
        <div className="search_bar_div">
          <form action="" className="search_bar">
            <input type="text" placeholder="What are you looking for today?" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        <div className="bell_wallet_cart_div">
          <button>
            <i className="fas fa-bell"></i>
          </button>
          <button>
            <i className="fas fa-wallet"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <button className="login_div">
            <div>
              <p>a</p>
            </div>
            <div>
              <i className="fas fa-chevron-down"></i>
            </div>
          </button>
        </div>
      </header>
      <div className="login_nav_list">
        <div className="username_div">
          <div className="a">a</div>
          <div>
            <h3>username</h3>
            <p>useremail@mail.com</p>
          </div>
        </div>
        <div className="popup_div_list">
          <div>Bank & AutoPay </div>
          <br />
          <div>Import Funds</div>
          <div>Watchlist</div>
          <br />
          <div> orders</div>
          <div>SIPs</div>
          <br />
          <div>Help & Support</div>
          <div>Setting</div>
          <br />
          <div>Dark Mode</div>
          <br />
          <div>Log Out</div>
        </div>
      </div>
    </>
  );
};
export default Header;
