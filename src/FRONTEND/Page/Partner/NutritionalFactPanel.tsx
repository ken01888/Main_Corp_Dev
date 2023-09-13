import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table,  Tag, Dropdown, MenuProps, Popconfirm } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    product_name: number | string;
    total_cost: number | string;
    total_weight: number | string;
    sales_price: number | string;
}



const Products: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>()
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [QRCodeGenerator, setQRCodeGenerator] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [itemsUpdated, setItemsUpdated] = React.useState(false)
    const [addRecipes, setAddRecipes] = React.useState<boolean>(false)
    const [selectItems, setSelectItems] = React.useState([])
    const [displayAddProduct, setDisplayAddProduct] = React.useState<boolean>(false)
    const [addInventory] = Form.useForm();
    const [FormInputs] = Form.useForm();
    const [updateProduct] = Form.useForm();




    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])






    React.useEffect(() => {
        (
            async () => {
                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`/inventoryItemsForSelectRecipes`);
                const newData = await dataReply.json();
                setSelectItems(newData)
            }
        )()
    }, [])

    React.useEffect(() => {
        (
            async () => {

                const user: any = await window.localStorage.getItem('user')
                const newUser = await JSON.parse(user)
                setUserId(newUser.id)
                const dataReply = await fetch(`/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()


    }, [viewInventoryStore, updateInventoryForm, itemsUpdated, selectedRowAction])

    /* Form Inventory Add*/

    const onInsertProductName = async (values: any) => {
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)
        values.business_id = userId;
        const dataReply = await fetch(`/insertProductName`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();

    };

    const addInput = async (values: any) => {
        const newData = values.inputs
        if (newData == undefined || newData.length <= 0) {
            FormInputs.resetFields()
            setAddRecipes(!addRecipes)

        } else {
            values.inputs.forEach((i, n, a) => {
                i.product_id = selectedRowAction
            })
            const dataReply = await fetch(`/insertProductInputs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (dataReply.ok === true) {
                const dataReply = await fetch(`/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }

            setAddRecipes(!addRecipes)
            setItemsUpdated(!itemsUpdated)
            FormInputs.resetFields()
        }

    };

    const onUpdateProduct = async (values: any) => {
        setDisplayAddProduct(!displayAddProduct)

        const dataReply = await fetch(`/updateProductInformation`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ values, id: selectedRowAction })
        });
        const dataParse = await dataReply.json();

        if (dataParse.affectedRows === 1) {
            (
                async () => {

                    const user: any = await window.localStorage.getItem('user')
                    const newUser = await JSON.parse(user)
                    setUserId(newUser.id)
                    const dataReply = await fetch(`/getRecipeProduct`);
                    const newData = await dataReply.json();
                    setInventoryList(newData)
                }
            )()
        }
        updateProduct.resetFields();


    };


    const rowSelection = {

        onSelect: (record, selected, selectedRows, nativeEvent) => {
            if (selected === true) {
                setSelectedRowActions(record.id)
            } else if (selected == false) {
                setSelectedRowActions('')

            }
        },
        hideSelectAll: true
    };



    const itemDelete = async () => {
        const dataReply = await fetch(`/deleteProduct`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([selectedRowAction])
        });
        const newResponse = await dataReply.json()
        const deleteResponse = await fetch(`/getRecipeProduct`);
        const newData = await deleteResponse.json();
        setInventoryList(newData)

    };




    const onFinishFailed = (errorInfo: any) => {
        addInventory.resetFields();

        console.log('Failed:', errorInfo);
    };

    // const onUpdateFinishFailed = (errorInfo: any) => {
    //     updateInventory.resetFields();

    //     console.log('Failed:', errorInfo);
    // };


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a onClick={() => { setAddRecipes(!addRecipes) }} >
                    Add Ingredients
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => { setDisplayAddProduct(!displayAddProduct) }} >
                    Update Product
                </a>
            ),
        },
        {
            key: '3',
            label: (

                <Popconfirm
                    placement="top"
                    title={"Deleted Item's will be lost forever."}
                    description={'Delete selected item?'}
                    onConfirm={itemDelete}
                    okText="Yes"
                    cancelText="No"
                >
                    <a>
                        Delete Product
                    </a>
                </Popconfirm>
            ),
        },

    ];


    const columns: ColumnsType<DataType> = [
        {
            title: ' Product',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            children: [
                {
                    title: 'Name',
                    dataIndex: 'product_name',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                },
                {
                    title: 'Weight',
                    dataIndex: 'total_weight',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    render: (_, record) => {
                        return (
                            convert(record.total_weight).from('g').to('oz').toFixed() + " oz"
        
                        )
                    }
                },
                {
                    title: 'Serving Size',
                    dataIndex: 'total_input_count',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                        render: (_, record) => {
                            return (
                                <Input defaultValue={record.total_cost} type='text' />
            
                            )
                        }

                    
                },
                {
                    title: 'Servings',
                    dataIndex: 'total_input_count',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                },
              
           
             
            ]
        },


        {
            title: 'Weight',
            dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    convert(record.total_weight).from('g').to('oz').toFixed() + " oz"

                )
            }
        },
        {
            title: 'Sell Price',
            dataIndex: 'sales_price',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.sales_price))

                )
            }
        },
        {
            title: 'Final Cost',
            dataIndex: 'total_cost',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.total_cost))

                )
            }
        },
        {
            title: 'Profit ',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record: any) => {
                const pay = ((record.sales_price - record.total_cost) / record.sales_price) * 100 || 0

                return (
                    pay.toFixed(2) + '%'

                )
            }
        },

        {
            title: 'Action',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
                        <Dropdown menu={{ items }}>
                            <Button>
                                <Space>
                                    Edit
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>

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

    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        radius: 1,

        colorField: 'type', // or seriesField in some cases
        color: ['#d62728', '#2ca02c', '#000000', 'blue'],

        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [

            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'AntV\nG2Plot',
            },
        },
    };



    return (




        <><Col xs={22} md={18}>
            <Space wrap>

                <div className='clientPortalDiv'>


                    <Descriptions
                        title={<><h1 className='h1_Header_Client_Portal'>Nutritional Fact Panel</h1>
                        </>} layout="vertical">
                        <Descriptions.Item span={3}>
                            <p>
                                In order to obtain information about your products and their nutrition,
                                you need to first click <Tag color="#000000">Add Product</Tag> and share its consumer pricing details.
                                Once done, you can make changes to the product by checking the button to the left and selecting an item from the dropdown menu.
                                The finished products are created by combining items from the <Tag color="#000000">Item</Tag> page.
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
                                <Space wrap size={[25, 25]}>
                                    {/* <Button className='tagReview' onClick={() => { setViewPersonalInformation(!ViewPersonalInformation) }}> View</Button> */}
                                    <Button icon={<PlusOutlined />} className='buttonBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}>Add Product</Button>
                                    <Button icon={<QrcodeOutlined />} className='buttonBeige' onClick={() => setQRCodeGenerator(!QRCodeGenerator)}>In-Store Digital Barcode</Button>
                                </Space>
                            </ConfigProvider>



                        </Descriptions.Item>

                    </Descriptions>





                </div>
                <div className='tableScrollDiv'>
                    <ConfigProvider
                        theme={{
                            token: {
                                lineWidth: 1,
                                fontFamily: 'Jost',
                                fontSize: 14,
                                colorBorderSecondary: 'black'
                            },
                        }}
                    >
                        <Table
                            scroll={{ x: '-webkit-fill-available' }}
                            rowKey={(record: any) => record.id}
                            rowSelection={rowSelection}
                            columns={columns}
                            dataSource={InventoryList}
                            pagination={{ pageSize: 10 }}
                            bordered />
                    </ConfigProvider>
                </div>

                {/* <div>
                    <Pie {...config} />
                </div> */}


            </Space>

        </Col>





            {/* Create Inventory Modal */}






            <Modal
                title="Create Product"
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <p>Give you items identifiable name and provide pricing details.</p>
                <Form
                    name="Recipe Item"
                    form={addInventory}
                    onFinish={onInsertProductName}
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

                            label="Product name"
                            name="product_name"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item

                            label="Sell price"
                            name="sales_price"
                            rules={[{ required: true, message: 'Enter the required information' }]}
                        >
                            <Input type='text' />
                        </Form.Item>


                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Add Product
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title='Design products by combining items from the "Item" page.'
                style={{ top: 20 }}
                open={addRecipes}
                onCancel={() => setAddRecipes(!addRecipes)}
                footer={null}
                onOk={() => {
                    FormInputs
                        .validateFields()
                        .then((values) => {
                            FormInputs.resetFields();
                            setSelectedRowActions(undefined)
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >



                <Form
                    name="Input Product"
                    onFinish={addInput}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                    form={FormInputs}

                >
                    <Form.List name="inputs">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div key={key}>

                                        <p>Add Item</p>

                                        <Space style={{ display: 'flex', marginBottom: 8, flexWrap: 'wrap' }} align="baseline">
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'inventory_item_id']}
                                                rules={[{ required: true, message: 'Missing item' }]}

                                            >
                                                <Select
                                                    placeholder='Select Item'
                                                    style={{ width: 120 }}
                                                    options={selectItems} />

                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'input_weight']}
                                                noStyle
                                                label="Weight"

                                            >
                                                <InputNumber placeholder='Weight' min={0} max={9999} step={5} type='number' />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'unit']}
                                                noStyle
                                                label="Unit"

                                            >
                                                <Select
                                                    placeholder='Unit'
                                                    style={{ width: 120 }}
                                                >
                                                    <Select.Option value="mcg">mcg</Select.Option>
                                                    <Select.Option value="mg">mg</Select.Option>
                                                    <Select.Option value="g">g</Select.Option>
                                                    <Select.Option value="kg">kg</Select.Option>
                                                    <Select.Option value="oz">oz</Select.Option>
                                                    <Select.Option value="lb">lb</Select.Option>
                                                    <Select.Option value="mt">mt</Select.Option>
                                                    <Select.Option value="t">t</Select.Option>
                                                </Select>
                                            </Form.Item>







                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                        </Space>
                                    </div>
                                ))}
                                <Form.Item>
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
                                        <PlusOutlined onClick={() => add()} />

                                    </ConfigProvider>

                                </Form.Item>
                            </>
                        )}
                    </Form.List>

                    <Form.Item>
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
                            <Button htmlType="submit" className='buttonBlack'>
                                Submit
                            </Button>
                        </ConfigProvider>

                    </Form.Item>


                </Form>
            </Modal>


            <Modal
                title="Update Product"
                style={{ top: 10 }}
                open={displayAddProduct}
                onCancel={() => setDisplayAddProduct(!displayAddProduct)}
                footer={null}
            >

                <p>To start creating recipes, the first step is to name your product. Once you've accomplished this, you can proceed to input ingredients and check the total cost of the item.</p>
                <Form
                    name="Update Product"
                    form={updateProduct}
                    onFinish={onUpdateProduct}
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

                            label="Product name"
                            name="product_name"
                        >
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item

                            label="Sell price"
                            name="sales_price"
                        >
                            <InputNumber min={0} />
                        </Form.Item>


                        <Form.Item
                        >
                            <Button htmlType="submit" className='buttonBlack' >
                                Update Product
                            </Button>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Modal>



        </>

    )
}

export default Products;