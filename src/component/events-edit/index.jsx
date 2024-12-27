import { useState, useEffect } from 'react';
import axios from 'axios';
import './edit.css';
import { useNavigate } from 'react-router-dom';

const EditEventForm = ({ event }) => {
  const url = window.location.href
  const lastChar = url.slice(-1);
  const [name, setName] = useState(event.name);
  const [date, setDate] = useState(event.date);
  const [place, setPlace] = useState(event.place);
  const [full_text, setFullText] = useState(event.full_text);
  const [img, setImg] = useState(null);
  const [imageUrl, setImageUrl] = useState(event.img_url);
  const navigate = useNavigate()


  useEffect(() => {
    setName(event.name);
    setDate(event.date);
    setPlace(event.place);
    setFullText(event.full_text);
    setImageUrl(event.img_url);
    console.log(event);
  }, [event]);

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
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = new FormData();
    eventData.append('name', name);
    eventData.append('date', date);
    eventData.append('place', place);
    eventData.append('full_text', full_text);
    if (img) {
      eventData.append('img', img);
    }
    const token = localStorage.getItem('token');
    

    try {
      const response = await axios.put(`http://16.170.37.57/api/v1/app/event/${lastChar}/`, eventData, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Event updated:', response.data);
      navigate('/events')
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div className='box-edit'>
      <form className='create-form' onSubmit={handleSubmit}>
        <label>
          Название мероприятия:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />
        <label>
          Дата проведения:
          <input type="date" value={date} onChange={handleDateChange} required />
        </label>
        <br />
        <label>
          Место проведения:
          <input type="text" value={place} onChange={handlePlaceChange} required />
        </label>
        <br />
        <label>
          Описание мероприятия:
          <textarea value={full_text} onChange={handleFullTextChange} required />
        </label>
        <br />
        <label>
          Изображение мероприятия:
          <input type="file" accept="image/*" onChange={handleImgChange} />
          {imageUrl && (
            <img src={imageUrl} alt={name} style={{ maxWidth: '200px', marginTop: '10px' }} />
          )}
        </label>
        <br />
        <button className='btn' type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
};

export default EditEventForm;
