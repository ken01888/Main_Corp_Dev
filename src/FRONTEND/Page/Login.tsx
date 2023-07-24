import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useHref, useNavigate, useSearchParams } from 'react-router-dom';

import { Menu_SignUp } from './Components/Menus.tsx/Menu_Signup';
const Login: React.FC = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [verified, setVerified] = React.useState(false)

  const navigate = useNavigate()


  const onFinish = async (values: any) => {
    let newData = await fetch('http://localhost:8000/login_verification', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify(values)
    })

    if (newData.status == 200) {
      const principleData = await newData.json()
      window.localStorage.setItem('user', JSON.stringify(principleData))
      navigate('/principle/account/') 
    } else if (newData.status == 401) {
      setVerified(!verified)
    }
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

            <Col xs={22} md={8} className='form_login'>
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
                    <Input type='text' />
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
                    <Button className='buttonBlack' htmlType="submit">
                      Verify
                    </Button>
                  </Form.Item>
                </ConfigProvider>
              </Form>

              {
                verified ? <Alert
                  message="We were unable to verify your email or password. Please try entering your credentials again."
                  type="error"
                  closeIcon
                /> : ''
              }

            </Col>


          </Row>




        </Content>

      </Layout>

    </Layout>)
}

export default Login; 