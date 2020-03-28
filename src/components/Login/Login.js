import React, { useState } from 'react';
import Auth, { useAuth } from './use-auth';
import './Login.css'
import { useForm } from 'react-hook-form';

const Login = () => {

    const auth=Auth();
    const [returningUser,setReturningUser]=useState(false)
    console.log(auth);
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
            <div className="user-signup">


                {
                    returningUser ?
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
      
                        <input name="email" ref={register({ required: true })} placeholder="Email" />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span>This field is required</span>}

                        <input name="password" ref={register({ required: true })} placeholder="Password" />
                        {/* errors will return when field validation fails  */}
                        {errors.name && <span>This field is required</span>}
                        <input type="submit" />
                             <div className="option text-center">
                                <label  onClick={() => setReturningUser(false)}>Create a new Account</label>
                            </div>
                    </form>
                    :

            <form className="" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" ref={register({ required: true })} placeholder="Name" />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}

      <input name="email" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}

      <input name="password" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}

      <input name="confirmpassword" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.confirmpassword && <span>This field is required</span>}

      <input type="submit"/>

            <div className="option text-center">
                 <label  onClick={() => setReturningUser(true)}>Already Have an account</label>
            </div>
      
    </form>
}
            </div>
        </div>
    );
};

export default Login;