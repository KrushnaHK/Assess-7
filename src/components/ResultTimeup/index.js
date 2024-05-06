import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const ResultTimeup = () => (
  <div>
    <Header />
    <div className="bg-container">
      <div className="result-container">
        <img
          src="https://res.cloudinary.com/djifdyfkd/image/upload/v1715013334/calender_1_13x_zsy02v.png"
          alt="time up"
          className="image"
        />
        <h1 className="heading">Time is up</h1>
        <p className="time-taken">
          You did not complete the assessment within the time
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

export default ResultTimeup
