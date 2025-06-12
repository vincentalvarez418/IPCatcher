import { useEffect, useState } from 'react'
import './CatQuote.css'

const quotes = {
  common: [
    'Cats sleep 70% of their lives.',
    'A group of cats is called a clowder.',
    'Cats have five toes on their front paws.',
    'Most cats dislike water.',
    'Cats purr at around 26 vibrations per second.',
  ],
  uncommon: [
    'The first cat in space was French.',
    'Cats use their whiskers to detect changes in the air.',
    'Each cat’s nose print is unique.',
    'Some cats are allergic to humans.',
  ],
  rare: [
    'Ancient Egyptians worshipped cats as gods.',
    'A cat once served as a mayor of an Alaskan town.',
    'There are cats with polydactyl (extra toes) genes.',
  ],
  legendary: [
    'In 1963, a cat named Félicette went to space and survived.',
  ]
}

function CatQuote() {
  const [quote, setQuote] = useState('')
  const [rarity, setRarity] = useState('common')

  useEffect(() => {
    const roll = Math.random()
    let type = 'common'

    if (roll < 0.02) type = 'legendary'
    else if (roll < 0.15) type = 'rare'
    else if (roll < 0.40) type = 'uncommon'

    const selected = quotes[type]
    const randomQuote = selected[Math.floor(Math.random() * selected.length)]

    setQuote(randomQuote)
    setRarity(type)
  }, [])

  if (!quote) return null

  return <p className={`cat-quote ${rarity}`}>{quote}</p>
}

export default CatQuote
