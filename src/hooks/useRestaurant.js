import yelp from '../api/yelp'
import { useState, useCallback, useEffect } from 'react'

export default id => {
  const [restaurant, setRestaurant] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const getRestaurant = useCallback(id => {
    setLoading(true)
    yelp
      .get(`/${id}`)
      .then(({ data }) => {
        setRestaurant(data)
        setLoading(false)
      })
      .catch(err => {
        setErrorMessage('internal error')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    getRestaurant(id)
  }, [id])

  return { restaurant, errorMessage, loading }
}
