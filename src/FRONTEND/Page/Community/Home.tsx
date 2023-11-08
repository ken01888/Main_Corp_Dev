import { Col, Divider, Form, Input, Layout, Row, ConfigProvider, Alert, Button, Space, Tag, Image } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { CheckOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { TwitterLogo, MetaLogo, LinkedinLogo, Heartbeat, ChartBar, Leaf, Wall, CursorClick, HandPointing, Cursor, Wrench, Package, Toolbox, CoinVertical } from "@phosphor-icons/react";

import qrcode from '../400ppi/generateQRCode.jpeg';
import logo from '../400ppi/kcmincprofilepicture.png';
import store from '../400ppi/storePhoto.png';
import product from '../400ppi/productPhoto.png';
import audit from '../400ppi/auditPhoto.png';







const Home: React.FC = () => {
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

            <Row justify={'center'} gutter={[0, 75]} >
              <Image hidden src={logo}></Image>
              <Col xs={18} className='alignCol'>
                <div >
                  <h1><span className='impactWord'>Business</span> services that enhance stakeholder value.</h1>
                  <p>We aim to provide solutions that meet the needs of individuals and businesses. Our work encompasses the areas of public health, wealth generation, environmental conservation, and housing.</p>


                </div>

              </Col>
              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignColBigLogo'>
                <motion.div className='logo'>

                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .25 }}
                    >
                      <div className='biglogoBlue'>
                        <Heartbeat size={64} color="#b4cbd4" weight="fill" />


                        Health



                      </div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .75 }}
                    >
                      <div className='biglogoBlue'>
                        <Wall size={64} color="#e8dac2" weight="fill" />

                        Housing




                      </div>

                    </motion.div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .5 }}
                    >
                      <div className='biglogoBlue'>
                        <ChartBar size={64} color="#e8dac2" weight="fill" />


                        Wealth



                      </div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >

                      <div className='biglogoBlue'>
                        <Leaf size={64} color="#b4cbd4" weight="fill" />
                        Environment


                      </div>


                    </motion.div>

                  </div>

                </motion.div>


              </Col>


            </Row>


            {/* <Row justify={'space-around'} gutter={[0, 16]} >

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol'>
                <div >
                  <h1><span className='impactWord2'>Societal </span>Forward Services</h1>
                  <p>K.C. Morris Inc. believes in taking a forward-looking approach that addresses everyday challenges affecting people, industries, and the planet. Our services are designed to tackle these challenges while generating benefits for all stakeholders.
                  </p>


                </div>

              </Col>


              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignColBigLogo'>
                <motion.div className='logo'>

                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .25 }}
                    >
                      <div className='biglogoBlue'>
                        <Heartbeat size={32} color="#b4cbd4" weight="fill" />


                        Health



                      </div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .75 }}
                    >
                      <div className='biglogoBlue'>
                        <Wall size={32} color="#e8dac2" weight="fill" />

                        Housing




                      </div>

                    </motion.div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .5 }}
                    >
                      <div className='biglogoBlue'>
                        <ChartBar size={32} color="#e8dac2" weight="fill" />


                        Wealth



                      </div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >

                      <div className='biglogoBlue'>
                        <Leaf size={32} color="#b4cbd4" weight="fill" />
                        Environment


                      </div>


                    </motion.div>

                  </div>

                </motion.div>


              </Col>


            </Row> */}

            <Row justify={'space-around'} gutter={[0, 16]} >

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .25 }}
                >
                  <div className='biglogoBlue'>
                    <Heartbeat size={64} color="#b4cbd4" weight="fill" />





                  </div>

                </motion.div>

              </Col>

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol'>
                <div >
                  <h1>Health</h1>
                  <p className='paragraphDescription'>
                    <span className='spanBlue'>Improving health outcomes is essential for individuals and businesses alike.</span>{""} Our health-focused utility provides institutions with valuable insights into the products they use and the ability to produce positive results for consumers. Our technology solutions equip your organization with innovative tools to encourage better business practices and achieve greater well-being for consumers and households.
                  </p>
                  <Alert
                    message={<Package size={24} color='#4d4d4f' weight="fill" />}
                    description="Our current health-focused utility provides insights into the nutritional composition of food and waste, improving public health and reducing environmental harm. "
                    type="warning"
                    className='alertBlue'
                  />


                </div>

              </Col>


            </Row>

            <Row justify={'space-around'} gutter={[0, 16]} >

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .25 }}
                >
                  <div className='biglogoBlue'>
                    <ChartBar size={64} color="#e8dac2" weight="fill" />





                  </div>

                </motion.div>

              </Col>

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol'>
                <div >
                  <h1>Wealth</h1>
                  <p className='paragraphDescription'>
                    <span className='spanBeige'>Ensuring financial stability for individuals and families is crucial in securing a better future for generations to come.</span>
                    {" "}We work to assist people in building wealth by providing access to investment opportunities previously
                    reserved only for high-net-worth individuals. We strive to provide individuals with valuable insights into their spending habits,
                    create programs that support financially distressed households, and contribute to developing community-owned and grown enterprises.
                  </p>

                  <Alert
                    message={<Toolbox size={24} weight="fill" color='#4d4d4f' />}
                    description="Utility currently under development"
                    type="warning"
                    className='alert'
                  />
                </div>

              </Col>


            </Row>

            <Row justify={'space-around'} gutter={[0, 16]} >

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .25 }}
                >
                  <div className='biglogoBlue'>
                    <Leaf size={64} color="#b4cbd4" weight="fill" />





                  </div>

                </motion.div>

              </Col>

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol'>
                <div >
                  <h1>Environment</h1>
                  <p className='paragraphDescription'>
                    <span className='spanBlue'>{""}Improving health outcomes is vital for both individuals and enterprises.
                    </span> Our health-based utility provide institutions with insights into the harmful effects of their
                    products and the necessary capabilities to correct bad habits. The utilities we offer equip your organization
                    with tools that foster better business practices and improve the well-being of individuals and families.
                  </p>
                  <Alert
                    message={<Toolbox size={24} color='#4d4d4f' weight="fill" />}
                    description="Utility currently under development."
                    type="warning"
                    className='alertBlue'
                  />


                </div>

              </Col>


            </Row>

            <Row justify={'space-around'} gutter={[0, 16]} >

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol_1'>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .25 }}
                >
                  <div className='biglogoBlue'>
                    <Wall size={64} color="#e8dac2" weight="fill" />





                  </div>

                </motion.div>

              </Col>

              <Col xs={{ span: 22 }} md={{ span: 8 }} className='alignCol'>
                <div >
                  <h1>Housing</h1>
                  <p className='paragraphDescription'>
                    <span className='spanBeige'>Ensuring financial stability for individuals and families is crucial in securing a better future for generations to come.</span>
                    {" "}We work to assist people in building wealth by providing access to investment opportunities previously
                    reserved only for high-net-worth individuals. We strive to provide individuals with valuable insights into their spending habits,
                    create programs that support financially distressed households, and contribute to developing community-owned and grown enterprises.
                  </p>

                  <Alert
                    message={<Toolbox size={24} weight="fill" color='#4d4d4f' />}
                    description="Utility currently under development"
                    type="warning"
                    className='alert'
                  />
                </div>

              </Col>


            </Row>



            <Row justify={'space-around'} gutter={[0, 16]} >
              <Col xs={{ span: 22, order: 1 }} md={{ span: 8, order: 2 }} className='alignCol'>
                <div >
                  <h1><span className='impactWord'>Equitable</span> Through and Through</h1>
                  <p>We make it easy for growing or established businesses to access specialized services with no activation fees or unreasonable monthly costs. </p>


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
                      <div className='biglogoBeige'>Easy Setup</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .75 }}
                    >
                      <div className='biglogoBeige'>Tech Driven</div>

                    </motion.div>
                  </div>
                  <div style={{ height: 'fit-content' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: .5 }}
                    >
                      <div className='biglogoBeige'>Low Cost</div>

                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <div className='biglogoBeige'>Responsible</div>

                    </motion.div>

                  </div>

                </motion.div>


              </Col>


            </Row>




            {/* <Row justify={'space-around'} gutter={[0, 75]} >

              <Col xs={22} md={8}>
                <motion.div className='form_login'>
                  <h1>Public <span className='impactWord'>H</span> | <span className='impactWord'>E</span></h1>

                  <p>We offer a public health service to tackle issues such as and poor nutrition, food waste and greenhouse gas emissions. Businesses benefit from this service via its added inventory management, product design, and nutritional analytics components. Daily tasks such as manual inventory checks and nutrient data promotion are produce via a digital QRCode. <a href='/support'>Contact support for more details, or sign up by clicking the button below. </a>

                  </p>

                

                  <Space wrap size={[0, 25]}>
                    <ConfigProvider

                      theme={{
                        token: {
                          fontFamily: 'Jost',
                          colorText: 'black',
                          colorTextHeading: 'black',
                          colorPrimary: 'black'

                        },
                      }}
                    >
                      <Space wrap size={[25, 10]}>
                        <Space wrap size={[25, 25]}>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Inventory Management</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Research and Development</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Product Costing</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Auditing and Tracking</Tag>
                          <Tag className='activeTag' icon={<CheckOutlined />}>Nutritional Analysis</Tag>

                        </Space>
                      </Space>


                      <Link to='/signup' reloadDocument>  <Button className='buttonBlack' htmlType="submit">
                        Sign up today
                      </Button></Link>






                    </ConfigProvider>

                  </Space>
                </motion.div>

              </Col>
              <Col xs={22} md={8} className='alignCol'>
                <motion.div className='form_login' >
                  <Image className='imageInventory' src={qrcode} preview={false}></Image>
                </motion.div>

              </Col>







            </Row> */}

            {/* <Row justify={'space-around'} gutter={[0, 75]} >


              <Col xs={22} md={6} className='alignCol'>
                <motion.div className='form_login' >
                <h3>Record and organize your inventory, add safety stock levels and get purchasing data.</h3>
                  <Image className='imageInventory' src={store} preview={false}></Image>
                </motion.div>

              </Col>
              <Col xs={22} md={6} className='alignCol'>
                <motion.div className='form_login' >
                <h3>Build products, forecast product waste, view cost data, and analyze your profit potential.</h3>
                  <Image className='imageInventory' src={product} preview={false}></Image>

                </motion.div>

              </Col>
              <Col xs={22} md={6} className='alignCol'>
                <motion.div className='form_login' >
                <h3>Conduct routine inventory audits from your mobile phone and retrieve reports in an instance.</h3>

                  <Image className='imageInventory' src={audit} preview={false}></Image>

                </motion.div>

              </Col>







            </Row> */}




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
            <p>At KCM Inc, we are committed to delivering responsible business services that foster sustainable progress and development, while upholding equitable treatment for all stakeholders.

            </p>
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
                <Link reloadDocument to='https://www.facebook.com/KCMIncEngine'>
                  <MetaLogo size={32} weight="fill" color='#b4cbd4' />
                </Link>




                <Link reloadDocument to='https://twitter.com/KCMINC1'> <TwitterLogo size={32} weight="fill" color='#b4cbd4' />
                </Link>




                <Link reloadDocument to='https://www.linkedin.com/company/k-c-morris-inc-stakeholder-intelligence-corporations/?viewAsMember=true'>
                  <LinkedinLogo size={32} weight="fill" color='#b4cbd4' />
                </Link>

              </Space>

            </ConfigProvider>


          </Col>

        </Row>
      </Footer>


    </Layout>)
}

export default Home; 