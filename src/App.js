import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainURL = 'https://api.unsplash.com/photos'
const searchURL = 'https://api.unsplash.com/search/photos'

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    let url = `${mainURL}${clientID}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Data submited')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'>
          {photos.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>
        {loading && <h2 className='loading'>Loading..</h2>}
      </section>
    </main>
  )
}

export default App
