import React, { useState } from 'react'

const DateTimePicker = ({ value, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(value)

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
    onDateChange(event.target.value)
  }

  return (
    <div>
      <input
        type='date'
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  )
}

export default DateTimePicker
