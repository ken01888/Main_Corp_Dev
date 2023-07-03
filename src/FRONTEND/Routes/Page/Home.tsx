import * as React from 'react'
import { motion } from 'framer-motion'
import { createBrowserHistory } from 'history'
import { Col, Divider, Layout, Row, Image, Form, Input, Select, Tag, ConfigProvider, Collapse, CollapsePanelProps, CollapseProps, Space } from 'antd'
import { Menu_Home } from './Components/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Copyright } from '@phosphor-icons/react'
import 'isomorphic-fetch';
import people from './400ppi/Headerpeople.png'
import health from './400ppi/health.png'
import security from './400ppi/security.png'
import education from './400ppi/intelligence.png'
import foodservice from './400ppi/foodservice.png'
import wealth from './400ppi/wealth.png'
import arrowRight from './400ppi/arrowRight.png'
import arrowDown from './400ppi/arrowDown.png'
import buildings from './400ppi/buildings.png'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';

let history = createBrowserHistory()

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
          Our objective is to find the ideal solution to 
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



  return (

    <Layout className='layout'>

      <Header className='header'>

        <Menu_Home />

      </Header>

      <Layout className='homeScreenDesktop'>

        <Content >

          <Row justify={'space-around'} gutter={[0, 75]}>
            <Col xs={22} md={10}>
              <h1>We aim to enhance the quality of life for all stakeholders.</h1>
              <Divider className='dividerHeader'></Divider>
              <p>
                At Kcm Inc, we have complete faith in our capability to develop business
                solutions that are advantageous for both consumers and producers.
                Our services are meticulously crafted to aid enterprises in
                delivering the utmost benefits to the communities and
                stakeholders they cater to.
              </p>
            </Col>
            <Col xs={22} md={10} className='headerLogoColumn'>
              <motion.div className='headerLogo'>
                <Image src={people} preview={false} width={250}></Image>
              </motion.div>
            </Col>
          </Row>

          <Row justify={'center'} className='homesectionWhatWeAre' gutter={[0, 75]}>
            <Col xs={22}>
              <h1 className='h1Center'>We are dedicated to providing exceptional outcomes for all parties involved.</h1>
              <p className='pCenter'>Collaborate with a company that places a high value on enhancing the standard of living for people.</p>
            </Col>
          </Row>


          <Row justify={'space-around'} gutter={[0, 75]}>
            <Col xs={22} md={6} className='serviceTarget'>
              <div>
                <Image width={75} preview={false} src={security}></Image >

              </div>
              <div>
                <h2 className='h2_tenents'> Security</h2>
                <p className='p_services'>
                  Sustainable business life cycles that ensure consumer participation in developing or development concepts.
                </p>
              </div>
            </Col>
            <Col xs={22} md={6} className='serviceTarget'>

              <div>
                <Image width={75} preview={false} src={health}></Image >

              </div>
              <div>
                <h2 className='h2_tenents'> Welfare</h2>
                <p className='p_services'>
                  Utilities that benefit internal and external stakeholders and help optimize business results without sacrificing individual well-being.
                </p>
              </div>

            </Col>

            <Col xs={22} md={6} className='serviceTarget'>
              <div>
                <Image width={61} preview={false} src={education}></Image >
              </div>
              <div>
                <h2 className='h2_tenents'> Intelligence</h2>
                <p className='p_services'>
                  Provide institutions with information and knowledge that give insight into the communities they interact with.</p>
              </div>


            </Col>
          </Row>

          <Row justify={'space-around'} className='homesectionWhatWeAre' gutter={[0, 75]}>
            <Col xs={22} md={10} className='headerLogoColumn'>
              <Image width={425} preview={false} src={buildings}></Image >


            </Col>

            <Col xs={22} md={10} className='servicesDiv'>
              <div>
                <div className='service_label'>
                  <Tag className='tagsServices' icon={<Image width={16} preview={false} src={health}></Image >} color="#000000">{" "}Welfare</Tag>
                  <span>Move Down<Image width={24} preview={false} src={arrowDown}></Image ></span>
                </div>

                <h1>Precision Nutritional Analytics</h1>
                <Divider className='dividerHeader'></Divider>
                <p>
                  Our food service solution is perfect for institutions that
                  want to provide complete nutritional support to their
                  customers. By using our solution, institutions can
                  quickly calculate the cost of food and predict the
                  nutritional value of the items they offer with precision.
                </p>

                <div className='additionalServices'>
                  <h2>Interlocking Services</h2>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Equipment Sourcing</p></span>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Product Sourcing</p></span>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Site Plan Review</p></span>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Compliance Development and Review</p></span>
                </div>
              </div>

              <div>
                <Tag className='tagsServices' icon={<Image width={16} preview={false} src={security}></Image >} color="#000000">{" "}Security</Tag>

                <h1>Capital Accumulation and Benefit Circulation</h1>
                <Divider className='dividerHeader'></Divider>
                <p>
                  Our solution offers a convenient way for businesses to obtain
                  the necessary funds to start, maintain, or grow their enterprise.
                  You can be confident that our approach eliminates the worry of
                  managing debt payments or distributing dividends.
                </p>
                <div className='additionalServices'>
                  <h2>Interlocking Services</h2>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Buyer Matching Services</p></span>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Payment Processing</p></span>
                  <span className='spanServices'><img src={arrowRight} width={60} /><p>Stakeholder Management</p></span>
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
                        label="Message"
                        name="message"

                        rules={[{ required: false, message: 'Please input your phone number!' }]}
                      >
                        <Input.TextArea maxLength={125} showCount autoSize={{ minRows: 5 }} />
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