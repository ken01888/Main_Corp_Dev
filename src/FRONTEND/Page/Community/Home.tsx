import { Col, Layout, Row, ConfigProvider, Alert, Space, Form, Input } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import * as React from 'react'
import { motion } from 'framer-motion';
import Main_Menu from '../Components/Navigation/Main_Menu';
import 'antd/dist/reset.css';
import Public_Footer from '../Components/Navigation/Footer';
import { Fingerprint, At} from '@phosphor-icons/react';
import { Bar, CartesianGrid, ComposedChart, Label, ResponsiveContainer,XAxis, YAxis, Text, Legend, Tooltip } from 'recharts';
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

      <Layout className='homeScreenDesktop'>

        <Content >

          <Space wrap size={[0, 100]} style={{ alignItems: 'center', justifyContent: 'center' }}>


            <Row justify={'space-evenly'} align={'middle'} gutter={[0, 100]} style={{ marginTop: 100 }}>

              <Col xs={{ span: 22 }} md={{ span: 10 }}>
                <Space size={[0, 25]} wrap>
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
                  <Space size={[0, 25]} wrap>

                    <h3>Bite of Life Analytics</h3>

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


              <Col xs={{ span: 22 }} md={{ span: 6 }} >




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
                <Space size={[0, 25]} wrap>

                    <div>
                      <h3>Login</h3>
                    </div>
                    <Alert
                      description={
                        'To login, enter your username and password. Contact support, from the main menu, if you have trouble logging in. '
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
                          fontSize: 14,
                     
                        }} placeholder="Password" maxLength={25} showCount prefix={<Fingerprint size={20} color="#849FD1" weight="fill" />} />

                      </Form.Item>

                      <Form.Item
                      >
                        <button type="submit" className='buttonFormBeige'>
                          Enter
                        </button>
                      </Form.Item>
                    </ConfigProvider>
                    </Space>

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


            <Row justify={'space-evenly'} align={'top'} gutter={[0, 100]}>

              <Col xs={{ span: 22, order: 2 }} md={{ span: 18, order: 1 }} >
              <h1 className='sectionH1ColorBeigeAlert'>Combating Mortality and Morbidity Linked to Malnutrition</h1>

                <div >
                  <ResponsiveContainer width="100%" height={300} initialDimension={{ width: 300, height: 300 }}>
                    <ComposedChart
                      height={400}
                      data={data}
                      margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name">
                        <Label value="Top 15 Deaths Annually Linked to Malnutrition" offset={0} position="bottom" />
                      </XAxis>
                      <YAxis padding={{ top: 10, bottom: 10 }} minTickGap={10} />
                      <Tooltip wrapperStyle={{ border: '1px solid #4D4D4F' }} cursor={{ stroke: '#4D4D4F', strokeWidth: 1 }} />
                      <Text scaleToFit />
                      <Legend verticalAlign="top" height={36} />
                      <Bar dataKey="Deaths" barSize={20} fill="#849FD1" activeBar={{ stroke: '#4D4D4F', strokeWidth: 1 }} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </Col>

              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <h1 className='sectionH1ColorBeigeAlert'>Defining Malnutrition</h1>

                  <Alert
                    description="
                    Malnutrition encompasses undernutrition (wasting, stunting, underweight), inadequate vitamins or minerals, overweight, obesity, and resulting diet-related non-communicable diseases. It can also result from an imbalance of macronutrients (proteins, carbohydrates, fats) or micronutrients (vitamins and minerals).
                    "
                    type="warning"
                    className='heroText'
                  />
                  <Space size={[0, 15]} wrap>
                    <div className='tagBeige'>Undernutrition, characterized by a lack of essential nutrients, arises from an insufficient diet or challenges in nutrient absorption. It encompasses macronutrient and micronutrient deficiencies, leading to visible and invisible consequences.
</div>
                    <div className='tagBeige'>Overnutrition, signifies health risks from excessive nutrient intake, including overweight and obesity leading to noncommunicable diseases. Macronutrient overnutrition stores excess calories as fat cells, contributing to inflammation and metabolic disorders.







</div>
                 
                  </Space>

                </div>
              </Col>
              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <h1 className='sectionH1ColorBeigeAlert'>Reducing Malnutrition</h1>

                  <Alert
                    description="
                    We help regulate nutrient intake in markets spanning the 🇺🇸 U.S. and 🇨🇦 Canada for individual of all genders, lifestyles and stages of life. Through innovative technology, we empower producers, granting them the ability to conduct on-the-spot nutritional analyses, efficiently manage inventories, analyze consumer purchasing harbits, and investigate the impact their foodstuff has on consumers.
                    "
                    type="warning"
                    className='heroText'
                  />
                  <Space size={[0, 15]} wrap>
                  <div className='tagBeige'><span style={{fontSize:'1rem'}}></span> Malnutrition in the United States and Canada raises healthcare costs and burdens social services due to increased instances of chronic conditions, hospital admissions, and the need for welfare programs. The education systems of these countries faces challenges, as cognitive impairments in children may contribute to educational costs and potential productivity losses. Social services encounter heightened demand, requiring additional resources for support programs. </div>

                  </Space>
            
                {/* <Space wrap size={[50, 25]} align='center' style={{ justifyContent: 'center' }}>
                  <Space wrap size={[25, 100]} align='center' >

                    <div className='BoLADetailBoxBlue'>
                      <p>
                      <GenderIntersex size={64} color="#4d4d4f" weight="bold" />
                 

                      </p>

                    </div>
                    <div className='BoLADetailBox'>
                    <Pulse size={64} color="#4d4d4f" weight="bold" />


                    </div>
                  </Space>

                  <Space wrap size={[25, 100]} align='center' >

                    <div className='BoLADetailBox' >
                    <Baby size={64} color="#4d4d4f" weight="bold" />


                    </div>
                    <div className='BoLADetailBoxBlue' >
                    <Dna size={64} color="#4d4d4f" weight="bold" />


                    </div>

                  </Space>

                </Space> */}

                </div>
              </Col>
              </Row>
              <Row justify={'space-evenly'} align={'bottom'} gutter={[0, 100]}>

              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <h1 className='sectionH1ColorBeigeAlert'>Catering to Intelligent Consumers</h1>

 <Alert
                      description="
                      Our organization provides tools to combat malnutrition and enhance consumer well-being. BoLA is a reliable, cost-effective, and intelligent service suitable for enterprises that cater to the needs of both internal and external stakeholders. Industries across various markets involved in the production and/or distribution of foodstuff can access our system free of charge and begin the integration process with ease. .
                    "
                      type="warning"
                      className='heroText'
                    />
                 
                </div>
              </Col>
              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <h1 className='sectionH1ColorBeigeAlert'>Empowering Industries</h1>
                  <Alert
                      description="
                      Our organization provides tools to combat malnutrition and enhance consumer well-being. BoLA is a reliable, cost-effective, and intelligent service suitable for enterprises that cater to the needs of both internal and external stakeholders. Industries across various markets involved in the production and/or distribution of foodstuff can access our system free of charge and begin the integration process with ease. 
                    "
                      type="warning"
                      className='heroText'
                    />
                 
                </div>
              </Col>
              {/* <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <Space wrap size={[50, 25]} align='center' style={{ justifyContent: 'center' }}>
                  <Space wrap size={[25, 100]} align='center' >

                    <div className='BoLADetailBoxBlue'>
                      <p>
                      <GenderIntersex size={64} color="#4d4d4f" weight="bold" />
                 

                      </p>

                    </div>
                    <div className='BoLADetailBox'>
                    <Pulse size={64} color="#4d4d4f" weight="bold" />


                    </div>
                  </Space>

                  <Space wrap size={[25, 100]} align='center' >

                    <div className='BoLADetailBox' >
                    <Baby size={64} color="#4d4d4f" weight="bold" />


                    </div>
                    <div className='BoLADetailBoxBlue' >
                    <Dna size={64} color="#4d4d4f" weight="bold" />


                    </div>

                  </Space>

                </Space>

                
              </Col> */}
            </Row>



            {/* <Row justify={'center'} align={'middle'} gutter={[0, 16]}>
              <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} >
                <div >
                  <h1 className='sectionH1ColorBlueAlert'>Needs We Target</h1>
                  <Alert
                    description="We analyze data worldwide to unearth challenges affecting people and communities. Our process focuses on the people and the data behind their lives. We build from needs, concentrating on core life elements universal to the entire population. Our approach brings enterprises closer to the things that drive and form the prerequisite of human life on Earth.  "
                    type="warning"
                    className='heroText'
                  />
                </div>
              </Col>
            
            </Row> */}

        












          </Space>
        </Content>
      </Layout>
      <Public_Footer />



    </Layout >

  )
}

export default Home; 