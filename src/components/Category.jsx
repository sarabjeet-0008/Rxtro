import React from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    // const {categoryOnlyData} = getData()
    const navigate = useNavigate();
    const {data} = getData()

    const getUniqueCategory = (data , property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]
        })

     newVal = [...new Set(newVal)]
     return newVal
    }

    const categoryOnlyData = getUniqueCategory(data, "category")

      return (
    <div className='bg-[#ffffff]'>
      <div className='max-w-7lx mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around px-4 py-7 mt-5'>
         {
            categoryOnlyData?.map((item, index) => {
                return <div key={index}>
                    <button onClick={()=> navigate(`/category/${item}`)}className='bg-gradient-to-r uppercase bg-green-700 text-white px-3 py-1 rounded-md shadow-black cursor-pointer hover:bg-green-800'>{item}</button>
                </div>
            })
         }
      </div>
    </div>
  )
}

export default Category