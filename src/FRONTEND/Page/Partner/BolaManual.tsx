import * as React from 'react'
import { Col, Form, ConfigProvider, Button, Descriptions, Modal, Select, Space, Input, InputNumber, Table, Drawer, QRCode, Tag, Dropdown, MenuProps, Alert, Row } from 'antd'
import 'isomorphic-fetch';
import { ColumnsType } from 'antd/es/table';
import { DownOutlined, PlusOutlined, QrcodeOutlined } from '@ant-design/icons';
import * as convert from 'convert-units'


interface DataType {
    key: number | string;
    supplier: number | string;
    brand: number | string;
    description: number | string;
    category: number | string | string;
    total_package_weight: number | string;
    recommended_stock_level: number | string,
    price: number | string;
    price_per_gram: number | string;
}




const Overview: React.FC = (props) => {

    return (




        <Row justify={'center'} gutter={[0, 75]} >


            <Col xs={22} md={18}>
                <Space wrap>

                    <div className='clientPortalDiv'>


                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Overview</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    <span className='inlineTextSpanBiege'>Bite of Life Analytics (BoLA)</span> is a comprehensive tool designed to help businesses improve the health of
                                    their customers and communities. BoLA provides valuable insights into daily
                                    operations and the health implications of the food served to people.
                                    In this overview, we will discuss BoLA's features in detail to help
                                    you better understand its functionalities.
                                </p>


                            </Descriptions.Item>
                        </Descriptions>


                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Stock</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>

                                    The <span className='inlineTextSpanBiege'>Stock</span> area is a vital tool for tracking and organizing your inventory.
                                    It forms the foundation of your product development process, enabling you to input and monitor items in your stockpile.
                                    You can update your stock anytime to ensure that you always have accurate and up-to-date information.
                                </p>


                            </Descriptions.Item>

                            <Descriptions.Item span={3}>
                                <p>

                                    To add items to your stockpile , simply click on the "Create" button and enter the information available on the packaging label.
                                    After you have entered all the required details, the product will appear in a table at the bottom of the page. If you need to make any
                                    changes or add nutritional information, simply select the corresponding row in the table, click the "Edit" button located under the "Action"
                                    column and modify the necessary fields. Please note you can only edit one row at a time.



                                </p>


                            </Descriptions.Item>

                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>How to use</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>1</span> To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> Once you have entered all the required details, click the "Add Item" button, the product will then appear in the table on the page.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> To make any changes or add nutritional information, check the box located to the left of an item, click the "Edit" button located under the "Action" column, select the action and modify the necessary fields.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> Click the "Barcode" button to download a QR code for onsite inventory audits or follow the provided URL to access your audit portal.
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> Remember to keep your account PIN secure and only share it with trusted team members who regularly conduct audits.
                                </p>

                            </Descriptions.Item>












                        </Descriptions>





                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Design</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    In the <span className='inlineTextSpanBiege'>Design</span>  area,
                                    you can merge items from your stockpile that were previously added
                                    on the Stock page to create whole products. This step is fundamental
                                    in the BoLA process as it enables you to measure various metrics such as
                                    cost, waste, sales, and nutrient payload. The nutritional metrics are
                                    accessible from the "Nutrition" area, which can be found in the navigation window.
                                </p>


                            </Descriptions.Item>

                            <Descriptions.Item span={3}>
                                <p>

                                    Start designing your products by clicking the Create button and completing the form.
                                    A new record will populate in the table below when all data is submitted.
                                    To edit, check the box to the left of the "Name" column and modify the corresponding row.
                                    Please note you can only edit one row at a time.



                                </p>


                            </Descriptions.Item>

                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>How to use</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>1</span> To start designing your product, click on the "Create" button.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> A popup window will appear, prompting you to enter the necessary information.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> Enter all the required details, and click "Submit" to save your information.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> To add ingredients or make any modifications or deletions to your product, select the checkbox located in the first column of the table.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> To modify inputs or ingredients, navigate to the "Inputs" column. Click on the number in the box next to the ingredient whose weight you want to modify. A pop-up window will appear. Use the window to adjust the ingredient weight as needed.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>6</span> Once you have made the necessary changes, click "Submit" to save your information and review the updates on the table.
                                </p>

                            </Descriptions.Item>


                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>Column Definitions</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
</p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Name:</span>  is a unique identifier given to an item in your design portfolio. Customers will use this to reference product details either online or by scanning a barcode.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Cost:</span> is the amount of money  that must be spent to produce a product based on its ingredient. It excludes expenses such as labor and overhead.
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>


                                <p><span className='spanBlue'>Inputs:</span> refers to the number of ingredients and their weight in a whole product.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Total Yield:</span> refers to the total weight of a finished product when all ingredients are combined.
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Yield Per Unit:</span> refers to the portion of the final product obtained from a specific quantity of ingredients.
                                    For instance, if a company produces 10 oz of product A1 and packages 5 oz of product A1 for sale, then the Yield Per Unit will display 5oz.
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Waste:</span> is the unused portion of total yield that goes to waste due to the difference between the "Total Yield" and the "Yields Per Unit".
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Units Produced:</span> is the number of units available for sale, calculated by dividing the "Total Yield" by the "Yields Per Unit".
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Units Per Sale:</span> is the number of items packaged and sold in a single transaction.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Unit Waste:</span> is the number of units not produced due to imbalances in "Yield Per Unit" and "Units Per Sale," typically 0 or 1.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Total Sales Cycle:</span> is the expected number of sales transactions.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Retail Weight:</span> is the total weight delivered to a customer, calculated by multiplying the Yields Per Unit by the Units Per Sale.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Cost Per Sale:</span> is the total cost of a single sales cycle.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Price Per Sale:</span> is the amount paid by a customer in a single transaction cycle.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Return on Sale:</span> is the profit you make per sale. It is calculated by subtracting the "Cost Per Sale" from the "Price Per Sale".

                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Margin Per Sale:</span> represents the profit made on each sale after deducting associated costs, expressed as a percentage.
                                </p>

                            </Descriptions.Item>









                        </Descriptions>


                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Nutrition</h1>
                            </>}
                            layout="vertical">
                             <Descriptions.Item span={3}>
                            <p>
                            The Nutrition section provides detailed information about the nutrients present in the products created using the Design page. This information is similar to what is normally provided on traditional product packaging. It includes the nutrient composition of the product, which is then compared to the Daily Values (DVs) recommended by the FDA.


                            </p>

                        </Descriptions.Item>
                        <Descriptions.Item span={3}>
                            <p>
                            By comparing the nutrient content of different food products to their respective DVs, you can ensure that the nutrient levels are within a healthy range by making necessary adjustments. The DVs always appear on food labels and serve as a reference point for comparing the nutrient content of different food products. This way, you can easily determine the nutrient composition of the food product you are interested in, and make informed decisions about your diet and health.


                            </p>

                        </Descriptions.Item>



                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>How to use</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>1</span> Go to the "Design" page and locate your product's name in the first column of the table.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> Check the serving size (weight) of your product.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> Scroll left or right to view additional nutritional information about your product.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> Modify your product's nutrient content by making changes on the "Design" page.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> When you are done with the modifications, click on the "Barcode" button to download a barcode or retrieve the URL link.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>6</span> Place the barcode in a visible location so that customers can use their phone to access the nutritional information about your product or provide them with the URL link.
                                </p>

                            </Descriptions.Item>











                        </Descriptions>


                        <Descriptions
                            title={<><h1 className='h1_Header_Client_Portal'>Audit</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>

                                    The <span className='inlineTextSpanBiege'>Audit</span>  is an essential tool for keeping track of your inventory. It allows you to view the results of previous manual inventory checks and monitor your costs and purchases. To access the tool, simply click on the "Select Date" option, and the dates when previous audits were submitted will be highlighted with a beige background. To review a specific audit, select the date and access the information.



                                </p>

                             

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>
                    
                                <p>

                                    The table will display each item that was recorded during the auditing session, along with its description, availability, and purchasing amounts. The purchasing amount is the difference between the "Stock Level" you provided on the "Stock" page and the actual availability. If you need to make any changes to the availability, purchasing and audit date, or remove an item from the day's audit, simply click the box located in the first column. Once you have made all the necessary changes, click the reset button to update the calendar and view all the changes that you have made.


                                </p>


                            </Descriptions.Item>



                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>How to use</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>1</span> Click on the "Select Date" option located on the Audit page.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> The dates of previous audits will be highlighted in beige.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> Select the date you wish to review and access the information.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> The table will display each item that was recorded during the auditing session, along with its description, availability, and purchasing amounts.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> Review the table and make any necessary changes to the availability, purchasing and audit date, or remove an item from the day's audit by clicking the box located in the first column.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>6</span> Once you have made all the necessary changes, click the reset button to update the calendar and view all the changes that you have made.
                                </p>

                            </Descriptions.Item>











                        </Descriptions>







                    </div>





                </Space>



            </Col>



            {/* Nutrition Modal */}







            {/* Create Inventory Modal */}




            {/* Update Inventory Modal */}




        </Row>

    )
}

export default Overview;