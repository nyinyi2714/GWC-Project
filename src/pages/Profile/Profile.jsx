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
    if(!user) navigate('/login')
  }, [])

  return(
    <section className='profile'>
      <h1>{`${user.first_name} ${user.last_name}`}</h1>
      <h2>Your Images</h2>
      <div className="grid-container">  
        <Card imageUrl="https://randomuser.me/api/portraits/women/68.jpg" title="Test" />
        <Card imageUrl="https://randomuser.me/api/portraits/women/68.jpg" title="Test" />
        <Card imageUrl="https://randomuser.me/api/portraits/women/68.jpg" title="Test" />
        <Card imageUrl="https://randomuser.me/api/portraits/women/68.jpg" title="Test" />
      </div>

      <CustomModal
        isOpen={true}
        closeModal={() => {}}
        styles={{maxWidth: '800px', margin: 'auto'}}
      >
        <h2>Hello This is a Custom Modal</h2>
      </CustomModal>
    </section>
  )
}