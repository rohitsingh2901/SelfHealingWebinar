import React from 'react'
import './Card1.css'

const Card1 = () => {
  return (
    <div id='maindiv' className='row'>
      <div className='col-6'>
        <div id='Poster' className='row'>
        <div id='leftPoster' className='col-6 pt-24 flex flex-col items-center'>
          <h1 className='font-extrabold heading z-20'>LIVE WEBINAR</h1>
          <hr className='w-50 my-0 horizontalLine'></hr>
          <h1 className='font-extrabold headingw text-orange-600 ml-12'>SELF HEALING WORKSHOP</h1>
          <h1 className='font-extrabold heading'>ONLINE/OFFLINE</h1>
          <div className='flex justify-end items-center'>
          <img className='Date ml-12' src='Calender.png' alt='Date'></img>
          <h2 className='font-extrabold heading w-75 mx-2'>Tuesday, November 25</h2>
          </div>
          <h5 className='font-extrabold text-white bg-orange-500 w-75 text-center rounded'>SESSIONS IN ENGLISH</h5>
          <h5 className='font-extrabold text-white bg-orange-500 w-75 text-center rounded'> PROGRAM FEES - 3999/-</h5>
  
          
          <div>
            <h4>JOIN TO KNOW</h4>
            <ol>
            <li>PHILOSOPHY</li>
            <li>PHYSIOLOGY OF 5 ELEMENTS</li>
            <li>PULSE DIAGNOSIS</li>
            <li>10 POINTS</li>
            <li>DIET</li>
            <li>Q & A</li>
            </ol>
          </div>
          <div id="SM1" className='flex flex-col text-white mt-24'>
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
          <div id='DateMOb' className='flex items-center mt-32'>
          <img className='Date' src='watch.png' alt='Date'></img>
          <h2 className='font-extrabold heading'>10:30am-12:30pm</h2>
          </div>
          <img id='dp' className="h-50 z-20" src='Dp.png' alt='DP'></img>
          <h6 className='z-20 text-white'>Speaker - Deepta Manohar</h6>
          <h6 className='z-20 text-white'>Author - Six secrets to Doctor Yourself</h6>
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

export default Card1
