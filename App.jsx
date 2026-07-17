import { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [token, setToken] = useState(
    localStorage.getItem('token') || null
  )

  const [page, setPage] = useState('login')

  if (token)
  {
    return <Dashboard token={token} 
    onLogout={
                () => {
                localStorage.removeItem('token')
                setToken(null)
                  }
       }
   />
  }

  return (
    <>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
        {page === 'login' ? (
          <>
           <Login setToken={setToken} />
           <p>Don't have an account? {''}<button onClick={() => setPage('register')}>Register</button></p>
          </>
        ) : (
          <>
           <Register setToken={setToken} />
           <p>Already have an account? {''}<button onClick={() => setPage('login')}>Login</button></p>
          </>
        )}
      </div>
    </>
  )
}

export default App
