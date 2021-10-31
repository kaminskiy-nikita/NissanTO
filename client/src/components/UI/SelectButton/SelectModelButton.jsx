import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Select from 'react-select'
import { setModelSelect } from '../../../redux/actionCreators/serviceInfoAC'
import { sagaGetServiceTypeAC } from '../../../redux/actionCreators/asyncAC/asyncServiseInfoAC'

function SelectModelButton() {
  const dispatch = useDispatch()
  const allModels = useSelector((state) => state.serviceInfoReducer.allModels)
  const [selectedOption, setSelectedOption] = useState(null)

  const setSelectedModelOption = (event) => {
    const selectModelOption = event.value
    setSelectedOption(event.label)
    dispatch(setModelSelect(selectModelOption))
  }

  return (
    <div>
      {allModels && (
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedModelOption}
          options={allModels.map(
            (option) => (option = { value: option.id, label: option.title })
          )}
          placeholder = 'выберите автомобиль'
        />
      )}
    </div>
  )
}

export default SelectModelButton
