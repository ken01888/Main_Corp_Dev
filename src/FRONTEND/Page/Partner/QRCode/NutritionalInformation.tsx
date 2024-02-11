import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Tag, Dropdown, MenuProps, Popconfirm, QRCode, Drawer, Row, Alert, Layout, Divider, Tooltip, Badge, DescriptionsProps } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, InfoCircleOutlined, MinusCircleOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'
import { Content, Header } from 'antd/es/layout/layout';
import Main_Menu from '../../Components/Navigation/Main_Menu';
import Public_Footer from '../../Components/Navigation/Footer';
import { ArrowLineRight, GenderIntersex, HashStraight, Key, Question, UploadSimple, User } from '@phosphor-icons/react';

import { motion } from 'framer-motion';


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
    const [person, setPerson] = React.useState([
        "____",
        {
            "status": "____",
            "color": "black"
        },
        {
            "MinimumHealthyWeight": "____",
            "MediumHealthyWeight": "____",
            "MaximumHealthyWeight": "____"
        },
        "_____",
        [
            [
                {
                    "age": 12,
                    "gender": "male",
                    "Calories": {
                        "value": "____",
                        "unit": "Kcal",
                        "dv": 2000,
                        "mc": 63
                    },
                    "Total Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 78,
                        "mc": 63
                    },
                    "Saturated Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Trans Fat": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Cholesterol": {
                        "value": "____",
                        "unit": "Grams",
                        "dv": 300,
                        "mc": 525
                    },
                    "Sodium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 2300,
                        "mc": 2070
                    },
                    "Carbohydrates": {
                        "value": "____",
                        "unit": "G",
                        "dv": 275,
                        "mc": 158
                    },
                    "Added Sugar": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 41
                    },
                    "Fiber": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Protein": {
                        "value": "____",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Vitamin D": {
                        "value": "____",
                        "unit": "MCG",
                        "dv": 20,
                        "mc": 2
                    },
                    "Calcium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 1300,
                        "mc": 280
                    },
                    "Iron": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 18,
                        "mc": 7.5
                    },
                    "Potassium": {
                        "value": "____",
                        "unit": "MG",
                        "dv": 4700,
                        "mc": 980
                    }
                }
            ],
            [
                {
                    "Name": "age"
                },
                {
                    "Name": "gender"
                },
                {
                    "Name": "Calories",
                    "Distinct": "2123",
                    "Unit": "Kcal",
                    "DV": 2000,
                    "McDonaldsBigBreakfast": 63
                },
                {
                    "Name": "Total Fat",
                    "Distinct": "83",
                    "Unit": "Grams",
                    "DV": 78,
                    "McDonaldsBigBreakfast": 63
                },
                {
                    "Name": "Saturated Fat",
                    "Distinct": "21",
                    "Unit": "Grams",
                    "DV": 20,
                    "McDonaldsBigBreakfast": 24
                },
                {
                    "Name": "Cholesterol",
                    "Distinct": 5,
                    "Unit": "Grams",
                    "DV": 300,
                    "McDonaldsBigBreakfast": 525
                },
                {
                    "Name": "Sodium",
                    "Distinct": 1800,
                    "Unit": "MG",
                    "DV": 2300,
                    "McDonaldsBigBreakfast": 2070
                },
                {
                    "Name": "Carbohydrates",
                    "Distinct": "239",
                    "Unit": "G",
                    "DV": 275,
                    "McDonaldsBigBreakfast": 158
                },
                {
                    "Name": "Added Sugar",
                    "Distinct": "48",
                    "Unit": "G",
                    "DV": 50,
                    "McDonaldsBigBreakfast": 41
                },
                {
                    "Name": "Protein",
                    "Distinct": "53",
                    "Unit": "G",
                    "DV": 50,
                    "McDonaldsBigBreakfast": 36
                },
                {
                    "Name": "Vitamin D",
                    "Distinct": 600,
                    "Unit": "MCG",
                    "DV": 20,
                    "McDonaldsBigBreakfast": 2
                },
                {
                    "Name": "Calcium",
                    "Distinct": 1300,
                    "Unit": "MG",
                    "DV": 1300,
                    "McDonaldsBigBreakfast": 280
                },
                {
                    "Name": "Iron",
                    "Distinct": 8,
                    "Unit": "MG",
                    "DV": 18,
                    "McDonaldsBigBreakfast": 7.5
                },
                {
                    "Name": "Potassium",
                    "Distinct": 2500,
                    "Unit": "MG",
                    "DV": 4700,
                    "McDonaldsBigBreakfast": 980
                }
            ]
        ]
    ])
    const [userPass, setUserPass] = React.useState(false)

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Weight Status',
            children: <ConfigProvider
                theme={{
                    components: {
                        Badge: {
                            statusSize: 16
                        },
                    },
                }}
            >
                <Badge status="processing" text={person[1]['status']} color={person[1]['color']} />
            </ConfigProvider>,
            span: 1,
        },
        {
            key: '2',
            label: `Body Mass Index`,
            children: `${person[0]} BMI`,
            span: 1,
        },
        {
            key: '3',
            label: 'Basal Metabolic Rate',
            children: `${person[3]}Kcal`,
        },
        {
            key: '4',
            label: 'Healthy Low Weight',
            children: `${person[2]['MinimumHealthyWeight']}LB`,
        },
        {
            key: '5',
            label: 'Healthy Medium Weight',
            children: `${person[2]['MediumHealthyWeight']}LB`,
            span: 1,
        },
        {
            key: '6',
            label: 'Healthy High Weight',
            children: `${person[2]['MaximumHealthyWeight']} LB`,
        },
        {
            key: '7',
            label: 'Recommended Daily Nutrient Intake',
            span: 3,
            children: (
                <>
                    Calories: {person[4][0][0]['Calories'].value} Kcal
                    <br />
                    Total Fat:  {person[4][0][0]['Total Fat'].value} G
                    <br />
                    Saturated Fat:  {person[4][0][0]['Saturated Fat'].value} G
                    <br />
                    Cholesterol:  {person[4][0][0]['Calories'].value} G
                    <br />
                    Sodium:  {person[4][0][0]['Calories'].value} MG
                    <br />
                    Carbohydrates:  {person[4][0][0]['Calories'].value} G
                    <br />
                    Fiber:  {person[4][0][0]['Fiber'].value} G
                    <br />
                    Added Sugar:  {person[4][0][0]['Added Sugar'].value} G
                    <br />

                    Protein:  {person[4][0][0]['Protein'].value} G
                    <br />
                    Vitamin {person[4][0][0]['Vitamin D'].value} MCG
                    <br />
                    Calcium:  {person[4][0][0]['Calcium'].value} MG
                    <br />
                    Iron:  {person[4][0][0]['Iron'].value} MG
                    <br />
                    Potassium:  {person[4][0][0]['Potassium'].value} MG
                    <br />
                </>
            ),
        },
    ];







    // Retrieve Inventory information from database


    // React.useEffect(() => {
    //     (
    //         async () => {
    //             let params = await new URLSearchParams(document.location.search);
    //             let urlid: any = await params.get("business_id");
    //             setBusinessId(urlid)
    //             const dataReply = await fetch(`/publicNutritionalInformation/${urlid}`)
    //             const newData = await dataReply.json();
    //             console.log(newData)
    //             if (newData.length <= 0) {
    //                 setInventoryExist(false)
    //             } else if (newData.length >= 1) {
    //                 setInventoryExist(true)
    //                 setInventoryList(newData)
    //             }
    //         }
    //     )()
    // }, [])



    const stylePlay = () => {
        return {
            borderColor: 'blue'
        }
    }

    const onFinish = async (values: any) => {
        let params = await new URLSearchParams(document.location.search);
        let urlid: any = await params.get("business_id");
        values.business_Id = urlid
        setBusinessId(urlid)
        let newData = await fetch(`/bolatestingroute/${urlid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })

        const data1 = await newData.json()
        console.log(data1)
        setPerson(data1)

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);

    };







    const columns: ColumnsType<DataType> = [

        {
            title: 'Name',
            dataIndex: 'product_name',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        },
        {
            title: 'Quality',
            // dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            width: 144,
            render: (_, record) => {
                const resultOfCalculation = Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0)
                // if (resultOfCalculation == 'NaN') {
                //     return (
                //         "A"
                //     )
                // }

                // return (
                //     "A"

                // )
                return (
                    <h3>H +</h3>


                )
            }
        },
        {
            title: 'Retail Weight',
            dataIndex: 'total_weight',
            responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            className: 'nutrientTableHeader',
            render: (_, record) => {
                const resultOfCalculation = Number(Number(convert(record.serving_size).from('g').to('oz')) * Number(record.units)).toFixed(0)
                if (resultOfCalculation == 'NaN') {
                    return (
                        0 + ' oz'
                    )
                }

                return (
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: 'Jost',
                                colorTextTertiary: 'black',
                                colorPrimaryHover: '#000000',
                                colorBgContainer: '#fafafa',
                                colorSplit: "black",
                                lineWidth: 15
                            },
                            components: {
                                Divider: {
                                    textPaddingInline: 1,
                                    verticalMarginInline: 1
                                },
                            }

                        }}
                    >
                        <Space className='nutrientTableHeaderandColumnDesign'>


                            <Space>
                                <h3> {resultOfCalculation}oz</h3>

                            </Space>

                            <Space align='start' split={<Divider type="vertical" style={stylePlay()} />}>
                                <p className='moveToForward'>A</p>
                                <p className='moveToForward'>100%</p>
                            </Space>
                        </Space>

                    </ConfigProvider>


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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: () => {
        //         return (

        //             '2000 kcal'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const resultOfCalculation = Math.floor(Number((Number(record.calories) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))

        //         if (Number.isNaN(resultOfCalculation)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(resultOfCalculation) / 2000 * 100).toFixed(0)


        //         )

        //     }
        // },

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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	78 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.total_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 78 * 100).toFixed(0)


        //         )
        //     }
        // },

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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	20 g'
        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.saturated_fat) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 20 * 100).toFixed(0)


        //         )
        //     }
        // },


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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	300 mg'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.cholesterol) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 300 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	2300 mg'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.sodium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 2300 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	275 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.carbohydrates) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 275 * 100).toFixed(0)


        //         )
        //     }
        // },

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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	28 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.fiber) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 28 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	50 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.added_sugar) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 50 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	50 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.protein) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 50 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	1300 mg'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.calcium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 1300 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	18 g'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.iron) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 18 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	4700 mg'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.potassium) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 4700 * 100).toFixed(0)


        //         )
        //     }
        // },
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
        // {
        //     title: 'Daily Value (DV)',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     className: 'columnLightBlue',

        //     render: (_, record) => {
        //         return (

        //             '	20 mcg'



        //         )
        //     }
        // },
        // {
        //     title: '%',
        //     responsive: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        //     render: (_, record) => {
        //         const totalCalories = Math.floor(Number((Number(record.vitamin_d) / Number(record.total_weight)) * Number(record.serving_size) * Number(record.units)))


        //         if (Number.isNaN(totalCalories)) {
        //             return (
        //                 0
        //             )
        //         }

        //         return (
        //             (Number(totalCalories) / 20 * 100).toFixed(0)


        //         )
        //     }
        // },


    ];




    return (











        <Row justify={'center'} gutter={[0, 25]} style={{ marginTop: 50 }}>
            <Header className='header'>
                <Main_Menu />
            </Header>
            {userPass ? <><Col xs={22} md={14} >
                <Space wrap>

                    <div className='clientSectionsFormat'>
                        <div>
                            <h1>{inventoryList[0].business_name}</h1>
                            <Alert
                                description={` K.C Morris Inc. is not responsible for the accuracy of the information provided.
                                If you feel the information provided is misleading or incorrect,
                                contact our support center to report your concerns.`}
                                type="warning"
                                className='heroText' />

                            <Alert
                                message={<h1>Disclaimer</h1>}
                                description="Before making any changes to your diet, always consult with a healthcare professional. In case of a medical emergency, call 911. "
                                type="warning"
                                className='heroText' />

                        </div>

                    </div>






                </Space>

            </Col><Col xs={22} md={14}>

                    <div className='tableScrollDiv'>


                        <ConfigProvider
                            theme={{
                                components: {
                                    Table: {
                                        lineWidth: 1,
                                        fontFamily: 'Jost',
                                        fontSize: 14,
                                        headerBorderRadius: 2.5,
                                        borderColor: '#4d4d4f',
                                        // colorPrimary: '#00b96b',
                                        // colorBgContainer: '#f6ffed',
                                    }
                                },
                            }}
                        >
                            <Table
                                scroll={{ x: '-webkit-fill-available' }}
                                rowKey={(record: any) => record.id}
                                columns={columns}
                                dataSource={inventoryList}
                                pagination={{ pageSize: 10 }}
                                bordered={true} />
                        </ConfigProvider>
                    </div>



                </Col></> :
                <Row justify={'space-evenly'} align={'middle'} gutter={[0, 100]} style={{ marginTop: 100 }}>
                    <Col xs={22} md={8} className='layout'>

                        <motion.div className='form_login' initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}>
                            < Form
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="on"
                                size='middle'
                                className='formStyles'
                            >
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
                                <Alert
                                    description="
                                We make it easy for you to gauge your health and maintain it by providing insight into your current state of life. Enter some basic demographic information to receive metrics and analysis related to your health."
                                    type="warning"
                                    className='heroText'
                                />

                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorPrimary: '#d9d9d9',
                                            lineWidth: 1,
                                            fontFamily: 'Jost',
                                            fontSize: 14,

                                        },
                                    }}
                                >
                                    <Alert
                                        description="How old are you?"
                                        type="warning"
                                        className='heroText'
                                    />
                                    <Form.Item
                                        name="age"
                                        rules={[{ required: true }]}
                                        style={{ width: '17rem' }}
                                    >
                                        <InputNumber style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 325
                                        }} placeholder="Age" maxLength={25} prefix={<User size={20} color="#849FD1" weight="bold" />} min={2} max={75} type='number' />
                                    </Form.Item>
                                    <Alert
                                        description="What is your gender? "
                                        type="warning"
                                        className='heroText'
                                    />
                                    <Form.Item
                                        name="gender"
                                        rules={[{ required: true }]}
                                        style={{ width: '17rem' }}
                                    >
                                        <Select
                                            suffixIcon={<GenderIntersex size={20} color="#849FD1" weight="bold" />}
                                            placeholder="Gender:"
                                            style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 325

                                            }}
                                            variant="borderless"
                                        >
                                            <Select.Option value="male">Male</Select.Option>
                                            <Select.Option value="female">Female</Select.Option>
                                        </Select>
                                    </Form.Item>
                                    <Alert
                                        description="What is your weight - in pounds (lb)? "
                                        type="warning"
                                        className='heroText'
                                    />
                                    <Form.Item
                                        name="weight"
                                        rules={[{ required: true }]}
                                        style={{ width: 325 }}
                                    >
                                        <InputNumber style={{
                                            border: '1px solid #4D4D4F',
                                            borderRadius: '1.5px',
                                            fontSize: 14,
                                            width: 325
                                        }} placeholder="Pounds" max={1000} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                    </Form.Item>
                                    <Alert
                                        description="What is your height - in feet and inches?"
                                        type="warning"
                                        className='heroText'
                                    />
                                    <Form.Item>
                                        <Space.Compact>
                                            <Form.Item
                                                name={['height', 'feet']}
                                                rules={[{ required: true, message: 'Enter details' }]}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 162.5
                                                }} placeholder="Feet" max={10} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                            </Form.Item>
                                            <Form.Item
                                                name={['height', 'inches']}
                                                rules={[{ required: true, message: 'Enter details' }]}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 162.5
                                                }} placeholder="Inches" max={11} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />

                                            </Form.Item>
                                        </Space.Compact>

                                    </Form.Item>
                                    <Tooltip placement="top" title={'The activity continuum ranges from a [Sedentary Lifestyle] involving minimal or no physical activity, such as sitting or lying down for most of the day, which is associated with a higher risk of health problems. Moving up, [Light Physical Activity] encompasses efforts like casual walking or light household chores that slightly increase heart rate. [Moderate Physical Activity] involves pursuits like brisk walking or cycling that raise heart rate and breathing but still allow for conversation. Progressing further, [Vigorous Physical Activity], like running or swimming, significantly raises heart rate and may impede conversation. Finally, [Very Vigorous Physical Activity], including sports training, high-intensity interval training (HIIT), or competitive sports, represents highly intense and challenging activities.'}>
                                        <Question size={20} weight="bold" />
                                    </Tooltip>

                                    <Alert
                                        description="Select the choice that best describes your level of activity or lifestyle?"
                                        type="warning"
                                        className='heroText'
                                    />
                                    <Form.Item
                                        name="_LevelOfActiviey"
                                        rules={[{ required: true }]}
                                        style={{ width: '17rem' }}


                                    >
                                        <Select
                                            suffixIcon={<GenderIntersex size={20} color="#849FD1" weight="bold" />}
                                            placeholder="Lifestyle:"
                                            style={{
                                                border: '1px solid #4D4D4F',
                                                borderRadius: '1.5px',
                                                fontSize: 14,
                                                width: 325

                                            }}
                                            variant="borderless"
                                        >
                                            <Select.Option value="Sedentary">Sedentary Lifestyle</Select.Option>
                                            <Select.Option value="Light activity">Light Physical Activity</Select.Option>
                                            <Select.Option value="Moderately active">Moderate Physical Activity</Select.Option>

                                            <Select.Option value="Very active">Vigorous Physical Activity</Select.Option>

                                            <Select.Option value="Extra active">Very Vigorous Physical Activity</Select.Option>

                                        </Select>
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
                                                <Button icon={<ArrowLineRight size={20} weight="bold" />} htmlType="submit" className='buttonFormBlack'></Button>
                                            </Tooltip>
                                        </ConfigProvider>

                                    </Form.Item>

                                </ConfigProvider>
                            </Form>


                        </motion.div>

                    </Col>
                    <Col xs={22} md={8} >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Descriptions: {
                                        /* here is your component tokens */
                                    },

                                },
                                token: {
                                    borderRadiusLG: 2.5,
                                    lineWidth: 1,
                                    colorSplit: '#4D4D4F'
                                },
                            }}
                        >
                            <Descriptions layout='vertical' title="Health Scorecard" bordered items={items} />
                    
                        </ConfigProvider>

                    </Col>

                </Row>
            }









        </Row >





    )
}

export default NutritionalInformation;