import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import bookingsAPI from '../../services/bookings.service';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    username: yup.string().required('Mật khẩu không được để trống'),
    password: yup.string().required('Tên đăng nhập không được để trống'),
  }).required();

function Login() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState,
  } = useForm<any>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { errors, isDirty }: any = formState;
  const login = async (data: any) => {
    console.log(data)
    try {
     const res =  await bookingsAPI.signIn({
        username: data.username,
        password: data.password,
      })
   if(res?.status === "success") {
    localStorage.setItem('username', JSON.stringify(res.data.user.username));
    localStorage.setItem('auth', JSON.stringify(res.data.auth));
		localStorage.setItem('userIds', JSON.stringify(res.data.user.id));
    navigate('/')
   } else {
    alert(res?.message)
   }

    } catch (error) {
      console.log(errors)
    }
  }



  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign in</h1>
              <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    {...register("username")}
                    placeholder="UserName"
                  />
                  {errors?.username && (
                    <p className="text-sm text-red-700 mt-1 ml-1 m-auto">
                      {errors?.username?.message}
                    </p>
                  )}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-700 mt-1 ml-1 m-auto">
                      {errors?.password?.message}
                    </p>
                  )}
                  <button type='submit' onClick={handleSubmit(login)} className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="">Sign Up</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  'url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg")'
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
