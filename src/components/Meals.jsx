import React,{useState,useEffect} from 'react'

export default function Meals() {

  const[availableMeals,setAvailableMeals]=useState([])

  useEffect(()=>{
    async function fetchMeals(){
        const response = await fetch("http://localhost:3000/meals")
        const resData = await response.json()
        if(!response.ok){
            return
        }
        setAvailableMeals(resData)
      }
      fetchMeals()
  },[])
    


  return (
    <ul id="meals">
        {availableMeals.map((item)=>(
            <li key={item.id}>
                {item.name}
            </li>
        ))}

    </ul>
  )
}
