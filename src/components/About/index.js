// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const appBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const aboutText = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'

      return (
        <div className={appBg}>
          <Navbar />
          <div className="about-container">
            <img src={aboutImage} alt="about" className="image" />
            <h1 className={aboutText}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
