import React from 'react'
import './BuyMeCoffee.css'

export default function Coffee() {
    return (
    <a
      className="buyButton"
      target="_blank"
      href="https://www.buymeacoffee.com/adityakate" rel="noreferrer"
    >
      <img
        className="coffeeImage"
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt="Buy me a coffee"
      />
      <span className="coffeeButtonText"><h5>coffee2Aditya</h5> </span>
    </a>
     );
}