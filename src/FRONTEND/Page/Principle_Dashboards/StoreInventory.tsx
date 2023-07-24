import * as React from 'react'
import { Col, Image, Form, Tag, ConfigProvider, FloatButton, Button, Descriptions, Card, Timeline, Popover, Modal, Badge, Select, TimePicker, DatePicker, Space, Collapse, Input, InputNumber, Table } from 'antd'
import 'isomorphic-fetch';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import admin from '../400ppi/notary.png'
import inventory from '../400ppi/inventory.png'

import { QuestionCircleOutlined, SearchOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import { RangePickerProps } from 'antd/es/date-picker';
import { CalendarBlank, CalendarCheck } from '@phosphor-icons/react'
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import * as dayjs from 'dayjs'
import convert from 'convert-units'
import { ColumnsType } from 'antd/es/table';


interface DataType {
    key: number;
    supplier: string;
    brand: string;
    description: string;
    pack: number;
    size: number;
    unit: string;
    category: string;
    total_package_weight: number;
    serving_size_g: number;
    price: number;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Supplier',
        dataIndex: 'supplier',
        // render: (text) => <a>{text}</a>,
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
        title: 'Size',
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

        render: (_, record) => (
            <Space size="middle">
                <a>Delete</a>
            </Space>
        ),
    },
];




// rowSelection object indicates the need for row selection



const StoreInventory: React.FC = (props) => {
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [buildProducts, setBuildProducts] = React.useState<boolean>(false)
    const [storeInventory, setStoreInventory] = React.useState([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])


    React.useEffect(() => {
        (
            async () => {
                const data = await new Inventory()
                const newData = await data.getInventoryItems()
                console.log(newData.inventory)
                setStoreInventory(newData.inventory)
            }
        )()


    }, [])


    React.useEffect(() => {
        (
            async () => {
                const data = await new Inventory()
                const newData = await data.getInventoryItems()
                setStoreInventory(newData.inventory)
            }
        )()


    }, [viewInventoryStore])

    const onAddInventoryItems = async (values: any) => {
        const dataReply = await fetch(`http://localhost:8000/insertInventoryItems`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();
        setViewInventoryStore(!viewInventoryStore)
    };




    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setSelectedRow(selectedRowKeys)
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },

    };

    const onDeleteInventoryItem = async () => {
        console.log(selectedRow)
        const dataReply = await fetch(`http://localhost:8000/deleteInventoryItems`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: selectedRow[0] })
        });
        const dataParse = await dataReply.json();
        if (dataParse === 1){
            (
                async () => {
                    const data = await new Inventory()
                    const newData = await data.getInventoryItems()
                    setStoreInventory(newData.inventory)
                }
            )()
        }
        console.log(dataParse)
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Supplier',
            dataIndex: 'supplier',
            // render: (text) => <a>{text}</a>,
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
            title: 'Size',
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

            render: (_, record) => (
                <Button htmlType="submit" onClick={onDeleteInventoryItem} className='buttonBlack' >
                   Delete
                </Button>
            ),
        },
    ];







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
                            </Space>
                        </Descriptions.Item>

                    </Descriptions>





                </div>
                <div>
                    <ConfigProvider
                        theme={{
                            token: {
                                // colorPrimaryHover: '#B4CBD4',
                                lineWidth: 2,
                                fontFamily: 'Jost',
                                fontSize: 14,
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table rowKey={(record: any) => record.id}
                            rowSelection={rowSelection} columns={columns} dataSource={storeInventory} pagination={{ pageSize: 10 }} bordered />
                    </ConfigProvider>
                </div>


            </Space>

        </Col>



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
                    name="Inventory"
                    style={{ maxWidth: 600 }}
                    initialValues={{ reset: true }}
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
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber min={0} step={10} />
                        </Form.Item>
                        <Form.Item
                            label="Weight of single package"
                            name="size"
                            tooltip='Weight of each single packaged item.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber min={0} step={10} />
                        </Form.Item>
                        <Form.Item

                            label="Unit of measurement"
                            name="unit"
                            tooltip='Units used to measure the weight of each package.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
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
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber min={0} step={10} type='number' />
                        </Form.Item>
                        <Form.Item

                            label="Serving size"
                            name="serving_size_g"
                            tooltip='Serving size information is located on the nutritional fact sheet.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber min={0} step={10} type='number' />
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
                            <InputNumber min={0} step={10} type='number' />
                        </Form.Item>
                        {/* <p>Serving information is located on the back of the package</p>

                            <Form.Item

                                label="Serving Size (grams)"
                                name="serving_size_g"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>

                            <Form.Item

                                label="Calories"
                                name="calories"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                                <Select defaultValue="USD" style={{ width: 60 }}>
                                    <Select.Option value="USD">$</Select.Option>
                                    <Select.Option value="EUR">€</Select.Option>
                                    <Select.Option value="GBP">£</Select.Option>
                                    <Select.Option value="CNY">¥</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item

                                label="Total Fat"

                                name="total_fat"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>

                            <Form.Item

                                label="Saturated Fat"
                                name="saturated_fat"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <Input onChange={(value) => console.log('changed', value)} min={0} step={10} type='number' />
                            </Form.Item>

                            <Form.Item

                                label="Trans Fat"
                                name="trans_fat"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>

                            <Form.Item

                                label="Cholesterol"
                                name="cholesterol"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>

                            <Form.Item

                                label="Sodium"
                                name="sodium"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Carbohydrates"
                                name="carbohydrates"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Sugar"
                                name="sugar"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Added Sugar"
                                name="added_sugar"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Protein"
                                name="protein"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Fiber"
                                name="fiber"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Vitamin D"
                                name="vitamin_d"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Calcium"
                                name="calcium"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Potassium"
                                name="potassium"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                                label="Iron"
                                name="iron"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' /> */}
                        {/* </Form.Item> */}
                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >

                                Add Item
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>


        </>

    )
}

export default StoreInventory;