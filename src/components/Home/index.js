// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const appBg = isDarkTheme ? 'dark-bg' : 'light-bg'
      const homeText = isDarkTheme ? 'dark-theme-text' : 'light-theme-text'

      return (
        <div className={appBg}>
          <Navbar />
          <div className="home-container">
            <img src={homeImage} alt="home" className="image" />
            <h1 className={homeText}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
