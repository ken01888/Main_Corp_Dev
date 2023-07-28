import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button,Space, Tag } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate} from 'react-router-dom';
import login_happy_person from './400ppi/login_happy_person'

import Main_Menu from './Components/Navigation/Main_Menu';
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
const Login: React.FC = () => {
  let [verified, setVerified] = React.useState(false)

  const navigate = useNavigate()


  const onFinish = async (values: any) => {
    let newData = await fetch('http://localhost:8080/login_verification', {
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
      <Content >
        <Row justify={'space-around'} gutter={[0, 75]}>
          <Col xs={22} md={8}>
            <div className='fixedSignupDiv'>
              <h2>Greetings! We are Kcm Inc, a corporation committed to enhancing the relationships between businesses and their stakeholders.</h2>
              <p><span className='industriesText'>Industries</span> We Currently Serve</p>
              <p className='industriesServed'><span><span className='logoBlue'></span></span> Consumer Discretionary</p>
              <Space wrap>
                <ConfigProvider
                  theme={{
                    token: {
                      fontFamily: 'Jost',
                      colorText:'black',
                      colorTextHeading:'black'

                    },
                  }}
                >
                  <Tag color="#000000" icon={<CheckOutlined />}>Inventory Management</Tag>
                  <Tag color="#000000" icon={<ClockCircleOutlined />}>Nutritional Analysis</Tag>
                  <Tag color="#000000" icon={<ClockCircleOutlined />}>Check Lists</Tag>
                </ConfigProvider>

              </Space>
            </div>

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
            <Space wrap direction='vertical' >
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
                <Link reloadDocument to='/login'>
                  <Button htmlType="submit">Log In</Button>
                </Link>


              </ConfigProvider>

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
                <Link reloadDocument to='/signup'> <Button htmlType="submit">Sign Up</Button></Link>


              </ConfigProvider>


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
                <Link reloadDocument to='/termsofservice'><Button htmlType="submit">Terms of Service</Button></Link>


              </ConfigProvider>
            </Space>

          </Col>

        </Row>
      </Footer>


    </Layout>)
}

export default Login; 