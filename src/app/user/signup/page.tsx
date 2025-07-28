"use client"

import { useForm } from "react-hook-form";
import { Eye, EyeOff, ArrowLeft, House } from 'lucide-react';
import { useState } from "react";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authAPI } from '@/services/authAPI';

export default function SignUp() {
    const schema = Joi.object({
        email: Joi.string().required().pattern(new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"))
            .messages({
                "string.empty": "Please enter your email",
                "string.pattern.base": "Entered value does not match the email format",
            }),
        password: Joi.string()
            .max(128)
            .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,128}$")).required()
            .messages({
                "string.pattern.base": "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
                "string.empty": "Please enter your password!",
            })
        ,
        confirmPassword: Joi.string()
            .valid(Joi.ref('password')).required()
            .messages({
                "any.only": "Password must be between 8 and 128 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.",
                "string.empty": "Please enter your confirm password!",
                "string.pattern.base": "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
            })
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const router = useRouter();

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        setError('');
        setSuccess('');
        
        try {
            const result = await authAPI.signup(data.email, data.password);
            
            if (result.error) {
                setError(result.error);
            } else {
                setSuccess("Account created successfully! Redirecting to sign in...");
                setTimeout(() => {
                    router.push("/user/signin");
                }, 2000);
            }
        } catch (error) {
            console.error("Error during signup:", error);
            setError("An error occurred during signup. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-0 items-stretch justify-start h-full w-full min-h-screen">
            <div className="w-full flex-1 min-h-[calc(100vh-64px)]">
                <div className="my-0 mx-auto max-w-full h-screen relative-p-0">
                    <Image
                        src="/bgLogin.svg"
                        alt="Signup Background"
                        layout="fill"
                        objectFit="cover"
                        className="gap-1 flex-row flex-wrap justify-start items-center absolute-h-full w-full overflow-hidden"
                    />

                    <div className="flex flex-row flex-wrap justify-start grow-0 shrink-0 basis-full min-w-0 box-border gap-y-4 w-full h-full">
                        <div className="xl:max-w-1/2 md:max-w-full max-w-full xl:flex-[0_0_50%] md:flex-[0_0_100%] flex-[0_0_100%] block relative box-border my-0 p-0">
                            <div className="flex gap-1 flex-row flext-wrap justify-center items-center h-full w-full">
                                <Image
                                    src="/branding-solscan-logo-dark.svg"
                                    alt="Solscan Logo"
                                    width={350}
                                    height={56}
                                />
                            </div>
                        </div>

                        <div className="xl:max-w-1/2 md:max-w-full max-w-full xl:flex-[0_0_50%] md:flex-[0_0_100%] flex-[0_0_100%] block relative box-border my-0 p-0">
                            <div className="flex flex-col gap-1 items-stretch justify-start bg-neutral-100 w-full h-full py-4 px-[15px] lg:px-[70px] xl:px-[100px] rounded-tl-none xl:rounded-tl-[64px] rounded-bl-none xl:rounded-bl-[64px]">
                                <div className="flex flex-row flex-wrap gap-1 justify-between items-center">
                                    <div className="flex flex-row flex-wrap gap-1 items-center justify-start cursor-pointer" onClick={() => window.history.back()}>
                                        <ArrowLeft className="cursor-pointer text-xs text-blue-500 hover:text-blue-600 transiton duration-200 w-4 h-4" />
                                        <h1 className="text-sm font-normal not-italic text-blue-500 hover:text-blue-600 transition duration-200 leading-6">Back</h1>
                                    </div>
                                    <a href="/">
                                        <div className="flex flex-row flex-wrap gap-1 items-center justify-start cursor-pointer">
                                            <House className="cursor-pointer text-xs text-blue-500 hover:text-blue-600 transiton duration-200 w-4 h-4" />
                                            <h1 className="text-sm font-normal not-italic text-blue-500 hover:text-blue-600 transition duration-200 leading-6">Home</h1>
                                        </div>
                                    </a>
                                </div>
                                <div className="flex flex-col gap-6 items-center justify-start mt-50">
                                    <div className="flex flex-col gap-1 items-center justify-start">
                                        <div className="flex items-center flex-col justify-start gap-1">
                                            <h1 className="text-lg font-bold text-neutral-800 not-italic leading-7">Create new account</h1>
                                            <p className="text-sm text-neutral-700 leading-6">Easily track accounts, transactions, and more</p>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                                    <div className="flex flex-col gap-4 items-stretch justify-start">
                                        {error && (
                                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                                {error}
                                            </div>
                                        )}
                                        
                                        {success && (
                                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                                                {success}
                                            </div>
                                        )}
                                        
                                        <div className="grid w-full gap-1.5 items-center">
                                            <label className="not-italic text-neutral-700 font-medium text-sm">
                                                Email *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...register("email")}
                                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                                autoComplete="off"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
                                            )}
                                        </div>

                                        <div className="grid w-full gap-1.5 items-center">
                                            <label className="block text-sm font-medium">
                                                Password *
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? "text" : "password"}
                                                    id="password"
                                                    {...register("password")}
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 relative"
                                                    autoComplete="off"
                                                />
                                                <span className="absolute top-0 right-2 h-full flex items-center text-md">
                                                    <div className="text-neutral-500 cursor-pointer">{showPassword ? (<EyeOff onClick={togglePasswordVisibility} />) : (
                                                        <Eye onClick={togglePasswordVisibility} />)}</div>
                                                </span>

                                            </div>
                                                {errors.password && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.password.message as string}</p>
                                                )}

                                        </div>

                                        <div className="grid w-full gap-1.5 items-center flex">
                                            <label className="block text-sm font-medium">
                                                Confirm Password
                                            </label>
                                            {/* <span className="text-red-500">*</span> */}
                                            <div className="relative">
                                                <input
                                                    id="confirmPassword"
                                                    type={showPassword ? "text" : "password"}
                                                    {...register("confirmPassword")}
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                                                    autoComplete="off"
                                                />
                                                <span className="absolute top-0 right-2 h-full flex items-center text-md">
                                                    <div className="text-neutral-500 cursor-pointer">{showPassword ? (<EyeOff onClick={togglePasswordVisibility} />) : (
                                                        <Eye onClick={togglePasswordVisibility} />)}</div>
                                                </span>


                                            </div>
                                                {errors.confirmPassword && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message as string}</p>
                                                )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="max-w-full ml-auto rounded-md bg-fuchsia-600 px-6 py-2 text-white font-semibold text-sm hover:bg-fuchsia-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            {isLoading ? 'Creating account...' : 'Register'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}