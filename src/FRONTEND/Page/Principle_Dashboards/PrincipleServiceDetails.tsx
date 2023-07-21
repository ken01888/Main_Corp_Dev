import * as React from 'react'
import { Col, Image, Form, Tag, ConfigProvider, FloatButton, Button, Descriptions, Card, Timeline, Popover, Modal, Badge, Select, TimePicker, DatePicker, Space, Collapse } from 'antd'
import 'isomorphic-fetch';
import { useParams } from 'react-router-dom';
import admin from '../400ppi/notary.png'
import inventory from '../400ppi/inventory.png'

import { QuestionCircleOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { RangePickerProps } from 'antd/es/date-picker';
import { CalendarBlank, CalendarCheck } from '@phosphor-icons/react'

import * as dayjs from 'dayjs'




const PrincipleServiceDetails: React.FC = (props) => {
    const [NotaryNotifications, setNotaryNotifications] = React.useState<number>()
    const [EditPersonalInformation, setEditPersonalInformation] = React.useState<boolean>(true)
    const [modal1Open, setModal1Open] = React.useState(false);

    const [billingInformation, setbillingInformation] = React.useState<Array<string>>([])





    // React.useEffect(() => {
    //     (async () => {
    //         const dataReply = await fetch(`http://localhost:8000/getNotary_Service_Requests/3`)
    //         const newData = await dataReply.json()
    //         setNotaryNotifications(newData.length)
    //         console.log(newData)

    //     })()
    // }, [])



    const onNotaryRequest = async (values: any) => {
        values.notary_appointment_time = values.notary_appointment_time.format('hh:mm A')
        values.notary_appointment_date = values.notary_appointment_date.format('dddd, MMMM D, YYYY')
        values.userId = id
        const dataReply = await fetch(`http://localhost:8000/requestNotary_Service_Requests/3`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })


        const dataParse = await dataReply.json()
        setEditPersonalInformation(!EditPersonalInformation)
        console.log(values)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const disabledDateTime = () => ({
        disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 7, 18, 19, 20, 21, 22, 23],
    });




    return (




        <Col xs={22} md={12}>
            <div className='clientPortalDiv'>

                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Jost',
                            colorTextTertiary: 'black',
                            colorPrimaryHover: '#b4cbd4',
                            borderRadiusLG: 0,
                            colorBorderSecondary: '#b4cbd4',
                            colorPrimaryActive: '#e8dac2'


                        },
                    }}
                >
                    <Space >
                        <Descriptions
                            extra={<>
                            </>}

                            title={<><h1 className='h1_Header_Client_Portal'>Services</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    In this section, you can easily manage and update your personal information.
                                    To view your information, click on "View" in the top right corner.
                                    If you need to make any changes, click on "Update" to modify your personal details.
                                </p>


                            </Descriptions.Item>
                            <Descriptions.Item span={3}>
                                    <Card title="Remote Notary Service" extra={<Image src={admin} width={16} preview={false}></Image>}
                                        actions={[
                                            <Badge size='small' color='#b4cbd4' onClick={() => { setModal1Open(!modal1Open); }}>
                                                <CalendarBlank size={18} weight="bold" />
                                            </Badge>,

                                            <Badge size='small' count={NotaryNotifications} color='#b4cbd4'>
                                                <CalendarCheck size={18} weight="bold" />
                                            </Badge>
                                        ]}
                                    >
                                        <Meta
                                            title={<Popover content={<Timeline
                                                items={[
                                                    {
                                                        dot: 1,
                                                        color: 'black',
                                                        children: 'Choose a convenient date and time to schedule an appointment with a notary.',
                                                    },

                                                    {
                                                        dot: 2,
                                                        color: 'black',
                                                        children: 'Before your appointment, make sure to gather all required documents and identification.',
                                                    },
                                                    {
                                                        dot: 3,
                                                        color: 'black',
                                                        children: 'Kindly ensure that you attend the video call with the notary at the scheduled time as designated.',
                                                    },
                                                    {
                                                        dot: 4,
                                                        color: 'black',
                                                        children: 'To commence the notary act, kindly confirm your identity.',
                                                    },
                                                ]} />} title="How it works" trigger="hover">
                                                <QuestionCircleOutlined /> How it works
                                            </Popover>}
                                            description="Schedule a online two-way audio/video call with a notary public." />



                                    </Card>

                                    


                            </Descriptions.Item>
                            {/* <Descriptions.Item span={3}>
                                    <Card title="Remote Notary Service" extra={<Image src={admin} width={16} preview={false}></Image>}
                                        actions={[
                                            <Badge size='small' color='#b4cbd4' onClick={() => { setModal1Open(!modal1Open); }}>
                                                <CalendarBlank size={18} weight="bold" />
                                            </Badge>,

                                            <Badge size='small' count={NotaryNotifications} color='#b4cbd4'>
                                                <CalendarCheck size={18} weight="bold" />
                                            </Badge>
                                        ]}
                                    >
                                        <Meta
                                            title={<Popover content={<Timeline
                                                items={[
                                                    {
                                                        dot: 1,
                                                        color: 'black',
                                                        children: 'Choose a convenient date and time to schedule an appointment with a notary.',
                                                    },

                                                    {
                                                        dot: 2,
                                                        color: 'black',
                                                        children: 'Before your appointment, make sure to gather all required documents and identification.',
                                                    },
                                                    {
                                                        dot: 3,
                                                        color: 'black',
                                                        children: 'Kindly ensure that you attend the video call with the notary at the scheduled time as designated.',
                                                    },
                                                    {
                                                        dot: 4,
                                                        color: 'black',
                                                        children: 'To commence the notary act, kindly confirm your identity.',
                                                    },
                                                ]} />} title="How it works" trigger="hover">
                                                <QuestionCircleOutlined /> How it works
                                            </Popover>}
                                            description="Schedule a online two-way audio/video call with a notary public." />



                                    </Card>

                                    


                            </Descriptions.Item> */}
                        </Descriptions>
                    </Space>
                </ConfigProvider>
            </div>
            <Modal
                title="Remote Notary Appointment Scheduler"
                style={{ top: 20 }}
                open={modal1Open}
                onCancel={() => setModal1Open(!modal1Open)}
                footer={null}
            >
                <Form
                    name="basic"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onNotaryRequest}
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
                            label="Appointment Date"
                            name="notary_appointment_date"
                            rules={[{ required: true, message: 'Select an appointment day' }]}
                        >
                            <DatePicker
                                onChange={(date, dateString) => { console.log(date, dateString) }}
                                disabledDate={disabledDate}
                                format={'dddd, MMMM D, YYYY'}
                            />
                        </Form.Item>





                        <Form.Item
                            label="Appointment Time"
                            name="notary_appointment_time"

                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <TimePicker hideDisabledOptions disabledTime={disabledDateTime} minuteStep={30} hourStep={1} format={'hh:mm A'} />
                        </Form.Item>

                        <Form.Item
                            label="Request"
                            name="notary_request_type"

                            rules={[{ required: true, message: 'Please input your email address!' }]}
                        >
                            <Select bordered>
                                <Select.Option value="oaths/affirmations">Oaths/Affirmations</Select.Option>
                                <Select.Option value="acknowledgments">Acknowledgments</Select.Option>
                                <Select.Option value="witness/attest signatures">Witness or Attest Signatures</Select.Option>
                                <Select.Option value="certify copies">Certify Copies</Select.Option>

                            </Select>
                        </Form.Item>


                        <Form.Item
                        >
                            <Button htmlType="submit">
                                Confirm
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>
            <br />
            <br />

            <FloatButton.Group shape="square" style={{ right: 24 }}>
                <FloatButton icon={<Image preview={false}></Image>} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
        </Col>


    )
}

export default PrincipleServiceDetails;