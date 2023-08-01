import * as React from 'react'
import { Row, Col, Form, ConfigProvider, Button, Descriptions, InputNumber, Divider, Alert, Result, Input, Tag, FloatButton } from 'antd'
import 'isomorphic-fetch';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { QrcodeOutlined, ReconciliationOutlined } from '@ant-design/icons'
import * as dayjs from 'dayjs'











const InventoryCheck: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [onHand, setOnHand] = React.useState('0')
    const [associate, setAssociate] = React.useState(false)
    const [verify, setVerify] = React.useState(false)
    const [disableButton, setDisableButton] = React.useState<any[]>([]);
    const [verify_associate] = Form.useForm();
    const [inventoryExist, setInventoryExist] = React.useState<boolean>()
    const [inventoryDate, setInventoryDate] = React.useState(dayjs().format('dddd, MMMM D, YYYY'))
    const [inventoryReferenceId, seInventoryReferenceId] = React.useState(uuidv4())
    let [inventoryLength, setInventoryLength] = React.useState(0)




    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                let params = await new URLSearchParams(document.location.search);
                let urlid: any = await params.get("business_id");
                setBusinessId(urlid)
                const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /getInventoryItemsForDailyChecklist/${urlid}`)
                const newData = await dataReply.json();
                if (newData.length <= 0) {
                    setInventoryExist(false)
                } else if (newData.length >= 1) {
                    setInventoryLength(newData.length)
                    setInventoryExist(true)
                    setInventoryList(newData)
                }
            }
        )()
    }, [])




    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        setInventoryLength(inventoryLength - 1)
        const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /insertInventoryChecklistItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        setDisableButton([...disableButton, values.inventory_item_id])

    };

    const onVerifyFinish = async (values: any) => {
        values.id = business_id_number
        const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /verify_associate_pin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const responce = await dataReply.json()

        if (responce === true) {
            setAssociate(true)
        }

        if (responce === false) {
            setVerify(!verify)
        }

    };



    /*Form Failure*/

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const SendNotificationInventory = async () => {
        const values:any = {}
       values.reference_number = inventoryReferenceId
       values.id = business_id_number
        const dataReply = await fetch(`noted-lead-340306.ue.r.appspot.com /inventory_notification_to_business`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

    }





    return (




        <Row justify={'center'} gutter={[0, 75]} >



            {
                associate ?
                    <Col xs={22} md={12} className='layout'>
                        <h2 style={{ display: 'flex' }} className='footer_h1'>
                            <motion.div className='logo'>

                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBlue'></div>
                                    <div className='logoBeige'></div>
                                </div>
                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBeige'></div>
                                    <div className='logoBlue'></div>
                                </div>

                            </motion.div>
                        </h2>
                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Inventory Audit Sheet {inventoryLength}</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    Maintaining an accurate record of one's possessions is of utmost importance.
                                    Regularly assessing the contents of one's inventory, even after minor additions or subtractions,
                                    is a prudent approach. Conducting such a review at least twice a week ensures that resources
                                    are not being wasted and that everything remains in an orderly state.
                                </p>
                            </Descriptions.Item>
                            <Descriptions.Item span={3}>
                                <p>

                                    <span><Tag color="error">Notice:</Tag></span> Once you've recorded an item in your inventory, you'll notice that the button's color changes from <span><Button style={{ backgroundColor: '#b4cbd4' }}>
                                        Record
                                    </Button> </span> to <span><Button style={{ backgroundColor: '#d9d9d9' }}>
                                        Recorded
                                    </Button></span>. Recorded items cannot be modified; double check before sending.
                                </p>

                            </Descriptions.Item>
                        </Descriptions>




                        {
                            inventoryExist ? <Form.Provider
                            >
                                {



                                    inventoryList.map((v, i, a) => (



                                        <Form
                                            key={uuidv4()}
                                            name={v.id}
                                            style={{ maxWidth: "fit-content" }}
                                            onFinish={onAddInventoryItems}
                                            onFinishFailed={onFinishFailed}
                                            autoComplete="on"
                                            layout='vertical'
                                            size='middle'
                                        >
                                            <Descriptions
                                                key={uuidv4()}
                                                title={<p >{`${i + 1} . ${v.description}`}</p>}
                                                layout="vertical"
                                                bordered
                                                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
                                                size='small'
                                            >
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Category">{String(v.category).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Supplier">{String(v.supplier).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Brand">{String(v.brand).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Required Stock Level">{String(v.stock_level).toUpperCase()}</Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="On Hand">
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`date_of_audit`}
                                                        initialValue={inventoryDate}
                                                    >
                                                        <Input />

                                                    </Form.Item>
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`audit_reference_number`}
                                                        initialValue={inventoryReferenceId}
                                                    >
                                                        <Input />
                                                    </Form.Item>
                                                    <Form.Item
                                                        key={uuidv4()}
                                                        hidden
                                                        name={`business_id`}
                                                        initialValue={business_id_number}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                    <Form.Item
                                                        hidden
                                                        name={`inventory_item_id`}
                                                        initialValue={v.id}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                    <Form.Item

                                                        name={`in_stock`}
                                                        rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                        initialValue={onHand}

                                                    >
                                                        <InputNumber stringMode={true} min={0} step={5} disabled={disableButton.includes(v.id) ? true : false} />
                                                    </Form.Item>
                                                    <Form.Item
                                                        hidden
                                                        name={`stock_level`}
                                                        rules={[{ required: true, message: 'Enter the number of items ' }]}
                                                        initialValue={Number(v.stock_level)}
                                                    >
                                                        <Input />

                                                    </Form.Item>

                                                </Descriptions.Item>
                                                <Descriptions.Item key={uuidv4()}
                                                    label="Order">
                                                    <Form.Item>
                                                        <Button htmlType="submit" id={uuidv4()} style={{ backgroundColor: disableButton.includes(v.id) ? '' : '#b4cbd4' }} disabled={disableButton.includes(v.id) ? true : false}>
                                                            {disableButton.includes(v.id) ? 'Recorded' : 'Record'}
                                                        </Button>
                                                    </Form.Item>
                                                </Descriptions.Item>


                                            </Descriptions>
                                        </Form>



                                    ))

                                }
                            </Form.Provider> : <Result
                                icon={<QrcodeOutlined style={{ color: '#b4cbd4' }} />}
                                title="There aren't any items in your inventory at the moment. To be able to generate inspection sheets, kindly add items to your account through your business profile page. Thank you!"
                            />
                        }


                    </Col > :
                    <Col xs={22} md={8} className='layout'>
                        <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}>

                            <h2 style={{ display: 'flex' }} className='footer_h1'>
                                <motion.div className='logo'>

                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBlue'></div>
                                        <div className='logoBeige'></div>
                                    </div>
                                    <div style={{ height: 'fit-content' }}>
                                        <div className='logoBeige'></div>
                                        <div className='logoBlue'></div>
                                    </div>

                                </motion.div>Kcm Inc
                            </h2>
                            <h1>Enter your store pin here</h1>

                            <p>Please enter your business PIN to continue. If you don't have the PIN associated with your business account, please contact your administrator for further help.
                                if you have a PIN but are experiencing issues contact our <Link to='/support'>support</Link> center for assistance. </p>
                            <Divider className='dividerHeader'></Divider>
                            <Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onVerifyFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="one"
                                layout='horizontal'
                                size='large'
                                form={verify_associate}

                            >
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: 'black',
                                            colorPrimaryHover: '#fafafa',
                                            lineWidth: 2,
                                            fontFamily: 'Jost',
                                            fontSize: 14,
                                        },
                                    }}
                                >


                                    <Form.Item
                                        label='Enter associate pin'
                                        name="pin"
                                        rules={[{ required: true, message: 'Enter the pin associated with your account' }]}
                                    >
                                        <InputNumber controls={false} />
                                    </Form.Item>




                                    <Form.Item
                                    >
                                        <Button className='buttonBlack' htmlType="submit">
                                            Verify
                                        </Button>
                                    </Form.Item>
                                </ConfigProvider>
                            </Form>

                            {
                                verify ? <Alert
                                    message={<span>I'm sorry to inform you that there aren't any items in your inventory at the moment. To be able to generate inspection sheets, kindly add items to your account. Thank you! </span>}
                                    type="error"
                                    closeIcon
                                /> : ''
                            }
                        </motion.div>

                    </Col>
            }






            {
                inventoryLength === 0 ? <FloatButton onClick={SendNotificationInventory} tooltip='Submit Inventory Items' shape='square' icon={<ReconciliationOutlined style={{ color: 'black' }} />} style={{ border: '1px solid black', backgroundColor: '#e8dac2' }} /> : ''
            }
        </Row>

    )
}

export default InventoryCheck;