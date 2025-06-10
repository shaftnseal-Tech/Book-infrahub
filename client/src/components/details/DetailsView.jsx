import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { getProductDetails } from '../redux/actions/productActions';

const DetailsView = () => {
  const dispatch = useDispatch();
  const {id} = useParams()
const {loading, product} = useSelector(state => state.getProductDetails)
  useEffect(()=>{
    dispatch(getProductDetails(id))
  }, [dispatch, id, product, loading])
  return (
    <div>DetailsView</div>
  )
}

export default DetailsView