import { Col, Layout, Row, ConfigProvider, Alert, Space, Form, Input, Image } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import Public_Footer from '../Components/Navigation/Footer';
import { Repeat } from '@phosphor-icons/react';
import { Bar, CartesianGrid, ComposedChart, Label, ResponsiveContainer, XAxis, YAxis, Text, Legend, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';
import { SyncOutlined } from '@ant-design/icons';
import healthIcon from '../400ppi/healthIcon.png'
import wealthIcon from '../400ppi/wealthIcon.png'
import housingIcon from '../400ppi/housingIcon.png'
import educationIcon from '../400ppi/educationIcon.png'
import industries from '../400ppi/industries.png'



const data = [
  {
    name: 'Diseases of heart',

    Deaths: 695547,

  },
  {
    name: 'Malignant neoplasms',

    Deaths: 605213,

  },

  {
    name: 'Cerebrovascular diseases',
    Deaths: 162890,

  },
  {
    name: 'Chronic lower respiratory diseases',
    Deaths: 142342,

  },
  {
    name: 'Alzheimer disease',

    Deaths: 224935,

  },
  {
    name: 'Diabetes mellitus',
    Deaths: 103294,
  },
  {
    name: 'Chronic liver disease and cirrhosis',
    Deaths: 56585,
  },


];










const Home: React.FC = () => {
  let [verified, setVerified] = React.useState(false);

  document.title = 'Kcm Inc Stakeholder Intelligence Corporation'
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









  return (
    <Layout className='layout'>
      <Header className='header'>

        <Main_Menu />
      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >

          <Space wrap size={[0, 100]} style={{ alignItems: 'center', justifyContent: 'center' }}>

            <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} className='rowWhiteGrayBackgroundPadding'>

              <Col xs={22} md={8} >

                <Space wrap size={[0, 25]}>



                  <h1>Kcm Inc</h1>

                  <Alert
                    description={<p>
                      K.C. Morris Inc. is a Stakeholder Benefit Corporation building equitable business services to advance society. We analyze data to pinpoint societal weaknesses affecting people and communities across the globe. Then, map industries to challenges to create sustainable business strategies that strengthen institutions and communities.
                    </p>}
                    type="warning"
                    className='heroText'
                  />


                </Space>

              </Col>

              <Col xs={22} md={8} >

                <div>
                  <span>
                    <motion.div className='logo'>
                      <div style={{ height: 'fit-content' }}>
                        <div className='biglogoBlue'></div>
                        <div className='biglogoBeige'></div>
                      </div>
                      <div style={{ height: 'fit-content' }}>
                        <div className='biglogoBeige'></div>
                        <div className='biglogoBlue'></div>
                      </div>
                    </motion.div>
                  </span>

                </div>

              </Col>

            </Row>

            <Row justify={'space-evenly'} align={'middle'} gutter={[0, 16]} className='rowLightBlueBackgroundPadding'>

              <Col xs={22} md={8} >

                <Space wrap size={[0, 25]}>



                  <h1 className='h1Beige'>Cratering Societal Weaknesses</h1>

                  <Alert
                    description={<p>
                      Many communities around the world are experiencing similar challenges. We analyze the data to identify these commonalities. Our focus is on fulfilling <span className='LightBlueRowSpanColorBeige'>Universal Needs</span>, which are the things that bring meaning to life and benefit all stakeholders. By addressing health, wealth, education, and housing challenges in various industries, we aim to create <span className='LightBlueRowSpanColorBeige'>Cyclical Benefits</span> among producers and consumers.
                    </p>}
                    type="warning"
                    className='heroText'
                  />


                </Space>

              </Col>

              <Col xs={22} md={8} >
                <SyncOutlined style={{ fontSize: 200, color: '#e8dac2' }} />






              </Col>

            </Row>
            <Row justify={'center'} align={'middle'} gutter={[0, 16]} >
              <Col xs={22} md={20} >



                <h1>Needs We Address</h1>

                <Alert
                  description={<p>                Tackling insecurities in crucial aspects such as health, wealth, education, and housing demands a unified and concerted effort from governments, communities, and organizations to uphold universal well-being. Effective mitigation of these insecurities and the promotion of overall well-being hinge on pivotal roles played by social policies, economic reforms, and community initiatives. Our approach is centered on directly addressing people's needs, developing services that energize industries, and seamlessly aligning business operations with needs.
                  </p>}
                  type="warning"
                  className='heroText'
                />




              </Col>



            </Row>

            <Row justify={'space-evenly'} align={'bottom'} gutter={[0, 100]} >
              <Col xs={{ span: 22 }} md={{ span: 4 }} className='CardsBGGray'>
                <Space size={[0, 25]} wrap>

                  <Space size={[5, 25]} wrap align='end'>
                    <Image preview={false} src={healthIcon} width={60}></Image>

                    <Space direction='horizontal' wrap>
                      <h2>Health</h2>


                    </Space>




                    <Alert
                      description="
                      To enhance health outcomes, mitigate morbidity and mortality, and improve the well-being of individuals, we strategically engage with industries to integrate services that create healthy communities.      "
                      type="warning"
                      className='heroText'
                    />
                  </Space>
                </Space>
              </Col>

              <Col xs={{ span: 22 }} md={{ span: 4 }} className='CardsBGGray'>
                <Space size={[0, 25]} wrap>

                  <Space size={[5, 25]} wrap align='end'>
                    <Image preview={false} src={wealthIcon} width={75}></Image>


                    <Space direction='horizontal' wrap>
                      <h2>Wealth</h2>


                    </Space>




                    <Alert
                      description="
                      To ensure financial stability for national communities and facilitate robust bottom-line growth for enterprises, we tailor our services to cultivate transparent and efficient exchanges between producers and consumers.
                      "
                      type="warning"
                      className='heroText'
                    />
                  </Space>
                </Space>
              </Col>

              <Col xs={{ span: 22 }} md={{ span: 4 }} className='CardsBGGray'>
                <Space size={[0, 25]} wrap>

                  <Space size={[5, 25]} wrap align='end'>
                    <Image preview={false} src={educationIcon} width={60}></Image>


                    <Space direction='horizontal' wrap>
                      <h2>Learning</h2>


                    </Space>




                    <Alert
                      description="
                      We develop services that provide valuable insights to both consumers and producers, empowering them with the knowledge to enhance decision-making during critical points of exchange. 
                      "
                      type="warning"
                      className='heroText'
                    />
                  </Space>
                </Space>
              </Col>


              <Col xs={{ span: 22 }} md={{ span: 4 }} className='CardsBGGray'>


                <Space size={[5, 25]} wrap align='end'>
                  <Image preview={false} src={housingIcon} width={60}></Image>


                  <Space direction='horizontal' wrap>
                    <h2>Housing</h2>


                  </Space>




                  <Alert
                    description="
                      We collaborate with enterprises to enhance housing affordability, and create communities of the future. By leveraging data analysis, we identify vulnerabilities within our financial system, paving the way to uncover untapped opportunities for both sellers and buyers.
                      "
                    type="warning"
                    className='heroText'
                  />
                </Space>

              </Col>




            </Row>




            <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='rowWhiteGrayBackgroundPadding'>

<Col xs={22} md={8} >



  <Image preview={false} src={industries} width={250} />

  




</Col>

<Col xs={22} md={8} >

  <Space wrap size={[0, 25]}>



    <h1>Building Responsive Enterprises
</h1>

    <Alert
      description={<p>
We collaborate with organizations spanning diverse sectors to enhance their overall performance, ultimately benefiting consumers. Our approach involves seamlessly integrating enterprises in the Energy, Financials, Health Care, Consumer Discretionary, and Consumer Staples sectors with their customers through advanced technological services. Our innovative solutions not only fortify enterprises but also uplift communities by pinpointing and addressing weaknesses across organizations and communities, and optimizing the performance of each entity.      </p>}
      type="warning"
      className='heroText'
    />


  </Space>

</Col>


</Row>


            <Row justify={'space-evenly'} align={'bottom'} gutter={[0, 100]} style={{ marginTop: 100 }}>

              <Col xs={{ span: 22 }} md={{ span: 8 }}>
                <Space size={[0, 25]} wrap>

                  <Space size={[0, 25]} wrap>

                  <div>
                      <h3>Public Services</h3>
                    </div>
                    <div>
                      <h1>Get Your Health Score Card</h1>
                    </div>

                    <Alert
                      description="
                      Unlock a healthier you with our accessible approach to understanding your well-being. Use our Personal Health Assessment to gain valuable insights into your current health status. Click the button below to get a new view of you:"
                      type="warning"
                      className='heroText'
                    />
                    <Space direction='horizontal' wrap>
                      <a href='/health-diagnostic' className='buttonFormBeige'>
                        Assessment
                      </a>

                    </Space>
                  </Space>
                </Space>
              </Col>

              <Col xs={{ span: 22 }} md={{ span: 8 }}>
                <Space size={[0, 25]} wrap>

                  <Space size={[5, 25]} wrap align='end'>
                    <div>
                      <span>
                        <motion.div className='logo'>
                          <div style={{ height: 'fit-content' }}>
                            <div className='biglogoBlue'>B</div>
                            <div className='biglogoBeige'>L</div>
                          </div>
                          <div style={{ height: 'fit-content' }}>
                            <div className='biglogoBeige'>o</div>
                            <div className='biglogoBlue'>A</div>
                          </div>
                        </motion.div>
                      </span>

                    </div>

                    <Space direction='vertical' wrap>
                    <div>
                      <h3>Private Services</h3>
                    </div>
                    <div>
                    <h2>Bite of Life Analytics</h2>

                    </div>


                    </Space>




                    <Alert
                      description="
                    Pushback against nutritional-related casualties, leverage unexplored customer data, increase enagement and capture missed opportunities.
                    "
                      type="warning"
                      className='heroText'
                    />
                    <Space direction='horizontal' wrap>
                      <a href='/bola_overview' className='buttonFormBeige'>
                        Learn more
                      </a>
                      <a href='/support' className='buttonFormBeige'>
                        Contact Us
                      </a>

                    </Space>
                  </Space>
                </Space>
              </Col>




            </Row>
























          </Space>
        </Content>
      </Layout>
      <Public_Footer />



    </Layout >

  )
}

export default Home; 