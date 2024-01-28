import * as React from 'react'
import { Col, Divider, Layout, Row, Space, Card, Alert } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import 'isomorphic-fetch';





import Meta from 'antd/es/card/Meta'
import Public_Footer from '../Components/Navigation/Footer';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { motion } from 'framer-motion';



const PrivacyPolicy: React.FC = () => {
    document.title = 'Privacy Policy'


    return (

        <Layout className='layout'>
            <Header className='header'>

                <Main_Menu />
            </Header>
            <Layout className='homeScreenDesktop'>

                <Content >
                    <Space wrap size={[0, 100]}>
                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
                            <Col >
                                <h3>Privacy Policy</h3>
                            </Col>
                        </Row>





                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >
                        <Col xs={22} md={20}  style={{ borderBottom: '5px solid var(--light_beige)'}}>


                              
                                <h1>K.C. Morris Inc. Privacy Policy</h1>
                                <p>[November 26, 2023]</p>

                                <Alert
                                    description='This privacy notice pertains to K.C. Morris Inc, also known as Kcm Inc ("Kcm Inc," "we," "us," or "our"), and outlines how and why we may collect, store, use, and/or share ("process") your information when you use our Services. This includes visiting our website at https://www.kcminc.io or any website linked to this Site, downloading and using our mobile application (Kcm Inc), or engaging with us in other related ways, such as through sales, marketing, or events. If you have any questions or concerns, reading this privacy notice will help you understand your privacy rights and options. If you do not agree with our policies and practices, please refrain from using our Services. For further inquiries, contact us at ken@kcminc.io.'
                                    type="warning"
                                    className='heroText'
                                />




                            </Col>

                       
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Summary of Key Points</h1>
                                    <Alert
                                        description='Our privacy notice provides essential information about how we handle your personal data. When you visit, use, or navigate our services, we may process personal information depending on how you interact with us and the features you use. We may also process sensitive personal information with your consent or as permitted by law. We may receive information from third-party sources such as public databases and social media platforms. We process your information to provide, improve, and administer our services, communicate with you, and comply with legal requirements. We only do so when we have a valid legal reason to do so and may also process your information for other purposes with your consent. We may share your information with specific categories of third parties in certain situations. We have implemented organizational and technical processes to protect your personal information. However, we cannot guarantee 100% security against unauthorized access or modification of your information by hackers or cybercriminals. This summary provides key points from our privacy notice.
                                        '
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Information We Collect</h1>
                                    <Alert
                                        description="We only collect personal information that you voluntarily provide when you register for our Services, express interest in our products and Services, participate in activities on our platform, or contact us. The information we collect depends on your interactions with us, your choices, and the features you use. Examples of personal information we collect include your name, phone number, email address, mailing address, job title, username, password, contact preferences, contact or authentication data, billing address, and credit/debit card numbers.  If you give us your consent or it is allowed by law, we may also process sensitive information such as health data, financial data, genetic data, biometric data, data about your sex life or sexual orientation, report revealing race or ethnic origin, information revealing political opinions, information revealing religious or philosophical beliefs, information indicating trade union membership, credit history data, student data, social security numbers, or other government identifiers."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>


                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Fiancial Data Security</h1>
                                    <Alert
                                        description={`We will need specific information from you to process payment or transfer funds. This may include your payment instrument number, associated security code, bank information, or other digital wallets. Please note that Authorize.net securely keeps all payment data. If we store any payment data in-house, we ensure that it is safely stored using cryptography and data tokenization. To learn more about their privacy policy, visit: https://usa.visa.com/legal/global-privacy-notice.html.Payment. Please be aware that we may collect the necessary data to process your payment, such as your payment instrument number and security code. However, rest assured that Authorize.net securely stores all payment data. If you wish to read their privacy notice, visit: https://usa.visa.com/legal/global-privacy-notice.html`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Social Media Access</h1>
                                    <Alert
                                        description="We provide you with the flexibility to sign up using your Facebook or Twitter account information. If you choose to register through social media, we will collect the information as specified in the section titled 'How Do We Handle Your Social Media Logins?' mentioned below."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>How Do We Handle Your Social Media Logins?</h1>
                                    <Alert
                                        description={`When you use a social media account to register or log in to our Services, we can access some of your information. Our Services allow you to sign up and log in using your third-party social media account details, such as your Facebook or Twitter logins. As a result, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider. However, it usually includes your name, email address, friends list, profile picture, and any other public information you've shared on the platform. We will only use the information we receive for the purposes described in this privacy notice or as otherwise communicated through our Services. It's important to note that we don't control or take responsibility for any other use of your personal information by your third-party social media provider. We recommend reviewing their privacy notice to understand how they collect, use, and share your personal information and how you can manage your privacy preferences on their sites and apps.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Application Data</h1>
                                    <Alert
                                        description="When using our application(s), we may ask your permission to access certain features on your mobile device. If you permit us, we may collect the following information: Geolocation Information - We may request access to track your mobile device's location continuously or while using our application(s) to offer location-based services. You can change our access or permissions in your device's settings. Mobile Device Access - We may request access to certain features on your mobile device, such as your camera, contacts, microphone, SMS messages, social media accounts, storage, calendar, and more. You can change our access or permissions in your device's settings. Mobile Device Data - We automatically collect device information, such as your mobile device ID, model, manufacturer, operating system and version information, browser type and version, and more. If you are using our application(s), we may also collect information about your mobile device's operating system or platform, unique device ID, and features you access. Push Notifications - We may ask your permission to send you push notifications about your account or specific application features. You can opt out of these communications in your device's settings."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Auto Information Collection</h1>
                                    <Alert
                                        description={`When you use our Services, we automatically collect certain information to ensure our platform's security and proper functioning. This includes your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and details about your usage of our Services. We also use cookies and similar technologies to collect log and usage data and device data, such as information about the device you use to access our Services. Additionally, we may collect location data using GPS and other technologies to determine your current location based on your IP address. We understand the importance of privacy, and therefore, you can opt out of allowing us to collect this information by disabling the Location setting on your device. However, please note that if you opt out, you may not be able to use certain aspects of our Services.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1> Information Processing</h1>
                                    <Alert
                                        description="Our company uses your personal information for various purposes related to providing, improving, and managing our services. This includes communicating with you, ensuring security, preventing fraud, and complying with the law. If you consent, we may also process your information for other purposes. The reasons for processing your personal information may differ depending on how you interact with our services. 
                                        We process your information to help you create and manage your account, deliver the required services, and respond to your inquiries and issues. We also send administrative information, such as policy updates, and manage your orders and returns. If you use any of our offerings to communicate with another user, we may process your information to enable those communications. We may also request feedback and contact you about your use of our services. We may use your personal information for marketing purposes, including sending you marketing and promotional communications. However, you can opt out of these emails at any time. Additionally, we may use your information to deliver targeted advertising based on your interests and location. We process your information to protect our services, prevent fraud, and understand how they are being used and how to improve them. Sometimes, we process your information to save or protect an individual's vital interest. We understand the importance of your personal information and ensure it is always kept safe and secure."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Foundations of Trust</h1>
                                    <Alert
                                        description={`We only process your personal information for valid or legal reasons. This may include obtaining your consent, fulfilling our contractual obligations, complying with laws, protecting your rights, or fulfilling our legitimate business interests. These legal bases apply to residents of the EU and UK. We rely on various legal bases to process your personal information, such as consent, contract performance, legitimate interests, legal obligations, and vital interests. For residents of Canada, we may process your personal information if you have given us specific permission or in situations where your authorization can be inferred. In exceptional cases, we may be legally permitted to process your information for investigations, fraud detection and prevention, business transactions, or identifying injured, ill, or deceased persons. We may also disclose information to comply with legal requirements or if the information is publicly available. You have the right to withdraw your consent at any time. We respect your privacy and are committed to protecting your personal information.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Third-Party Sharing</h1>
                                    <Alert
                                        description='We may need to share your personal information with certain third parties in specific situations, such as vendors, consultants, and other service providers who perform services for us or on our behalf. We may also share your personal information with ad networks, affiliate marketing programs, cloud computing services, communication and collaboration tools, data analytics services, data storage service providers, finance and accounting agencies, government entities, order fulfillment service providers, payment processors, performance monitoring tools, product engineering and design tools, retargeting platforms, sales and marketing tools, social networks, testing tools, user account registration, and authentication services, and website hosting service providers. Suppose we undergo a business transfer such as a merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company. In that case, we may need to share your personal information. Additionally, when we use certain Google Maps Platform APIs, we may share your information with them. We may also share your information with our affiliates and business partners to offer certain products, services, or promotions -- Please note that when you share personal information or interact with public areas of our services, all users may view that information, and it may be publicly available outside of our services. If you register for our services through a social network, your contacts on that network may see your name, profile photo, and descriptions of your activity. Our applications may display a third-party hosted "offer wall," which allows advertisers to offer virtual currency, gifts, or other items in exchange for completing an advertisement offer. When you click on an offer wall, you will leave our application, and a unique identifier will be shared with the offer wall provider to prevent fraud and credit your account with the relevant reward.'
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Stance on External Websites</h1>
                                    <Alert
                                        description={`We cannot guarantee the safety of any information you share with third-party websites, online services, or mobile applications that we may link to or advertise on our Services. These third parties are not affiliated with us and may link to other websites, services, or applications for which we make no guarantees. Our offer wall and Services may contain links to third-party websites and advertisements from third parties, which we do not endorse, and we will not be liable for any loss or damage resulting from their use. We cannot ensure the safety and privacy of data you provide to third parties. Please note that this privacy notice does not cover third-party data. We are not responsible for any third parties' content or privacy and security practices and policies, including other websites, services, or applications that may be linked to or from our Services. We advise you to review such third-party policies and contact them directly if you have any questions.
                                        `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Cookie Policy</h1>
                                    <Alert
                                        description={`We understand the importance of your privacy and the use of cookies while browsing our site. Cookies are small data files placed on your device when you visit our website. They help us improve your browsing experience. We use cookies to analyze user behavior, personalize content, and improve the overall functionality of our website. We also use cookies to track how users navigate our site, which pages are most frequently visited, and to ensure the security of our website. By continuing to use our website, you consent to our use of cookies. You can control and manage cookies in your browser settings. However, please note that disabling cookies may affect the functionality of our website. We may update this Cookie Policy from time to time. Any changes will be posted on this page, so please check back regularly for updates. Don't hesitate to get in touch with us if you have any questions or concerns about our Cookie Policy.
            `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>



                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>International Data Transfers</h1>
                                    <Alert
                                        description={`
                                        We might need to store, process, and transfer your information to countries other than the one you reside in. Our servers are located in the United States; therefore, if you're accessing our services from outside the US, it's important to note that your personal information may be transferred to, stored, and processed by us and our third-party partners in countries such as Canada and beyond. If you're a European Economic Area (EEA) or the United Kingdom (UK) resident, please be aware that your country's data protection laws may not be as comprehensive as those in the US. However, we are committed to protecting your personal information by this privacy policy and applicable laws. We have taken necessary measures to safeguard your information, such as implementing the European Commission's Standard Contractual Clauses for personal information transfers between our group companies and third-party providers. These clauses require all recipients to protect personal information originating from the EEA or UK by European data protection laws and regulations. We can provide our Standard Contractual Clauses upon request and have implemented similar safeguards with our third-party service providers and partners. 
            `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <Space wrap>
                                    <div >
                                        <h1>Data Warehousing Lifespan</h1>
                                        <Alert
                                            description='We shall retain your data for the duration that is necessary to satisfy the purposes that are outlined in our privacy policy, unless otherwise mandated by law. After the termination of your account, we shall not retain your personal data for more than three months. If we no longer have a valid justification to utilize your personal data, we shall either anonymize or delete it. If immediate erasure is not feasible, we shall securely stockpile your data and prevent any further processing until the point of deletion is viable.'
                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>
                                    <div >
                                        <h1>Tracking Technologies</h1>
                                        <Alert
                                            description='Our website might collect and store your information using cookies and tracking technologies like web beacons and pixels. These tools enable us to analyze your browsing habits and preferences, which helps us provide you with a more tailored experience. Our Cookie Notice has detailed information on how we use these technologies and allows you to opt out of specific types of cookies.'
                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>

                                </Space>



                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Data Protection</h1>
                                    <Alert
                                        description={`Ensuring the safety and security of your personal information is our top priority. To achieve this, we have implemented a combination of technical and organizational security measures. We have taken appropriate and reasonable steps to ensure that your information is secure when we process it. However, despite our best efforts, we cannot guarantee that your information will be 100% secure. This is because no electronic transmission over the internet or information storage technology is completely foolproof. There is always a risk of unauthorized access, collection, stealing, or modification of your information by hackers, cybercriminals, or other third parties. We will do everything we can to protect your personal information, but it is ultimately up to you to access our services within a secure environment. You should be aware that any transmission of personal information to or from our services is done at your own risk.

            `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Minors</h1>
                                    <Alert
                                        description='
                                        We do not direct our marketing efforts toward children under 18, but we may collect their data for use in some of our services. When you create an account, you must confirm that you are at least 18 years old or have obtained the consent of a parent or guardian for any minors using our services. If we discover a user under 18 has provided personal information, we will deactivate their account. However, it is essential to note that we are not legally responsible for any information obtained from minors through our public services.'
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Your Rights</h1>
                                    <Alert
                                        description={`In summary, certain regions such as the European Economic Area (EEA), United Kingdom (UK), and Canada provide rights that give you greater control over your personal information. You can review, modify, or terminate your account at any time. Under applicable data protection laws, you have specific rights in some regions (like the EEA, UK, and Canada). These rights include requesting access to and receiving a copy of your personal information, requesting correction or deletion, limiting the processing of your information, and, if applicable, data portability. In certain circumstances, you may also have the right to object to processing your personal information. If you have any such requests, please get in touch with us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. When considering and responding to your requests, we will adhere to all applicable data protection laws. Suppose you believe that we are unlawfully processing your personal information and you are located in the EA or UK. In that case, you have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner. Suppose we rely on your consent to process your personal information. In that case, you may withdraw your consent at any time by contacting us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. However, please note that withdrawing your consent will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in our emails, replying "STOP" or "UNSUBSCRIBE" to our SMS messages, or by contacting us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. Even if you unsubscribe from marketing and promotional communications, we may still contact you for non-marketing purposes, such as sending service-related messages necessary for the administration and use of your account, responding to service requests, or other non-marketing purposes. Suppose you wish to review or modify the information in your account or terminate your account. In that case, you can log in to your account settings and update your user account or by contacting us using the contact information provided. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some data in our files to prevent fraud, troubleshoot problems, assist with investigations, enforce our legal terms, and comply with applicable legal requirements. Most web browsers are set to accept cookies by default, but you can remove or reject cookies by adjusting your browser settings. However, doing so may affect certain features or services of our platform. Additionally, you may opt out of interest-based advertising by advertisers on our platform. If you have any questions or comments about your privacy rights, please email us at ken@kcminc.io.`}
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <Space wrap>
                                    <div >
                                        <h1>Do-Not-Tract</h1>
                                        <Alert
                                            description="Many web browsers, mobile operating systems, and mobile applications offer a Do-Not-Track ('DNT') feature or setting that allows you to indicate your preference for privacy by not having data about your online browsing activities monitored or collected. However, no standardized technology for recognizing and implementing DNT signals exists. Therefore, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted in the future, we will update this privacy notice to let you know about it."
                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>


                                    <div >
                                        <h1>Update Notice</h1>
                                        <Alert
                                            description={`We are committed to keeping this notice up to date to comply with relevant laws and regulations. Please be advised that we reserve the right to periodically revise this privacy notice, and we will provide a revised date to indicate the latest version, which will take effect as soon as it becomes available. In the event of significant changes, we may notify you through prominent posting or direct notification. We highly recommend that you review this privacy notice regularly to stay informed about how we protect your information.

                                        `}
                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>




                                    <div >
                                        <h1>User Originated Edits
                                        </h1>
                                        <Alert
                                            description={`Per our policy, you have the right to access, modify, or delete the personal information we collect from you. To do so, you can fill out a data subject access request and submit it to us. We will review your request and take appropriate action accordingly.`}

                                            type="warning"
                                            className='heroText'
                                        />


                                    </div>
                                </Space>

                            </Col>
                        </Row>






                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>State of Virginia</h1>
                                    <Alert
                                        description="As a resident of Virginia, you have certain rights regarding your personal information under the Virginia Consumer Data Protection Act (CDPA). The CDPA defines a 'consumer' as a natural person residing in the Commonwealth and acting in an individual or household capacity, not in a commercial or employment context. 'Personal data' includes any information that can be linked to an identifiable person, excluding publicly available information or de-identified data. The 'sale of personal data' refers to the exchange of personal data for monetary gain. If you're a 'consumer', we are obligated to follow certain regulations regarding your personal data. The information we collect, use, and disclose about you varies depending on your interaction with K.C. Morris Inc and our services. You have several rights under the Virginia CDPA, including the right to be informed about the processing of your personal data, to access and correct inaccuracies in your personal data, to request the deletion of your personal data, and to obtain a copy of the personal data you have shared with us. You also have the right to opt-out of the processing of your personal data for targeted advertising, sale of personal data, or profiling purposes that produce legal or similarly significant effects. K.C. Morris Inc may sell your personal data to third parties or use it for targeted advertising or profiling. If you want to opt-out of further selling or sharing of your personal data, please refer to the relevant section in this privacy notice. You can exercise your rights provided under the Virginia CDPA by contacting us. Our privacy notice contains more information about our data collection and sharing practices. To ensure the safety of your personal data, you have the right to exercise your rights under the Virginia CDPA.  If you want to opt-out of targeted advertising, profiling, or selling personal data, you can disable cookies in Cookie Preference Settings. You can also contact us via email at ken@kcminc.io or by using a data subject access request. If you need to use an authorized agent to exercise your rights, we may require proof of authorization before fulfilling your request. We may also need to verify your identity and ask for additional information to confirm your identity. We will respond to your request within 45 days of receipt. In some cases, we may need to extend the response period by an additional 45 days and notify you of the reason for the extension. If we decline your request, we will inform you of our decision and you have the right to appeal. Please email us at ken@kcminc.io if you wish to appeal. We will respond to your appeal within 60 days and provide an explanation for our decision. If your appeal is denied, you can contact the Attorney General to submit a complaint."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>State of California</h1>
                                    <Alert
                                        description="Residents of California have specific rights to access their personal information. The 'Shine The Light' law (California Civil Code Section 1798.83) grants residents the right to receive, free of charge, information about the categories of personal data that have been disclosed to third parties for direct marketing purposes, as well as the names and addresses of all third parties with whom their personal information was shared during the previous calendar year. If you are a California resident under 18 years old and have a registered account with our services, you can request the removal of any publicly posted, unwanted data. To do so, please contact us and provide your email address linked to your account and a statement confirming your California residency. We will ensure the data is no longer publicly displayed on our services. However, please note that this data may not be entirely or comprehensively removed from all our systems, including backups. According to the California Code of Regulations, a 'resident' is not in California for a temporary or transitory purpose or someone domiciled in California but temporarily outside the state. As a resident, you are entitled to certain rights and responsibilities regarding your personal information.
                                        We collect various categories of personal information, including your name and contact details, personal data listed in the California Customer Records statute, protected classification characteristics such as your gender and date of birth, commercial information like transaction details and payment information, biometric information like fingerprints and voiceprints, internet activity such as browsing and search history, geolocation data, and audio and visual recordings created in connection with our business activities.
                                        We will only use and keep your personal information for as long as necessary to provide our services or up to three months after your account is terminated. We take all the required precautions to protect your privacy and data. We may need to share your information with a service provider or contractor for specific reasons. However, you can manage how your sensitive personal information is used and disclosed.
                                        We collect your personal information through various methods like targeting cookies, marketing cookies, social media cookies, beacons, pixels, tags, click redirects and social media plugins. Our website's features may collect your IP address and monitor the page you are browsing. To ensure these features work correctly, we may install a cookie. Suppose you are logged into a social media platform and interact with a widget or button related to that platform. In that case, the information may be saved to your profile on that social media platform. To avoid this, it is recommended that you log out of the social media platform before using our services. These social media widgets and features may be hosted by a third party or directly on our services. The privacy notices of the companies providing these features govern your interactions with them. By clicking on any of these buttons, you accept using the plugin and transferring personal information to the corresponding social media service.
                                        We cannot regulate the nature and extent of the data transmitted or any additional processing. If you're concerned about how we collect and share your data, please refer to our privacy notice for more information. To prevent the sale or sharing of your personal information, you can disable cookies in your Cookie Preference Settings and click the 'Do Not Sell or Share My Personal Information' link on our homepage. If you need to contact us, you can email us at ken@kcminc.io, call us toll-free at 4047400093, or find our contact information at the bottom of this document. Please note that if you authorize someone else to opt out on your behalf, we may need proof of their authorization before processing the request. We may disclose your personal information with our service providers through a written agreement between us and each service provider. Each service provider is a for-profit organization that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CPA. At K.C. Morris Inc., we may use your personal data for internal research and technological development purposes. We want to clarify that this is not considered selling your personal information. We have shared specific categories of personal information with third parties for business purposes in the past 12 months. You can find more detailed information about this in our privacy notice.
                                        "
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                        </Row>



                    </Space>

                </Content>
            </Layout>

            <Public_Footer />

        </Layout>

    )
}

export default PrivacyPolicy;