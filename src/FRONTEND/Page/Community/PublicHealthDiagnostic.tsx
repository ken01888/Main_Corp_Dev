import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Select, Space, InputNumber, Row, Alert, Tooltip, Badge, DescriptionsProps, Layout } from 'antd'
import 'isomorphic-fetch';

import { Content, Header } from 'antd/es/layout/layout';
import Main_Menu from '../Components/Navigation/Main_Menu';
import Public_Footer from '../Components/Navigation/Footer';
import { ArrowLineRight, ArrowsLeftRight, GenderIntersex, HashStraight, Question, User } from '@phosphor-icons/react';

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



const PublicHealthDiagnostic: React.FC = (props) => {
    const [inventoryList, setInventoryList] = React.useState<any>([{}])
    const [business_id_number, setBusinessId] = React.useState();
    const [inventoryExist, setInventoryExist] = React.useState<boolean>()
    const [person, setPerson] = React.useState([
        "",
        {
            "status": "",
            "color": "black",
            "indicator": ''
        },
        {
            "CurrentWeight": "",
            "MinimumHealthyWeight": "",
            "MediumHealthyWeight": "",
            "MaximumHealthyWeight": ""
        },
        "",
        [
            [
                {
                    "age": 12,
                    "gender": "male",
                    "lifestyle": "Sedentary",
                    "Calories": {
                        "value": "",

                        "unit": "Kcal",
                        "dv": 2000,
                        "mc": 63
                    },
                    "Total Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 78,
                        "mc": 63
                    },
                    "Saturated Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Trans Fat": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 20,
                        "mc": 24
                    },
                    "Cholesterol": {
                        "value": "",
                        "unit": "Grams",
                        "dv": 300,
                        "mc": 525
                    },
                    "Sodium": {
                        "value": "",
                        "unit": "MG",
                        "dv": 2300,
                        "mc": 2070
                    },
                    "Carbohydrates": {
                        "value": "",
                        "unit": "G",
                        "dv": 275,
                        "mc": 158
                    },
                    "Added Sugar": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 41
                    },
                    "Fiber": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Protein": {
                        "value": "",
                        "unit": "G",
                        "dv": 50,
                        "mc": 36
                    },
                    "Vitamin D": {
                        "value": "",
                        "unit": "MCG",
                        "dv": 20,
                        "mc": 2
                    },
                    "Calcium": {
                        "value": "",
                        "unit": "MG",
                        "dv": 1300,
                        "mc": 280
                    },
                    "Iron": {
                        "value": "",
                        "unit": "MG",
                        "dv": 18,
                        "mc": 7.5
                    },
                    "Potassium": {
                        "value": "",
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
            ],

        ],
        '',
        [[
            '0', '0', '0', '0', '0', '0'
        ]]
    ])
    const [userPass, setUserPass] = React.useState(false)

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: <h3>Weight Assessment</h3>,
            children: `Weight measurements are shown in Pounds (LB). Kcal is kilocalories, a unit used to measure the energy content in food and physical activities, with 1 Kcal equal to 1 calorie.  `,
            span: 6

        },
        {
            key: '2',
            label: 'Status',
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
            span: 3,
        },
        {
            key: '3',
            label: <Space direction='horizontal'>
                Mass
                <Tooltip color='#849fd1' placement="bottom" title={"Body Mass Index (BMI), is a numeric indicator used the assess an individual weight status. The BMI categories are as follows: Underweight: BMI less than 18.5; Normal weight: BMI between 18.5 and 24.9; Overweight: BMI between 25 and 29.9; Obesity: BMI 30 or greater."}>
                    <Question size={20} weight="bold" />
                </Tooltip>

            </Space>,
            children: <Space>
                {person[0]} BMI
            </Space>
            ,
            span: 3,
        },
        {
            key: '4',
            label: 'Weight',
            children: <Space>
                {person[2]['CurrentWeight']} LB
            </Space>,
            span: 3,

        },
        {
            key: '5',
            label: 'Normal Weight Range',
            children: <Space direction='horizontal' align='start'>{person[2]['MinimumHealthyWeight'][0]}LB<ArrowsLeftRight size={16} />{person[2]['MaximumHealthyWeight'][0]}LB</Space>,
            span: 3

        },
        {
            key: '6',
            label: 'Weight Change',
            children: <Space direction='horizontal' align='start'>{person[2]['MinimumHealthyWeight'][1]}LB<ArrowsLeftRight size={16} />{person[2]['MaximumHealthyWeight'][1]}LB</Space>,
            span: 6

        },



        {
            key: '7',
            label: <Space direction='vertical'>
                <h3>Calorie Assessment and Plan</h3>
                Modify Question 5 in the form to get new results.
            </Space>,
            children: `Basal Metabolic Rate (BMR) or Minimum Energy Need indicates the lowest calorie intake necessary for maintaining vital bodily functions crucial to sustaining life. Total Daily Energy Expenditure (TDEE) or Maximum Energy Need
            indicates calories needed to support daily activities and bodily function. 
             `,
            span: 6

        },
        {
            key: '8',
            label: <Space direction='horizontal'>
                Minimum Energy Need (BMR)
                <Tooltip color='#849fd1' placement="bottom" title={"Basal Metabolic Rate (BMR) is the amount of energy expended by the body at rest in order to maintain basic physiological functions such as breathing, circulation, and cell production. It represents the minimum number of calories your body needs to support these essential functions while at complete rest. BMR is influenced by factors such as age, gender, weight, height, and body composition."}>
                    <Question size={20} weight="bold" />
                </Tooltip>

            </Space>,
            children: `${person[3]} Kcal`,
            span: 3,

        },
        {
            key: '9',
            label: <Space direction='horizontal'>
                Maximum Energy Need (TDEE)
                <Tooltip color='#849fd1' placement="bottom" title={"Total Daily Energy Expenditure varies among individuals based on factors such as age, sex, weight, metabolism, and activity level. Calories, serving as the fundamental units of energy derived from food and beverages, play a crucial role in meeting this daily need. The body relies on this energy to sustain essential physiological functions, support metabolism, facilitate nutrient absorption, and enable physical activities."}>
                    <Question size={20} weight="bold" />
                </Tooltip>

            </Space>,
            children: `${person[4][0][0]['Calories'].value} Kcal`,
            span: 3,

        },
        {
            key: '10',
            label: 'Adjustment in Maximum Energy Need (-) Less Calories; (+) More Calories; (*) Optional Adjustment',
            children: `${person[1]['indicator']} ${person[5]} Kcal`,
            span: 6,

        },
        {
            key: '11',
            label: 'Plan Weight Month 1',
            children: `${person[6][0][0]} LB`,
            span: 3,

        },
        {
            key: '12',
            label: 'Plan Weight Month 2',
            children: `${person[6][0][1]} LB`,
            span: 3,

        },
        {
            key: '13',
            label: 'Plan Weight Month 3',
            children: `${person[6][0][2]} LB`,
            span: 3,

        },
        {
            key: '14',
            label: 'Plan Weight Month 4',
            children: `${person[6][0][3]} LB`,
            span: 3,

        },
        {
            key: '15',
            label: 'Plan Weight Month 5',
            children: `${person[6][0][4]} LB`,
            span: 3,

        },
        {
            key: '16',
            label: 'Plan Weight Month 6',
            children: `${person[6][0][5]} LB`,
            span: 3,

        },
        {
            key: '17',
            label: <Space direction='vertical'>
                <h3>Calorie Assessment and Plan</h3>
                Modify Question 5 in the form to get new results.
            </Space>,
            children: `Basal Metabolic Rate (BMR) or Minimum Energy Need indicates the lowest calorie intake necessary for maintaining vital bodily functions crucial to sustaining life. Total Daily Energy Expenditure (TDEE) or Maximum Energy Need
            indicates calories needed to support daily activities and bodily function. 
             `,
            span: 6

        },
        {
            key: '18',
            label: 'Macro Nutrients',
            span: 3,
            children: (
                <>
                    Calories: {person[4][0][0]['Calories'].value} Kcal
                    <br />
                    Total Fat:  {person[4][0][0]['Total Fat'].value} G
                    <br />
                    Saturated Fat:  {person[4][0][0]['Saturated Fat'].value} G
                    <br />
                    Cholesterol:  {person[4][0][0]['Cholesterol'].value} G
                    <br /> 
                    Carbohydrates:  {person[4][0][0]['Carbohydrates'].value} G
                    <br />
                    Fiber:  {person[4][0][0]['Fiber'].value} G
                    <br />
                    Added Sugar:  {person[4][0][0]['Added Sugar'].value} G
                    <br />
                    Protein:  {person[4][0][0]['Protein'].value} G
                    <br />
    
                </>
            ),
        },
        {
            key: '19',
            label: 'Recommended Daily Nutrient Intake',
            span: 3,
            children: (
                <>
                    Sodium:  {person[4][0][0]['Sodium'].value} MG
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









    const stylePlay = () => {
        return {
            borderColor: 'blue'
        }
    }

    const onFinish = async (values: any) => {
        let newData = await fetch(`http://localhost:8080/bolatestingroute`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        const data1 = await newData.json()
        setPerson(data1)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);

    };


    return (



        <Layout className='layout'>
            <Header className='header'>

                <Main_Menu />
            </Header>
            <Layout className='homeScreenDesktop'>

                <Content >
                    <Space wrap size={[0, 100]}>

                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOtherBlue'>
                            <Col >
                                <h3>Personal Health Assessment</h3>
                            </Col>
                        </Row>

                        <Row justify={'center'} align={'top'} gutter={[0, 16]} >
                            <Col xs={22} md={20} style={{ borderBottom: '5px solid var(--light_blue)' }}>

                                <h1>Personal Health Assessment</h1>
                                <Alert
                                    description="
                                    The Personal Health Assessment (PHA) serves as a  tool for health maintenance, offering individuals a comprehensive understanding of their present health status. The PHA paints a holistic picture of an individual's well-being. To initiate this process, kindly fill out the form below, and your assessment results will be promptly displayed in the Health Scorecard section. This personalized approach empowers individuals to proactively engage with their health and make informed decisions based on the insights from the assessment.  
                                    "
                                    type="warning"
                                    className='heroText'
                                />

                            </Col>
                        </Row>




                        <Row justify={'space-evenly'} align={'middle'} gutter={[0, 50]}>
                            <Col xs={22} md={6} >

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
                                            To receive your Health Scorecard, kindly provide the requested information below. Please note that we prioritize the privacy and security of your data. If you have specific health concerns, we recommend consulting with a qualified healthcare professional for personalized advice tailored to your individual needs.                                                         "
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
                                                description="1. How old are you? Ages: [2 - 125]"
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
                                                    width: 250
                                                }} placeholder="Age" maxLength={25} prefix={<User size={20} color="#849FD1" weight="bold" />} min={2} max={125} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="2. What is your gender? "
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
                                                        width: 250

                                                    }}
                                                    variant="borderless"
                                                >
                                                    <Select.Option value="male">Male</Select.Option>
                                                    <Select.Option value="female">Female</Select.Option>
                                                </Select>
                                            </Form.Item>
                                            <Alert
                                                description="3. What is your weight - in pounds (LB)? "
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="weight"
                                                rules={[{ required: true }]}
                                                style={{ width: 250 }}
                                            >
                                                <InputNumber style={{
                                                    border: '1px solid #4D4D4F',
                                                    borderRadius: '1.5px',
                                                    fontSize: 14,
                                                    width: 250
                                                }} placeholder="Pounds" max={1000} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />
                                            </Form.Item>
                                            <Alert
                                                description="4. What is your height - in feet and inches?"
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
                                                            width: 125
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
                                                            width: 125
                                                        }} placeholder="Inches" max={11} prefix={<HashStraight size={20} color="#849FD1" weight="bold" />} min={0} type='number' />

                                                    </Form.Item>
                                                </Space.Compact>

                                            </Form.Item>
                                            <Tooltip placement="top" title={'The activity continuum ranges from a [Sedentary Lifestyle] involving minimal or no physical activity, such as sitting or lying down for most of the day, which is associated with a higher risk of health problems. Moving up, [Light Physical Activity] encompasses efforts like casual walking or light household chores that slightly increase heart rate. [Moderate Physical Activity] involves pursuits like brisk walking or cycling that raise heart rate and breathing but still allow for conversation. Progressing further, [Vigorous Physical Activity], like running or swimming, significantly raises heart rate and may impede conversation. Finally, [Very Vigorous Physical Activity], including sports training, high-intensity interval training (HIIT), or competitive sports, represents highly intense and challenging activities.'}>
                                                <Question size={20} weight="bold" />
                                            </Tooltip>

                                            <Alert
                                                description="5. Select the choice that best describes your level of activity or lifestyle?"
                                                type="warning"
                                                className='heroText'
                                            />
                                            <Form.Item
                                                name="life_style"
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
                                                        width: 250

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
                                                colonMarginRight: 2,
                                                labelBg: '#e8dac252'
                                            },

                                        },
                                        token: {
                                            borderRadiusLG: 2.5,
                                            lineWidth: 1,
                                            colorSplit: '#d9d9d9',
                                            colorTextTertiary: 'black',
                                            colorPrimaryHover: '#000000',
                                            colorBgContainer: '#fafafa'
                                        },
                                    }}
                                >




                                    <Descriptions column={6} size='small' layout='vertical' title={<h1>Health Scorecard</h1>} bordered items={items} />

                                </ConfigProvider>
                            </Col>

                        </Row>
                    </Space>

                </Content>
            </Layout>

            <Public_Footer />

        </Layout>















    )
}

export default PublicHealthDiagnostic;