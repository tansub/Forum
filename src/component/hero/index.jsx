import './hero.css';
import HeroImg from '../image/shutterstock_610533473-1.jpg'

export const Hero = () => {
    return (
        <div className='hero'>
        

                <div className="left">
                    <div className="wrapper">
                    <h3>Volunteer's spot</h3>

                    <div className='description'>Новая площадка в Кыргызстане, на которой волонтеры могут найти возможности для помощи, а организаторы — желающих помочь. Кроме того, Volunteer's spot — целая экосистема IT-сервисов для развития созидательной гражданской активности.</div>
                    <div className='recommendations'>
                        <div> <img src="https://dobro.ru/_next/static/media/home.c5cc78c6.svg" alt="" />
                            Добрые дела рядом с домом</div>
                        <div> <img src="https://dobro.ru/_next/static/media/globe.62519347.svg" alt="" />
                            Участие в масштабных событиях</div>
                        <div> <img src="https://dobro.ru/_next/static/media/rocket.f0e6e8e5.svg" alt="" />
                            Продвижение социальных проектов</div>
                        <div> <img src="https://dobro.ru/_next/static/media/group.0e487d25.svg" alt="" />
                            Привлечение добровольцев</div>
                    </div>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="circle"></div>
                    <img className='heroImg' src={HeroImg} alt="" />
                </div>
        </div>
    )
}