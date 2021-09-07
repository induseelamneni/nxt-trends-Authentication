// Write your JS code here
import './index.css'

const Header = () => (
  <div>
    <nav className="header">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website-logo"
          className="logo"
        />
      </div>
      <div className="log-out-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout"
        />
      </div>

      <div className="logos-container-l">
        <p className="home-logo-l">Home</p>
        <p className="home-logo-l">Product</p>
        <p className="home-logo-l">Cart</p>
        <div className="button-container">
          <button className="button" type="button">
            Log out
          </button>
        </div>
      </div>
    </nav>

    <div className="logos-container-s">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        alt="nav home"
        className="home-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        alt="nav products"
        className="home-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="home-logo"
      />
      <button className="button" type="button">
        Log out
      </button>
    </div>
  </div>
)

export default Header
