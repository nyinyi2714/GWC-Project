import { useState, useEffect } from 'react'
import { HashLoader } from "react-spinners"
import { Button, FileInput } from '../../components'
import './Homepage.css'

export default function Homepage() {

  return (
    <section className='homepage'>
      <Button>Hello</Button>
      <FileInput />
      <HashLoader color='#1A56DB' />
    </section>
  )
}
