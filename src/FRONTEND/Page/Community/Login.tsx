import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button, Space, Tag, Grid, Image, Popover } from 'antd';
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
                  <h1><span className='impactWord'>Scale</span> your business without sacrificing your budget.</h1>
                  <p>We offer a variety of enterprise development services, both complimentary and paid, that do not require any setup fees. This is an ideal chance to discover our range of services without any initial financial obligation.</p>


                </div>

              </Col>
              <Col xs={22} md={8}>
                <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .5 }}>


                  <h1>Login</h1>

                  <p>Please enter your username and password that you
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
                  <h1> Strengthen enterprise and stakeholders bonds. </h1>
                  <p>Our goal is to create thriving businesses by providing accessible business services that empower organizations while enhancing the well-being of the communities they serve and the individuals within them.</p>


                </div>

              </Col>



              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignColBigLogo'>
                <motion.div className='logo'>

                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .5 }}
                    >
                      <div className='biglogoBlue'>No Setup Fee</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className='biglogoBeige'>Simple Setup</div>

                    </motion.div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .75 }}
                    >
                      <div className='biglogoBeige'>Only $10 Per Month</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.25 }}
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
                  <h2>Inventory Managment</h2>

                  <Popover placement="bottom" overlayStyle={{ width: 350 }} content={'This category includes hotels, resorts, cruise ships, travel agencies, leisure facilities, restaurants, casino-hotels,entertainment venues, and catering services. '} title="Consumer Discretionary Sector">
                    <h3 className='popoverh3'>Consumer Discretionary Sector                    </h3>
                  </Popover>




                  <p>Our inventory management system offers a cost-effective solution for monitoring and managing inventory lifecycles. Through the utilization of this tool, you will be able to greatly reduce unnecessary purchases, minimize occurrences of stockouts, and effectively control waste and spoilage.</p>

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
                          <Tag className='activeTag' icon={<CheckOutlined />}>Inventory Tracking</Tag>
                          <Tag className='activeTag' icon={<QrcodeOutlined />}>Digital Auditing Sheet</Tag>
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


              <Row justify={'space-around'} gutter={[0, 75]} >
                <Col xs={22} md={4} >
                  <div className='serviceOutline'>
                    <h2>Quick Setup <div className='iconsmalllogoBlue'>
                      <PersonSimpleRun size={24} />
                    </div></h2>
                    <p>With our self-managed implementation process, you have complete control over your integration.</p>
                  </div>

                </Col>

                <Col xs={22} md={4}>
                  <div className='serviceOutline'>


                    <h2>Lifecycle Controls <div className='iconsmalllogoBlue'>
                      <Graph size={24} />


                    </div></h2>



                    <p>Our comprehensive inventory control system allows for seamless recording and tracking of your expanding inventory.</p>


                  </div>

                </Col>

                <Col xs={22} md={4}>
                  <div className='serviceOutline'>
                    <h2>Digital Auditing <div className='iconsmalllogoBlue'>
                      <QrCode size={24} />
                    </div></h2>




                    <p>A QR Code system that provides a more comprehensive view of your inventory and helps reduces auditing times.</p>


                  </div>
                </Col>


              </Row>

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