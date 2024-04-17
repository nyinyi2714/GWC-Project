import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../hooks/useAuth'

export default function Login() {

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const success = await login(email, password)

    // if login is successful, redirect to homepage
    if(success) navigate('/')
    // Else, display an error message
    else {
      // TODO
    }
  }

  return (
    <section className="login">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@gmail.com" required />
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
        <p>Don't have an account? <Link class="text-blue-700" to="/register">Register Here</Link></p>
      </form>
    </section>
  )
}