import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Tag, Dropdown, MenuProps, Popconfirm, QRCode, Drawer, Row, Alert } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    business_id: number | string,
    product_name: number | string,
    total_cost: number | string,
    total_input_count: number | string,
    total_weight: number | string,
    sales_price: number | string,
    calories: number | string,
    total_fat: number | string,
    saturated_fat: number | string,
    trans_fat: number | string,
    cholesterol: number | string,
    sodium: number | string,
    carbohydrates: number | string,
    fiber: number | string,
    sugar: number | string,
    added_sugar: number | string,
    protein: number | string,
    calcium: number | string,
    iron: number | string,
    potassium: number | string,
    vitamin_d: number | string,
    allergies: number | string,
    serving_size: number | string,
    units: number | string
}



const NutritionalInformation: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [inventoryExist, setInventoryExist] = React.useState<boolean>()
    const [userId, setUserId] = React.useState()








    // Retrieve Inventory information from database


    React.useEffect(() => {
        (
            async () => {
                let params = await new URLSearchParams(document.location.search);
                let urlid: any = await params.get("business_id");
                setBusinessId(urlid)
                const dataReply = await fetch(`/publicNutritionalInformation/${urlid}`)
                const newData = await dataReply.json();

                if (newData.length <= 0) {
                    setInventoryExist(false)
                } else if (newData.length >= 1) {
                    setInventoryExist(true)
                    setInventoryList(newData)
                }
            }
        )()
    }, [])













    const columns: ColumnsType<DataType> = [

        {
            title: 'Name',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Retail Weight',
            dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0)
                if (resultOfCalculation == 'NaN') {
                    return (
                        0 + ' oz'
                    )
                }

                return (
                    resultOfCalculation + ' oz'

                )
            }
        },
        {
            title: 'Calories from Fat',
            dataIndex: 'total_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {

                const resultOfCalculation = ((Number(record.total_fat) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 9

                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0
                    )
                }

                return (
                    resultOfCalculation.toFixed(0)

                )
            }
        },
        {
            title: 'Calories from Carbohydrates',
            dataIndex: 'carbohydrates',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            render: (_, record) => {

                const resultOfCalculation = ((Number(record.carbohydrates) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 4

                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0
                    )
                }

                return (
                    resultOfCalculation.toFixed(0)

                )
            }
        },
        {
            title: 'Calories from Protein',
            dataIndex: 'protein',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],

            render: (_, record) => {

                const resultOfCalculation = ((Number(record.protein) / Number(record.total_weight)) * (Number(record.serving_size) * Number(record.units))) * 4

                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0
                    )
                }

                return (
                    resultOfCalculation.toFixed(0)

                )
            }
        },
        {
            title: 'Total Calories',
            dataIndex: 'calories',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {

                const resultOfCalculation = Math.floor(Number((Number(record.calories) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' kcal'
                    )
                }

                return (
                    resultOfCalculation + ' kcal'

                )

            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: () => {
                return (

                    '2000 kcal'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.calories) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(resultOfCalculation) / 2000 * 100).toFixed(0)


                )

            }
        },

        {
            title: 'Total Fat',
            dataIndex: 'total_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	78 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 78 * 100).toFixed(0)


                )
            }
        },

        {
            title: 'Saturated Fat',
            dataIndex: 'saturated_fat',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.saturated_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	20 g'
                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.saturated_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 20 * 100).toFixed(0)


                )
            }
        },


        {
            title: 'Trans Fat',
            dataIndex: 'trans_fat',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.trans_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }

        },
        {
            title: 'Cholesterol ',
            dataIndex: 'cholesterol',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.cholesterol) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mg'
                    )
                }

                return (
                    resultOfCalculation + ' mg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	300 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.cholesterol) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 300 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Sodium ',
            dataIndex: 'sodium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.sodium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mg'
                    )
                }

                return (
                    resultOfCalculation + ' mg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	2300 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.sodium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 2300 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Carbohydrates ',
            className: 'columnLightBeige',

            dataIndex: 'carbohydrates',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.carbohydrates) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	275 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.carbohydrates) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 275 * 100).toFixed(0)


                )
            }
        },

        {
            title: 'Fiber ',
            dataIndex: 'fiber',
            className: 'columnLightBeige',

            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.fiber) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	28 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.fiber) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 28 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Sugar ',
            dataIndex: 'sugar',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',


            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Added Sugar ',
            dataIndex: 'added_sugar',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.added_sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	50 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.added_sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 50 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Protein ',
            dataIndex: 'protein',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.protein) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' g'
                    )
                }

                return (
                    resultOfCalculation + ' g'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	50 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.protein) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 50 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Calcium ',
            dataIndex: 'calcium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.calcium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mg'
                    )
                }

                return (
                    resultOfCalculation + ' mg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	1300 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.calcium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 1300 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Iron ',
            dataIndex: 'iron',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mg'
                    )
                }

                return (
                    resultOfCalculation + ' mg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	18 g'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.iron) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 18 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Potassium ',
            dataIndex: 'potassium',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.potassium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mg'
                    )
                }

                return (
                    resultOfCalculation + ' mg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	4700 mg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.potassium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 4700 * 100).toFixed(0)


                )
            }
        },
        {
            title: 'Vitamin D ',
            dataIndex: 'vitamin_d',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBeige',

            render: (_, record) => {
                const resultOfCalculation = Math.floor(Number((Number(record.vitamin_d) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(resultOfCalculation)) {
                    return (
                        0 + ' mcg'
                    )
                }

                return (
                    resultOfCalculation + ' mcg'

                )
            }
        },
        {
            title: 'Daily Value (DV)',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'columnLightBlue',

            render: (_, record) => {
                return (

                    '	20 mcg'



                )
            }
        },
        {
            title: '%',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            render: (_, record) => {
                const totalCalories = Math.floor(Number((Number(record.vitamin_d) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


                if (Number.isNaN(totalCalories)) {
                    return (
                        0
                    )
                }

                return (
                    (Number(totalCalories) / 20 * 100).toFixed(0)


                )
            }
        },


    ];




    return (




        <Row justify={'center'} gutter={[0, 75]} >

            <Col xs={22} md={12} className='layout'>
                <Space wrap>

                    <div className='clientPortalDiv'>


                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>{inventoryList[0].business_name}</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    K.C Morris Inc. is not responsible for the accuracy of the information provided.
                                    If you feel the information provided by {`${inventoryList[0].business_name}`} is misleading or incorrect,
                                    visit <Tag color="#000000"> <a href='https://www.kcminc.io/support'>https://www.kcminc.io/support</a></Tag>
                                    and send us a message.



                                </p>



                            </Descriptions.Item>
                            <Descriptions.Item span={1}>
                                <Alert
                                    message={<h3>Health Disclaimer</h3>}
                                    description="Before making any changes to your diet, always consult with a healthcare professional. In case of a medical emergency, call 911. "
                                    type="warning"
                                    className='alert'
                                />

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
                                },
                            }}
                        >
                            <Table
                                scroll={{ x: '-webkit-fill-available' }}
                                rowKey={(record: any) => record.id}
                                columns={columns}
                                dataSource={inventoryList}
                                pagination={{ pageSize: 10 }}
                                bordered />
                        </ConfigProvider>
                    </div>




                </Space>

            </Col>




        </Row >

    )
}

export default NutritionalInformation;