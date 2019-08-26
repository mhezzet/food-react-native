import yelp from '../api/yelp'
import { useState, useCallback, useEffect } from 'react'

export default () => {
  const [restaurants, setRestaurants] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const searchFood = useCallback(term => {
    setLoading(true)
    yelp
      .get('/search', {
        params: {
          limit: 50,
          term,
          location: 'New York City'
        }
      })
      .then(({ data }) => {
        setRestaurants(data.businesses)
        setLoading(false)
      })
      .catch(err => {
        setErrorMessage('internal error')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    searchFood('burger')
  }, [])

  return { searchFood, restaurants, errorMessage, loading }
}
