import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { loginUser, registerUser } from "lib/pocketbase"


export type LoginValues = {
  username ?:string
  password ?:string
}

export const Login = () => {

  const {register, handleSubmit, formState:{errors}} = useForm<LoginValues>()
  const navigate = useNavigate()
  const onSubmit = handleSubmit(async(data)=>{
    const result = await loginUser(data)
    if(!result)
      alert('something went wrong !')
    else
      navigate('/publish')
    // debugger
  })

  return (
    <div className="size-full flex flex-col">
      <div className="w-full h-screen bg-black ">

      </div>
      <div className="sticky bottom-0 h-auto w-full flex flex-col items-center justify-center bg-white">
        <form
          action=""
          onSubmit={onSubmit}
          className="flex w-full h-1/2 p-12 flex-col items-center justify-center gap-3"
        >

          <input
            type="text"
            id=""
            {...register("username")}
            className="w-full rounded-lg border-2 p-3"
            placeholder="@用户名"
            required
          />

          <input
            type="password"
            {...register("password",{required: true, minLength: 8})}
            id=""
            className="w-full rounded-lg border-2 p-3"
            placeholder="密码"
            required
          />
          {errors.password && <p className="text-red-600 font-semibold text-lg">密码最少用8个字母活着数字</p>}
          <div className="my-5 w-full">
            <input
              type="submit"
              className="w-full rounded-lg bg-[#031030] p-3 text-xl text-white"
              value={'Submit'}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
