import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {usePaymentInputs} from "react-payment-inputs"
import {RiMastercardFill} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai"
import {HiLockClosed} from "react-icons/hi"
import {BsCheckCircle} from "react-icons/bs"
import {RotatingLines} from "react-loader-spinner"

import arrow from "../assets/product/arrow.png"





function Payment() {
    const {getCardNumberProps,getExpiryDateProps,getCVCProps}=usePaymentInputs()
    
    const [payProcess,setPayProcess]=useState(false)
    const [payDone,setPayDone]=useState(false)
    const [paybg,setPayBg]=useState(false)
    const [cardNo,setCardNo]=useState("")
    const [name,setName]=useState("")
    const [expiry,setExpiry]=useState("")
    const [cvc,setCvc]=useState("")
    const [error,setError]=useState(false)


    const payField=()=>{
        if(cardNo==="" || name==="" || expiry==="" || cvc===""){
            setError(true)
        }else{
            setPayProcess(true)
            setPayBg(true)
        }  
    }

    useEffect(()=>{
        if(payProcess){
            setTimeout(()=>{
                setPayDone(true)
            },2000)
        }        
    },[payProcess])

    
    useEffect(()=>{
        if(payDone && payProcess){
            setPayProcess(false)
        }
        return 
    },[payDone,payProcess])
    
    const payHidden= payProcess ?"":"hidden"
    const activeBg=paybg?"bg-black bg-opacity-50":""
    const arrowHidden=payProcess? "hidden":""
      
  return (
    <>
    <div className={`${activeBg}  pt-[20px] min-[480px]:hidden`}>
      <Link to="/product" className={`${arrowHidden}`}> 
       <img src={arrow} alt="arrow"  className='ml-[20px]'/>
     </Link>

    <div className={`flex flex-col justify-center items-center  h-[100vh] font-poppins sm:hidden`}>
      
        <div className='bg-[#fdf3f9] rounded-xl h-[60%] w-[90%] flex flex-col justify-between  py-[20px] px-[20px]'>
            <div>
              <label id="cardno" className='font-bold '>Card number</label>
                <div className='flex justify-between items-center border-[1px] border-black border-solid rounded-md h-[50px] px-[10px] mt-[8px] bg-white'>
                  <input  {...getCardNumberProps({onChange:(e)=>setCardNo(e.target.value)})} value={cardNo} htmlFor="cardno"  placeholder='**** **** **** ****' className=" outline-none font-[500] "/>
                <div className='flex flex-col justify-center items-center border-[1px] border-black border-solid rounded-md h-[23px] w-[35px] '>
                  <RiMastercardFill className='text-slate-400'/>
                </div>
                </div>
            </div>
            <div>
              <label id="name" className='font-bold '>Name on card</label>
              <input type="text "htmlFor="name"  placeholder='Enter your card name' onChange={(e)=>setName(e.target.value)} className="border-[1px] border-black border-solid rounded-md h-[50px] px-[10px]  w-[100%] mt-[8px]"/>
            </div>
            <div className='flex justify-between'>
              <div className='w-[150px] '> 
                <label id="expiry" className='font-bold '>Expiration date</label>
                <input {...getExpiryDateProps({onChange:(e)=>setExpiry(e.target.value)})} type="text "htmlFor="expiry"  placeholder='MM/YY' className="border-[1px] border-black border-solid rounded-md h-[50px] px-[10px] w-[100px] mt-[8px]"/>
              </div> 
              <div> 
                <label  id="cvc" className='font-bold  flex items-center'>Security Code <AiFillQuestionCircle className='ml-[3px] text-slate-500'/></label>
                <input {...getCVCProps({onChange:(e)=>setCvc(e.target.value)})} type="text "htmlFor="cvc"  placeholder='CVV' className="border-[1px] border-black border-solid rounded-md h-[50px] px-[10px] w-[100px] mt-[8px]"/>
              </div> 
            </div>

            {error?<p className='text-red-500 text-[11px]'>*Enter all card Details</p>:""}

        <button className='bg-[#bf477f] w-[100%] h-[50px] rounded-lg text-white text-[15px] font-[500] flex  justify-center items-center' onClick={payField} type="button" >
            <HiLockClosed className='text-white text-[18px] mr-[4px] mb-[3px]'/>
            Pay now
        </button> 

        </div>   

        {payDone?
          <div className='bg-[#fdf3f9] h-[60vh] w-[90%] flex flex-col  justify-center items-center text-center  rounded-lg absolute'>
            <BsCheckCircle className='text-green-500 text-[40px]'/>
              <h1 className='font-bold mt-5 text-[18px]'>Payment recieved!</h1>  
              <p className='text-gray-500 text-[14px] mt-2 font-bold'>Your order is now on the way. Please <br/>
              check your email for the receipt.
              </p>
              <Link to="/">
                <button className='bg-black h-[40px] w-[100px] text-white text-[15px] rounded-lg mt-[15px] '>
                    Go to home 
                </button>
              </Link> 
            </div>
          
          :<div className={`bg-[#fdf3f9] h-[60vh] w-[90%] flex flex-col  justify-center items-center  rounded-lg absolute ${payHidden}`}>
          <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="50"
              visible={true}
              />
            <h1 className='font-bold mt-5 text-[18px]'>Payment is processing...</h1>  
            <p className='text-gray-500 text-[14px] mt-2 font-bold'>Please wait, do not close this screen</p>
          </div>
        }       
    </div>
    </div>
    <div className='hidden min-[480px]:flex  flex-col justify-center h-[100vh] items-center  '>
    <h1 className='text-red-500 text-[25px]'>This prototype only for mobile design</h1>
    </div>
    </>
  )
}

export default Payment