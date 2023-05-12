import React from 'react'
import imgpro1 from '../../assets/pic1.png'
import imgpro2 from '../../assets/pic2.jpg'
import imgpro3 from '../../assets/pic3.jpg'
import fondo from '../../assets/fondo1.jpg'

export const Projects = () => {
  return (
    <div className="main">
      <img className="fondo" src={fondo} alt="Fondo" />
      <div>
        <h1>Projects</h1>
      </div>
      <div className="container_card">
        <div className="card c1">
          <div className="icon">
            <img src={imgpro1} alt="Project 1" />
          </div>
          <div className="info_description">
            <h2 style={{ color: 'white' }}>CoinApp</h2>
            <p>
              Application for managing our finances, this application has 4
              modules to attach income, investments, invoices and the last
              module. It is a wallet in which we see a total monthly
            </p>
            <button>
              <a
                href="https://github.com/jeisson300/CoinApp"
                target="_blank"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                Github
              </a>
            </button>
          </div>
        </div>

        <div className="card c2" hidden={true}>
          <div className="icon">
            <img src={imgpro2} alt="Project 1" />
          </div>
          <div className="info_description">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est</p>
            <button>Github</button>
          </div>
        </div>

        <div className="card c3" hidden={true}>
          <div className="icon">
            <img src={imgpro3} alt="Project 1" />
          </div>
          <div className="info_description">
            <p>
              Proximamente, Lorem ipsum, dolor sit amet consectetur adipisicing
            </p>
            <button>Github</button>
          </div>
        </div>
      </div>
    </div>
  )
}
