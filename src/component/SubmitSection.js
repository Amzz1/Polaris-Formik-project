import React from 'react'
import { Button } from '@shopify/polaris'
import airBalloon from '../img/airballoon.png'
import sun from '../img/sun.png'
import house from '../img/house.png'
const SubmitSection = () =>{
  return (
    <div className='submit-container'>
           <img className='submit-img__sun' src={sun} alt='sun'/>

    <div className='submit-section'>
      <h4>Hey John welcom to Carson Dash</h4>
      <p>Submit a new task ,pick a task from the catalog or subscribe to submit unlimited tasks</p>
     
      
      <Button >Submit a new task</Button>
      <Button >Subscribe & Save</Button>
    </div>
    <img className='submit-img__air-balloon'  src={airBalloon} alt='airballoon'/>

     <img className='submit-img__house'  src={house} alt='house'/>
     </div>
  )
}

export default SubmitSection
