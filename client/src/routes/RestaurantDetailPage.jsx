import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import StarRating from '../components/StarRating'
import AddReview from '../components/AddReview'
import Reviews from '../components/Reviews'

const RestaurantDetailPage = () => {
  const {id} = useParams()
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`)
      setSelectedRestaurant(response.data.data)
    }
      catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {selectedRestaurant && <StarRating />}
      <>
      <div className='mt-3'>
        <Reviews reviews={selectedRestaurant} />
    </div>
    <AddReview />
    </>
    </div>
  )
}

export default RestaurantDetailPage
