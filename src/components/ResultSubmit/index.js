import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const ResultSubmit = () => (
  <div>
    <Header />
    <div className="bg-container">
      <div className="result-container">
        <img
          src="https://res.cloudinary.com/djifdyfkd/image/upload/v1715010164/Asset_2_12x_lvkuom.png"
          alt="submit"
          className="image"
        />
        <h1 className="heading">Congrats! You completed the assessment</h1>
        <p className="time-taken">
          Time Taken:<span className="time"> 00:00:00</span>
        </p>
        <p className="score">
          Your score: <span className="score-scored">0</span>
        </p>
        <Link to="/assessment">
          <button className="reattempt-button" type="button">
            Reattempt
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default ResultSubmit
