import { useEffect, useState } from 'react'
import './Catimage.css'

function CatImage() {
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    const url = `https://cataas.com/cat?${Date.now()}`
    setImgUrl(url)
  }, [])

  return (
    <div className="cat-img-placeholder">
      {imgUrl ? <img src={imgUrl} alt="Random Cat" /> : <div className="loading">Loading...</div>}
    </div>
  )
}

export default CatImage
