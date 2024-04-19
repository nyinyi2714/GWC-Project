import { useState, useEffect } from 'react'
import { HashLoader } from "react-spinners"
import { Button } from '../../components'
import './Homepage.css'

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(true)

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
