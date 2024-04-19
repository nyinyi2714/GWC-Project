import { useState, useEffect } from 'react'
import { HashLoader } from "react-spinners"
import { Button } from '../../components'
import { useStateContext } from '../../StateContext'
import CourseCard from '../../components/CourseCard/CourseCard'
import useFetch from '../../hooks/useFetch'

import './Homepage.css'

export default function Homepage() {
  const { courses, setCourses } = useStateContext()
  const { fetchAllCourses } = useFetch()

  console.log(courses)

  return (
    <section className='homepage'>
      {
        courses.length <= 0 &&
        <div className="loading-spinner">
          <HashLoader color='#1A56DB' />
        </div>
      }

      {
        courses.length > 0 &&
        <div className='courses-section'>
          <h2 className='section-heading'>Courses</h2>
          <div className='course-card-container'>
            {courses.map(course => <CourseCard course={course} />)}
          </div>
        </div>
      }
    </section>
  )
}
