import './Profile.css'
import { useStateContext } from "../../StateContext"
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CustomModal } from '../../components'

export default function Profile() {
  // const { user } = useStateContext()
  const user = {
    first_name: 'John',
    last_name: 'Doe',

  }
  const navigate = useNavigate()

  useLayoutEffect(() => {
    if (!user) navigate('/login')
  }, [])

  return (
    <section className='profile'>
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
      <h2>Your Uploaded Notes</h2>
      <div className="grid-container">
        {/* Display Course Card Here */}
      </div>

      <CustomModal
        isOpen={true}
        closeModal={() => { }}
        styles={{ margin: 'auto' }}
      >
        <iframe src="https://hackathon1-today-19.s3.amazonaws.com/Lecture2.pdf" width="100%" height="600px" />

      </CustomModal>
    </section>
  )
}