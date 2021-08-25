import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

const mainURL = 'https://api.unsplash.com/photos'
const searchURL = 'https://api.unsplash.com/search/photos'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      let url
      url = `${mainURL}?client_id=fkmk3fliq4V-RXUf36ugG7OwA0kqGcN2Djz1I82uVy0`
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h1>App Component</h1>
}

export default App
