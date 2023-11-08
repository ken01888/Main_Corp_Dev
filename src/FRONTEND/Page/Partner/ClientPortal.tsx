import * as React from 'react'
import { Col, Layout, Row, Space } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import { FileTextOutlined, FolderOpenOutlined, FolderOutlined, UserOutlined } from '@ant-design/icons';
import 'isomorphic-fetch';
import { ClientMenu } from '../Components/Navigation/ClientMenu'
import { NavLink, Outlet } from 'react-router-dom'



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

                    <Row className='ClientPortal' gutter={[0, 75]}>
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
                                to={`bolamanual`}

                                className='clientMenuItem'
                                style={({ isActive, isPending }) => {

                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                    };
                                }}
                            >
                                {subInventory ? <FolderOpenOutlined size={16} /> : <FolderOutlined size={16} />}BOLA
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
                                            <FileTextOutlined />Stock
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
                                            <FileTextOutlined />Design
                                        </NavLink>
                                        <NavLink
                                            to={`nutrition`}
                                            className='clientMenuItem'
                                            style={({ isActive, isPending }) => {
                                                return {
                                                    fontWeight: isActive ? "bold" : "",
                                                    backgroundColor: isActive ? "#fafafa" : "#fafafa",
                                                    textDecoration: isActive ? "2.5px underline #b4cbd4" : ""
                                                };
                                            }}

                                        >
                                            <FileTextOutlined />Nutrition
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
                                            <FileTextOutlined />Audit
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