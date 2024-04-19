import { useState, useEffect } from 'react'
import { HashLoader } from "react-spinners"
import { Button } from '../../components'
import { toast } from 'react-toastify'
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
        'Homepage'
      }

    </section>
  )
}
