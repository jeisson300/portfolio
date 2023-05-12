import React from 'react'
import '../../styles/styles.css'
import img1 from '../../assets/img1.jpg'
export const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          I am software engineer, i have 2 years expirence working with
          technologies such as{' '}
          <b>Asp.net , Sql Server, .Net core, Javascript, React</b> I am a
          person committed to my work, responsible and I like to learn new
          technologies and grow in my career
        </p>
      </div>
      <div className="about-img">
        <img src={img1} alt="coding" />
      </div>
    </div>
  )
}
