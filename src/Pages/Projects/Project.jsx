import React from 'react'
import StyledProject from './StyledProject';


export default function Project() {
  return (
    <StyledProject>
      <div className="card">
        <img src="Images/Calculator.jpg" alt="Calculator App" />
        <h2>Calculator App</h2>
        <p className='details'>Build a basic Calculator app using HTML, CSS and JavaScript.</p>
        <p>
          <a href="https://md0011.github.io/Calculator-App/" target="_blank">
            <button>See Project</button>
          </a>
        </p>
      </div>
      <div className="card">
        <img src="Images/Refersion-UI.jpg" alt="Refersion UI - Pricing" />
        <h2>Refersion UI - Pricing</h2>
        <p className='details'>Tried my hands on this beautiful UI using HTML & CSS.</p>
        <p>
          <a href="https://md0011.github.io/Refersion-UI-Pricing/" target="_blank">
            <button>See Project</button>
          </a>
        </p>
      </div>
      <div className="card">
        <img src="Images/Random Quote Generator.jpg" alt="Random Quote Generator" />
        <h2>Random Quote Generator</h2>
        <p className='details'>It is capable of pulling quotes randomly from an API.</p>
        <p>
          <a href="https://md0011.github.io/RandomQuoteGenerator/" target="_blank">
            <button>See Project</button>
          </a>
        </p>
      </div>

    </StyledProject>
  )
}
