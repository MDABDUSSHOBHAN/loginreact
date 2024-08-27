import { useState } from 'react';
// import companyLogo from '../../assets/ali_ceramic_industry_ltd_logo.png';
import { useForm} from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
// import shape1 from '../../assets/login page shape/Vector 1.png';
// import ellipse from '../../assets/login page shape/Ellipse 1.svg';
import { FaEye } from 'react-icons/fa';

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const loading = false;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-white border-none p-2 flex flex-col gap-20 mt-20 items-center">
            {/* <img
                className="w-[200px] md:w-[300px]"
                src={companyLogo}
                alt="logo"
            /> */}

            <div className="relative md:w-1/3 bg-white border rounded-lg shadow-2xl">
                {/* <img
                    className="absolute md:-bottom-7 md:-right-7 -right-1 -bottom-1"
                    src={shape1} alt="" 
                /> */}

                {/* <img
                    className="absolute -top-14 md:-right-16 right-0 w-1/3 select-none"
                    src={ellipse} alt="" 
                /> */}
                {/* <img
                    className="absolute -bottom-14 md:-left-16 left-0 w-1/3 select-none rotate-180"
                    src={ellipse} alt="" 
                /> */}

                {/* Login Form  */}
                <form className="space-y-4 p-16 font-albert relative z-50" onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-xl mb-8 font-semibold select-none">Enter your User ID and Password to login to the Portal</p>

                    <div className="relative z-0 w-full mb-5">
                        <label className="block text-sm select-none">
                            Email
                        </label>
                        <input
                            type="email"
                            id="floating_email"
                            defaultValue={"iq@iq-bd.com"}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address'
                                }
                            })}
                            className="border w-full border-black border-opacity-20 rounded-sm shadow-lg bg-[#C78D2C14] px-4 py-1 placeholder:text-sm focus:outline-gray-500"
                            placeholder="username"
                            required
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div className="relative z-0 w-full mb-5">
                        <label className="block text-sm select-none">
                            Password
                        </label>

                        <input
                            type={passShow ? "text" : "password"}
                            id="floating_password"
                            defaultValue={"Password1234"}
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters'
                                },
                                validate: (value) => {
                                    const hasUpperCase = /[A-Z]/.test(value);
                                    const hasLowerCase = /[a-z]/.test(value);
                                    const hasDigit = /[0-9]/.test(value);

                                    if (!hasUpperCase) {
                                        return 'Password must contain at least one uppercase letter';
                                    }

                                    if (!hasLowerCase) {
                                        return 'Password must contain at least one lowercase letter';
                                    }

                                    if (!hasDigit) {
                                        return 'Password must contain at least one digit';
                                    }

                                    return hasUpperCase && hasLowerCase && hasDigit;
                                }
                            })}
                            className="border w-full border-black border-opacity-20 rounded-sm shadow-lg bg-[#C78D2C14] px-4 py-1 placeholder:text-sm focus:outline-gray-500 select-none"
                            placeholder="password"
                            required 
                        />

                        <label className="absolute right-4 top-2/3 transform -translate-y-1/2 cursor-pointer">
                            <FaEye onClick={() => setPassShow(!passShow)} />
                        </label>
                    </div>

                    <p className="text-sm my-3 cursor-pointer w-fit ms-auto select-none">Forgot Password</p>

                    <div>
                        {errors.email && <p>{errors.email.message}</p>}
                        {errors.password && <p>{errors.password.message}</p>}

                        <button type="submit" disabled={loading} className="w-full bg-[#2A5158] text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 font-bold mt-10 select-none">
                            <span className={`${loading ? "hidden" : "block"}`}>Login</span>
                            <ImSpinner9 className={`text-[25px] mx-auto animate-spin ${loading ? "block" : "hidden"}`} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
