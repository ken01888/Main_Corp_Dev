import { Button, Checkbox, Col, Divider, Form, Input, Layout, Row, Select, Image, ConfigProvider, Space } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { Menu_Home } from './Components/Menus.tsx/Menu';
import { motion } from 'framer-motion';
import { Copyright } from '@phosphor-icons/react';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';
import { Menu_Login } from './Components/Menus.tsx/Menu_Login';
import { Menu_SignUp } from './Components/Menus.tsx/Menu_Signup';



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

        <Menu_SignUp />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Row justify={'space-around'} gutter={[0, 75]}>

            <Col xs={22} md={10} className='form_login'>
              <h2 style={{ display: 'flex' }} className='footer_h1'>
                <motion.div className='logo'>

                  <div style={{ height: 'fit-content' }}>
                    <div className='logoBlue'></div>
                    <div className='logoBeige'></div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <div className='logoBeige'></div>
                    <div className='logoBlue'></div>

                  </div>
                </motion.div>Kcm Inc
              </h2>
              <h1>Login</h1>
              <p>Please enter your username and password that you
                used to create your account. If you are having difficulties
                logging in, message our support center for assistance. </p>
              <Divider className='dividerHeader'></Divider>
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="one"
                layout='horizontal'
                size='large'

              >
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: 'black',
                      colorPrimaryHover: '#fafafa',
                      lineWidth: 2,
                      fontFamily: 'Jost',
                      fontSize: 14,
                    },
                  }}
                >
                  <Form.Item

                    label="Enter your email"
                    name="email"
                    rules={[{ required: true, message: 'Enter your email address to access your account' }]}
                  >
                    <Input type='text'/>
                  </Form.Item>

                  <Form.Item
                    label='Enter your password'
                    name="password"
                    rules={[{ required: true, message: 'Enter your password to access your account' }]}
                  >
                    <Input type='text' />
                  </Form.Item>




                  <Form.Item
                  >
                    <button className='buttonBlack' type="submit">
                      Verify
                    </button>
                  </Form.Item>
                </ConfigProvider>
              </Form>

              
            </Col>


          </Row>




        </Content>

      </Layout>

    </Layout>)
}

export default Login; 