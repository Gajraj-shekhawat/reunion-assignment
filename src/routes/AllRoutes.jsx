import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Favorite from '../pages/Favorite'
import Property from '../pages/Property'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='favorite' element={<Favorite />}/>
      <Route path='/' element={<Property />}/>
    </Routes>
  )
}

export default AllRoutes