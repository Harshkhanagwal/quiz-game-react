import React from 'react'
import rawData from '../data.json'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className="homepage">
      <div className="startscreen">

        <img src="/Images/logo.jpg" className='logo' alt="logo" />
        <h1 >{rawData.title}</h1>

        <h3>{rawData.topic}</h3>

        <Link to={"/instructions"} >
          <button className='main-btn startquiz-btn'>
            Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Home