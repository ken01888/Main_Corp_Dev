import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button, Space, Tag, Image } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { CheckOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { TwitterLogo, MetaLogo, LinkedinLogo, Heartbeat, ChartBar, Leaf, Wall, CursorClick, HandPointing, Cursor, Wrench, Package, Toolbox, CoinVertical } from "@phosphor-icons/react";









const LogIn: React.FC = () => {
  let [verified, setVerified] = React.useState(false);



  const navigate = useNavigate()
  document.title = 'Kcm Inc Stakeholder Intelligence Corporation'

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

        <Main_Menu />
      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Space wrap size={[0, 250]}>

            <Row justify={'space-around'} gutter={[0, 75]} >
          
            <Col xs={22} md={12}>
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
                <motion.div className='form_login'>


                  <h1>Login</h1>

                  <p>To access your account, please enter the username and password you used during registration.
                    If you experience any difficulties logging in, please get in touch with our <Link to='/support'><Tag className='activeTag'>support</Tag></Link> center for assistance.
                  </p>
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
                   
                      <Form.Item

                        label="Enter your email"
                        name="email"
                        rules={[{ required: true, message: 'Enter your email address to access your account' }]}
                      >
                        <Input type='text' maxLength={45} showCount />

                      </Form.Item>

                      <Form.Item
                        label='Enter your password'
                        name="password"
                        rules={[{ required: true, message: 'Enter your password to access your account' }]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Alert
                        message="Notice"
                        description="By proceeding, you agree to our terms of service and privacy policy and consent to receiving communications from the network. "
                        type="warning"
                        className='alert'
                      />


                      <Form.Item
                      >
                        <Button className='buttonBlack' htmlType="submit">
                          Enter
                        </Button>
                      </Form.Item>
                  </Form>


                  {
                    verified ? <Alert
                      message={<span>We could not verify your email or password. Please try again. If you do not have an account,<a href='/signup'>register here</a>.</span>}
                      type="error"
                      closeIcon
                    /> : ''
                  }
                </motion.div>

              </Col>



            </Row>


            
            

          
            


           




            



          </Space>







        </Content>
      </Layout>

   


    </Layout>)
}

export default LogIn; 