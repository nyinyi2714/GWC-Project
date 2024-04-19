import { useState, useEffect } from 'react'
import { HashLoader } from "react-spinners"
import { Button } from '../../components'
import { toast } from 'react-toastify'
import CourseCard from '../../components/CourseCard/CourseCard'
import './Homepage.css'

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   toast.success("Apple")
  // }, [])

  return (
    <section className='homepage'>
      {
        isLoading &&
        <div className="loading-spinner">
          <HashLoader color='#1A56DB' />
        </div>
      }

      {
        !isLoading &&
        <div className='courses-section'>
          <h2 className='section-heading'>Courses</h2>
          <div className='course-card-container'>

            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
            <CourseCard title={"COMP 482: Algorithm design and analysis"}
              description={"The analysis of algorithms, in terms of time and space complexity for best/average/worst case execution using asymptotic notation."}
              numNotes={12}
            />
          </div>
        </div>
      }

    </section>
  )
}
