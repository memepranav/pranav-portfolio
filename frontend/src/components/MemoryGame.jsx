import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, RotateCcw, Trophy, Star } from 'lucide-react'

const MemoryGame = () => {
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)

  // Card symbols - using emojis for fun
  const symbols = ['🎮', '🚀', '⭐', '🎯', '💎', '🔥', '⚡', '🎨']

  const initializeGame = useCallback(() => {
    const shuffledCards = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false
      }))
    
    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedCards([])
    setMoves(0)
    setGameWon(false)
    setGameStarted(true)
  }, [])

  const handleCardClick = (cardId) => {
    if (flippedCards.length === 2) return
    if (flippedCards.includes(cardId)) return
    if (matchedCards.includes(cardId)) return

    const newFlippedCards = [...flippedCards, cardId]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)
      const [firstCard, secondCard] = newFlippedCards
      const firstCardSymbol = cards.find(card => card.id === firstCard)?.symbol
      const secondCardSymbol = cards.find(card => card.id === secondCard)?.symbol

      if (firstCardSymbol === secondCardSymbol) {
        setMatchedCards([...matchedCards, firstCard, secondCard])
        setFlippedCards([])
        
        if (matchedCards.length + 2 === cards.length) {
          setGameWon(true)
        }
      } else {
        setTimeout(() => {
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!gameStarted ? (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-2xl p-8 mb-8">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-primary-400" />
            <h3 className="text-2xl font-bold text-black mb-4">Memory Challenge</h3>
            <p className="text-gray-600 mb-6">
              Test your memory! Find matching pairs of symbols. Can you complete it in the fewest moves?
            </p>
            <motion.button
              onClick={initializeGame}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Game
            </motion.button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Game Stats */}
          <div className="flex justify-between items-center mb-6">
            <div className="glass rounded-lg px-4 py-2">
              <span className="text-sm text-gray-600">Moves: </span>
              <span className="font-bold text-black">{moves}</span>
            </div>
            <motion.button
              onClick={initializeGame}
              className="flex items-center gap-2 px-4 py-2 glass-dark rounded-lg hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm font-medium">Reset</span>
            </motion.button>
          </div>

          {/* Game Board */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                className={`aspect-square glass rounded-xl cursor-pointer flex items-center justify-center text-2xl sm:text-3xl font-bold transition-all duration-300 ${
                  flippedCards.includes(card.id) || matchedCards.includes(card.id)
                    ? 'bg-primary-500/20 border-primary-500/30'
                    : 'hover:shadow-glow'
                }`}
                onClick={() => handleCardClick(card.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: flippedCards.includes(card.id) || matchedCards.includes(card.id) ? 180 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    transform: flippedCards.includes(card.id) || matchedCards.includes(card.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? (
                    <span>{card.symbol}</span>
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full" />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Win Message */}
          <AnimatePresence>
            {gameWon && (
              <motion.div
                className="text-center glass rounded-2xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-2xl font-bold text-black mb-2">Congratulations! 🎉</h3>
                <p className="text-gray-600 mb-4">
                  You completed the game in <span className="font-bold text-primary-600">{moves}</span> moves!
                </p>
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(moves <= 8 ? 3 : moves <= 12 ? 2 : 1)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <motion.button
                  onClick={initializeGame}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Play Again
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}

export default MemoryGame
