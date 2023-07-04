import * as React from 'react'
import { motion } from 'framer-motion'
import { createBrowserHistory } from 'history'
import { Col, Divider, Layout, Row, Image, Form, Input, Select, Tag, ConfigProvider, Collapse, CollapsePanelProps, CollapseProps, Space, Menu, Dropdown, Card, Skeleton, Avatar, FloatButton, Tree, Button, Descriptions } from 'antd'
import { Menu_Home } from './Components/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Bank, Book, Copyright, LinkSimple, PenNibStraight, Question } from '@phosphor-icons/react'
import { AppstoreOutlined, ArrowUpOutlined, DownOutlined, EditOutlined, EllipsisOutlined, MailOutlined, PieChartOutlined, QuestionCircleOutlined, SettingOutlined, ShopOutlined, ShoppingCartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import 'isomorphic-fetch';
import user from './400ppi/user.png'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { ClientMenu } from './Components/ClientMenu'
import Meta from 'antd/es/card/Meta'
import { Link, useParams } from 'react-router-dom'

let history = createBrowserHistory()


const ClientPortal: React.FC = (props) => {



    const [showForm, setForm] = React.useState(true)

    const onFinish = async (values: any) => {

        // let newData = await fetch('http://localhost:80/message/client_message', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(values)
        // })
        // setForm(false)
        console.log(values)

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };





    return (

        <Layout>

            <Header className='header'>

                <ClientMenu />

            </Header>

            <Layout className='homeScreenDesktop'>


                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={4} className='ClientSideItems'>


                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <UserOutlined />Account
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Bank size={16} />
                                    Billing
                                </button>
                            </a>

                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <ShopOutlined />Services
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Book size={16} />
                                    Research
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Question size={16} />                                    Support
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Bank size={16} />
                                    Billing
                                </button>
                            </a>




                        </Col>
                        <Col xs={22} md={18}>
                            <div className='clientPortalDiv'>
                                <Form
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
                                                colorTextTertiary: '#4d4d4f'

                                            },
                                        }}
                                    >
                                        <Descriptions title={<><h1>Personal Info</h1><Tag bordered={false}>Update Account Information</Tag></>} layout="vertical">
                                            <Descriptions.Item label="First Name">
                                                <Form.Item
                                                    name="email"
                                                    rules={[{ required: true, message: 'Input the email address you used to register the account!' }]}
                                                >
                                                    <Input bordered={false} placeholder='First Name' value='Kenneth' disabled></Input>
                                                </Form.Item>
                                            </Descriptions.Item>

                                            <Descriptions.Item label="Last Name">Cunningham</Descriptions.Item>
                                            <Descriptions.Item label="Email Address">Hangzhou@Zhejiang</Descriptions.Item>
                                            <Descriptions.Item label="Phone Number" > 4047400093
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Phone Number" >
                                              </Descriptions.Item>
                                        </Descriptions>

                               
                                        </ConfigProvider>

                                </Form>
                                <Form
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
                                                colorTextTertiary: '#4d4d4f'

                                            },
                                        }}
                                    >
                                   

                                        <Descriptions title={<><h1>Address Info</h1><Tag bordered={false}>Update Account Information</Tag></>} layout="vertical">
                                            <Descriptions.Item label="First Name">Zhou Maomao</Descriptions.Item>
                                            <Descriptions.Item label="Last Name">Cunningham</Descriptions.Item>
                                            <Descriptions.Item label="Email Address">Hangzhou@Zhejiang</Descriptions.Item>
                                            <Descriptions.Item label="Phone Number" > 4047400093
                                            </Descriptions.Item>
                                            <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                        </Descriptions>
                                    </ConfigProvider>

                                </Form>
                            </div>


                        </Col>


                    </Row>


                </Content>
            </Layout>

            {/*             
            <FloatButton.Group shape="square" style={{ right: 24 }}>
      <FloatButton icon={<Image preview={false} src={user}></Image>} />
      <FloatButton />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>        */}
        </Layout>

    )
}

export default ClientPortal