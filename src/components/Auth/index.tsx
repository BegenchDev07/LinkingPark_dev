import { useState } from 'react'
import { Register } from 'pages/Register'
import { Login } from 'pages/Login'

export const Auth = () => {
  const [authState, setAuthState] = useState(0)

  if (authState === 0)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-zinc-900">
        <div className="h-1/2 w-full"></div>
        <div className="flex h-1/2 w-full flex-col items-center justify-start rounded-t-2xl bg-white">
          <div className="my-10 h-full">
            <h1 className="text-5xl font-bold">登录</h1>
          </div>
          <Login />
          <div className="flex w-full items-center justify-center bg-white py-2">
            <button
              onClick={() => {
                setAuthState(1)
              }}
              className="text-blue-500 underline"
            >
              注册
            </button>
          </div>
        </div>
      </div>
    )
  else
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-zinc-900">
        <div className="h-1/2 w-full"></div>
        <div className="flex h-1/2 w-full flex-col items-center justify-center rounded-t-2xl bg-white">
          <div className="my-10 h-full">
            <h1 className="text-5xl font-bold">注册</h1>
          </div>
          <Register />
          <div className="flex w-full items-center justify-center bg-white py-2">
            <button
              onClick={() => {
                setAuthState(0)
              }}
              className="text-blue-500 underline"
            >
              登录
            </button>
          </div>
        </div>
      </div>
    )
}
