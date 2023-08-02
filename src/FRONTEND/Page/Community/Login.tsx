import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button, Space, Tag, Grid, Image } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Barcode } from '@phosphor-icons/react';

const Login: React.FC = () => {
  let [verified, setVerified] = React.useState(false);

  const navigate = useNavigate()








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
  const screen = Grid.useBreakpoint();



  return (
    <Layout className='layout'>
      <Header className='header'>

        <Main_Menu />
      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Space wrap size={[0, 125]}>

            <Row justify={'space-around'} gutter={[0, 75]} >
              <Col xs={22} md={8} className='alignCol'>
                <div >
                  <h2>Our organization is committed to providing outstanding B2B services to enterprises of all size in throughout various sectors.</h2>

                </div>

              </Col>
              <Col xs={22} md={8}>
                <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .5 }}>


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
                        <Input.Password />
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
                      message={<span>We were unable to verify your email or password. Please try entering your credentials again. If you dont have an account <a href='/signup'>register here</a></span>}
                      type="error"
                      closeIcon
                    /> : ''
                  }
                </motion.div>

              </Col>


            </Row>

            <Row justify={'space-around'} gutter={[0, 75]} >
              <Col xs={22} md={8}>
                <div >
                  <h2>Consumer Discretionary Sector</h2>
                  <Space wrap size={[0, 75]}>
                    <ConfigProvider

                      theme={{
                        token: {
                          fontFamily: 'Jost',
                          colorText: 'black',
                          colorTextHeading: 'black'
                        },
                      }}
                    >
                      <Space wrap size={[25,25]}>
                      <Space wrap size={[25, 25]}>
                        <Tag className='activeTag' icon={<CheckOutlined />}>Inventory Management</Tag>
                        <Tag color="#000000" icon={<ClockCircleOutlined />}>Nutritional Analysis</Tag>
                        <Tag color="#000000" icon={<ClockCircleOutlined />}>Check Lists</Tag>
                      </Space>

                      <motion.div>
                      <p className='tagStagesofSignup'> <span className='logoBeige'></span> Record inventory items and data.</p>
                      <p className='tagStagesofSignup'> <span className='logoBeige'></span> Generate QR Code for instore inventory tracking.</p>
                      <p className='tagStagesofSignup'> <span className='logoBeige'></span> Perform routine inventory inspections.</p>
                      <p className='tagStagesofSignup'> <span className='logoBeige'></span> Management inventory audits before ordering.</p>

                      </motion.div>
                      </Space>
                      


                    </ConfigProvider>

                  </Space>
                </div>

              </Col>
              <Col xs={22} md={8} className='alignCol'>
                <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .5 }}>

                  <Barcode size={64} />

                  <p>This inventory management system is designed with a simple interface, enabling you to effortlessly add, 
                    record, and track inventory items. Our service is equipped with QR codes, and a company access pin to ensure 
                    efficient access for your team members to a digital inventory auditing system.</p>



                </motion.div>

              </Col>
            </Row>
          </Space>






        </Content>
      </Layout>

      <Footer className='footer_public'>
        <Row justify={'space-between'} align='middle' gutter={[0, 75]}>
          <Col xs={22} md={10}>
            <h2 style={{ display: 'flex' }} className='footer_h1'>
              <div className='logo'>

                <div style={{ height: 'fit-content' }}>
                  <div className='logoBlue'></div>
                  <div className='logoBeige'></div>
                </div>
                <div style={{ height: 'fit-content' }}>
                  <div className='logoBeige'></div>
                  <div className='logoBlue'></div>

                </div>
              </div>Kcm Inc
            </h2>
            <p>KCM Inc is dedicated to offering B2B services that
              provide practical and advantageous solutions to businesses.
              Our team conducts comprehensive research and development,
              utilizing data from both public and private
              institutions. We meticulously analyze this data to develop
              innovative and effective business services that cater to the
              needs of communities and clients.</p>
          </Col>
          <Col xs={22} md={5} >

            <ConfigProvider
              theme={{
                token: {
                  fontFamily: 'Jost',
                  colorTextTertiary: 'black',
                  colorPrimaryHover: '#000000',
                  colorBgContainer: '#fafafa'

                },
              }}
            >
              <Space wrap direction='vertical' >
                <h2>Only $10 per month per user </h2>
              </Space>

            </ConfigProvider>


          </Col>
          <Col xs={22} md={5} >

            <ConfigProvider
              theme={{
                token: {
                  fontFamily: 'Jost',
                  colorTextTertiary: 'black',
                  colorPrimaryHover: '#000000',
                  colorBgContainer: '#fafafa'

                },
              }}
            >
              <Space wrap direction='vertical' >
                <Link reloadDocument to='/'>
                  <Button htmlType="submit">Log In</Button>
                </Link>




                <Link reloadDocument to='/signup'> <Button htmlType="submit">Sign Up</Button></Link>




                <Link reloadDocument to='/termsofservice'><Button htmlType="submit">Terms of Service</Button></Link>
                <Link reloadDocument to='/privacypolicy'><Button htmlType="submit">Privacy Policy</Button></Link>

              </Space>

            </ConfigProvider>


          </Col>

        </Row>
      </Footer>


    </Layout>)
}

export default Login; 