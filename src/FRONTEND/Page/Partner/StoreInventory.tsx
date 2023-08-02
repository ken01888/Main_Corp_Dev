import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Tooltip } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import * as dayjs from 'dayjs'
import convert from 'convert-units'
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, EditOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';


interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    pack: number | string;
    size: number | string;
    unit: number | string | string;
    category: number | string | string;
    total_package_weight: number | string;
    serving_size_g: number | string;
    price: number | string;

}



const StoreInventory: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [singlePacks, setSinglePacks] = React.useState('')
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [userPin, setUserPin] = React.useState()

    const [addInventory] = Form.useForm();

    const [updateInventory] = Form.useForm();



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserPin(newUser.pin)
                setUserId(newUser.id)
                const dataReply = await fetch(`/getInventoryItems`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])

    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        values.business_id = userId;
        const dataReply = await fetch(`/insertInventoryItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();

    };

    React.useEffect(() => {
        (
            async () => {
                const data = await new Inventory()
                const newData = await data.getInventoryItems()
                setInventoryList(newData.inventory)
            }

        )()


    }, [viewInventoryStore, updateInventoryForm])



    /*Select table rows for update of product or delete*/







    /*Form Failure*/


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch(`/deleteInventoryItems`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const data = await new Inventory()
                    const newData = await data.getInventoryItems()
                    setInventoryList(newData.inventory)
                }
            )()
        }

    };

    /*Form Update */

    const onItemUpdate = async (values: Object) => {
        setUpdateInventoryForm(!updateInventoryForm)

        const dataReply = await fetch(`/updateInventoryItem`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRow[1][0] })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1) {
            (
                async () => {
                    const data = await new Inventory()
                    const newData = await data.getInventoryItems()
                    setInventoryList(newData.inventory)
                }
            )()
        }
        updateInventory.resetFields();
    };



    const rowSelection = {
        onChange: async (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            await setSelectedRow([selectedRows, selectedRowKeys])
            await setSelectedRowActions(selectedRowKeys[0])

        },
        hideSelectAll: true
    };


    const onFinishFailed = (errorInfo: any) => {
        addInventory.resetFields();

        console.log('Failed:', errorInfo);
    };

    const onUpdateFinishFailed = (errorInfo: any) => {
        updateInventory.resetFields();

        console.log('Failed:', errorInfo);
    };


    const columns: ColumnsType<DataType> = [
        {
            title: 'Category',
            dataIndex: 'category',
            responsive: ['xs','md','lg'],



        },
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            responsive: ['lg'],
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            responsive: ['xs','md','lg'],

        },
        {
            title: 'Description',
            dataIndex: 'description',
            responsive: ['xs','md','lg'],


        },
        {
            title: 'Packages',
            dataIndex: 'pack',
            responsive: ['lg'],


        },
        {
            title: 'Unit of Measurement',
            dataIndex: 'unit',
            responsive: ['lg'],


        },
        {
            title: 'Package Weight',
            dataIndex: 'total_package_weight',
            responsive: ['lg'],
        },
        {
            title: 'PAR Level',
            dataIndex: 'size',
            responsive: ['lg'],


        }, 
        {
            title: 'Serving Size',
            dataIndex: 'serving_size_g',
            responsive: ['lg'],


        },
        {
            title: '$ Price',
            dataIndex: 'price',
            responsive: ['xs','md','lg'],


        },
        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
                        
                            <ConfigProvider
                                        theme={{
                                            token: {
                                                fontFamily: 'Jost',
                                                colorTextTertiary: 'black',
                                                colorPrimaryHover: '#000000',
                                                colorBgContainer: '#fafafa',
                                            },
                                        }}
                                    >
                                        <Space>
                                          <Tooltip  title="Delete selected item from inventory record">
                            <Button htmlType="button" onClick={onDeleteInventoryItem} className='buttonBlack' icon={<DeleteOutlined />}></Button>
                            </Tooltip>
                                
                            <Tooltip title="Modify selected item">
                            <Button htmlType="button" onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} className='buttonBlack' icon={<EditOutlined />}>
                            </Button>
                            </Tooltip>
                            </Space>
                            </ConfigProvider>
                       
                    )
                } else {
                    return (
                        ''
                    )
                }

            }


            ,
        },
    ];



    const downloadQRCode = () => {
        const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
        if (canvas) {
            const url = canvas.toDataURL();
            const a = document.createElement('a');
            a.download = 'QRCode.png';
            a.href = url;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };


    return (




        <><Col xs={22} md={18}>
            <Space wrap>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Inventory Section</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                            To begin regular inventory audits for your business, please use this section to enter new items.
                             Once added, they can be accessed through our inventory auditing network, which is protected by a 
                             unique PIN specific to your company. Only authorized personnel can access it, and you can change 
                             your PIN at any time in the Account section. You can access the network using our QR Code generator
                              or by following link at the bottom of the QR Code.
                            </p>

                        </Descriptions.Item>
                        <Descriptions.Item span={3}>
                           
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
                                 <Space wrap size={[25,0]}>
                                {/* <Button className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }}> View</Button> */}
                                <Button icon={<PlusOutlined />} className='tagUpdate' onClick={() => setViewInventoryStore(!viewInventoryStore)}> Add Inventory Items</Button>
                                <Button icon={<QrcodeOutlined />} className='tagUpdate' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}>Generate QRCode</Button>
                                </Space>
                                </ConfigProvider>


                         
                        </Descriptions.Item>

                    </Descriptions>





                </div>
                <div>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 2,
                                fontFamily: 'Jost',
                                fontSize: 14,
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table rowKey={(record: any) => record.id}
                            rowSelection={rowSelection} columns={columns} dataSource={InventoryList} pagination={{ pageSize: 10 }} bordered />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>





            {/* Create Inventory Modal */}



            <Modal
                title="Add Inventory Item"
                style={{ top: 20 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >
                <ConfigProvider
                    theme={{
                        token: {
                            fontFamily: 'Jost',
                            colorPrimaryHover: '#b4cbd4',
                            colorBgContainerDisabled: 'ffffff',
                        },
                    }}
                ></ConfigProvider>
                <p>It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.</p>
                <Form
                    name="Add"
                    style={{ maxWidth: 600 }}
                    form={addInventory}
                    onFinish={onAddInventoryItems}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='horizontal'
                    size='middle'



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

                            label="Supplier"
                            name="supplier"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item

                            label="Description"
                            name="description"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Input type='text' />
                        </Form.Item>

                        <Form.Item

                            label="Brand"
                            name="brand"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Input type='text' />
                        </Form.Item>

                        <Form.Item

                            label="Containers Per Case"
                            name="pack"
                            tooltip='Number of individual packages'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} />
                        </Form.Item>
                        <Form.Item

                            label="Unit of measurement"
                            name="unit"
                            tooltip='Units used to measure the weight of each package. Single Count represents individual containers ex: Ketchup Packets'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Select
                                style={{ width: 200 }}
                                onChange={(value => { setSinglePacks(value) })}
                                options={[
                                    {
                                        label: 'Mass',
                                        options: [
                                            { label: 'Grams', value: 'g' },
                                            { label: 'Kilogram', value: 'kg' },
                                            { label: 'Ounce', value: 'oz' },
                                            { label: 'Pound', value: 'lb' },
                                            { label: 'Megatonne', value: 'mt' },
                                            { label: 'Tonne', value: 't' },
                                        ],
                                    },
                                    {
                                        label: 'Other',
                                        options: [

                                            { label: 'Single Count', value: 'ct' },
                                        ],
                                    }
                                ]}
                            />

                        </Form.Item>
                        {singlePacks !== 'ct' ? <Form.Item
                            label="Container Weight"
                            name="size"
                            tooltip='Weight of a single package or container.'
                        >
                            <InputNumber stringMode={true} min={0} step={5} />
                        </Form.Item> : ''}


                        <Form.Item

                            label="Total Weight Per Case"
                            name="total_package_weight"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>

                        <Form.Item

                            label="Stock Level"
                            name="stock_level"
                            tooltip='Average number of items to keep on hand.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>
                        <Form.Item

                            label="Serving size"
                            name="serving_size_g"
                            tooltip='Serving size information is located on the nutritional fact sheet.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>
                        <Form.Item

                            label="Inventory category"
                            name="category"
                            rules={[{ required: true, message: 'Enter the required information' }]}

                        >
                            <Select
                                style={{ width: 200 }}
                                options={[
                                    {
                                        options: [

                                            { label: 'Meat & Seafood', value: 'meat & seafood' },
                                            { label: 'Dairy & Eggs', value: 'dairy & eggs' },
                                            { label: 'Fruits & Vegetables', value: 'Fruits & Vegetables' },
                                            { label: 'Bakery & Bread', value: 'bakery & bread' },
                                            { label: 'Beverage', value: 'beverage' },
                                            { label: 'Canned & Dry', value: 'canned & dry' },
                                            { label: 'Supplies & Equipment', value: 'suppliers & equipment' },

                                        ],
                                    }

                                ]}
                            />

                        </Form.Item>


                        <Form.Item

                            label="Price"
                            name="price"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={5} type='number' />
                        </Form.Item>




                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Add Item
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title="Update Inventory Item"
                style={{ top: 20 }}
                open={updateInventoryForm}
                onCancel={() => setUpdateInventoryForm(!updateInventoryForm)}
                footer={null}
            >

                <p>It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.</p>

                {
                    selectedRow ?
                        <Form
                            name="Update"
                            style={{ maxWidth: 600 }}
                            form={updateInventory}
                            initialValues={{ reset: true }}
                            onFinish={onItemUpdate}
                            onFinishFailed={onUpdateFinishFailed}
                            autoComplete="on"
                            layout='horizontal'
                            size='middle'


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

                                    label="Inventory category"
                                    name="category"
                                >
                                    <Select
                                        style={{ width: 200 }}
                                        options={[
                                            {
                                                options: [

                                                    { label: 'Meat & Seafood', value: 'meat & seafood' },
                                                    { label: 'Dairy & Eggs', value: 'dairy & eggs' },
                                                    { label: 'Fruits & Vegetables', value: 'Fruits & Vegetables' },
                                                    { label: 'Bakery & Bread', value: 'bakery & bread' },
                                                    { label: 'Beverage', value: 'beverage' },
                                                    { label: 'Canned & Dry', value: 'canned & dry' },
                                                    { label: 'Supplies & Equipment', value: 'suppliers & equipment' },

                                                ],
                                            }

                                        ]}
                                    />

                                </Form.Item>
                                <Form.Item
                                    label="Supplier"
                                    name="supplier"
                                >
                                    <Input type='text' />
                                </Form.Item>

                                <Form.Item
                                    label="Brand"
                                    name="brand"

                                >
                                    <Input type='text' />
                                </Form.Item>

                                <Form.Item
                                    label="Product"
                                    name="description"
                                >
                                    <Input type='text' />
                                </Form.Item>


                                <Form.Item

                                    label="Packages"
                                    name="pack"
                                    tooltip='Number of individual packages per container'

                                >
                                    <InputNumber min={0} step={5} />
                                </Form.Item>

                                <Form.Item
                                    label="Weight of single package"
                                    name="invidual_container_size"
                                    tooltip='Weight of each single packaged item in a container.'
                                >
                                    <InputNumber min={0} step={5} />
                                </Form.Item>

                                <Form.Item

                                    label="Stock Level"
                                    name="stock_level"
                                    tooltip='Preferred inventory to keep on hand.'
                                >
                                    <InputNumber stringMode={true} min={0} step={5} type='number' />
                                </Form.Item>

                                <Form.Item
                                    label="Weight of single package"
                                    name="invidual_container_size"
                                    tooltip='Weight of each single packaged item.'
                                >
                                    <InputNumber min={0} step={5} />
                                </Form.Item>

                                <Form.Item

                                    label="Unit of measurement"
                                    name="unit"
                                    tooltip='Units used to measure the weight of individual packages.'

                                >
                                    <Select
                                        style={{ width: 200 }}
                                        options={[
                                            {
                                                label: 'Mass',
                                                options: [

                                                    { label: 'Grams', value: 'g' },
                                                    { label: 'Kilogram', value: 'kg' },
                                                    { label: 'Ounce', value: 'oz' },
                                                    { label: 'Pound', value: 'lb' },
                                                    { label: 'Megatonne', value: 'mt' },
                                                    { label: 'Tonne', value: 't' },


                                                ],

                                            },
                                            {
                                                label: 'Other',
                                                options: [

                                                    { label: 'Single Count', value: 'ct' },



                                                ],

                                            }


                                        ]}
                                    />

                                </Form.Item>
                                <Form.Item

                                    label="Total package weight"
                                    name="total_package_weight"
                                    tooltip='Total weight of entire package in pounds.'

                                >
                                    <InputNumber min={0} step={5} type='number' />
                                </Form.Item>
                                <Form.Item

                                    label="Serving size"
                                    name="serving_size_g"
                                    tooltip='Serving size information is located on the nutritional fact sheet.'
                                >
                                    <InputNumber min={0} step={5} type='number' />
                                </Form.Item>



                                <Form.Item

                                    label="Price"
                                    name="price"
                                >
                                    <InputNumber min={0} step={5} type='number' />
                                </Form.Item>

                                <Form.Item
                                >
                                    <Button htmlType="submit" className='buttonBlack' >

                                        Update
                                    </Button>
                                </Form.Item>
                            </ConfigProvider>
                        </Form> : ''
                }

            </Modal>
            <Drawer title="Inventory QRCode" placement="right" onClose={() => { setQRCodeGenerator(!QRCodeGenerator) }} open={QRCodeGenerator}

                extra={
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
                        <Button htmlType='button' className='buttonBlackDrawer' onClick={downloadQRCode}>
                            Download
                        </Button>
                    </ConfigProvider>

                }>
                <div id="myqrcode">
                    <p>To access your inventory record system, we offer two options. The first is to download the QR code and display it in a convenient location, such as your office or employee area. Alternatively, you can copy the link we provide. We advise that you only share your account <Tag color="#000000">PIN</Tag> with trusted team members for conducting regular inventory audits. This <Tag color="#000000">PIN</Tag> associates your checklist with your account. </p>
                    <QRCode value={`https://www.kcminc.io/inventory_check?business_id=${userId}`} bgColor="#fff" style={{ marginBottom: 16 }} />
                    <p>Your Account Pin: <span>{userPin}</span></p>
                    <p>Access Your Inventory Tracking Page: <span><a href={`https://www.kcminc.io/inventory_check?business_id=${userId}`} target='_blank'>View Page</a></span></p>


                </div>
            </Drawer>


        </>

    )
}

export default StoreInventory;