import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import Offer from '../Offer/Offer'
import Button from '../UI/Button/Button'
import Contacts from '../Contacts/Contacts'
import styles from './Main.module.css'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import { sagaGetServiceTypeAC } from '../../redux/actionCreators/asyncAC/asyncServiseInfoAC'
import { hideTextMain } from '../../redux/actionCreators/serviceInfoAC'
import auto from './img/default.png';

const Main = () => {

  const carModelId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.carModelId
  )
  const milegeId = useSelector(
    (state) => state.serviceInfoReducer.mainSelectValue.milegeId
  )
  const carImg = useSelector((state) => state.serviceInfoReducer.mainSelectValue.imgCar)
  const dispatch = useDispatch()
  if (carModelId && milegeId) {
    dispatch(sagaGetServiceTypeAC({carModelId, milegeId}))
  }
  const history = useHistory()

  const hidetextMain = () => {
    dispatch(hideTextMain())
    history.push('/servicelist')
  }

  return (
    <div className={styles.main}>
      <SelectModelButton />
      <SelectMileageButton />
      <Offer />

      <Button clickFunc={hidetextMain} name='ПОДРОБНЕЕ'/>
      <>
      {carImg ? <><li><img src={carImg} alt="" /></li>
	    <></></> : <><li><img src={auto} alt="" /></li>
	    <></></>}
	    </>
	    <Contacts />

    </div>
  )
}

export default Main
