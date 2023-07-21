import * as React from 'react'
import { Col, Image, Form, Tag, ConfigProvider, FloatButton, Button, Descriptions, Card, Timeline, Popover, Modal, Badge, Select, TimePicker, DatePicker, Space, Collapse, Input, InputNumber } from 'antd'
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






const StoreInventory: React.FC = (props) => {
    const [createStore, setCreateStore] = React.useState<boolean>(false)
    const [addInventoryStore, setInventoryStore] = React.useState<boolean>(false)
    const [buildProducts, setBuildProducts] = React.useState<boolean>(false)
    const [getStoreSelect, setGetStoresSelect] = React.useState([])
    const [storeInventory, getStoreInventory] = React.useState([])

    // React.useEffect(() => {
    //     (async () => {
    //         const dataReply = await fetch(`http://localhost:8000/getStores`)
    //         const dataParse = await dataReply.json()
    //         setGetStoresSelect(dataParse)


    //         const getNewInventory = await fetch(`http://localhost:8000/getInventoryItems`)
    //         const inventory = await getNewInventory.json()
    //         console.log(inventory)
    //         getStoreInventory(inventory)


    //     })()
    // }, [])

    const newLoader = useLoaderData()
    console.log(newLoader)




    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    let indredientFormItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (




        <><Col xs={22} md={14}>
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
                            <Button className='tagUpdate' onClick={() => { setCreateStore(!createStore); }}> Create Store</Button>
                            <Button className='tagUpdate' onClick={() => setInventoryStore(!addInventoryStore)}> Add Inventory Items</Button>
                            <Button className='tagUpdate' onClick={() => setBuildProducts(!buildProducts)}> Create Product</Button>
                        </Space>
                    </Descriptions.Item>

                </Descriptions>

                {/* Create Store Modal */}





                <Modal
                    title="Create Store"
                    style={{ top: 20 }}
                    open={createStore}
                    onCancel={() => setCreateStore(!createStore)}
                    footer={null}
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Jost',
                                colorTextTertiary: 'black',
                                colorPrimaryHover: '#b4cbd4',
                                colorBgContainerDisabled: 'ffffff',
                            },
                        }}
                    ></ConfigProvider>
                    <Form
                        name="store"
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={() => { new Inventory().onCreateStore }}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
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
                                label='Create a store name'
                                name="store_name"
                                rules={[{ required: true, message: 'Please create a store name' }]}
                            >
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item
                            >
                                <Button htmlType="submit" className='buttonBlack'>


                                    Confirm
                                </Button>
                            </Form.Item>
                        </ConfigProvider>
                    </Form>
                </Modal>







                {/* Add Inventory Modal  */}


                <Modal
                    title="Add Inventory Item"
                    style={{ top: 20 }}
                    open={addInventoryStore}
                    onCancel={() => setInventoryStore(!addInventoryStore)}
                    footer={null}
                >
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Jost',
                                colorTextTertiary: 'black',
                                colorPrimaryHover: '#b4cbd4',
                                colorBgContainerDisabled: 'ffffff',
                            },
                        }}
                    ></ConfigProvider>
                    <p>It is essential to enter this information accurately to ensure its proper usage. If you require any help with data entry, please reach out to our support team.</p>
                    <Form
                        name="Item"
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={new Inventory().onAddInventoryItems}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
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
                                label="Select store"
                                name="store_id"

                                rules={[{ required: true, message: 'You must select a store to house your inventory!' }]}
                            >
                                <Select bordered placeholder='Select store' onChange={(value) => { console.log(value) }}>
                                    {getStoreSelect.map((i: any, x, z) => (
                                        <Select.Option key={x} value={i.id} title={i.store_name} >{String(i.store_name).toLocaleUpperCase()}</Select.Option>
                                    ))}
                                </Select>

                            </Form.Item>
                            <Form.Item

                                label="Name"
                                name="item_name"
                                rules={[{ required: true, message: 'Enter the required information' }]}
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

                                label="Supplier"
                                name="supplier"
                            >
                                <Input type='text' />
                            </Form.Item>

                            <Form.Item

                                label="Price"
                                name="price"
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item

                                label="Unit of Measurement"
                                name="unit_of_measurement"
                                tooltip='Measurements are in mass units.'
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <Select
                                    style={{ width: 200 }}
                                    onChange={(value) => { console.log(value) }}
                                    options={[
                                        {
                                            label: 'Mass',
                                            options: [
                                                { label: 'Microgram', value: 'mcg' },
                                                { label: 'Milligram', value: 'mg' },
                                                { label: 'Grams', value: 'g' },
                                                { label: 'Kilogram', value: 'kg' },
                                                { label: 'Ounce', value: 'oz' },
                                                { label: 'Pound', value: 'lb' },
                                                { label: 'Megatonne', value: 'mt' },
                                                { label: 'Tonne', value: 't' },
                                            ],
                                        }

                                    ]}
                                />

                            </Form.Item>
                            <Form.Item

                                label="Total Package Weight"
                                name="package_weight"
                                tooltip='Weight will be converted into grams.'
                                rules={[{ required: true, message: 'Enter the required information' }]}
                            >
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <p>Serving information is located on the back of the package</p>

                            <Form.Item

                                label="Serving Size (g)"
                                name="serving_size"
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
                                <InputNumber min={0} step={10} type='number' />
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
                                <InputNumber min={0} step={10} type='number' />
                            </Form.Item>
                            <Form.Item
                            >
                                <Button htmlType="submit" className='buttonBlack'>

                                    Add Item
                                </Button>
                            </Form.Item>
                        </ConfigProvider>
                    </Form>
                </Modal>



                {/* Add Recipes Form */}



                <Modal
                    title="Products"
                    style={{ top: 20 }}
                    open={buildProducts}
                    onCancel={() => setBuildProducts(!buildProducts)}
                    footer={null}
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
                    ></ConfigProvider>
                    <p>Create a product by selecting items available in your store. You have the option to include up to 10 ingredients for each product.</p>
                    <Form
                        name="basic"
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={(values) => { console.log(values) }}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
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
                                label="Product Name"
                                name="product_name"
                                rules={[{ required: true, message: 'Products must have a name' }]}
                            >
                                <Input type='text' />
                            </Form.Item>
                            <Form.Item
                                label="Product Price"
                                name="price"
                                rules={[{ required: true, message: 'Products must have a price.' }]}
                            >
                                <InputNumber min={0} step={.05} type='number' />
                            </Form.Item>
                            {
                                indredientFormItem.map((i, x, a) => (
                                    <>
                                        <Form.Item
                                            label={`Ingredient ${x + 1}`}
                                            name={`ingredient_${x + 1}_id`}
                                            key={100}

                                        >
                                            <Select bordered placeholder='Select store'>
                                                {storeInventory.map((i: any, x, z) => (
                                                    <Select.Option key={x} value={i.id} title={i.brand}>{String(i.item_name).toLocaleUpperCase()}</Select.Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            key={101}
                                            label="Unit of measurement"
                                            name={`ingredient_${x + 1}_unit_of_measurement`}
                                        >
                                            <Select
                                                style={{ width: 200 }}
                                                onChange={(value) => { console.log(value) }}
                                                options={[
                                                    {
                                                        label: 'Mass',
                                                        options: [
                                                            { label: 'Microgram', value: 'mcg' },
                                                            { label: 'Milligram', value: 'mg' },
                                                            { label: 'Grams', value: 'g' },
                                                            { label: 'Kilogram', value: 'kg' },
                                                            { label: 'Ounce', value: 'oz' },
                                                            { label: 'Pound', value: 'lb' },
                                                            { label: 'Megatonne', value: 'mt' },
                                                            { label: 'Tonne', value: 't' },
                                                        ],
                                                    },
                                                

                                                ]}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            key={102}
                                            label="Weight"
                                            name={`ingredient_${x + 1}_weight_in_original_units`}
                                        >
                                            <InputNumber min={0} step={.05} type='number' />
                                        </Form.Item></>
                                ))
                            }
                            <Form.Item
                            >
                                <Button htmlType="submit" className='buttonBlack'>

                                    Add Product
                                </Button>
                            </Form.Item>
                        </ConfigProvider>
                    </Form>
                </Modal>
            </div>



        </Col>


        </>

    )
}

export default StoreInventory;