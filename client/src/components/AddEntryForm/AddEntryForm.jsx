import React from 'react';
import { getDayForInput } from '../../utils/getToday';
import { getMaxDayFromToday } from '../../utils/getMaxDay';

const AddEntryForm = () => {
const onSubmit = async (event) => {
  event.preventDefault();
  const { car, time, date } = event.target;
  const startDate = new Date(`${date.value} ${time.value}`)
  const endDate = new Date(startDate.getTime() + (2 * 60 * 60 * 1000))
  
  

}

  return (    
    <form onSubmit={onSubmit}>
      <h3>Выберите машину</h3>
      <select name="car" id="">
        <option value="car 1">Car 1</option>
      </select>
      <h3>Выберите дату</h3>
      <input required name="date" defaultValue={getDayForInput(new Date())} type="date" min={getDayForInput(new Date())} max={getMaxDayFromToday(30)} />
      <input required id="appt-time"defaultValue="09:00:00" list="times" min="09:00:00" max="18:00:00" type="time" name="time" step="1800" />
      <datalist id="times">
          <option value="09:00:00" />
          <option value="09:30:00" />
          <option value="10:00:00" />
          <option value="10:30:00" />
          <option value="11:00:00" />
          <option value="11:30:00" />
          <option value="12:00:00" />
          <option value="12:30:00" />
          <option value="13:00:00" />
          <option value="13:30:00" />
          <option value="14:00:00" />
          <option value="14:30:00" />
          <option value="15:00:00" />
          <option value="15:30:00" />
          <option value="16:00:00" />
          <option value="16:30:00" />
          <option value="17:00:00" />
          <option value="17:30:00" />
      </datalist>
      <input type="submit" value='Записаться на ТО' />
    </form>
  )
}

export default AddEntryForm