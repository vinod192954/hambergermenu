import {GiHamburgerMenu} from 'react-icons/gi'
import {Link, withRouter} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import Popup from 'reactjs-popup'
import './index.css'
const Header = () => (
  <div>
    <header className="header-container">
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </Link>
      </div>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="model-container">
            <button
              type="button"
              className="trigger-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <li>
                <Link to="/" onClick={() => close()}>
                  <AiFillHome />
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => close()}>
                  <BsInfoCircleFill />
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </header>
    <hr className="line" />
  </div>
)

export default withRouter(Header)
