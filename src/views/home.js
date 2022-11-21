import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Obvious Tender Herring</title>
        <meta property="og:title" content="Obvious Tender Herring" />
      </Helmet>
      <button className="button">Button</button>
      <span>Text</span>
      <h1>Heading</h1>
    </div>
  )
}

export default Home
