import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let signInError;


    if(loading || googleLoading){
        return <div><p>Loading.....</p></div>
    }

    if(error || googleError){
        signInError=<p>{error?.message || googleError?.message}</p>
    }

    if(user || googleUser){
        
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl'>Login Please</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">What is your email?</span>
            
        </label>
        <input {...register("email", { required: true })} type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
        </div>
            <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">Enter your password</span>
            
        </label>
        <input {...register("password", { required: true })} type="text" placeholder="Password" class="input input-bordered w-full max-w-xs" />
       
        </div>
        {signInError}
      <input  className='btn bg-slate-700 rounded-md shadow-xl mt-5' type="submit" value="login" />
      
    </form>
    <div className='divider'></div>
            <button onClick={()=> signInWithGoogle()}  className='btn bg-slate-700' type="submit">Continue with Google</button>
        </div>
    );
};

export default Login;