import React from 'react'
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import './Card2.css'

const Card2 = () => {
  return (
    <div id='maindiv' className='row'>
      <div className='col-6'>
        <div id='Poster2' className='row'>
        <div id='leftPoster2' className='col-6 pt-24 flex flex-col items-center'>
          <h1 className='text-center font-extrabold heading2 z-20'>జీవించు</h1>
          <h1 className='text-center font-extrabold text-6xl headingw2 ml-12 -mt-4'>వెబ్నార్</h1>
          <h2 className='headingw2'>సెల్ఫ్ హీలింగ్ వర్క్‌షాప్</h2>
          <h2 className='font-extrabold heading'>ఆన్‌లైన్/ఆఫ్‌లైన్</h2>
          <h4 className='text-left font-extrabold heading2 z-20'><i>MONDAY</i></h4>
          <h2 className='headingw2'>10:30am-12:30pm</h2>
          <h2 className='headingw2 -mt-2'>November 13</h2>
          <h5 className='font-extrabold text-white gB w-75 text-center '>తెలుగులో సెషన్స్</h5>
          <h4 className='font-extrabold text-white gB w-75 text-center '>ప్రోగ్రామ్ ఫీజు - - 3999/-</h4>
          <div>
            <div className='flex items-center sbox text-white p-0 mt-2 pt-2 rounded'>
            <img className='w-25 mx-2' src='sampleDP.png' alt='Sample Dp'></img>
            <p><h2>దీప్తా మనోహర్</h2><p className="w-50">రచయిత- ఆరు రహస్యాలు మీరే డాక్టర్</p></p>
            </div>
          </div>
          <h4 className='text-center font-extrabold heading2d z-20 my-4'>ఇప్పుడే నమోదు చేసుకోండి</h4>
  
          
          
          <div className='flex flex-col text-white text-xl'>
            <div className='flex items-center z-20 headingw2'>
            <i className="fa-solid fa-play mr-2"></i><p className='m-0'>Doctor Yourself</p>
            </div>
            <div className='flex items-center z-20 headingw2'>
            <i className="fa-brands fa-instagram mr-2"></i><p className='m-0'>/DEEPTA MANOHAR</p>
            </div>
            <div className='flex items-center z-20 headingw2'>
            <i className="fa-brands fa-whatsapp mr-2"></i><p className='m-0'>9353690229</p>
            </div>
            <div className='flex items-center z-20 headingw2'>
            <i className="fa-solid fa-globe mr-2"></i><p className='m-0'>/DEEPTA MANOHAR</p>
            </div>
          </div>
        </div>

        <div className='col-6 flex items-center flex-col'>
          <img src='Logo.png' className='w-50' alt='Logo'></img>
          <h5>Your Body is Speaking,</h5>
          <h5>Are you Listening!</h5>
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
          <img id='dp2' className="z-20" src='Dp2.png' alt='DP'></img>
        </div>
        </div>
      </div>
      <div id='Poster2nd' className='col-6 flex flex-col items-center justify-center'>
      <h1 className='font-extrabold text-orange-600 text-center' >You want to start today?</h1>
      <Player
      playsInline
      poster="/assets/poster.png"
      src="https://drive.google.com/file/d/1D_RrgR3qO5arpBm1sUIzrgCLYaKBoVc-/preview"
      />
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

export default Card2
