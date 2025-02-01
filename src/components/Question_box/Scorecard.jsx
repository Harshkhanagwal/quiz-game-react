import React from 'react'
import { Link } from 'react-router-dom'

const Scorecard = ({ points }) => {



    return (
        <div className='scorecard-area'>
            <div className="score-card">
                <img src={points >= 50 ? "/Images/win.jpg" : "/Images/lose.png"} className='sc-img' alt="win" />

                <h1 className={points >= 50 ? 'win' : 'lose'} >
                    {points >= 50 ? 'Congratulations' : `Better Luck`}

                    <br />
                    {points >= 50 ? 'You Win' : ' Next Time'}

                </h1>
                <h2 className='score'>score : {points}</h2>

                <Link to={'/'} >
                    <button className='main-btn'>
                        Go Back to Home
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Scorecard