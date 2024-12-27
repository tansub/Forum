import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './create-event.css';

const CreateEventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [full_text, setFullText] = useState('');
  const [img, setImg] = useState(null);
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };

  const handleFullTextChange = (event) => {
    setFullText(event.target.value);
  };

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    setImg(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = new FormData();
    eventData.append('name', name);
    eventData.append('date', date);
    eventData.append('place', place);
    eventData.append('full_text', full_text);
    eventData.append('img', img);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://16.170.37.57/api/v1/app/event/create/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`
        },
        body: eventData
      });
      const data = await response.json();
      console.log('Event created:', data);
      navigate('/events')
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
     <div className='box'>
      <form className='create-form' onSubmit={handleSubmit}>
        <label>
          Название мероприятия:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        {/* <br /> */}
        <label>
          Дата проведения:
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        {/* <br /> */}
        <label>
          Место проведения:
          <input type="text" value={place} onChange={handlePlaceChange} required />
        </label>
        {/* <br /> */}
        <label>
          Описание мероприятия:
          <textarea value={full_text} onChange={handleFullTextChange} required />
        </label>
        {/* <br /> */}
        <label>
          Изображение мероприятия:
          <input type="file" accept="image/*" onChange={handleImgChange} required />
        </label>
        {/* <br /> */}
        <button className='btn' type="submit">Создать событие</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
