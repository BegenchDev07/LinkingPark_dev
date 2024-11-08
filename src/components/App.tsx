import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Auth } from './Auth'
import { Home } from 'pages/Home'
import { Publish } from 'pages/Publish'
import { Contact } from 'pages/Contact'
import { Profile } from 'pages/Profile'
import { Register } from 'pages/Register'
import { Login } from 'pages/Login'
import ProtectedLayout from './ProtectedLayout'

const baseApp = () => {
  return (
    <div className="container mx-auto h-screen w-full text-center">
      <div className="flex h-full w-auto flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold">Welcome to Linking Park</h1>
        <Link
          to={'/login'}
          className="rounded-lg bg-blue-600 px-3 py-2 text-3xl font-bold text-white"
        >
          Join Us
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={baseApp()} />
        <Route element={<ProtectedLayout/>}>
          <Route path="/profile/*" element={<Profile />} />
          <Route path='/publish' element={<Publish />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
