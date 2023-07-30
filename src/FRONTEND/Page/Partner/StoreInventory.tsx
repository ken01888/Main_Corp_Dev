import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import * as dayjs from 'dayjs'
import convert from 'convert-units'
import { ColumnsType } from 'antd/es/table';
import { QrcodeOutlined } from '@ant-design/icons';


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

    const [addInventory] = Form.useForm();

    const [updateInventory] = Form.useForm();



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getInventoryItems`);
                const newData = await dataReply.json();
                console.log(newData)
                setInventoryList(newData)
            }
        )()
    }, [])

    /* Form Inventory Add*/

    const onAddInventoryItems = async (values: any) => {
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        values.business_id = userId;
        const dataReply = await fetch(`http://localhost:8080/insertInventoryItems`, {
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
                console.log(viewInventoryStore)
            }

        )()


    }, [viewInventoryStore, updateInventoryForm])



    /*Select table rows for update of product or delete*/







    /*Form Failure*/


    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch(`http://localhost:8080/deleteInventoryItems`, {
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

        const dataReply = await fetch(`http://localhost:8080/updateInventoryItem`, {
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
            console.log(selectedRowKeys)
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
            title: 'Supplier',
            dataIndex: 'supplier',
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Pack',
            dataIndex: 'pack',

        },
        {
            title: 'PAR Level',
            dataIndex: 'size',

        },
        {
            title: 'Unit',
            dataIndex: 'unit',

        },
        {
            title: 'Category',
            dataIndex: 'category',

        },
        {
            title: 'Package Weight',
            dataIndex: 'total_package_weight',

        },
        {
            title: 'Serving Size',
            dataIndex: 'serving_size_g',

        },
        {
            title: 'Price',
            dataIndex: 'price',

        },
        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
                        <Space wrap>
                            <Button htmlType="submit" onClick={onDeleteInventoryItem} className='buttonBlack' >
                                Delete
                            </Button>
                            <Button htmlType="submit" onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} className='buttonBlack' >
                                Update
                            </Button>
                        </Space>
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
                        title={<><h1 className='h1_Header_Client_Portal'>Inventory</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                In order to begin constructing your digital storage space and organizing your inventory, the initial step is to establish a facility. From there, you can incorporate additional items and formulate crafting recipes.
                            </p>

                        </Descriptions.Item>
                        <Descriptions.Item span={3}>
                            <Space>
                                {/* <Button className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }}> View</Button> */}
                                <Button className='tagUpdate' onClick={() => setViewInventoryStore(!viewInventoryStore)}> Add Inventory Items</Button>
                                <Button icon={<QrcodeOutlined />} className='tagUpdate' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}>Generate QRCode</Button>

                            </Space>
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
                            <InputNumber stringMode={true} min={0} step={10} />
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
                            <InputNumber stringMode={true} min={0} step={10} />
                        </Form.Item> : ''}


                        <Form.Item

                            label="Total Weight Per Case"
                            name="total_package_weight"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={10} type='number' />
                        </Form.Item>

                        <Form.Item

                            label="Stock Level"
                            name="stock_level"
                            tooltip='Average number of items to keep on hand.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={10} type='number' />
                        </Form.Item>
                        <Form.Item

                            label="Serving size"
                            name="serving_size_g"
                            tooltip='Serving size information is located on the nutritional fact sheet.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={10} type='number' />
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
                            <InputNumber stringMode={true} min={0} step={10} type='number' />
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
                                    label="Supplier"
                                    name="supplier"
                                >
                                    <Input type='text' />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
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

                                    label="Packages"
                                    name="pack"
                                    tooltip='Number of individual packages'

                                >
                                    <InputNumber min={0} step={10} />
                                </Form.Item>

                                <Form.Item

                                    label="Stock Level"
                                    name="stock_level"
                                    tooltip='Average number of items to keep on hand.'
                                >
                                    <InputNumber stringMode={true} min={0} step={10} type='number' />
                                </Form.Item>

                                <Form.Item
                                    label="Weight of single package"
                                    name="invidual_container_size"
                                    tooltip='Weight of each single packaged item.'
                                >
                                    <InputNumber min={0} step={10} />
                                </Form.Item>

                                <Form.Item

                                    label="Unit of measurement"
                                    name="unit"
                                    tooltip='Units used to measure the weight of each package.'

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

                                    label="Total Package Weight"
                                    name="total_package_weight"
                                >
                                    <InputNumber min={0} step={10} type='number' />
                                </Form.Item>
                                <Form.Item

                                    label="Serving size"
                                    name="serving_size_g"
                                    tooltip='Serving size information is located on the nutritional fact sheet.'
                                >
                                    <InputNumber min={0} step={10} type='number' />
                                </Form.Item>
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

                                    label="Price"
                                    name="price"
                                >
                                    <InputNumber min={0} step={10} type='number' />
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
            <Drawer title="Inventory QRCode" placement="right" onClose={() => { setQRCodeGenerator(!QRCodeGenerator) }} open={QRCodeGenerator}>
                <div id="myqrcode">
                    <QRCode value={`http://localhost:4000/inventory_check?business_id=${userId}`} bgColor="#fff" style={{ marginBottom: 16 }} />
                    <Button type="primary" onClick={downloadQRCode}>
                        Download
                    </Button>
                </div>
            </Drawer>


        </>

    )
}

export default StoreInventory;