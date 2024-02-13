import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Создаем стилизованную кнопку с помощью компонента styled
const AddDateButton = styled('button')({
  backgroundColor: '#1976d2',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#1565c0',
  },
});

export default function CommonlyUsedComponents() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddDate = () => {
    fetch('your-server-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ selectedDate })
    })
    .then(response => {
      if (response.ok) {
        console.log('Date added successfully');
      } else {
        console.error('Failed to add date');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Компонент DatePicker с обработчиком изменения выбранной даты */}
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        // Добавляем проп "className" для установки класса кнопке
        className="date-picker"
      />
      {/* Кнопка для добавления даты с примененными стилями */}
      <AddDateButton onClick={handleAddDate} className="add-date-button">Add Date</AddDateButton>
    </LocalizationProvider>
  );
}