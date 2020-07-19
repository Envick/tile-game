import React, { useState } from 'react'
import { Card } from './Card'

export const Board = () => {
  const [flipped, setFlipped] = useState([])
  const [cards, setCards] = useState([
    {
      framework: 'react',
      id: 1,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'react',
      id: 2,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'angular',
      id: 3,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'angular',
      id: 4,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'rails',
      id: 5,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'rails',
      id: 6,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'aurelia',
      id: 7,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'aurelia',
      id: 8,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'backbone',
      id: 9,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'backbone',
      id: 10,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'ember',
      id: 11,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'ember',
      id: 12,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'vue',
      id: 13,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'vue',
      id: 14,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'jquery',
      id: 15,
      pos: Math.floor(Math.random() * 100),
    },
    {
      framework: 'jquery',
      id: 16,
      pos: Math.floor(Math.random() * 100),
    },
  ])
  const [rightFlipped, setRightFlipped] = useState([])
  const [wins, setWins] = useState(0)

  const clickHandler = id => setFlipped([...flipped, id])
  const restartHandler = () => {
    setRightFlipped([])
    setCards(() => {
      cards.forEach(card => (card.pos = Math.floor(Math.random() * 100)))
      return cards
    })
  }
  const restartAllHandler = () => {
    restartHandler()
    setWins(0)
  }
  if (flipped.length === 2) {
    const firstF = cards.find(card => card.id === flipped[0])
    const secondF = cards.find(card => card.id === flipped[1])
    if (firstF.framework === secondF.framework) {
      setFlipped([])
      setRightFlipped([...rightFlipped, flipped[0], flipped[1]])
    } else {
      setTimeout(() => setFlipped([]), 700)
    }
  }

  if (rightFlipped.length === 16) {
    setTimeout(() => {
      setRightFlipped([])
      setWins(wins + 1)
    }, 500)
  }
  return (
    <div className="board-wrap">
      <div className="header">
        <button className="btn" onClick={restartHandler}>
          Restart
        </button>
        <h1 className="wins_text">Количество побед: {wins}</h1>
        <button className="btn" onClick={restartAllHandler}>
          Restart All
        </button>
      </div>

      <div className="board">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipped={flipped.includes(card.id)}
            rightFlipped={rightFlipped.includes(card.id)}
            clickHandler={
              flipped.length === 2 ? null : () => clickHandler(card.id)
            }
          />
        ))}
      </div>
    </div>
  )
}
