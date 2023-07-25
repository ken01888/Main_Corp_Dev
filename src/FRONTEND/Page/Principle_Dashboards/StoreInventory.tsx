import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import * as dayjs from 'dayjs'
import convert from 'convert-units'
import { ColumnsType } from 'antd/es/table';


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
    const [storeInventory, setStoreInventory] = React.useState<Array<DataType>>([])
    const [selectedRow, setSelectedRow] = React.useState<any>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>(null)

    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [startingValue, setStartingValue] = React.useState(true)

    const [form] = Form.useForm();



    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                const data = await new Inventory()
                const newData = await data.getInventoryItems()
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



    /* Form Inventory Add*/

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
        form.resetFields();

    };



    /*Select table rows for update of product or delete*/



    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            setSelectedRow([selectedRows, selectedRowKeys])
            setSelectedRowActions(selectedRowKeys[0])
            setStartingValue(!startingValue)

        },
    };

    React.useEffect(() => {
        (
            async () => {
                const data = await new Inventory()
                const newData = await data.getInventoryItems()
                setStoreInventory(newData.inventory)
            }
        )()


    }, [viewInventoryStore])


    /*Form Failure*/

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    /*Form Delete */


    const onDeleteInventoryItem = async () => {
        const dataReply = await fetch(`http://localhost:8000/deleteInventoryItems`, {
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
                    setStoreInventory(newData.inventory)
                }
            )()
        }
    };


    /*Form Update */



    const onItemUpdate = async () => {
        // const dataReply = await fetch(`http://localhost:8000/updateInventoryItem`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ id: selectedRow[1][0] })
        // });
        // const dataParse = await dataReply.json();
        // if (dataParse === 1) {
        //     (
        //         async () => {
        //             const data = await new Inventory()
        //             const newData = await data.getInventoryItems()
        //             setStoreInventory(newData.inventory)
        //         }
        //     )()
        // }
        // console.log(dataParse)
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
            render: (_, record: any) => {
                if (record.id === selectedRowAction){
                    return (
                        <Space>
                            <Button htmlType="submit" onClick={onDeleteInventoryItem} className='buttonBlack' >
                                Delete {record.id}
                            </Button>
                            <Button htmlType="submit" onClick={() => { setUpdateInventoryForm(!updateInventoryForm) }} className='buttonBlack' >
                                Update
                            </Button>
                        </Space>
                    )
                } else {
                    return(
                        ''
                    )
                }
              
            }


            ,
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
                            rowSelection={rowSelection} columns={columns} dataSource={storeInventory} pagination={{ pageSize: 10 }} bordered  />
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
                    name="Add Inventory"
                    style={{ maxWidth: 600 }}
                    form={form}
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
                            <InputNumber stringMode={true} min={0} step={10} />
                        </Form.Item>
                        <Form.Item
                            label="Weight of single package"
                            name="size"
                            tooltip='Weight of each single packaged item.'
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <InputNumber stringMode={true} min={0} step={10} />
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
                    startingValue? 'hello':'no'
                }
                <Form
                    name="Update Inventory"
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