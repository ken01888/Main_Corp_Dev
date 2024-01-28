import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, Dropdown, MenuProps, Popconfirm, Row, Alert, Tooltip } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'
import { CheckSquare, HashStraight, Minus, MinusSquare, PencilLine, Plus, PlusSquare, TextT, Trash, UploadSimple } from '@phosphor-icons/react';


interface DataType {
    key: number | string;
    product_name: number | string;
    total_cost: number | string;
    total_weight: number | string;
    sales_price: number | string;
    serving_size: number | string;
    units: number | string;
    total_input_count: number | string

}



const Products: React.FC = (props) => {
    const [InventoryList, setInventoryList] = React.useState<Array<DataType>>([])
    const [selectedRowAction, setSelectedRowActions] = React.useState<any>()
    const [updateInventoryForm, setUpdateInventoryForm] = React.useState<any>(false)
    const [viewInventoryStore, setViewInventoryStore] = React.useState<boolean>(false)
    const [userId, setUserId] = React.useState<number>()
    const [itemsUpdated, setItemsUpdated] = React.useState(false)
    const [addRecipes, setAddRecipes] = React.useState<boolean>(false)
    const [selectItems, setSelectItems] = React.useState([])
    const [displayAddProduct, setDisplayAddProduct] = React.useState<boolean>(false)
    const [formInputs, setFormInputs] = React.useState([])
    const [openInputsDrawer, setOpenInputsDrawer] = React.useState(false)
    const [deleteInput, setDeleteInput] = React.useState(false)




    const [addInventory] = Form.useForm();
    const [updateProduct] = Form.useForm();

    const [addFormInputs] = Form.useForm();
    const [viewEditFormInputs] = Form.useForm();









    // Retrieve Inventory information from database

    React.useEffect(() => {
        (
            async () => {
                // const user: any = await window.localStorage.getItem('user')
                // const newUser = await JSON.parse(user)
                // setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()
    }, [])






    React.useEffect(() => {
        (
            async () => {
                // const user: any = await window.localStorage.getItem('user')
                // const newUser = await JSON.parse(user)
                // setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/inventoryItemsForSelectRecipes`);

                const newData = await dataReply.json();
                setSelectItems(newData)
            }
        )()
    }, [])

    React.useEffect(() => {
        (
            async () => {
                // const user: any = await window.localStorage.getItem('user')
                // const newUser = await JSON.parse(user)
                // setUserId(newUser.id)
                const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
                const newData = await dataReply.json();
                setInventoryList(newData)
            }
        )()


    }, [viewInventoryStore, updateInventoryForm, itemsUpdated, selectedRowAction, openInputsDrawer, deleteInput])

    /* Form Inventory Add*/

    const onInsertProductName = async (values: any) => {

        const dataReply = await fetch(`http://localhost:8080/insertProductName`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const dataParse = await dataReply.json();
        addInventory.resetFields();
        setViewInventoryStore(!viewInventoryStore)

    };

    const addInput = async (values: any) => {
        const newData = values.inputs
        if (newData == undefined || newData.length <= 0) {
            addFormInputs.resetFields()
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
            addFormInputs.resetFields()
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
            const user: any = await window.localStorage.getItem('user')
            const newUser = await JSON.parse(user)
            setUserId(newUser.id)
            const dataReply = await fetch(`http://localhost:8080/getRecipeProduct`);
            const newData = await dataReply.json();
            setInventoryList(newData)
        }
        updateProduct.resetFields();


    };

    const onUpdateInput = async (values: any) => {

        const dataReply = await fetch(`http://localhost:8080/updateInputs`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        const dataReply1 = await fetch(`http://localhost:8080/getRecipeProduct`);
        const newData = await dataReply1.json();
        setInventoryList(newData)
        const dataReply2 = await fetch(`http://localhost:8080/allProductInputs?product_id=${values[0].product_id}`);
        const newData1 = await dataReply2.json();
        setSelectedRowActions(values[0].product_id)
        setFormInputs(newData1)


        setOpenInputsDrawer(!openInputsDrawer)

    };


    const rowSelection = {
        onSelect: (record, selected, selectedRows, nativeEvent) => {
            if (selected === true) {

                (
                    async () => {
                        const dataReply = await fetch(`http://localhost:8080/allProductInputs?product_id=${record.id}`);
                        const newData = await dataReply.json();
                        setSelectedRowActions(record.id)
                        setFormInputs(newData)

                    }
                )()
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
        setDeleteInput(!deleteInput)



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
                    Build
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={() => { setDisplayAddProduct(!displayAddProduct) }} >
                    Modify
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
                        Delete
                    </a>
                </Popconfirm>
            ),
        }

    ];


    const columns: ColumnsType<DataType> = [
        {
            title: 'Action',
            className: 'columnWidth',
            render: (_, record: any) => {
                if (record.id === selectedRowAction) {
                    return (
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
                            <Dropdown menu={{ items }}>
                                <Tooltip placement="topLeft" color='#849FD1' title={'Edit'}>
                                    <Button icon={<PencilLine size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack' >
                                    </Button>
                                </Tooltip>
                            </Dropdown>
                        </ConfigProvider>
                    )
                } else {
                    return (
                        ''
                    )
                }
            },
        },
        {
            title: 'Name',
            dataIndex: 'product_name',
            className: 'columnLightBlue',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Cost',
            dataIndex: 'total_cost',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_cost - b.total_cost,
            render: (_, record) => {
                return (
                    new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(record.total_cost))
                )
            }
        },
        {
            title: 'Inputs',
            dataIndex: 'total_input_count',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.total_input_count - b.total_input_count,
            render: (_, record) => {
                return (
                    <a className='inputforProducts' onClick={() => { setOpenInputsDrawer(!openInputsDrawer) }}>{record.total_input_count}</a>
                )
            }
        },
        {
            title: 'Total Yield',
            dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    convert(record.total_weight).from('g').to('oz').toFixed(1) + " oz"
                )
            }
        },
        {
            title: 'Yield Per Unit',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',
            sorter: (a: any, b: any) => a.serving_size - b.serving_size,
            render: (_, record) => {
                return (
                    convert(record.serving_size).from('g').to('oz').toFixed(1) + " oz"
                )
            }
        },

        {
            title: 'Waste',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.serving_size - b.serving_size,
            render: (_, record) => {
                return (
                    convert(Number(Number(record.total_weight) % Number(record.serving_size))).from('g').to('oz').toFixed(0) + " oz"
                )
            }
        },
        {
            title: 'Units Produced',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Math.floor((Number(record.total_weight) / Number(record.serving_size)))
                )
            }
        },
        {
            title: 'Units Per Sale',
            dataIndex: 'units',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',
            sorter: (a: any, b: any) => a.units - b.units,
        },
        {
            title: 'Unit Waste',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                return (
                    Number(Number(Number(record.total_weight) / Number(record.serving_size)) - Math.floor(Number(record.total_weight) / Number(record.serving_size))).toFixed(2)
                )
            }
        },
        {
            title: 'Total Sales Cycle',
            className: 'columnWidth',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultForCycles = Math.floor(Number((Number(record.total_weight) / Number(record.serving_size)) / Number(record.units)))
                if (resultForCycles == Infinity) {
                    return 0

                } else if (resultForCycles !== Infinity) {
                    return resultForCycles
                }
            }
        },
        {
            title: 'Retail Weight',
            dataIndex: 'serving_size',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            sorter: (a: any, b: any) => a.serving_size - b.serving_size,
            render: (_, record) => {
                return (
                    Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0) + ' oz'
                )
            }
        },
        {
            title: 'Cost Per Sale',
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
            title: 'Price Per Sale',
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
            title: 'Return on Sale',
            className: 'columnWidth',
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
            title: 'Margin Per Sale',
            className: 'columnWidth',


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


    ];



    const onDeleteInput = async (id: any) => {
        const dataReply = await fetch(`http://localhost:8080/deleteInputs`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify([id])
        });
        const newResponse = await dataReply.json()

        setDeleteInput(!deleteInput)
    }


    return (




        <Row justify={'center'} gutter={[0, 75]} >


            <Col xs={22} md={18}>
                <Space wrap>
                    <div className='clientSectionsFormat'>

                        <div >
                            <h1>Design</h1>

                            <Alert
                                description=
                                "The Design utility is a tool that enables you to create a Master Product (MP) by combining items from your stockpile. Item within your stockpile are combined to create a MP."

                                type="warning"
                                className='heroText'
                            />

                        </div>


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
                            <Space className='spaceDivForButtonOnStockPage' wrap size={[25, 25]}>
                                <Tooltip placement="topLeft" color='#849FD1' title={'Add new product'}>
                                    <Button icon={<Plus size={20} weight="bold" />} className='buttonFormBlack' onClick={() => setViewInventoryStore(!viewInventoryStore)}></Button>
                                    {/* <Button icon={<SyncOutlined  />} className='buttonBlack'></Button> */}
                                </Tooltip>


                            </Space>
                        </ConfigProvider>









                    </div>
                    <div className='tableScrollDiv'>
                        <ConfigProvider

                            theme={{
                                components: {
                                    Table: {
                                        lineWidth: 1,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                        rowSelectedHoverBg: '#fafafa',

                                    },
                                }
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




                </Space>

            </Col>





            {/* Create Inventory Modal */}






            <Modal
                title={<h1 >
                    Create Product</h1>}
                style={{ top: 10 }}
                open={viewInventoryStore}
                onCancel={() => setViewInventoryStore(!viewInventoryStore)}
                footer={null}
            >

                <Form
                    name="Recipe Item"
                    form={addInventory}
                    onFinish={onInsertProductName}
                    onFinishFailed={onFinishFailed}
                    autoComplete="on"
                    layout='vertical'
                    size='middle'




                >

                    <Alert
                        description="
                    Enter the retail name of your product.
                      "
                        type="warning"
                        className='heroText'
                    />
                    <Form.Item

                        name="product_name"
                        rules={[{ required: true, message: 'Enter details' }]}
                        tooltip='Production Name'

                    >
                        <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} type='text' placeholder="Retail Name" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                    </Form.Item>


                    <Alert
                        description="
                            How much of the overall yield comprises a single unit? - Yield Per Unit
                            "
                        type="warning"
                        className='heroText'
                    />

                    <Form.Item>
                        <Space.Compact>
                            <Form.Item
                                name={['serving_size', 'amount']}
                                initialValue={1}
                                rules={[{ required: true, message: 'Enter details' }]}
                            >
                                <InputNumber style={{
                                    border: '1px solid #4D4D4F',
                                    borderRadius: '1.5px',
                                    fontSize: 14,
                                    width: 160
                                }} placeholder="Serving Size Amount" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                            </Form.Item>
                            <Form.Item
                                name={['serving_size', 'unit']}
                                initialValue={'oz'}
                                rules={[{ required: true, message: 'Enter details' }]}
                            >
                                <Select
                                    style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }}
                                    variant='borderless'
                                    suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                    placeholder="Servicing Size Weight"

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


                    <Alert
                        description="
                            How many units are included in the total packaged for sale? - Units Per Sale
                            "
                        type="warning"
                        className='heroText'
                    />

                    <Form.Item
                        name="units"
                        rules={[{ required: true, message: 'Enter details' }]}

                    >
                        <InputNumber style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} placeholder="Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />

                    </Form.Item>


                    <Alert
                        description="
                            What is the price of the final product sold at retail? 
                            "
                        type="warning"
                        className='heroText'
                    />


                    <Form.Item

                        name="sales_price"
                        rules={[{ required: true, message: 'Enter details' }]}
                        tooltip='Retail Price'

                    >
                        <InputNumber style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} placeholder="Retail Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
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
                            <Tooltip placement="right" color='#849FD1' title={'Save'}>

                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                            </Tooltip>
                        </ConfigProvider>

                    </Form.Item>


                </Form>
            </Modal>

            {/* Update Inventory Modal */}

            <Modal
                title={<h1>
                    Add Inputs</h1>}
                style={{ top: 20 }}
                open={addRecipes}
                onCancel={() => setAddRecipes(!addRecipes)}
                footer={null}
                onOk={() => {
                    addFormInputs
                        .validateFields()
                        .then((values) => {
                            addFormInputs.resetFields();
                            setSelectedRowActions(undefined)
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Alert
                    description="
                            Combine items from your stockpile to create new products.
                            To add an item, click on the + button; click the 🗑️ (Delete) button to delete an item. Verify your inputs and click the Record button to save your build.                            "
                    type="warning"
                    className='heroText'
                />




                <Form
                    name="Input Product"
                    onFinish={addInput}
                    style={{ maxWidth: 600 }}
                    autoComplete="off"
                    form={addFormInputs}

                >
                    <Form.List name="inputs">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <div key={key}>
                                        <p className='formHeaderBlue'>
                                        </p>
                                        <Alert
                                            description="Select an item from your inventory. To add more items visit the Stock Page"
                                            type="warning"
                                            className='heroText'
                                        />
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'inventory_item_id']}
                                            rules={[{ required: true, message: 'Missing item' }]}
                                            
                                        >
                                            <Select
                                                style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 325

                                                }}
                                                variant='borderless'
                                                suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                                options={selectItems} 
                                                placeholder='Available items'
                                                />

                                        </Form.Item>
                                        <Alert
                                            description="
                                                 Enter the input weight of the item above.             
                                                  "
                                            type="warning"
                                            className='heroText'
                                        />
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'input_weight']}
                                            rules={[{ required: true, message: 'Missing item' }]}
                                        >
                                            <InputNumber style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 325
                                            }} placeholder="Weight" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                                        </Form.Item>
                                        <Alert
                                            description="
                                                 Select the unit of measure for the item above.              
                                                     "
                                            type="warning"
                                            className='heroText'
                                        />
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'unit']}
                                            rules={[{ required: true, message: 'Missing item' }]}
                                        >
                                            <Select
                                                style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 325
                                                }}
                                                variant='borderless'

                                                suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                                placeholder="Unit"
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
                                                <Tooltip placement="right" color='#849FD1' title={'Delete'}>

                                                    <Button icon={<Trash size={20} weight='bold' />} className='buttonFormBlack' onClick={() => remove(name)}></Button>
                                                </Tooltip>

                                            </ConfigProvider>
                                        </Form.Item>
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
                                        <Tooltip placement="right" color='#849FD1' title={'New Input'}>
                                            <Button icon={<Plus size={20} weight='bold' />} htmlType='button' className='buttonFormBlack' onClick={() => add()}>

                                            </Button>
                                        </Tooltip>


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
                                <Tooltip placement="right" color='#849FD1' title={'Save All'}>

                                    <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                                </Tooltip>
                            </ConfigProvider>
                        </ConfigProvider>

                    </Form.Item>


                </Form>
            </Modal>




            <Modal
                title={<h1 >
                    Modify Products</h1>}
                style={{ top: 20 }}
                open={displayAddProduct}
                onCancel={() => setDisplayAddProduct(!displayAddProduct)}
                footer={null}
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
                    <Alert
                        description="
                    Enter a new retail name for your product.
                      "
                        type="warning"
                        className='heroText'
                    />
                    <Form.Item

                        name="product_name"
                        rules={[{ required: true, message: 'Enter details' }]}
                        tooltip='Production Name'
                    >
                        <Input style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} type='text' placeholder="Retail Name" maxLength={25} showCount prefix={<TextT size={20} color="#849FD1" weight="bold" />} />
                    </Form.Item>
                    <Alert
                        description="
                            What is the new overall yield of a single unit? - Yield Per Unit
                            "
                        type="warning"
                        className='heroText'
                    />
                    <Form.Item>
                        <Space.Compact>
                            <Form.Item
                                name={['serving_size', 'amount']}
                                initialValue={1}
                                rules={[{ required: true, message: 'Enter details' }]}
                            >
                                <InputNumber style={{
                                    border: '1px solid #4D4D4F',
                                    borderRadius: '1.5px',
                                    fontSize: 14,
                                    width: 160
                                }} placeholder="Serving Size Amount" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
                            </Form.Item>
                            <Form.Item
                                name={['serving_size', 'unit']}
                                initialValue={'oz'}
                                rules={[{ required: true, message: 'Enter details' }]}
                            >
                                <Select
                                    style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 160
                                    }}
                                    variant='borderless'
                                    suffixIcon={<CheckSquare size={20} color="#849FD1" weight="bold" />}
                                    placeholder="Servicing Size Weight"

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


                    <Alert
                        description="
                            What is the new number of units included in a packaged for sale? - Units Per Sale
                            "
                        type="warning"
                        className='heroText'
                    />

                    <Form.Item
                        name="units"
                        rules={[{ required: true, message: 'Enter details' }]}

                    >
                        <InputNumber style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} placeholder="Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />

                    </Form.Item>
                    <Alert
                        description="
                            What is the new price of the final product? 
                            "
                        type="warning"
                        className='heroText'
                    />
                    <Form.Item
                        name="sales_price"
                        rules={[{ required: true, message: 'Enter details' }]}
                        tooltip='Retail Price'

                    >
                        <InputNumber style={{
                            border: '1px solid #4D4D4F',
                            borderRadius: '1.5px',
                            fontSize: 14,
                            width: 325
                        }} placeholder="Retail Price" maxLength={25} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} stringMode={true} min={0} type='number' />
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
                            <Tooltip placement="right" color='#849FD1' title={'Save'}>

                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                            </Tooltip>
                        </Form.Item>
                    </ConfigProvider>


                </Form>
            </Modal>

            <Modal
                style={{ top: 20 }}
                title={<h1 >
                    Current Inputs</h1>}
                open={openInputsDrawer}
                onCancel={() => setOpenInputsDrawer(!openInputsDrawer)}
                footer={null}
                onOk={() => {
                    addFormInputs
                        .validateFields()
                        .then((values) => {
                            addFormInputs.resetFields();
                            setSelectedRowActions(undefined)
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >



                <Form
                    name="Unpdate Inputs"
                    onFinish={onUpdateInput}
                    form={viewEditFormInputs}
                    autoComplete="on"
                    layout='vertical'
                    size='middle'
                >

                    {formInputs.map((i: any, n, a) => {

                        return (



                            <Space wrap align="start" size={[325, 5]} key={i.id}>
                                <h3>{new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD' }).format(Number(i.input_cost))}
                                </h3>


                                <Alert
                                    description="
                        The item's name.
                            "
                                    type="warning"
                                    className='heroText'
                                />
                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={i.description}
                                    name={[n, 'description']}
                                >
                                    <Select
                                        placeholder='Select Item'
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 325
                                        }}
                                        variant='borderless'

                                        options={selectItems} />
                                </Form.Item>

                                <Alert
                                    description="
                           The item's input cost.
                            "
                                    type="warning"
                                    className='heroText'
                                />
                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={convert(i.input_weight).from('g').to('oz').toFixed(0)}
                                    name={[n, 'amount']}
                                >
                                    <InputNumber style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} min={1} />
                                </Form.Item>

                                <Alert
                                    description="
                           The item's unit of measurement.
                            "
                                    type="warning"
                                    className='heroText'
                                />
                                <Form.Item
                                    noStyle
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={'oz'}
                                    name={[n, 'unit']}
                                >
                                    <Select
                                        placeholder='Unit'
                                        style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 325
                                        }}
                                        variant='borderless'

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




                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={i.id}
                                    name={[n, 'id']}
                                    hidden
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} />
                                </Form.Item>

                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={i.product_id}
                                    name={[n, 'product_id']}
                                    hidden
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} />

                                </Form.Item>
                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={i.inventory_item_id}
                                    name={[n, 'inventory_item_id']}
                                    hidden
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} />

                                </Form.Item>
                                <Form.Item
                                    rules={[{ required: true, message: 'Missing item' }]}
                                    initialValue={i.price_per_gram}
                                    name={[n, 'price_per_gram']}
                                    hidden
                                >
                                    <Input style={{
                                        border: '1px solid #4D4D4F',
                                        borderRadius: '1.5px',
                                        fontSize: 14,
                                        width: 325
                                    }} />

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
                                    <Tooltip placement="right" color='#849FD1' title={'Delete the item above'}>


                                        <Button icon={<Trash size={20} weight="bold" />} htmlType="button" className='buttonFormBlack' onClick={() => onDeleteInput(i.id)}>
                                        </Button>
                                    </Tooltip>
                                </ConfigProvider>
                                </Form.Item>

                            </Space>


                        )

                    }
                    )}
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
                            <Tooltip placement="right" color='#849FD1' title={'Save'}>
                                <Button icon={<UploadSimple size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'>
                                </Button>
                            </Tooltip>

                        </ConfigProvider>
                    </Form.Item>
                </Form>
            </Modal>



        </Row>

    )
}

export default Products;