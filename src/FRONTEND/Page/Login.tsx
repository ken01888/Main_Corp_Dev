import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button,Image } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import login_happy_person from './400ppi/login_happy_person'

import Main_Menu from './Components/Navigation/Main_Menu';
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

        <Main_Menu />
      </Header>
      <Layout className='homeScreenDesktop'>
        <Content >
          <Row justify={'space-around'} gutter={[0, 75]}>
            <Col xs={22} md={8}>
              <h2>Greetings! We are Kcm Inc, a corporation committed to enhancing the relationships between businesses stakeholders.</h2>
            </Col>
            <Col xs={22} md={8}>
              <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}>

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
                  logging in, message our <Link to='/support'>support</Link> center for assistance. </p>
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
              </motion.div>

            </Col>


          </Row>




        </Content>

      </Layout>

    </Layout>)
}

export default Login; 