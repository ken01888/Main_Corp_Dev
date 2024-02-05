import { Col, Layout, Row, ConfigProvider, Alert, Space, Form, Input } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import Public_Footer from '../Components/Navigation/Footer';
import { Fingerprint, At } from '@phosphor-icons/react';
import { Bar, CartesianGrid, ComposedChart, Label, ResponsiveContainer, XAxis, YAxis, Text, Legend, Tooltip } from 'recharts';
import { useNavigate } from 'react-router-dom';


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


            <Row justify={'space-evenly'} align={'bottom'} gutter={[0, 100]} style={{ marginTop: 100 }}>

              <Col xs={{ span: 22 }} md={{ span: 8 }}>
                <Space size={[0, 25]} wrap>

                  <Space size={[0, 25]} wrap>


                    <div>
                      <h1>Get Your Health Score Card</h1>
                    </div>

                    <Alert
                      description="
                      Unlock a healthier you with our accessible approach to understanding your well-being. Use our Personal Health Assessment to gain valuable insights into your current health status. Click the button below to get a new view on your health:"
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

                    <Space direction='horizontal' wrap>
                      <h2>Bite of Life Analytics</h2>


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