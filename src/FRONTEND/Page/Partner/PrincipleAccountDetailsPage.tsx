import * as React from 'react'
import { Col, Form, Input, ConfigProvider, Button, Descriptions, Space } from 'antd'
import 'isomorphic-fetch';
import { Pencil } from '@phosphor-icons/react';




const PrincipleAccountDetails: React.FC = (props) => {
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [clientInformation, setclientInformation] = React.useState<any>([])


    React.useEffect(() => {
        const user: any = window.localStorage.getItem('user')
        const newUser = JSON.parse(user)
        delete newUser.id
        delete newUser.access_token
        delete newUser.account_type
        delete newUser.business_size
        const newUserArray = Object.entries(newUser)
        setclientInformation(newUserArray)
    }, [])

    const onPrincipleUpdate = async (values: any) => {
        const dataReply = await fetch(`/updateClientinformation`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json()
        setEditPersonalInformation(!EditPersonalInformation)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };




    return (




        <Col xs={22} md={18}>

            <div className='clientPortalDiv'>
                <Form
                    name="client"
                    initialValues={{ remember: true }}
                    onFinish={onPrincipleUpdate}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout='horizontal'
                    size='middle'
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Jost',
                                colorTextTertiary: 'black',
                                colorPrimaryHover: '#000000',
                                colorBgContainerDisabled: '#ffffff',

                            },
                        }}
                    >
                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Account Section</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    On this page, you can view and modify your account information.
                                    Keep in mind that if you change your access pin, it's important
                                    to inform the representatives who assist you with your regular tasks.
                                </p>

                            </Descriptions.Item>









                            <>

                                {clientInformation.map((i, n, a) => {
                                    return (

                                        <Descriptions.Item label={i[0].toUpperCase().replace('_', ' ')} key={n} span={1}>

                                            <Form.Item
                                                name={i[0]}
                                                key={n}
                                                initialValue={i[1]}


                                            >


                                                <Input key={n} bordered={EditPersonalInformation} placeholder={i[1]} disabled={EditPersonalInformation}></Input>
                                            </Form.Item>

                                        </Descriptions.Item>



                                    )
                                })}


                                {EditPersonalInformation ?
                                    <Descriptions.Item span={3}>
                                        <Button className='buttonBlack' htmlType="submit" onClick={() => { setEditPersonalInformation(!EditPersonalInformation) }} icon={<Pencil size={16} />}>
                                            Update
                                        </Button>

                                    </Descriptions.Item>
                                    :
                                    <><Descriptions.Item span={1}>

                                        <Form.Item
                                        >
                                            <ConfigProvider
                                                theme={{
                                                    token: {
                                                        colorPrimary: 'black',
                                                        lineWidth: 1,
                                                        fontFamily: 'Jost',
                                                        fontSize: 14,
                                                    },
                                                }}
                                            >


                                                <Button className='buttonBlack' onClick={() => { setEditPersonalInformation(!EditPersonalInformation) }} htmlType='button'>
                                                    Cancel
                                                </Button>
                                            </ConfigProvider>
                                        </Form.Item>
                                    </Descriptions.Item><Descriptions.Item span={1}>

                                            <Form.Item
                                            >
                                                <ConfigProvider
                                                    theme={{
                                                        token: {
                                                            colorPrimary: 'black',
                                                            lineWidth: 1,
                                                            fontFamily: 'Jost',
                                                            fontSize: 14,
                                                        },
                                                    }}
                                                >


                                                    <Button className='buttonBlack' htmlType="submit">
                                                        Submit
                                                    </Button>
                                                </ConfigProvider>
                                            </Form.Item>
                                        </Descriptions.Item></>

                                }
                            </>

                        </Descriptions>
                    </ConfigProvider>
                </Form>
            </div>
        </Col>

    )
}

export default PrincipleAccountDetails;