import * as React from 'react'
import { Col, Layout, Row, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Bank, Book, Question } from '@phosphor-icons/react'
import { ShopOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Navigation/ClientMenu'
import { Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'



const ClientPortal: React.FC = () => {

    return (

        <Layout>

            <Header className='ClientPortalHeader'>
                <ClientMenu />
            </Header>
            <Layout >
                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={4} className='ClientSideItems'>
                            <NavLink
                                to={`account`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <UserOutlined />Account
                            </NavLink>
                            {/* <NavLink
                                to={`billing`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <Bank size={16} />Billing
                            </NavLink> */}
                            <NavLink
                                to={`store`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <ShopOutlined size={16} />Inventory
                            </NavLink>

                            {/* <NavLink
                                to={`services`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        backgroundColor: isActive ? "#e8dac2" : "",
                                    };
                                }}
                            >
                                <ShopOutlined size={16} />Inventory
                            </NavLink> */}



                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Book size={16} />
                                    Research
                                </button>
                            </a>
                            <a onClick={(e) => e.preventDefault()}>
                                <button className='clientMenuItem' type="submit">
                                    <Question size={16} />Support
                                </button>
                            </a>
                        </Col>

                        <Col xs={22} md={18}>
                            <Outlet />

                        </Col>
                    </Row>
                </Content>
            </Layout>


            <Footer className='footer_portal '>
                <Row justify={'space-between'} align='middle' gutter={[0, 75]}>
                   
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
                                <Link reloadDocument to='/support'>
                                    <Button htmlType="submit">Support</Button>
                                </Link>


                            </ConfigProvider>
                        </Space>

                    </Col>

                </Row>
            </Footer>
        </Layout >

    )
}

export default ClientPortal