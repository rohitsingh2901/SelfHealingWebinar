import React from 'react'
import './Card3.css'

const Card3 = () => {
  return (
    <div id='maindiv' className='row'>
      <div className='col-6'>
        <div id='Poster3' className='row'>
        <div id='leftPoster3' className='col-6 pt-24 flex flex-col items-center'>
          <h2 className='font-extrabold heading3 z-20'>ಲೈವ್ ವೆಬ್ನಾರ್</h2>
          <h1 className='font-extrabold headingw3 text-orange-600 ml-12'>ಸ್ವಯಂ ಚಿಕಿತ್ಸೆ</h1>
          <h1 className='font-extrabold headingw3'>ಕಾರ್ಯಾಗಾರ</h1>
          <h2 className='font-bold heading3'>ಆನ್‌ಲೈನ್/ಆಫ್‌ಲೈನ್</h2>
          <div className='flex justify-end items-center'>
          <img className='Date ml-12' src='Cal.png' alt='Date'></img>
          <h2 className='font-extrabold heading w-75 mx-2'>ಮಂಗಳವಾರ, ನವೆಂಬರ್ 7 <br></br><p className='font-medium'>10:30am-12:30pm</p></h2>
          </div>

          <h5 className='font-extrabold  Rs pt-4 pb-4 pl-2 pr-2 text-center'>ಕಾರ್ಯಕ್ರಮದ ಶುಲ್ಕಗಳು - 3999/-</h5>

          <div className='font-extrabold'>
            <h4 >ತಿಳಿಯಲು ಸೇರಿಕೊಳ್ಳಿ</h4>
            <ol>
            <li>ತತ್ವಶಾಸ್ತ್ರ</li>
            <li>5 ಅಂಶಗಳ ಶರೀರಶಾಸ್ತ್ರ</li>
            <li>ಪಲ್ಸ್ ಡಯಾಗ್ನೋಸಿಸ್</li>
            <li>10 ಅಂಶಗಳು</li>
            <li>ಆಹಾರ ಪದ್ಧತಿ</li>
            <li>ಪ್ರಶ್ನೋತ್ತರ</li>
            </ol>
          </div>
          <h5 className='font-extrabold Rs pt-2 pb-2 pl-2 pr-2 text-center'>ಕನ್ನಡದಲ್ಲಿ ಅಧಿವೇಶನಗಳು</h5>
          <div className='flex flex-col Sm mt-24 font-bold'>
            <div className='flex items-center z-20'>
            <i className="fa-solid fa-play mr-2"></i><p className='m-0'>Doctor Yourself</p>
            </div>
            <div className='flex items-center z-20'>
            <i className="fa-brands fa-instagram mr-2"></i><p className='m-0'>/DEEPTA MANOHAR</p>
            </div>
            <div className='flex items-center z-20'>
            <i className="fa-brands fa-whatsapp mr-2"></i><p className='m-0'>9353690229</p>
            </div>
            <div className='flex items-center z-20'>
            <i className="fa-solid fa-globe mr-2"></i><p className='m-0'>/DEEPTA MANOHAR</p>
            </div>
          </div>
        </div>
        <div className='col-6 flex items-center flex-col'>
          <img src='Logo.png' className='w-50' alt='Logo'></img>
          <h5>Your Body is Speaking,</h5>
          <h5>Are you Listening!</h5>
          <img className='mt-16 z-20 -mr-8' src='Dp3.png' alt='DP'></img>
          <div className='z-20 BelowDiv -mr-20'>
          <h6 className='font-extrabold text-white'>ಭಾಷಣಕಾರ- ದೀಪ್ತಾ ಮನೋಹರ್</h6>
          <h6 className='font-extrabold text-white'>ಲೇಖಕ- ಆರು ರಹಸ್ಯಗಳು ನೀವೇ ವೈದ್ಯರು</h6>
          </div>
        </div>
        </div>
      </div>
      <div id='Poster2nd' className='col-6 flex flex-col items-center justify-center'>
      <h1 className='font-extrabold text-orange-600 text-center' >You want to start today?</h1>
      <iframe className='w-100' title='Video' src="https://drive.google.com/file/d/1D_RrgR3qO5arpBm1sUIzrgCLYaKBoVc-/preview" width="640" height="480" allow="autoplay"></iframe>
      <div className='flex items-center justify-center'>
      <h4>Click right away to start</h4><a className='text-white hover:no-underline'  rel='noreferrer' target='_blank' href="https://surveyheart.com/form/644a2ee13bdb09289bc71341"><button className='btn btn-success mx-2 my-2'>START NOW</button></a>
      </div>
      <a className='text-white hover:no-underline btn-block' rel='noreferrer' target='_blank' href="https://pages.razorpay.com/Self-Healing"><button className="btn bg-orange-500 btn-lg btn-block">REGISTER NOW</button></a>
      <h4 className='text-center font-extrabold text-orange-600 '>Limited seats💺 </h4>
      <h4 className='text-center font-extrabold text-orange-600 '>So book your seat</h4>
      </div>

    </div>
  )
}

export default Card3