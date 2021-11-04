import React, { useState } from 'react'
import styles from './AddCar.module.css'
import Button from '../UI/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import SelectModelButton from '../UI/SelectModelButton/SelectModelButton'
import SelectMileageButton from '../UI/SelectMileageButton/SelectMileageButton'
import SelectYearIssueButton from '../UI/SelectYearIssueButton/SelectYearIssueButton'
import {
  setStateNumberAC,
  setIsCreateNewCarFalse,
  hideTextMain,
} from '../../redux/actionCreators/serviceInfoAC'
import { sagaCreateOwnerCarAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import { useHistory, Redirect } from 'react-router-dom'

function AddCar() {
  const dispatch = useDispatch()
  const [stateNumber, setStateNumber] = useState('')
  const { mainSelectValue } = useSelector((state) => state.serviceInfoReducer)
  const history = useHistory()
  const newCar = useSelector((state) => state.serviceInfoReducer.newCar)
  const { id } = useSelector((state) => state.userReducer.user)

  const body = {
    ownerId: id,
    modelId: newCar.modelId,
    stateNumber,
    yearIssue: newCar.yearIssue,
    milegeId: newCar.milegeId,
  }

  const saveAuto = () => {
    console.log('save auto')
    if (!mainSelectValue.carModelId) {
      alert('Не указана модель автомобиля')
    } else if (!newCar.yearIssue) {
      alert('Не указан год выпуска')
    } else if (!mainSelectValue.milegeId) {
      alert('Не указан пробег')
    } else if (!stateNumber) {
      alert('Не указан гос.номер')
    } else {
      dispatch(hideTextMain())
      dispatch(sagaCreateOwnerCarAC(body))
      setTimeout(() => {
        history.goBack()
      }, 2000)
    }
  }

  return (
    <ul className={styles.addcar}>
      <li>добавление автомобиля</li>
      <SelectModelButton />
      <SelectYearIssueButton />
      <SelectMileageButton />
      <li>
        <input
          value={stateNumber}
          onChange={(e) => setStateNumber(e.target.value)}
          name="stateNumber"
          type="name"
          id="stateNumber"
          placeholder="номер, например а123ве45"
        />
      </li>
      <Button clickFunc={() => saveAuto()} name="ДОБАВИТЬ АВТОМОБИЛЬ" />
    </ul>
  )
}

export default AddCar
