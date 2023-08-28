import * as React from 'react'
import { Col, Layout, Row, Image, Form, Input, Tag, ConfigProvider, FloatButton, Button, Descriptions, Space } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { Bank, Book, Question } from '@phosphor-icons/react'
import { CaretDownOutlined, CaretUpOutlined, FileTextOutlined, FolderOpenOutlined, FolderOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Navigation/ClientMenu'
import { Link, NavLink, Outlet, useLoaderData, useParams } from 'react-router-dom'



const ClientPortal: React.FC = () => {
    const [businessName, setBusinessName] = React.useState();
    const [subInventory, setSubInventory] = React.useState(false);


    React.useEffect(() => {
        const user: any = window.localStorage.getItem('user')
        const newUser = JSON.parse(user)
        delete newUser.id
        delete newUser.access_token
        const newUserArray = Object.entries(newUser)
        setBusinessName(newUser.business_name)
    }, [])


    return (

        <Layout>

            <Header className='ClientPortalHeader'>
                <ClientMenu businessName={businessName} />
            </Header>
            <Layout >
                <Content >

                    <Row justify={'space-between'} className='ClientPortal' gutter={[0, 75]}>
                        <Col xs={22} md={3} className='ClientSideItems'>
                            <NavLink
                                to={`account`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                    };
                                }}
                            >
                                <UserOutlined />Account
                            </NavLink>

                            <NavLink
                                onClick={() => setSubInventory(!subInventory)}
                                to={`#`}
                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {
                                    <span className={isActive ? "active" : ""}>Tasks</span>

                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                    };
                                }}
                            >
                                {subInventory ? <FolderOpenOutlined size={16} /> : <FolderOutlined size={16} />}Inventory
                            </NavLink>
                            {
                                subInventory ?

                                    <Space wrap size={[55, 0]}>
                                        <NavLink
                                            to={`store`}
                                            className='clientMenuItem'
                                            style={({ isActive, isPending }) => {
                                                return {
                                                    fontWeight: isActive ? "bold" : "",
                                                    backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                    textDecoration: isActive ? "2.5px underline #b4cbd4" : ""


                                                };
                                            }}
                                        >
                                             <FileTextOutlined />Items
                                        </NavLink>

                                        <NavLink
                                            to={`products`}
                                            className='clientMenuItem'
                                            style={({ isActive, isPending }) => {
                                                return {
                                                    fontWeight: isActive ? "bold" : "",
                                                    backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                    textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                                };
                                            }}

                                        >
                                            <FileTextOutlined />Products
                                        </NavLink>
                                        <NavLink
                                            to={`inventoryaudits`}
                                            className='clientMenuItem'
                                            style={({ isActive, isPending }) => {
                                                return {
                                                    fontWeight: isActive ? "bold" : "",
                                                    backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                    textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                                };
                                            }}

                                        >
                                            <FileTextOutlined />Audits
                                        </NavLink>
                                    </Space>

                                    : ''
                            }


                        </Col>

                        <Col xs={22} md={18}>
                            <Outlet />

                        </Col>
                    </Row>
                </Content>
            </Layout>


        </Layout >

    )
}

export default ClientPortal