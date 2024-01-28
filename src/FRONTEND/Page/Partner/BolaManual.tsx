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
                            title={<><h1>Overview: Bite of Life Analytics (BoLA)</h1>
                            </>} layout="vertical">
                            <Descriptions.Item span={3}>
                       
                                <Alert
                                    description="
                                    Bite of Life Analytics (BoLA) is a comprehensive tool designed to help businesses improve the health of their customers and communities. BoLA provides valuable insights into your daily operations and the nutritional impact of the food people consume. In this overview, we will look at BoLA's features in detail to help you better understand its functionalities.
                                    "
                                    type="warning"
                                    className='heroText'
                                />

                            </Descriptions.Item>
                        </Descriptions>


                        <Descriptions
                            title={<><h1>Stock</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>

                                    The <span className='inlineTextSpanBiege'>Stock</span> section is a vital tool for tracking and organizing your inventory. Think of it as the launchpad for creating nutrient-rich meals. It’s simple to input and monitor items in your stockpile so you always have accurate and up-to-date information.

                                </p>


                            </Descriptions.Item>


                            <Descriptions.Item span={3}>

                                <Alert
                                    message={<h3>How to Use the <span>Stock</span> Tool</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />

                                {/* <p>1. To add items to your stockpile, click on the "Create" button and enter the information available on the packaging label.
                                </p> */}

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>1</span> To add items to your stockpile, simply click the <span className='inlineTextSpan'>Add</span> button and enter the information found on the packaging label.

                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> Once you have entered all the required details, click the <span className='inlineTextSpan'>Add Item</span> button and the stock item will appear in the table on the page.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> To make any changes or add nutritional information, check the box located to the left of an item, click the <span className='inlineTextSpan'>Edit</span> button under the <span className='inlineTextSpanBiege'>Action</span> column, select the action and modify the necessary fields.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> Click the <span className='inlineTextSpan'>Controller</span> button to download a QR code for onsite inventory audits or follow the provided URL to access your auditing portal.
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> Remember to keep your account <span className='inlineTextSpan'>PIN</span> secure and only share it with trusted team members.
                                </p>

                            </Descriptions.Item>












                        </Descriptions>





                        <Descriptions
                            title={<><h1 >Design</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    The <span className='inlineTextSpanBiege'>Design</span> tool allows you to combine items from the Stock section to create whole products . This is an important step in the BoLA process as it helps you track various metrics like cost, waste, sales, and nutrient payloads.
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



                                <p><span className='spanBlue'>1</span> To start designing your product, click on the <span className='inlineTextSpan'>Create</span> button.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>2</span> A popup window will appear, prompting you to enter the necessary information.

                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>3</span> Enter all the required details, and click <span className='inlineTextSpan'>Submit</span> to save your information.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>4</span> To add ingredients or make any modifications or deletions to your product, select the checkbox located in the first column of the table.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> To modify inputs or ingredients, navigate to the <span className='inlineTextSpan'>Input</span> column. Click on the number in the box next to the ingredient whose weight you want to modify. A pop-up window will appear. Use the window to adjust the ingredient weight as needed.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>6</span> Once you have made the necessary changes, click <span className='inlineTextSpan'>Submit</span> to save your information and review the updates on the table.
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



                                <p><span className='spanBlue'>Name:</span>  a unique identifier given to an item in your design portfolio. Customers will use this to reference product details either online or by scanning a barcode.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Cost:</span> the amount of money  that must be spent to produce a product based on its ingredient. It excludes expenses such as labor and overhead.
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



                                <p><span className='spanBlue'>Units Produced:</span> the number of units available for sale, calculated by dividing the "Total Yield" by the "Yields Per Unit".
                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Units Per Sale:</span> is the number of items packaged and sold in a single transaction.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Unit Waste:</span> the number of units not produced due to imbalances in "Yield Per Unit" and "Units Per Sale," typically 0 or 1.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Total Sales Cycle:</span>  the expected number of sales transactions.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Retail Weight:</span>  the total weight delivered to a customer, calculated by multiplying the Yields Per Unit by the Units Per Sale.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Cost Per Sale:</span>  the total cost of a single sales cycle.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Price Per Sale:</span>  the amount paid by a customer in a single transaction cycle.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Return on Sale:</span>  the profit you make per sale. It is calculated by subtracting the "Cost Per Sale" from the "Price Per Sale".

                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>Margin Per Sale:</span> represents the profit made on each sale after deducting associated costs, expressed as a percentage.
                                </p>

                            </Descriptions.Item>









                        </Descriptions>


                        <Descriptions
                            title={<><h1 >Nutrition</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                    The <span className='inlineTextSpanBiege'>Nutrition</span> is an essential tool to gain detailed insights into the nutrient composition of your products. With this tool, you can easily compare the total nutrient levels in your products to the FDA-recommended Daily Values (DVs) while getting detailed nutrient readouts. You can customize the nutrient readout according to your needs, tailor your product's nutritional value to meet the unique requirements of a specific population group and share the information with the public through a downloadable QR code or link.

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



                                <p><span className='spanBlue'>1</span> Go to the <span className='inlineTextSpan'>Nutrition</span>  page and locate your product's name in the first column of the table.
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



                                <p><span className='spanBlue'>4</span> Modify your product's nutrient content by making changes on the <span className='inlineTextSpan'>Nutrition</span> page.
                                </p>

                            </Descriptions.Item>
                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>5</span> When you are done with the modifications, click on the <span className='inlineTextSpan'>Nutrition</span> button to download a barcode or use the provided URL link.

                                </p>

                            </Descriptions.Item>

                            <Descriptions.Item span={3}>



                                <p><span className='spanBlue'>6</span> Place the barcode in a visible location so that customers can use their phone to access the nutritional information about your product or provide them with the URL link.
                                </p>

                            </Descriptions.Item>
                        </Descriptions>


                        <Descriptions
                            title={<><h1 >Audit</h1>
                            </>}
                            layout="vertical">
                            <Descriptions.Item span={3}>
                                <p>
                                The <span className='inlineTextSpanBiege'>Audit</span> is a tool that can help you manage your inventory more efficiently. It helps you keep track of the results of previous manual inventory checks, allowing you to monitor your costs and purchases. You can access the physical stock counts conducted by your team members in real-time, giving you better visibility into your inventory’s stockpile.

                                </p>
                            </Descriptions.Item>

                            <Descriptions.Item span={3}>
                                <Alert
                                    message={<h3>How to use</h3>}
                                    type="warning"
                                    className='alertBlue'
                                />
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
        </Row>

    )
}

export default Overview;