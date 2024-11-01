import { useForm } from "react-hook-form"
import starwars from "../../assets/login.png"
import { loginSchema, LoginSchema } from "./login-validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginPayloadType } from "./login-types"
import { useNavigate } from "react-router-dom"

const Login = () => {

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<LoginSchema>({
    resolver:zodResolver(loginSchema)
  })

  const navigate = useNavigate()
  
  const onSubmit =( payload : LoginPayloadType) =>{
    console.log(payload)
    navigate("/dashboard")
  }




  return (
    <div className="w-full h-screen flex">
      <section className="w-1/3 h-full bg-[#031434] flex justify-center items-center">
        <div className="p-14">
          <img src={starwars} alt="Star Wars logo" className="h-48 object-contain" />
        </div>
      </section>

      <section className="w-2/3 h-full flex justify-center items-center">
        <div className="border w-[40rem] h-[45rem] rounded-xl">
          <div className=" p-20">
              <div className="pb-10">
                <h2 className="font-Ubuntu text-2xl font-medium text-stone-600 pb-2">Login</h2>
                <p className="font-Ubuntu text-stone-500">Kindly enter your details to login</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative">
              <input 
                type="text" 
                id="email"
                className="border h-16 w-full px-4 focus:outline-none focus:border-[#0a74dc] focus:border-2 peer" 
                placeholder=" "
                {...register("email")} 
              />
              <label 
                htmlFor="email"
                className="absolute text-gray-500 duration-150 transform bg-white px-1 -translate-y-1/2 left-3
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0a74dc]
                top-0 text-sm"
              >
                Email Address
              </label>
            </div>
            <p className="text-red-500 font-Ubuntu text-xs">{errors?.email?.message}</p>

            <div className="relative">
              <input 
                type="password" 
                id="password"
                className="border h-16 w-full px-4 focus:outline-none focus:border-[#0a74dc] focus:border-2 peer" 
                placeholder=" "
                {...register("password")} 
              />
              <label 
                htmlFor="password"
                className="absolute text-gray-500 duration-150 transform bg-white px-1 -translate-y-1/2 left-3
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base
                peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#0a74dc]
                top-0 text-sm"
              >
                Password
              </label>
            </div>
            <p className="text-red-500 font-Ubuntu text-xs">{errors?.password?.message}</p>
          </div>

              
              <div className="flex flex-col items-center p-10 gap-5">
                <button className="bg-[#0a74dc] text-white p-4 cursor-pointer font-Ubuntu w-[357px]" onClick={handleSubmit(onSubmit)}>Login</button>
                <h3 className="font-Ubuntu text-[#0a74dc] cursor-pointer">Forgot your password?</h3>
              </div>
              <div className="flex justify-center items-center mt-20 cursor-pointer">
                <p className="font-ubuntu text-stone-600"><span className="underline font-medium">Privacy Policy</span> and <span className="underline font-medium">Terms of services</span></p>
              </div>
           </div>
        </div>
      </section>
    </div>
  )
}

export default Login