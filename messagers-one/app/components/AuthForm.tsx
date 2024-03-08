'use client';

import Input from "./inputs/Input";
import Button from "./Button";
import { useCallback ,useEffect,useState } from "react";
import { FieldValue , SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";




type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status == 'authenticated'){
            router.push('/users');
        }
    }, [session?.status, router]);
    
    const toggleVariant = useCallback(() =>{
        if (variant == 'LOGIN') {
            setVariant('REGISTER');
          }else {
            setVariant('LOGIN');
        }
    }, [variant]);
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }

    } = useForm<FieldValue>({
        defaultValues:{
            name:'',
            email:'',
            password: ''
        }
    });

    const onSubmit: SubmitHandler <FieldValue> = (data) => {
        setIsLoading(true);

        if (variant == 'REGISTER'){
            axios.post('@/api/register', data)
            .then(() => signIn('credentials', data))
            .catch(() => toast.error('something went wrong!'))
            .finally(() => setIsLoading(false))
        }

        if (variant == 'LOGIN'){
            signIn('credentails', {
                ...data,
                redirect: false
            })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Invalid credentials');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in!');
                    router.push('/users');
                }
            })
            .finally(() => setIsLoading(false));
        }


    }

    const socialAction = (action: String) => {
        setIsLoading(true);
        signIn(action, {redirect: false})
        .then((callback) => {
            if (callback?.error) {
                toast.error('Invalid Credentials');
            }

            if (callback?.ok && !callback?.error){
                toast.success('Logged in!')
            }
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md
        ">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10
            ">
                <form 
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
                >
                    {variant == "REGISTER" && (                    
                    <Input 
                    id="name" 
                    label="Name" 
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                    />
                    )}

                    <Input 
                    id="email" 
                    label="Email address" 
                    type="email"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                    />

                    <Input 
                    id="email" 
                    label="Password" 
                    type="password"
                    register={register}
                    errors={errors}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullWidth
                            typr="submit"
                        >
                            {variant == 'LOGIN' ? 'Sign in' : ' Registar'}
                        </Button>
                    </div>
                </form>   
                    
                <div className="mt-6">
                    <div className="relatve">
                        <div className="w-full border-t border-gray-300" />
                        <div className="relative flex justify-center text-sm">
                                <span className="
                                    or-continue-with
                                    bg-white 
                                    px-2 
                                    text-gray-500">
                                        Or continue with
                                </span>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-2">
                            <AuthSocialButton 
                                icon={BsGithub}
                                onClick={() => socialAction('github') }
                            />
                            <AuthSocialButton 
                                icon={BsGoogle}
                                onClick={() => socialAction('google') }
                            />
                            <AuthSocialButton 
                                icon={BsFacebook}
                                onClick={() => socialAction('facdbook') }
                            />
                        </div>

                        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                            <div>
                                {variant == 'LOGIN' ? 'New to Messenger?' : 'Already have an account?' }
                            </div>
                            <div onClick={toggleVariant}
                                className="underline cursor-pointer"
                            >
                                {variant == 'LOGIN' ? 'Create an account' : 'Login'}
                            </div>
                        </div> 
                </div> 

            </div>
        </div>
    );
}

export default AuthForm;