import React, { useEffect, useState } from 'react'

const DatePicker = ({ value, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(value)

  useEffect(() => {
    setSelectedDate(value)
  }, [value])

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
    const formattedDate = new Date(event.target.value).toLocaleDateString('en-US')
    onDateChange(formattedDate)
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

export default DatePicker
