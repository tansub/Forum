import { useState } from 'react';
import "./style.css"


export const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    city: '',
    phoneNumber: '',
    instagram: '',
    img: null,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === 'file') {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        setFormData({ ...formData, img: reader.result });
      };
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, birthDate, city, phoneNumber, instagram, img } = formData;
    const token = localStorage.getItem('token');
    const data = {
      username: name,
      birth_date: birthDate,
      city,
      number_phone: phoneNumber,
      img,
      user: 1,
    };
    try {
      const response = await fetch('http://16.170.37.57/api/v1/app/profile/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
    } catch (error) {
      console.error('Error creating user profile:', error);
    }
  };

  return (
    <div className="profileEditBody">
      <div className="profileEdit">
        <h1>Редактирование профиля волонтера:</h1>
        <div className="boxPicture">
          <div className="photoEdit">
            <div className="left">
              <div className="circle"></div>
            </div>
            <div className="right">
              <label className='fileChooser'>
                <input id="photoButton" type="file" accept="image/*" onChange={handleChange} required/>
                <span className="fileChooserButton">Добавить фотографию</span>
              </label>
            </div>
          </div>
          <div className="boxMain">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Имя" name="name" id="name" value={formData.name} onChange={handleChange} />
              <input type="date" placeholder="Дата рождения" name="birthDate" id="birthDate" value={formData.birthDate} onChange={handleChange} />
              <input type="text" placeholder="Место проживания" name="city" id="city" value={formData.city} onChange={handleChange} />
              <input type="number" placeholder="Телефонный номер" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              <input type="text" placeholder="Instagram" name="instagram" id="instagram" value={formData.instagram} onChange={handleChange} />
              <button type="submit">Создать профиль</button>            
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit