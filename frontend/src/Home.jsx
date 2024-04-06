import React from 'react'
//import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='d-flex justify-content-center text-white'>
        <h2 >WELCOME TO ELLYN SPA</h2>
    </div>
     <img src={require('./images/house.jpg')} alt='house image' height={400} width={400} />
     <img src={require('./images/ladies.jpg')} alt='ladies image' height={400} width={400} />
     <img src={require('./images/elegant.jpg')} alt='elegant image' height={400} width={400} />
     <img src={require('./images/magic.webp')} alt='magic image' height={400} width={400} />
     </div>
  )
}

export default Home