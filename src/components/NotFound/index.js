// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const appBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const notFoundText = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'

      return (
        <div className={appBg}>
          <Navbar />
          <div className="not-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="image"
            />
            <h1 className={notFoundText}>Lost Your Way?</h1>
            <p className={notFoundText}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
