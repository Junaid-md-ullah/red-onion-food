import React, { useState } from 'react';
import Auth, { useAuth } from './use-auth';
import {Link} from 'react-router-dom';
import './Login.css'
import { useForm } from 'react-hook-form';

const Login = () => {

    const auth=Auth();
    const [returningUser,setReturningUser]=useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        if(returningUser){
            if(data.email && data.password){
                auth.signIn(data.email, data.password);
            }
        }
        else{
            if(data.name && data.email && data.password && data.confirmpassword){
                auth.signUp(data.email,data.confirmpassword,data.name);
            }
        }
    }
    console.log(watch('example'))

    return (
        <div>
            <div className="user-signup d-flex align-items-center">

                <div className="container align-items-center">
                    <div className="sign-up-logo">
                      <Link to="/"><img src="https://i.ibb.co/g7hNrMG/logo2.png" alt=""/></Link>  
                    </div>  
                {
                    returningUser ?

                        <form className="signin d-flex align-items-center justify-content-center flex-column form-group " onSubmit={handleSubmit(onSubmit)}>
                            
                            <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span>This field is required</span>}

                            <input className="form-control" name="password" ref={register({ required: true })} placeholder="Password" />
                            {/* errors will return when field validation fails  */}
                            {errors.name && <span>This field is required</span>}
                            <button  type="submit" className="btn btn-danger signin-button">Sign In</button>
                                <div className="option text-center">
                                    <label  onClick={() => setReturningUser(false)}>Create a new Account</label>
                                </div>
                        </form>
                            :

                <form className="signup d-flex align-items-center justify-content-center flex-column form-group" onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control" name="name" ref={register({ required: true })} placeholder="Name" />
                {/* errors will return when field validation fails  */}
                {errors.name && <span>This field is required</span>}

                <input className="form-control" name="email" ref={register({ required: true })} placeholder="Email" />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <input className="form-control" name="password" ref={register({ required: true })} placeholder="Password" />
                {/* errors will return when field validation fails  */}
                {errors.password && <span>This field is required</span>}

                <input className="form-control" name="confirmpassword" ref={register({ required: true })} placeholder="Confirm Password" />
                {/* errors will return when field validation fails  */}
                {errors.confirmpassword && <span>This field is required</span>}

                <button  type="submit" className="btn btn-danger signin-button">Sign Up</button>

                <div className="option text-center">
                <label  onClick={() => setReturningUser(true)}>Already Have an account</label>
                </div>

                </form>
                
        }
                </div>
            </div>
        </div>
    );
};

export default Login;