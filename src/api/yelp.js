import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer LBWMZ2QFvb36tNFonVbYqehxAAyDWzdI3wIFWiZT6wOYGyBvuvKlD7FAfV6B3VStZw7ULESlDMgGoB4xZWDKh7S97gfcEzc-q8ovq7GtjW2ChdTSGhbmmUuk_35hXXYx'
  }
})
