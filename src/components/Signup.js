import React from 'react'
import {useFormik} from 'formik';
import validationSchema from './validations';


function Signup() {

    const {handleSubmit,values,handleChange, errors, touched, handleBlur} = useFormik({
        initialValues: {
          email: 'seren@gmail.com',
          password:'',
          passwordConfirm:'',
          
        },
        onSubmit: values => {
          console.log(values);
        },
        validationSchema,
      });

//console.log(errors);

    return (
    <div>
    <h1>Sign Up</h1>
  
    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input name="email"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    />

  { errors.email && touched.email && (<div className='error'>{errors.email}</div>)}
    <br />
    <br />

    <label>Password</label>
    <input
    name="password"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
    
    />

    { errors.password && touched.password && (<div className='error'>{errors.password}</div>)}

 <br /> 
 <br />


    <label >Password Confirmation</label>
    <input 
    name="passwordConfirm"
    value={values.passwordConfirm}
    onChange={handleChange}
    onBlur={handleBlur}
    />

  { errors.passwordConfirm && touched.passwordConfirm && (<div className='error'>{errors.passwordConfirm}</div>)}


    <br />
    <br />


    <button type="submit">Submit</button>
    <br /> 
     <br />

  {JSON.stringify(values)}
    </form>
    </div>
  )
}

export default Signup;