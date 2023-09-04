import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Tooltip, Dropdown, MenuProps, Popconfirm, message } from 'antd'
import 'isomorphic-fetch';
import { Inventory } from '../../Program_Flow/Inventory_Flow'
import { ColumnsType } from 'antd/es/table';
import { DeleteOutlined, DownOutlined, EditOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined, TableOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'
import { Pie } from '@ant-design/plots';


interface DataType {
    key: number | string;
    product_name: number | string;
    total_cost: number | string;
    total_weight: number | string;
    sales_price: number | string;
    serving_size: number | string;
    units: number | string

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
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
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
                const dataReply = await fetch(`http://localhost:8080/inventoryItemsForSelectRecipes`);

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
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
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
        const dataReply = await fetch(`http://localhost:8080/insertProductName`, {
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
            const dataReply = await fetch(`http://localhost:8080/insertProductInputs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            if (dataReply.ok === true) {
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
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

        const dataReply = await fetch(`http://localhost:8080/updateProductInformation`, {
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
                    const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
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
        const dataReply = await fetch(`http://localhost:8080/deleteProduct`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([selectedRowAction])
        });
        const newResponse = await dataReply.json()
        const deleteResponse = await fetch(`http://localhost:8080/getRecipeProduct`);
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
                    title={"Deleted items will be lost forever."}
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
            title: 'Name',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',
            fixed: 'left',



        },

        {
            title: 'Production',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            children: [

                {
                    title: 'Inputs',
                    dataIndex: 'total_input_count',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    sorter: (a: any, b: any) => a.total_input_count - b.total_input_count,
                },
                {
                    title: 'Cost',
                    dataIndex: 'total_cost',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    sorter: (a: any, b: any) => a.total_cost - b.total_cost,
                    render: (_, record) => {
                        return (
                            '$' + record.total_cost

                        )
                    }
                },
                {
                    title: 'Weight',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    children: [
                        {
                            title: 'Manufactured',
                            dataIndex: 'total_weight',
                            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                            render: (_, record) => {
                                return (
                                    convert(record.total_weight).from('g').to('oz').toFixed() + " oz"

                                )
                            }
                        },

                        {
                            title: 'Packaged',
                            dataIndex: 'serving_size',
                            className: 'columnLightBlue',

                            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                            render: (_, record) => {
                                return (
                                    convert(record.serving_size).from('g').to('oz').toFixed() + " oz"

                                )
                            }
                        },

                    ]
                },






            ]
        },
        {
            title: 'Units',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            children: [
                {
                    title: 'Made',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    render: (_, record) => {
                        return (
                            (Number(record.total_weight) / Number(record.serving_size)).toFixed(0)

                        )
                    }
                },

                {
                    title: 'Per Sale ',
                    dataIndex: 'units',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    className: 'columnLightBlue',
                    sorter: (a: any, b: any) => a.units - b.units,

                    render: (_, record) => {
                        return (
                            record.units


                        )
                    }
                },
                {
                    title: 'Waste',
                    dataIndex: 'sales_price',
                    sorter: (a: any, b: any) => a.sales_price - b.sales_price,
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

                    render: (_, record) => {
                        return (
                            Number(Number((Number(record.total_weight) / Number(record.serving_size)) / Number(record.units)) - Math.floor(Number((Number(record.total_weight) / Number(record.serving_size)) / Number(record.units)))).toFixed(2)

                        )
                    }
                },
                {
                    title: 'Cycles',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    render: (_, record) => {


                        return (
                            Math.floor(Number((Number(record.total_weight) / Number(record.serving_size)) / Number(record.units)))
                        )


                    }
                }

            ]
        },

        {
            title: 'Per Sale',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            children: [
                {
                    title: 'Cost',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    render: (_, record) => {


                        let productionCost = record.total_cost
                        let units = record.units
                        let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                        let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield)))
                        let costConversion = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(finalCost))
                        if (costConversion == '$NaN') {
                            return (
                                new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(0))
                            )
                        } else {
                            return (
                                costConversion
                            )
                        }

                    }
                },


                {
                    title: 'Price',
                    dataIndex: 'sales_price',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    className: 'columnLightBlue',
                    sorter: (a: any, b: any) => a.sales_price - b.sales_price,


                    render: (_, record) => {
                        return (
                            new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.sales_price))

                        )
                    }
                },
                {
                    title: 'Return',
                    dataIndex: 'sales_price',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    sorter: (a: any, b: any) => a.sales_price - b.sales_price,


                    render: (_, record) => {
                        let productionCost = record.total_cost
                        let units = record.units
                        let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                        let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield))) || 0
                        let totalReturn = Number(record.sales_price) - finalCost

                        return (

                            new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(totalReturn))

                        )
                    }
                },
                {
                    title: 'Margin ',
                    responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    sorter: (a: any, b: any) => a.sales_price - b.sales_price,

                    render: (_, record: any) => {
                        let productionCost = record.total_cost
                        let units = record.units
                        let productionYield = Number(Number(record.total_weight) / Number(record.serving_size)).toFixed(0)
                        let finalCost: any = (Number(productionCost) * Number(Number(units) / Number(productionYield))) || 0
                        let margin = (Number(record.sales_price) - Number(finalCost)) / Number(record.sales_price)

                        return (

                            new Intl.NumberFormat("en-US", {
                                style: "percent",
                            }).format(margin)

                        )
                    }
                },
            ]


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
                        title={<><h1 className='h1_Header_Client_Portal'>Products</h1>
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
                    layout='vertical'
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

                            label="What would you like to name your retail product? (Name)"
                            name="product_name"
                            rules={[{ required: true, message: 'Enter details' }]}
                            tooltip='Production Name'

                        >
                            <Input type='text' />
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Production</h3>


                        <p className='breadcrumbsForm'>Production <span>▶︎</span> Weight <span>▶︎</span> Packaged</p>
                        <Form.Item label={`${`How much of the manufactured weight is individually packaged? 
                                         \n Set the weight to the manufactured weight if selling one unit.`}`}
                            tooltip='Package Weight'
                        >
                            <Space.Compact>

                                <Form.Item
                                    name={['serving_size', 'amount']}
                                    initialValue={1}
                                    rules={[{ required: true, message: 'Enter details' }]}


                                >
                                    <InputNumber min={1} />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}
                                    initialValue={'oz'}
                                    rules={[{ required: true, message: 'Enter details' }]}


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
                            </Space.Compact>
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Units</h3>
                        <p className='breadcrumbsForm'> Units <span>▶︎</span> Per Sale</p>

                        <Form.Item

                            label="What is the number of Units Manufactured that can be sold in a single transaction?"
                            tooltip='Retail Units'

                            name="units"
                            rules={[{ required: true, message: 'Enter details' }]}

                        >
                            <InputNumber min={0} />
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Sales</h3>

                        <p className='breadcrumbsForm'> Per Sale <span>▶︎</span> Price</p>


                        <Form.Item

                            label="What is the price that consumers will pay for your product? (Price)"
                            name="sales_price"
                            rules={[{ required: true, message: 'Enter details' }]}
                            tooltip='Retail Price'

                        >
                            <InputNumber min={0} />
                        </Form.Item>




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
                            <Form.Item
                            >
                                <Button htmlType="submit" className='buttonBlack' >
                                    Add Product
                                </Button>
                            </Form.Item>
                        </ConfigProvider>

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


            <Drawer
                title="Update Product"
                style={{ top: 10 }}
                open={displayAddProduct}
                onClose={() => setDisplayAddProduct(!displayAddProduct)}
                footer={null}
                mask={false}
            >

                <Form
                    name="Update Product"
                    form={updateProduct}
                    onFinish={onUpdateProduct}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='vertical'
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

                            label="What would you like to name your retail product? (Name)"
                            name="product_name"
                            tooltip='Production Name'

                        >
                            <Input type='text' />
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Production</h3>


                        <p className='breadcrumbsForm'>Production <span>▶︎</span> Weight <span>▶︎</span> Packaged</p>
                        <Form.Item label={`${`How much of the manufactured weight is individually packaged? 
             \n Set the weight to the manufactured weight if selling one unit.`}`}
                            tooltip='Package Weight'
                        >
                            <Space.Compact>

                                <Form.Item
                                    name={['serving_size', 'amount']}


                                >
                                    <InputNumber min={1} />
                                </Form.Item>
                                <Form.Item
                                    name={['serving_size', 'unit']}


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
                            </Space.Compact>
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Units</h3>
                        <p className='breadcrumbsForm'> Units <span>▶︎</span> Per Sale</p>

                        <Form.Item

                            label="What is the number of Units Manufactured that can be sold in a single transaction?"
                            tooltip='Retail Units'
                            name="units"

                        >
                            <InputNumber min={0} />
                        </Form.Item>
                        <h3 className='productionPageFormParagraph'>Sales</h3>

                        <p className='breadcrumbsForm'> Per Sale <span>▶︎</span> Price</p>


                        <Form.Item

                            label="What is the price that consumers will pay for your product? (Price)"
                            name="sales_price"
                            tooltip='Retail Price'

                        >
                            <InputNumber min={0} />
                        </Form.Item>


                        <Form.Item
                        >
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
                                    Update Product
                                </Button>
                            </ConfigProvider>
                        </Form.Item>
                    </ConfigProvider>
                </Form>
            </Drawer>



        </>

    )
}

export default Products;