import * as React from 'react'
import { Col, Form, Input, ConfigProvider, Button, Descriptions, Space, Row, Tag, Alert, Tooltip } from 'antd'
import 'isomorphic-fetch';
import { Pencil, PencilLine, UploadSimple, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';




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

        <Row justify={'center'} align={'bottom'} gutter={[0, 100]}>

            <Col xs={{ span: 22 }} md={{ span: 18 }} className='clientSectionsFormat'>
                <div>
                    <h1>Account Page</h1>

                    <Alert
                        description="
                Welcome to your account page. Here you can easily update your contact information and security PIN.
                Click the Update button to make changes and then Save. Click Cancel to disregard.              "
                        type="warning"
                        className='heroText'
                    />

                </div>


                <div >

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
                                layout="vertical">

                                <>

                                    {clientInformation.map((i, n, a) => {
                                        return (

                                            <Descriptions.Item label={i[0].toUpperCase().replace('_', ' ')} key={n} span={1}>

                                                <Form.Item
                                                    name={i[0]}
                                                    key={n}
                                                    initialValue={i[1]}
                                                >
                                                    <Input style={{
                                                        border: '1px solid #4D4D4F',
                                                        borderRadius: '1.5px',
                                                        fontSize: 14
                                                    }} key={n} bordered={EditPersonalInformation} placeholder={i[1]} disabled={EditPersonalInformation}></Input>
                                                </Form.Item>

                                            </Descriptions.Item>



                                        )
                                    })}


                                    {EditPersonalInformation ?
                                        <Descriptions.Item span={4}>
                                                                                                  <Tooltip placement="topLeft" color='#849FD1' title={'Edit'}>

                                            <Button icon={<PencilLine size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                                            </Tooltip>
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
                                                      <Tooltip placement="topLeft" color='#849FD1' title={'Cancel'}>
                                                    <Button icon={<X size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                                                    </Tooltip>
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
                                                            <Tooltip placement="topLeft" color='#849FD1' title={'Save'}>
                                                        <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' ></Button>
                                                        </Tooltip>
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

        </Row>



    )
}

export default PrincipleAccountDetails;