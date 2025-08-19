import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
  const {data, fetchAllProducts} = getData()
  console.log(data);
  
  useEffect(()=> {
    fetchAllProducts();
  }, [])


    const SamplePrevArrow =  (props) => {
    const {className, style, onClick} = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
        <AiOutlineArrowLeft className='arrows' style={{...style, display:"block", borderRadius: "50px", background: "white", color: "grey", position:"absolute", padding: "2px", left: "50px"}}/>
      </div>
    )
  }


    const SampleNextArrow =  (props) => {
    const {className, style, onClick} = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowRight className='arrows' style={{...style, display:"block", borderRadius: "50px", background: "white", color: "grey", position:"absolute", padding: "2px", right: "50px"}}/>
      </div>
    )
  }

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow:<SampleNextArrow to="next"/>,
    prevArrow:<SamplePrevArrow to="prev"/>
  };
 
  return (
    <div>
    <Slider {...settings}>
      {
        data?.slice(0,6)?.map((item, index) => {
          return <div key={index} className=' bg-grey -z-10 rounded-md'>
            <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
              <div className='md:space-y-6 space-y-3'>
                  <h3 className='text-black font-semibold text-m'>Power Your Passion with the Latest Musical Instruments and High-Tech Gadgets.</h3><br/>
                  <h1 className='md:text-4xl text-xl font-bold line-clamp-2 md:line-clamp-3 md:w-[500px] font-montserrat'>{item.title}</h1>
                  <p className='md:w-[500px] line-clamp-3 text-gray-800 pr-7'>{item.description}</p>
                  <button className='bg-green-700 text-white px-3 py-2 rounded-md cursor-pointer mt-2 hover:bg-green-800'>Shop now</button>
              </div>
              <div>
                <img src={item.image} alt={item.title} className='rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-green-600 '/>
              </div>
            </div>
          </div>
          })
      }
     
    </Slider>
    <Category/>
    </div>
  )
}

export default Carousel