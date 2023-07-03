import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select,Image } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { Menu_Home } from './Components/Menu';
import { motion } from 'framer-motion';
import { Copyright } from '@phosphor-icons/react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import email from './400ppi/email.png'
import { Link } from 'react-router-dom';



const Login: React.FC = () => {
  const [showForm, setForm] = React.useState(true)


  const onFinish = async (values: any) => {
    let newData = await fetch('http://localhost:80/testing_backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    setForm(false)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };




  return (
    <Layout className='layout'>
      <Header className='header'>

        <Menu_Home />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Row justify={'space-around'} gutter={[0, 75]}>
            <Col xs={22} md={8}>
              <h1>Login</h1>
              <Divider className='dividerHeader'></Divider>              
                 <Form
                      name="basic"
                      style={{ maxWidth: 600 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                      layout='vertical'
                      size='large'
                      className='p_services'
                    >
                      <Form.Item

                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Input the email address you used to register the account!' }]}
                      >
                        <Input  type='email' />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Input your password!' }]}
                      >
                        <Input.Password type='password' visibilityToggle={true} />
                      </Form.Item>

                     

                     

                     
                     
                      <Form.Item
                      className='formLoginButtons'
                      >
                        <button className='buttonBlack' type="submit">
                          Click here to contact our team!
                        </button>
                        <Link to='/'>Reset Password</Link>
                      </Form.Item>
                    </Form>

            </Col>


          </Row>




        </Content>

      </Layout>
      <Footer className='footer_public'>
        <Row>
          <Col xs={24}>
            <p><Copyright size={16} weight="bold" />Kcm Inc</p>
          </Col>
        </Row>
      </Footer>
    </Layout>)
}

export default Login; 