// Write your JS code here
import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="home-bg">
    <Header />
    <div className="home-card-container">
      <div className="clothes-container">
        <h1 className="clothes-heading">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothe-img-sm"
        />
        <p className="paragraph">
          Fashion is part of the daily air and it does not Quite help that it
          changes all the time. Cloths have always been marker of the era and we
          are in a revolution. Your fashion makes you been and seen hard that
          way you are. So celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <div className="button-container">
          <button className="button" type="button">
            Shop Now
          </button>
        </div>
      </div>
      <div className="clothes-container-img">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothe-img-l"
        />
      </div>
    </div>
  </div>
)
export default Home
