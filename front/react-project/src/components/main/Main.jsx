import React from 'react'
import './Main.scss'
import BannerImage from '../../assets/images/banner-image-1.svg'
import Treker from '../../assets/images/banner-bg-text.svg'
import mountains from '../../assets/images/logo-icon.svg'


const Main = () => {
  return (
    <section>
        <div className="container">
            <div className="main">
                <div className="content">
                    <div className='trekerImage'><img src={Treker} /></div>
                 <div className='innerText'>
                 <div className='top'>
                        <h1>Heç Vaxt Dayanma</h1>
                    </div>
                    <div className='margin'>
                        <h2>Kəşf Et</h2>
                    </div>
                    <div className='bottom'>
                        <p>Onların evi insanların onları görməyə gəldiyi bir muzeydir. Onlar həqiqətən Addams Ailəsinin fəryadıdırlar. Bu günlərin hamısı Xoşbəxt və Azaddır. Bu günlərin hamısını mənimlə paylaş</p>
                    </div>
                    <div className='btn'>
                        <button>Bütün Turlara Baxın  <img src={mountains}  /></button>
                    </div>
                 </div>

                </div>
                <div className="banner-image">
                    <div className="image">
                        <img src={BannerImage} />
                    </div>

                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Main
