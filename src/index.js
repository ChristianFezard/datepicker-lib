import React, { useState } from 'react'

const DateTimePicker = ({ value, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(value)

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
    onDateChange(event.target.value)
  }

  const handleToday = () => {
    const today = new Date()
    const todayDate = today.toLocaleDateString('en-US')
    setSelectedDate(todayDate)
    onDateChange(todayDate)
  }

  return (
    <div>
      <input
        type='date'
        value={selectedDate}
        onChange={handleDateChange}
      />
      <button onClick={handleToday}>Today's date</button>
    </div>
  )
}

export default DateTimePicker
