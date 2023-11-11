import React from 'react'
import {Form, Input, message} from 'antd';
import '../styles/Registerstyles.css';
import axios from 'axios'; 
import {Link,useNavigate} from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  // form handler
  const onfinishHandler = async (values) => {
    try{
      const res = await axios.post('/api/v1/user/register',values)
      if(res.data.success){
        message.success('Registered Successfully!')
        navigate('/login')
      }
      else{
        message.error(res.data.message)
      }
    }
    catch(error)
    {
    console.log("Error")
     console.log(error)
     message.error('Not working') 
    }
  }
  return (
    <>
    <div className='form-container'>
      <Form layout="vertical" onFinish={onfinishHandler} className='register-form'>
        <h3 className='text-center'>Register Form</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/login" className='m-2'>Already User Login here</Link>
        <button className='btn btn-primary' type="submit">Register</button>
      </Form>
    </div>
    </>
  )
}

export default Register