import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { useState } from 'react'

/**
 * Component for user registration.
 * @returns {JSX.Element} - The rendered Register component.
 */
export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()

  // State to manage form data
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    university: '',
    password: '',
  })

  /**
   * Updates the form data based on user input.
   * @param {Object} e - The event object.
   */
  const handleFormInput = (e) => {
    setFormData(prevStates => ({
      ...prevStates,
      [e.target.id]: e.target.value,
    }))
  }

  /**
   * Handles the registration process.
   * @param {Object} e - The event object.
   */
  const handleRegister = async (e) => {
    e.preventDefault()

    // Attempt to register the user using the provided data
    const success = await register(formData)

    // If registration is successful, redirect to homepage
    if(success) navigate('/')
    // Else, display an error message
    else {
      // TODO: Implement error handling
    }
  }

  return (
    <section className="register">
      <form onSubmit={handleRegister}>
        <h2>Create a New Account</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {/* First Name input */}
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input 
              value={formData.first_name} 
              onChange={handleFormInput} 
              type="text" 
              id="first_name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="John" 
              required 
            />
          </div>
          {/* Last Name input */}
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input 
              value={formData.last_name} 
              onChange={handleFormInput} 
              type="text" 
              id="last_name" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Doe" 
              required 
            />
          </div>
          {/* University input */}
          <div>
            <label htmlFor="university" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">University</label>
            <input 
              value={formData.university} 
              onChange={handleFormInput} 
              type="text" 
              id="university" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="University" 
              required 
            />
          </div>
          {/* Email input */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input 
              value={formData.email} 
              onChange={handleFormInput} 
              type="email" 
              id="email" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="john.doe@gmail.com" 
              required 
            />
          </div>
          {/* Password input */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input 
              value={formData.password} 
              onChange={handleFormInput} 
              type="password" 
              id="password" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="•••••••••" 
              required 
            />
          </div>
          {/* Confirm Password input */}
          <div>
            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input 
              type="password" 
              id="confirm_password" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="•••••••••" 
              required 
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>

        {/* Register Button */}
        <button 
          type="submit" 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        {/* Link to login page */}
        <p>Already have an account? <Link className="text-blue-700" to="/login">Login Here</Link></p>
      </form>
    </section>
  )
}
