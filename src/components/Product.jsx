import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import product from "../assets/product/productIcon.png"
import arrow from "../assets/product/arrow.png"
import cart from "../assets/product/cart.png"
import star from "../assets/product/star.png"
import dots from "../assets/product/dots.png"
import love from "../assets/product/love.png"
import buycart from "../assets/product/buycart.png"



const sizes=[
    {id:1,
     size:"S"
    },
    {id:2,
      size:"M"
    },
    {id:3,
        size:"L"
    },
    {id:4,
        size:"XL"
    },
    {id:5,
        size:"XXL"
    },
]

function Product() {
    const [count,setCount]=useState(1)
    const [active,setActive]=useState(sizes[2].id)

    const onDecrease=()=>{
        if(count===0){
            return
        }
        setCount(prev=>prev-1)
    }
   

  return (
    <>
    <div className='font-poppins min-[480px]:hidden w-full'>
        <div style={{backgroundImage:`url(${product})`}} className='h-[100vh] bg-contain bg-no-repeat w-full  flex flex-col '>
            <div className='flex justify-between h-[50%] px-[25px] pt-[20px] '>
                <Link to="/">
                    <img src={arrow}  alt="arrow"/>
                </Link>
                <div className='self-end mb-[20px]'>
                  <img src={dots} alt="dots"/>
                </div>
                <div className='flex flex-col justify-between mb-[20px] '>
                    <img src={cart} alt="cart"/>
                    <img src={love} alt="love"/>
                </div>
            </div>
           <div className='bg-white rounded-tl-[30px] rounded-tr-[30px]   px-[25px] pb-[30px] '>
            <div className='flex flex-row justify-between items-center mt-[25px]' >
                <div className=' leading-7'>
                    <h1 className='font-bold text-[16px]'>Roller Rabbit</h1>
                    <p className='text-[#666666] text-[13px]'>Vado Odelle Dress</p>
                    <div className='flex justify-between items-center w-[150px] h-[11px] mt-[8px]'>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <img src={star} alt="star"/>
                        <p className='text-[11px] font-bold'>(320 Review)</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='px-[10px] flex justify-between items-center bg-[#eeeeee] rounded-[30px] w-[70px] h-[30px]'>
                      <button onClick={onDecrease}>-</button>
                      <p>{count}</p>
                      <button onClick={()=>setCount(prev=>prev+1)}>+</button>
                    </div>
                    <p className='mt-[10px] font-bold text-[11px]'>Available in stock</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold mt-[26px]'>Size</h1>
               <ul className='p-[0px] w-full flex list-style-none justify-between w-[260px] mt-[10px]'>
                {sizes.map(({id,size})=>{
                    const onClickSize=()=>{
                        setActive(id)
                    }

                    const isActiveBg=active===id? "bg-black":"bg-transparent"
                    const isActiveColor=active===id? "text-white":"text-[#888888]"

                    return(
                        <li key={id}>
                              <button className={` ${isActiveBg} ${isActiveColor} w-[40px] h-[40px] rounded-full border-[1px] border-solid border-[#dddddd]  font-bold`}  onClick={onClickSize}>{size}</button>
                        </li>
                    )
                })}
              </ul>
            </div>
            
            <div className='mt-[25px]'>
                <h1 className='font-bold text-[16px]'>Description</h1>
                <p className='text-[#666666] text-[12px] mt-[15px]'>Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer</p>
            </div>

            <div className='flex justify-between items-center'>
                <div>
                    <p className='text-[#666666] text-[10px] mt-[15px]'>Total Price</p>
                    <h1 className='font-bold text-[18px]'>${198 * count}.00</h1>
                </div>

                <div >
                    <Link to="/payment">
                    <button className='bg-black max-w-[290px]:w-[130px] w-[150px] h-[48px] text-white font-[600] flex justify-center  items-center rounded-[30px] mt-[10px] '>   
                    <img src={buycart} alt="buycart" className='mr-[10px]'/>
                      Buy Now
                    </button>
                    </Link> 
                </div>
            </div>
         </div> 
        </div>
    </div>
    <div className='hidden min-[480px]:flex  flex-col justify-center h-[100vh] items-center  '>
    <h1 className='text-red-500 text-[25px]'>This prototype only for mobile design</h1>
    </div>
</>
  )
}

export default Product