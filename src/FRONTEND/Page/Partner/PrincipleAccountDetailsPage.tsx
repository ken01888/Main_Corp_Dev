import * as React from 'react'
import { Col,Form, Input, ConfigProvider,  Button, Descriptions, Space} from 'antd'
import 'isomorphic-fetch';




const PrincipleAccountDetails: React.FC = (props) => {
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [clientInformation, setclientInformation] = React.useState<any>([])



    React.useEffect(() => {
        const user: any = window.localStorage.getItem('user')
        const newUser = JSON.parse(user)
        delete newUser.id
        delete newUser.access_token
        const newUserArray = Object.entries(newUser)
        setclientInformation(newUserArray)
    }, [])

    const onPrincipleUpdate = async (values: any) => {
        const dataReply = await fetch(`http://localhost:8080/updateClientinformation`, {
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
                                colorPrimaryHover: '#b4cbd4',
                                colorBgContainerDisabled: '#ffffff',

                            },
                        }}
                    >
                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Account Section</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    If you need to make any changes, click on "Update" to modify your account details.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>
                                <Space>
                                    <Button className='tagUpdate' onClick={() => { setEditPersonalInformation(!EditPersonalInformation) }}> Update</Button>
                                </Space>
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
                                    ''
                                    :
                                    <Descriptions.Item label='Update Account Details' span={1}>

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

                                                <Button className='tagSubmit' htmlType="submit">
                                                    Submit Changes
                                                </Button>
                                            </ConfigProvider>
                                        </Form.Item>
                                    </Descriptions.Item>

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