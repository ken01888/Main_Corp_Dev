import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button, Space, Tag, Grid, Image, Popover, Tabs } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { CheckOutlined, QrcodeOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { ArrowRight, Barcode, Book, Graph, PersonSimpleRun, QrCode } from '@phosphor-icons/react';
import qrcode from '../400ppi/generateQRCode.jpeg';




const Login: React.FC = () => {
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
              <Col xs={22} md={8} className='alignCol'>
                <div >
                  <h1> We engineer <span className='impactWord'>equitable</span> business services. </h1>
                  <p>Our aim is to utilize technology-driven solutions to enhance both enterprises and consumers.</p>


                </div>

              </Col>
              <Col xs={22} md={8}>
                <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .5 }}>


                  <h1>Login</h1>

                  <p>Please enter the username and password you
                    used to create your account. If you are having difficulties
                    logging in, message our <Link className='homeLinks' to='/support'>support</Link> center for assistance. </p>
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
                          lineWidth: 1,
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

                      <Alert
                        message="Notice"
                        description="By entering our client site, you agree to our terms of service and privacy policy and agree to receive SMS-based messages. "
                        type="warning"
                        className='alert'
                      />


                      <Form.Item
                      >
                        <Button className='buttonBlack' htmlType="submit">
                          Enter
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
              <Col xs={{ span: 22, order: 1 }} md={{ span: 8, order: 2 }} className='alignCol'>
                <div >
                  <h1><span className='impactWord'>Equitable</span> Through and Through</h1>
                  <p>We aim to provide a hassle-free setup process that won't break the bank for growing or established businesses. We believe every enterprise should have access to specialized services without high activation fees or unreasonable monthly costs.</p>


                </div>

              </Col>



              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignColBigLogo'>
                <motion.div className='logo'>

                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .25 }}
                    >
                      <div className='biglogoBlue'>No Setup Fee</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .75 }}
                    >
                      <div className='biglogoBeige'>Simple Setup</div>

                    </motion.div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .5 }}
                    >
                      <div className='biglogoBeige'>Only $10 Per Month</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className='biglogoBlue'>People Focused</div>

                    </motion.div>

                  </div>

                </motion.div>


              </Col>


            </Row>




            <Row justify={'space-around'} gutter={[0, 75]} >
              <Col xs={22} md={8}>
                <div >
                  <h1>Public <span className='impactWord'>Health</span></h1>

                  <h2></h2>

                  <Popover placement="bottom" overlayStyle={{ width: 350 }} content={'This category includes hotels, resorts, cruise ships, travel agencies, leisure facilities, restaurants, casino-hotels,entertainment venues, and catering services. '} title="Consumer Discretionary Sector">
                    <h3 className='popoverh3'>Nutritional Support Institutions</h3>
                  </Popover>




                  <p>Our technology is specifically developed to aid organizations that provide food or
                    nutritional assistance. With our service, these organizations can easily keep track
                    of their products, manage them and carry out cost and nutritional analyses.
                    One of the most notable features of our service is the use of QRCodes.
                    These QRCodes allow organizations to conduct in-store inventory checks
                    and provide customers with accurate nutritional information for specific
                    products, all via mobile phone.</p>

                  <Space wrap size={[0, 25]}>
                    <ConfigProvider

                      theme={{
                        token: {
                          fontFamily: 'Jost',
                          colorText: 'black',
                          colorTextHeading: 'black'
                        },
                      }}
                    >
                      <Space wrap size={[25, 0]}>
                        <Space wrap size={[25, 25]}>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Inventory Management</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Research and Development</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Product Costing</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Auditing and Tracking</Tag>
                        </Space>



                      </Space>





                    </ConfigProvider>

                  </Space>
                </div>

              </Col>
              <Col xs={22} md={8} className='alignCol'>
                <motion.div className='form_login' >
                  <Image className='imageInventory' src={qrcode} preview={false}></Image>
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
                <h2>Free for a limited time! </h2>
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