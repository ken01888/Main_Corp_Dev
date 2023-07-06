import * as React from 'react'
import { motion } from 'framer-motion'
import { createBrowserHistory } from 'history'
import { Col, Divider, Layout, Row, Image, Form, Input, Select, Tag, ConfigProvider, Collapse, CollapseProps, Space, Tabs, TabsProps, Tooltip } from 'antd'
import { Menu_Home } from './Components/Menus.tsx/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Copyright } from '@phosphor-icons/react'
import 'isomorphic-fetch';
import people from './400ppi/Headerpeople.png'
import health from './400ppi/health.png'
import security from './400ppi/security.png'
import education from './400ppi/intelligence.png'
import arrowRight from './400ppi/arrowRight.png'
import arrowDown from './400ppi/arrowDown.png'
import buildings from './400ppi/buildings.png'
import note from './400ppi/note.png'

import { CaretRightOutlined, InfoCircleFilled, SmileFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'



const Home: React.FC = () => {


  const [showForm, setForm] = React.useState(true)

  const onFinish = async (values: any) => {

    let newData = await fetch('http://localhost:80/message/client_message', {
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
      children: <p>We at Kcm Inc are committed to
        providing excellent services to companies
        in different fields. Our focus is on the
        majority's welfare, and we strive to offer
        customized solutions that cater to the
        specific requirements of both established
        and new businesses operating in various sectors.</p>,
    },
    {
      key: '2',
      label: 'How does enrollment work? ',
      children: <p>To begin the registration process,
        we need to fully comprehend the specific
        requirements of our partners. Please complete
        the form provided, and our knowledgeable team
        will quickly reach out to you to gather additional
        information about your company and its needs.
        Our objective is to design access services to
        satisfy your needs. Once the initial consultation
        is completed, you will receive access credentials
        to your client suite.</p>,
    },
    {
      key: '3',
      label: 'How long does it take to setup services?',
      children: <p>Our service setup typically takes around one month to complete.</p>,
    },
    {
      key: '4',
      label: 'What is the average cost of service?',
      children: <p>The initial implementation fee is $250, and thereafter, a monthly payment of $10 is required.</p>,
    },
  ];

  const itemss: TabsProps['items'] = [
    {
      key: '1',
      label:
        <span
        ><div>
            <Image width={12} preview={false} src={security}></Image> Security
          </div>
        </span>,
      children: <><div>
        <p className='p_services'>
          Sustainable business life cycles that ensure consumer participation in developing or development concepts.
        </p>
      </div></>,
    },
    {
      key: '2',
      label:
        <span
        ><div>
            <Image width={12} preview={false} src={health}></Image> Welfare
          </div>
        </span>,
      children:
        <p className='p_services'>
          Utilities that benefit internal and external stakeholders and help optimize business results without sacrificing individual well-being.
        </p>,
    },
    {
      key: '3',
      label:
        <span
        ><div>
            <Image width={12} preview={false} src={education}></Image> Intelligence
          </div>
        </span>,
      children: <p className='p_services'>
        Provide institutions with information and knowledge that give insight into the communities they interact with.</p>,
    },
  ];




  return (

    <Layout className='layout'>

      <Header className='header'>

        <Menu_Home />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >

          <Row justify={'center'} gutter={[0, 75]}>
            <Col xs={22} md={12}>
              <h1 style={{ textAlign: 'center' }}>Welcome to Kcm Inc a corporation dedicated to enhance the quality of life for all stakeholders.</h1>
              <Divider className='dividerHeader'></Divider>
              <p style={{ textAlign: 'center' }}>
                At Kcm Inc, we have complete faith in our capability to develop business
                solutions that are advantageous for both consumers and producers.
                Our services are meticulously crafted to aid enterprises in
                delivering the utmost benefits to the communities and
                stakeholders they cater to.
              </p>
            </Col>

          </Row>

          <Row justify={'center'} className='homesectionWhatWeAre' gutter={[0, 75]}>
            <Col xs={16}>
              <h1 className='h1Center'>Our range of services facilitates smooth and effective interactions between businesses and their customers across multiple industries.</h1>
              <p className='pCenter'>Collaborate with a company that places a high value on enhancing the standard of living for people.</p>
            </Col>
          </Row>


          <Row justify={'space-around'} gutter={[0, 75]}>
            <Col xs={22} md={6} className='serviceTarget'>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#B4CBD4',
                    colorPrimaryHover: '#B4CBD4',
                    lineWidth: 2,
                    fontFamily: 'Nunito Sans',
                    fontSize: 16,
                    colorBgContainer: 'black'
                  },
                }}
              >
                <Tabs type="card" defaultActiveKey="1" items={itemss} />
              </ConfigProvider>
            </Col>
          </Row>
 
          <Row justify={'space-around'} className='homesectionWhatWeAre' gutter={[0, 75]}>
            <Col xs={22} md={7} >
              <div className='servicesDiv'>
                <h2 className='h1_services'>Nutritional Equity Service </h2>
                <p>
                  The NES is a useful tool that provides information on
                  the nutritional value of food products. It also helps
                  businesses manage their finances. By using the NES,
                  you can make informed decisions about your operations
                  and take better control of your business.
                </p>
              </div>
            </Col>
            <Col xs={22} md={7} >
              <div className='servicesDiv'>
                <h2 className='h1_services'>Wealth Transfer Services  </h2>
                <p>
                  The WTS offers businesses a new approach to obtaining
                  funding without the complexities of traditional equity
                  funding. This is achieved by providing exclusive access
                  to the company's products or services at a reduced price
                  to coupon-round participants.
                </p>
                <div>
                </div>
              </div>
            </Col>
            <Col xs={22} md={7} className='servicesDiv'>
              <div>
                <h2 className='h1_services'>Upfront Cost</h2>
                <p>+ $250 Initial Setup Fee <Tooltip placement="topLeft" title={'The initial setup fee covers both administrative and development expenses.'}><InfoCircleFilled /></Tooltip></p>
                <p>+ $10 Monthly Maintenance Fee <Tooltip placement="topLeft" title={'To gain access to our services, you pay a reasonable fee of $0.83 per day or $25 per month.'}><InfoCircleFilled /></Tooltip></p>
                <ConfigProvider
                  theme={{
                    token: {
                      colorSplit: '#000000',
                    },
                  }}
                >
                  <Divider></Divider>
                </ConfigProvider>
                <p>+ $260</p>

                <div>
                <p>It's important to note that the monthly maintenance fee only covers services access and does not include any extra billing.</p>

                </div>
              </div>
            </Col>
        


          </Row>

          <Row justify={'space-around'} className='homesectionWhite' gutter={[0, 75]}>
            <Col xs={22} md={10}>
              <Space size='large' direction='vertical'>

                <div>
                  <h1>Questions and Answers</h1>

                  <ConfigProvider

                    theme={{
                      token: {
                        fontFamily: 'Nunito Sans',
                        colorBorder: '#B4CBD4',
                        fontSize: 16,
                      }
                    }}
                  >
                    <Collapse accordion items={items} />

                  </ConfigProvider>
                </div>

                <div>
                  <h1>Contact us to learn more!</h1>
                  <p>
                    To begin the registration process,
                    please complete the form.
                    Our knowledgeable team will reach
                    out to you promptly to provide
                    you with detailed information about
                    our institution and answer any inquiries you may have.
                  </p>
                </div>
              </Space>

            </Col>
            <Col xs={22} md={10}>

              <div >
                {showForm ?
                  <><Form
                    name="basic"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='horizontal'
                    size='middle'
                  >
                    <ConfigProvider
                      theme={{
                        token: {
                          colorPrimary: '#B4CBD4',
                          colorPrimaryHover: '#B4CBD4',
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
                        label="Business Name"
                        name="business_name"

                        rules={[{ required: true, message: 'Please input your business name!' }]}
                      >
                        <Input type='text' />
                      </Form.Item>
                      <Form.Item
                        label="Business Size"
                        name="business_size"
                        rules={[{ required: true, message: 'Please select your business size!' }]}
                      >
                        <Select bordered>
                          <Select.Option value="micro">Less than 10</Select.Option>
                          <Select.Option value="small">Between 10 and 50</Select.Option>
                          <Select.Option value="medium">Between 50 and 250 </Select.Option>
                          <Select.Option value="large">Over 250</Select.Option>

                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="What type of account type are you interested in creating?"
                        name="account_type"
                        rules={[{ required: true, message: 'Select a account type best reflects your needs!' }]}
                      >
                        <Select bordered>
                          <Select.Option value="principle">Principle</Select.Option>
                          <Select.Option value="associate">Associated</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Input your password!' }]}
                      >
                        <Input.Password type='password' visibilityToggle={true} />
                      </Form.Item>
                      <Form.Item
                      >
                        <button className='buttonBlack' type="submit">
                          Click here to contact our team!
                        </button>
                      </Form.Item>
                    </ConfigProvider>
                  </Form></> :
                  <h1>We appreciate you reaching out to us.
                    We want you to know that we have received
                    your message and will get back to you as
                    soon as possible.</h1>
                }
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>

      <Footer className='footer_public'>
        <Row>
          <Col xs={24}>
            <p><Copyright size={16} weight="bold" />Kcm Inc</p>
          </Col>
        </Row>
      </Footer>
    </Layout>

  )
}

export default Home