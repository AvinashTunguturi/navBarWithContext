// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggle = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const linkText = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'
      const greyBg = isDarkTheme ? 'grey-bg' : null

      return (
        <nav>
          <ul className={`ul-container ${greyBg}`}>
            <li>
              <img src={websiteLogo} alt="website logo" className="logo" />
            </li>
            <li>
              <div className="link-container">
                <Link to="/" className={linkText}>
                  Home
                </Link>
                <Link to="/about" className={linkText}>
                  About
                </Link>
              </div>
            </li>
            <li>
              <button
                testid="theme"
                type="button"
                onClick={onClickToggle}
                className="logo-button"
              >
                <img src={themeImage} alt="theme" className="logo" />
              </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
