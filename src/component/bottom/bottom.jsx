import './bottom.css'
import InstagramImg from './img/Vector.png'
import FacebookImg from './img/Vector-2.png'
import TwitterImg from './img/Vector-3.png'
import MailImg from './img/envelope.png'
export function Bottom() {
    return(
        <div className='bottom'>
            <div className='socialMedia'>
                <h6>Мы в социальных сетях:</h6>
                <div>
                    <img src={InstagramImg} alt="" />
                    <img src={FacebookImg} alt="" />
                    <img src={TwitterImg} alt="" />
                </div>
            </div>
            <div className='techSupport'>
                <h6>Почта технической поддержки:</h6>
                <button>volunteerspot@gmail.com</button>
            </div>
            <div className='questions'>
                <h6>Спросите нас о чем-либо:</h6>
                <input type="text" placeholder='Ваш вопрос' name="" id="" />
                <button className='send'>Отправить</button>
            </div>
        </div>
    )
}