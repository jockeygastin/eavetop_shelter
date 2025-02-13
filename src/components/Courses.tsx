'use client'
import { processApiRequest } from '@/lib/api'
import React, { useEffect, useState } from 'react'

const Courses = () => {
    const [data, setData] = useState([])


    async function fetchCourses(){
        const res = await processApiRequest({
            method: "get",
            url: "/courses",
        })

        setData(res.data)
    }

    useEffect(() =>{
        fetchCourses()
    }, [])

  return (
    <>
{
    data.map((course: any, key: number) => (
        <div key={key}>
            <h1>{course.name}</h1>
            <p>{course.description}</p>
            <p>{course.price}</p>
            <br />
        </div>
    ))
}
    </>
  )
}

export default Courses