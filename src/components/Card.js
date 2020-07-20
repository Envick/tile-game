import React from 'react'

export const Card = ({ card, flipped, clickHandler, rightFlipped }) => (
  <div
    className={`card ${flipped || rightFlipped ? 'flipped' : ''} ${
      rightFlipped ? 'hide' : ''
    }`}
    key={card.id}
    onClick={clickHandler}
    style={{ order: card.pos }}
  >
    <img src="images/js.svg" className="back" />
    <img src={`images/${card.framework}.svg`} className="front" />
  </div>
)
