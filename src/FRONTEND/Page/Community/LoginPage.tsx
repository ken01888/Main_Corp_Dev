import { Col, Form, Input, Layout, Row, ConfigProvider, Alert } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { useNavigate } from 'react-router-dom';
import 'antd/dist/reset.css';
import Menu from '../Components/Navigation/Main_Menu'
import { Fingerprint, At } from "@phosphor-icons/react";
import { motion } from 'framer-motion';









const LogIn: React.FC = () => {
  let [verified, setVerified] = React.useState(false);

  const navigate = useNavigate()
  document.title = 'Login'

  const onFinish = async (values: any) => {
    let newData = await fetch('/login_verification', {
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

        <Menu />

      </Header>

      <Layout className='homeScreenDesktop'>
        <Content >

          <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
            <Col >
              <h3>
                Login
              </h3>
            </Col>
          </Row>
          <Row justify={'center'} align={'middle'} gutter={[0, 16]} style={{ marginTop: '6rem' }} >
            <Col xs={{ span: 22 }} md={{ span: 8 }} >


              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                layout='vertical'
                size='middle'
                className='formStyles'
              >
                <span>
                  <motion.div className='logo'>
                    <div style={{ height: 'fit-content' }}>
                      <div className='logoBlue'></div>
                      <div className='logoBeige'></div>
                    </div>
                    <div style={{ height: 'fit-content' }}>
                      <div className='logoBeige'></div>
                      <div className='logoBlue'></div>
                    </div>
                  </motion.div>
                  <h3>Login</h3>
                </span>
                <Alert
                  description={
                    'To login, enter your username and password. Contact support, from the main menu , if you have trouble logging in. By proceeding, you agree to our Terms of Service and Privacy Policy and to receive communications from us.'
                  }
                  type="warning"
                  className='heroText'
                />
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: 'black',
                      lineWidth: 1,
                      fontFamily: 'Jost',
                      fontSize: 16,
                    },
                  }}
                >

                  <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Enter your email address to access your account' }]}
                  >
                    <Input style={{
                      border: '1px solid #4D4D4F',
                      borderRadius: '1.5px',
                      fontSize: 14
                    }} type='text' placeholder="Email Address" maxLength={45} showCount prefix={<At size={20} color="#849FD1" weight="fill" />} />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Enter your password to access your account' }]}

                  >
                    <Input.Password style={{
                      border: '1px solid #4D4D4F',
                      borderRadius: '1.5px',
                      fontSize: 14
                    }} placeholder="Password" maxLength={25} showCount prefix={<Fingerprint size={20} color="#849FD1" weight="fill" />} />

                  </Form.Item>

                  <Form.Item
                  >
                    <button type="submit" className='buttonFormBeige'>
                      Enter
                    </button>
                  </Form.Item>
                </ConfigProvider>
              </Form>

              {
                verified ?
                  <Alert
                    description={<p>We could not verify your email or password. Please try again. If you do not have an account, <span><a href='/support' className='anchorLinks'>Sign up here</a></span></p>}

                    type="error"
                  />
                  : ''
              }
            </Col>
          </Row>

        </Content>
      </Layout>






    </Layout>)
}

export default LogIn; 