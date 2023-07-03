import * as React from 'react'
import { motion } from 'framer-motion'
import { createBrowserHistory } from 'history'
import { Col, Divider, Layout, Row, Image, Form, Input, Select, Tag, ConfigProvider, Collapse, CollapsePanelProps, CollapseProps, Space, Menu, Dropdown, Card, Skeleton, Avatar, FloatButton } from 'antd'
import { Menu_Home } from './Components/Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Copyright } from '@phosphor-icons/react'
import { AppstoreOutlined, ArrowUpOutlined, DownOutlined, EditOutlined, EllipsisOutlined, MailOutlined, QuestionCircleOutlined, SettingOutlined, ShoppingCartOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import 'isomorphic-fetch';
import user from './400ppi/user.png'
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { ClientMenu } from './Components/ClientMenu'
import Meta from 'antd/es/card/Meta'
import { Link } from 'react-router-dom'

let history = createBrowserHistory()


const ClientPortal: React.FC = (props) => {



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





    return (

        <Layout className='layout'>

            <Header className='header'>

                <ClientMenu />

            </Header>

            <Layout >


                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={4} className='ClientSideItems'>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    Account
                                </button>
                            </a>

                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <UserOutlined />Account
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <ShoppingCartOutlined />  Services
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    Research
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    Communication
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    Financials
                                </button>
                            </a>




                        </Col>
                        <Col xs={22} md={12}>
                            <h1>Hello #Client's Name goes here</h1>
                            <div className='clientPortalDiv'>
                                <div>
                                    <Form
                                        name="basic"
                                        style={{ maxWidth: 600 }}
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        layout='horizontal'
                                        size='middle'
                                        disabled
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
                                            <div>

                                                <Form.Item

                                                    label="First Name"
                                                    name="first_name"
                                                    rules={[{ required: true, message: 'Please input your first name!' }]}

                                                >
                                                    <Input placeholder='Kenneth' type='text' />
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

                                            </div>
                                            <div>
                                                <Form.Item
                                                >
                                                    <button className='buttonBlack' type="submit">
                                                        Click here to contact our team!
                                                    </button>
                                                </Form.Item>
                                            </div>

                                        </ConfigProvider>

                                    </Form>
                                </div>


                            </div>


                        </Col>
                        <Col xs={22} md={6}  >

                            <Card
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Skeleton loading={false} avatar active>
                                    <Meta
                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                                        title="Card title"
                                        description="This is the description"
                                    />
                                </Skeleton>
                            </Card>
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