import * as React from 'react'
import { Col, Divider, Layout, Row, Form, Input, Tag, ConfigProvider, Collapse, CollapseProps, Space, Card, List, Button, Image } from 'antd'
import { Menu_Home } from './Components/Menus.tsx/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { ForkKnife, Package, } from '@phosphor-icons/react'
import user from './400ppi/Headerpeople.png';
import business from './400ppi/wealth.png';



import 'isomorphic-fetch';




import { MedicineBoxOutlined, ShopOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Meta from 'antd/es/card/Meta'



const Home: React.FC = () => {


  const [showForm, setForm] = React.useState(true)

  const onFinish = async (values: any) => {

    let newData = await fetch('http://localhost:8000/message/client_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    setForm(false)

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Which types of businesses does K.C Morris Inc offer assistance to?',
      children: <p>At Kcm Inc, we are dedicated to providing excellent services
        to businesses in diverse industries. Our main objective is to help our
        clients succeed, and we work hard to deliver benevolent solutions that
        meet the unique needs of both established and new companies in different sectors.
      </p>,
    },
    {
      key: '2',
      label: 'How does enrollment work? ',
      children: <p>Kindly complete the registration form provided and accept
        the service and policy agreements to gain access to our current PAAS or (Private Access Account Services). </p>,
    },
    {
      key: '3',
      label: 'How long does it take to setup services?',
      children: <p>Our service setup typically takes around one month to complete.</p>,
    },
    {
      key: '4',
      label: 'What is the average cost of service?',
      children: <p>The initial implementation fee is $0.00, and thereafter, a monthly payment of $25 is required.</p>,
    },
  ];


  const data = [
    {
      title: 'Consumer Discretionary Services',
    }
  ];




  return (

    <Layout className='layout'>

      <Header className='header'>

        <Menu_Home />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >
          <Space wrap size={[125, 125]}>

            <Row justify={'space-evenly'} gutter={[0, 75]} >
              <Col xs={22} md={12}>
                <h1>Our aim is to help enterprises streamlined and control workflows.</h1>
                <Divider className='dividerHeader'></Divider>
                <p >
                  At Kcm Inc, our focus is on providing business solutions that
                  benefit both consumers and producers. Our solutions are specifically
                  designed to maximize benefits for the community and stakeholders alike.
                  We take pride in our commitment to delivering solutions that promote
                  mutual success for all parties involved.
                </p>

                <Space wrap size={[28, 28]}>
                  <div className='headerSubjects'>
                    <Image src={user} width={64} preview={false} />
                    <p className='headerSubjectsText'>Comsumer Research</p>
                  </div>

                  <div className='headerSubjects'>
                    <Image src={business} width={64} preview={false} />
                    <p className='headerSubjectsText'>Business Optimization</p>

                  </div>

                </Space>
              </Col>
              <Col xs={22} md={8} className='serviceTarget'>
                <div >
                  {showForm ?
                    <>
                      <h2>Feel free to reach out with any questions. We're here to help and provide info.
                      </h2>

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

                            label="First Name"
                            name="first_name"
                            rules={[{ required: true, message: 'Please input your first name!' }]}
                          >
                            <Input type='text' />
                          </Form.Item>

                          <Form.Item
                            label="Last Name"
                            name="last_name"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                          >
                            <Input type='text' />
                          </Form.Item>

                          <Form.Item
                            label="Phone Number"
                            name="phone_number"

                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                          >
                            <Input type='tel' maxLength={10} />
                          </Form.Item>

                          <Form.Item
                            label="Email"
                            name="email"

                            rules={[{ required: true, message: 'Please input your email address!' }]}
                          >
                            <Input type='email' />
                          </Form.Item>
                          <Form.Item
                            label="Message"
                            name="message"

                            rules={[{ required: true, message: 'How can we help you!' }]}
                          >
                            <Input.TextArea />
                          </Form.Item>


                          <Form.Item
                          >
                            <button className='buttonBlack' type="submit">
                              Click here to contact our team!
                            </button>
                          </Form.Item>
                        </ConfigProvider>
                      </Form></> :
                    <p>Thank you for your message. Your inquiry has been received and we will ensure that a member of our team reaches out to you promptly.</p>
                  }
                </div>              </Col>

            </Row>

            <Row justify={'space-evenly'} className='homesectionWhatWeAre' gutter={[0, 75]}>
              <Col xs={22} md={10} >
                <h1>Making sound decisions for your business often entails weighing the costs involved.</h1>
              </Col>

              <Col xs={22} md={8} >

                <ConfigProvider
                  theme={{
                    token: {
                      fontFamily: 'Jost',
                      colorTextTertiary: 'black',
                      colorPrimaryHover: '#b4cbd4',
                      borderRadiusLG: 0,
                      colorBorderSecondary: 'black',
                      colorPrimaryActive: '#e8dac2',
                      fontFamily: 'Nunito',


                    },
                  }}
                >
                  <Card title="Monthly Service Fee" >


                    <Meta
                      title={<h1>$25</h1>}
                      description="Our services do not require any initial setup fees. 
                      However, please be aware that our prices may change without prior notice." />



                  </Card>
                </ConfigProvider>

              </Col>

            </Row>



            <Row justify={'space-evenly'} gutter={[0, 75]} >
              <Col xs={22} md={12}>
                <h1>
                  Discover more comprehensive information about the existing service packages we offer.</h1>
                <Divider className='dividerHeader'></Divider>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<ForkKnife size={24} weight="fill" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={<div><p style={{ fontSize: 14 }}>Our <span className='service_tag'>Food Management</span> and <span className='service_tag'>Nutritional Analytics</span> service equips businesses
                          with the tools they need to expertly manage their inventory and
                          assess the nutritional efficacy of their products across a
                          range of demographics.
                        </p>
                          <Space wrap direction='vertical' size={[0, 25]}>
                            <Space>
                              <Tag icon={<ShopOutlined style={{ color: '#b4cbd4' }} />} color='#000000' >
                                Consumer Discretionary
                              </Tag>
                              <Tag icon={<MedicineBoxOutlined style={{ color: '#b4cbd4' }} />} color='#000000' >
                                Healthcare
                              </Tag>
                            </Space>

                            <Space>
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
                                <Button htmlType="submit">Sign Up Today!</Button>

                              </ConfigProvider>
                            </Space>
                          </Space>


                        </div>}
                      />
                    </List.Item>
                  )}
                />

              </Col>
              <Col xs={22} md={8} className='serviceIcon_Column'>
                <div className='paa_Message' >

                  <Package size={250} color="#000000" weight="fill" />

                </div>


              </Col>

              <Col xs={22} md={10}>
                <Space size={[75, 75]} direction='vertical' >

                  <div>
                    <h1>Questions and Answers</h1>

                    <ConfigProvider

                      theme={{
                        token: {
                          fontFamily: 'Jost',
                          colorBorder: '#000000',
                          fontSize: 16,
                        }
                      }}
                    >
                      <Collapse accordion items={items} />

                    </ConfigProvider>


                  </div>

                </Space>

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
              utilizing publicly available data from both public and private
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
                <Link reloadDocument to='/privacy_policy'> <Button htmlType="submit">Privacy Policy</Button></Link>


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
    </Layout>

  )
}

export default Home