import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleCategoryChange, handleBrandChange}) => {
    const {categoryOnlyData, brandOnlyData,} = getData()
  return (

    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max shadow-2xl hidden md:block'>
      <input type='text' 
      value={search}
      placeholder='search..' 
      onChange={(e)=>setSearch(e.target.value)}
      className='bg-white p-2 rounded-md border-grey-400 border-2'/>

      {/* category only data */}
      <h1 className='mt-5 font-semibold text-xl'>category</h1>
      <div className='flex flex-col gap-2 mt-3'>
        {
           categoryOnlyData?.map((item,index) => {
             return <div key={index} className='flex gap-2'>
                <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange}/>
                <button className='cursor-pointer uppercase'>{item}</button>
             </div>
           })
        }
      </div>

      {/* brand only data */}

       <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
        <select name="" id="" className='bg-white w-full p-2 border-gray-200 border-2 rounded-md' value={brand} onChange={handleBrandChange}>
           {
            brandOnlyData?.map((item, index) => {
                return <option key={index} value={item}>{item.toUpperCase()}</option>
            })
           }
        </select>

        {/* price selector */}

        <h1 className='mt-5 font-semibold text-xl mb-3'>Price Range</h1>
        <div className='flex flex-col gap-2'>
            <label htmlFor=''>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <input type='range' min="0" max="5000"name='' id='' value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])}/>
        </div>
       <button className='bg-green-700 text-white rounded-md px-3 py-1 mt-5 cursor-pointer hover:bg-green-800'
        onClick={() =>{setSearch(''); setCategory('All'); setBrand('All'); setPriceRange([0,5000])}}>Reset Filter</button>
     </div>
  )
}

export default FilterSection