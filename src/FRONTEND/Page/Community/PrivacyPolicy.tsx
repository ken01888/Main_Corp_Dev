import * as React from 'react'
import { Col, Divider, Layout, Row, ConfigProvider, Space, Card, Button } from 'antd'
import Menu from '../Components/Navigation/Main_Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import 'isomorphic-fetch';




import { Link } from 'react-router-dom'
import Meta from 'antd/es/card/Meta'



const PrivacyPolicy: React.FC = () => {



    return (

        <Layout className='layout'>

            <Header className='header'>

                <Menu />

            </Header>

            <Layout className='homeScreenDesktop'>

                <Content >
                    <Space wrap size={[125, 125]}>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                                <h1>Privacy Policy</h1>
                                <Divider className='dividerHeader'></Divider>
                                <p >
                                    This privacy notice pertains to K.C. Morris Inc, also known as Km Inc ("Km Inc," "we," "us," or "our"), and outlines how and why we may collect, store, use, and/or share ("process") your information when you use our Services. This includes visiting our website at https://www.kcminc.io or any website of ours linked to this privacy notice, downloading and using our mobile application (Km Inc), or engaging with us in other related ways, such as through sales, marketing, or events. If you have any questions or concerns, reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please refrain from using our Services. For further inquiries, please contact us at ken@kcminc.io.
                                </p>

                                <div>
                                    <Card title="Summary of Key Points" >


                                        <Meta
                                            description="This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                                            What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Km Inc and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
                                            Do we process any sensitive personal information? We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process.
                                            Do we receive any information from third parties? We may receive information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.
                                            How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information
                                            In what situations and with which types of parties do we share personal information? We mav share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share vour personal information.
                                            Our privacy notice provides important information about how we handle your personal data. To learn more about any of these topics, you can follow the link provided after each key point or use our table of contents to easily navigate to the section you're interested in. 
                                            
                                            When you use our services, we may process personal information depending on how you interact with us and the features you use. We may also process sensitive personal information with your consent or as permitted by law. 
                                            
                                            We may receive information from third-party sources such as public databases and social media platforms. 
                                            
                                            We process your information to provide, improve, and administer our services, communicate with you, and comply with legal requirements. We only do so when we have a valid legal reason to do so and may also process your information for other purposes with your consent. 
                                            
                                            We may share your information with specific categories of third parties in certain situations. 
                                            
                                            We have implemented organizational and technical processes to protect your personal information. However, we cannot guarantee 100% security against unauthorized access or modification of your information by hackers or cybercriminals. To learn more about how we keep your information safe, please refer to our privacy notice." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="1. WHAT INFORMATION DO WE COLLECT" >


                                        <Meta
                                            description="We gather personal information that you voluntarily provide to us when you register for our Services, express interest in our products and Services, participate in activities on our platform, or contact us. The information we collect depends on your interactions with us, the choices you make, and the features you use. Examples of personal information we collect include names, phone numbers, email addresses, mailing addresses, job titles, usernames, passwords, contact preferences, contact or authentication data, billing addresses, and debit/credit card numbers. With your consent or as permitted by law, we may also process sensitive information such as health data, financial data, genetic data, biometric data, data about a person's sex life or sexual orientation, information revealing race or ethnic origin, information revealing political opinions, information revealing religious or philosophical beliefs, information revealing trade union membership, credit worthiness data, student data, social security numbers, or other government identifiers." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="2. Payment Data" >


                                        <Meta
                                            description="
                                            If you make a purchase, we may need to collect some data to process your payment. This could include your payment instrument number and the associated security code. Please note that all payment data is securely stored by Authorize.net. You can find more information about their privacy policy by clicking this link: https://usa.visa.com/legal/global-privacy-notice.html.Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by Authorize.net. You may find their privacy notice links) here: https://usa.visa.com/legal/global-privacy-notice.html." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="3. Social Media Login" >


                                        <Meta
                                            description="We offer the option to sign up using your social media account information such as Facebook or Twitter. If you choose to register in this way, we will collect the information specified in the section titled 'HOW DO WE HANDLE YOUR SOCIAL LOGINS?' below." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="4. Application Data." >


                                        <Meta
                                            description="If you choose to grant us access or permission while using our application(s), we may collect the following information:
                                            - Geolocation Information: We may request access to track your mobile device's location continuously or while using our application(s) to provide certain location-based services. You can change our access or permissions in your device's settings.
                                            - Mobile Device Access: We may request access to certain features on your mobile device, such as your calendar, camera, contacts, microphone, SMS messages, social media accounts, storage, and more. You can change our access or permissions in your device's settings.
                                            - Mobile Device Data: We automatically collect device information, such as your mobile device ID, model, and manufacturer, as well as operating system and version information, browser type and version, and more. If you are using our application(s), we may also collect information about your mobile device's operating system or platform, unique device ID, and features you accessed.
                                            - Push Notifications: We may request permission to send you push notifications about your account or certain application features. You can opt out of these communications in your device's settings." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="5. Information automatically collected" >


                                        <Meta
                                            description="We automatically collect certain information when you visit, use, or navigate our Services. This includes data like your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Services. We use this information to maintain the security and operation of our Services and for internal analytics and reporting purposes. 

                                            In addition to this, we also collect information through cookies and similar technologies. Our collection of information includes log and usage data that our servers automatically collect when you access or use our Services, as well as device data such as information about the device you use to access our Services. We may also collect location data that tells us your current location (based on your IP address) using GPS and other technologies. 
                                            
                                            We understand that privacy is important to our users, and therefore, you have the option to opt-out of allowing us to collect this information by disabling your Location setting on your device. However, please note that if you choose to opt-out, you may not be able to use certain aspects of our Services.
                                            " />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="6. HOW DO WE PROCESS YOUR INFORMATION?" >


                                        <Meta
                                            description="We process your information in order to provide, improve, and manage our services. This includes communicating with you, ensuring security and preventing fraud, and complying with the law. With your consent, we may also process your information for other purposes. 

                                            The reasons we process your personal information vary depending on how you interact with our services. We process your information to help you create and manage your account, deliver the services you request, and respond to your inquiries and issues. We also send administrative information to you, such as updates to our terms and policies, and manage your orders and returns. 
                                            
                                            If you use any of our offerings that allow for communication with another user, we may process your information to enable those communications. We may also request feedback and contact you about your use of our services. 
                                            
                                            We may use the personal information you provide for our marketing purposes, including sending you marketing and promotional communications. You can opt out of these emails at any time. Additionally, we may use your information to deliver targeted advertising based on your interests and location. 
                                            
                                            We process your information to protect our services and prevent fraud, as well as to understand how they are being used and how to improve them. In some cases, we may process your information to save or protect an individual's vital interest." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="7. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?" >


                                        <Meta
                                            description="We only process your personal information when we have a valid legal reason to do so, such as with your consent, to comply with laws, to provide services, to fulfill our contractual obligations, to protect your rights or to fulfill our legitimate business interests. This applies to residents of the EU and UK. We rely on several legal bases to process your personal information, including consent, performance of a contract, legitimate interests, legal obligations, and vital interests. 

                                            For residents of Canada, we may process your personal information if you have given us specific permission or in situations where your permission can be inferred. We may also be legally permitted to process your information in exceptional cases, such as for investigations and fraud detection and prevention, business transactions, or for identifying injured, ill, or deceased persons. We may also disclose information to comply with legal requirements or if the information is publicly available. You have the right to withdraw your consent at any time." />



                                    </Card>
                                </div>
                            </Col>

                        </Row> <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="8. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
" >


                                        <Meta
                                            description="We may share your information in certain situations and with specific categories of third parties. These third parties include vendors, consultants, and other service providers who perform services for us or on our behalf. The categories of third parties we may share your personal information with include ad networks, affiliate marketing programs, cloud computing services, communication and collaboration tools, data analytics services, data storage service providers, finance and accounting tools, government entities, order fulfillment service providers, payment processors, performance monitoring tools, product engineering and design tools, retargeting platforms, sales and marketing tools, social networks, testing tools, user account registration and authentication services, and website hosting service providers.

                                            Additionally, we may need to share your personal information in the event of a business transfer, such as a merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company. When we use certain Google Maps Platform APIs, we may share your information with them. We may also share your information with our affiliates and business partners to offer you certain products, services, or promotions.
                                            
                                            Please note that when you share personal information or interact with public areas of our services, that information may be viewed by all users and may be publicly available outside of our services. If you register for our services through a social network, your contacts on that network may see your name, profile photo, and descriptions of your activity. Also, our applications may display a third-party hosted 'offer wall' which allows advertisers to offer virtual currency, gifts, or other items in exchange for completing an advertisement offer. When you click on an offer wall, you will leave our application and a unique identifier will be shared with the offer wall provider to prevent fraud and credit your account with the relevant reward. " />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="9.WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES" >


                                        <Meta
                                            description="In brief, we cannot guarantee the safety of any information that you share with third parties that we may link to or who advertise on our Services but are not affiliated with them. Our Services, which include our offer wall, may contain links to third-party websites, online services, or mobile applications, as well as advertisements from third parties. These third parties are not affiliated with us and may link to other websites, services, or applications. We make no guarantees regarding any such third parties and will not be liable for any loss or damage resulting from their use. Our inclusion of a link to a third-party website, service, or application does not constitute an endorsement. We cannot ensure the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. It is advisable to review such third-party policies and contact them directly with any questions you may have.
                                            " />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="10. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?" >


                                        <Meta
                                            description='Simply put, we have the ability to collect and retain your information through cookies and other tracking technologies. This includes the use of web beacons and pixels. More detailed information on how we use these technologies and how you can opt-out of certain cookies can be found in our Cookie Notice.
                                            ' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="11. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
" >


                                        <Meta
                                            description="When you register or log in to our Services with a social media account, we may gain access to some of your information. Our Services allow you to register and log in via your third-party social media account details (such as your Facebook or Twitter logins). In doing so, we will receive certain profile information about you from your social media provider. The profile information we receive may differ depending on the social media provider, but it typically includes your name, email address, friends list, and profile picture, as well as any other public information you have shared on the platform.
                                            We will only use the information we receive for the purposes described in this privacy notice or as otherwise communicated to you through our Services. It's important to note that we don't control or take responsibility for any other use of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information and how you can manage your privacy preferences on their sites and apps." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="12. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?" >


                                        <Meta
                                            description="Simply put, we may need to transfer, store, and process your information in countries other than your own. Our servers are based in the United States, so if you're accessing our Services from outside the US, please note that your personal information may be transferred to, stored, and processed by us and any third parties we share your information with (see 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' above), in other countries such as Canada and beyond.

                                            If you're a resident of the European Economic Area (EEA) or the United Kingdom (UK), please be aware that these countries may not have data protection laws or other similar laws as comprehensive as those in your own country. However, we'll take all necessary measures to protect your personal information in accordance with this privacy policy and applicable law.
                                            
                                            To protect your personal information, we've implemented measures such as using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and third-party providers. These clauses require all recipients to protect personal information originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request, and we've implemented similar safeguards with our third-party service providers and partners. Further details can also be provided upon request.." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="13. HOW LONG DO WE KEEP YOUR INFORMATION?" >


                                        <Meta
                                            description='To put it simply, we will retain your information for as long as necessary to fulfill the purposes stated in our privacy policy, unless required by law. We will not keep your personal information for longer than three months after your account has been terminated. If we no longer have a legitimate reason to use your personal information, we will either delete or anonymize it. If we cannot do so immediately, we will securely store it and prevent any further processing until deletion is possible.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="14. HOW DO WE KEEP YOUR INFORMATION SAFE?" >


                                        <Meta
                                            description='Our main priority is to safeguard your personal information by implementing a system of both technical and organizational security measures. We have taken appropriate and reasonable steps to ensure the security of any personal information we process. However, despite our best efforts, we cannot guarantee that your information will be 100% secure as no electronic transmission over the internet or information storage technology is completely foolproof. There is always a risk of unauthorized access, collection, stealing, or modification of your information by hackers, cybercriminals, or other third parties. While we will do everything we can to protect your personal information, it is ultimately up to you to access our services within a secure environment. Please be aware that any transmission of personal information to and from our services is done at your own risk.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="15. DO WE COLLECT INFORMATION FROM MINORS?" >


                                        <Meta
                                            description='To summarize, we do not market to children under 18 years of age, but we may collect their data for use in some of our services. When creating an account, you must confirm that you are at least 18 years old or have the consent of a parent or guardian for any minors using our services. If we discover that personal information was provided by a user under 18 years of age, we will deactivate the account. Please note that we are not legally responsible for any information obtained from minors through our public services.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="16. WHAT ARE YOUR PRIVACY RIGHTS?" >


                                        <Meta
                                            description='In certain regions such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have certain rights that give you greater control over your personal information. You have the ability to review, modify, or terminate your account at any time. 

                                            Under applicable data protection laws, you have specific rights in some regions (like the EEA, UK, and Canada). These rights may include requesting access to and receiving a copy of your personal information, requesting correction or deletion, limiting the processing of your information, and, if applicable, data portability. 
                                            
                                            In certain circumstances, you may also have the right to object to the processing of your personal information. If you have any such requests, please contact us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. We will adhere to all applicable data protection laws when considering and responding to your requests. 
                                            
                                            If you believe that we are unlawfully processing your personal information and you are located in the EA or UK, you have the right to complain to your Member State data protection authority or UK data protection authority. If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner. 
                                            
                                            If we rely on your consent to process your personal information, you may withdraw your consent at any time by contacting us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. However, please note that withdrawing your consent will not affect the lawfulness of the processing before its withdrawal, nor will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. 
                                            
                                            You have the ability to unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in our emails, replying "STOP" or "UNSUBSCRIBE" to our SMS messages, or by contacting us using the contact information provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. Even if you unsubscribe from marketing and promotional communications, we may still contact you for non-marketing purposes such as sending service-related messages necessary for the administration and use of your account, responding to service requests, or other non-marketing purposes. 
                                            
                                            If you wish to review or modify the information in your account or terminate your account, you can do so by logging in to your account settings and updating your user account or by contacting us using the contact information provided. Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms, and/or comply with applicable legal requirements. 
                                            
                                            Most web browsers are set to accept cookies by default, but you have the ability to remove or reject cookies by adjusting your browser settings. However, doing so may affect certain features or services of our platform. Additionally, you may opt out of interest-based advertising by advertisers on our platform. If you have any questions or comments about your privacy rights, please email us at ken@kcminc.io.
                                            ' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="17. CONTROLS FOR DO-NOT-TRACK FEATURES" >


                                        <Meta
                                            description="Many web browsers and some mobile operating systems and mobile applications offer a Do-Not-Track ('DNT') feature or setting that allows you to indicate your preference for privacy by not having data about your online browsing activities monitored or collected. However, there is currently no standardized technology for recognizing and implementing DNT signals. Therefore, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted in the future, we will update this privacy notice to let you know about it." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="18. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?" >


                                        <Meta
                                            description="As a California resident, you possess specific rights regarding access to your personal information. California Civil Code Section 1798.83, also called the 'Shine The Light' law, enables residents of California who use our services to ask and receive from us, once a year and free of charge, information on categories of personal data that we disclosed to third parties for direct marketing purposes. The law also allows residents to request the names and addresses of all third parties we shared personal information with during the previous calendar year. Should you be a California resident and want to make such a request, please contact us in writing using the contact information provided below.
                                            If you are under 18 years of age, reside in California, and have a registered account with our Services, you have the right to request the removal of any publicly posted, unwanted data. To make this request, please contact us using the information provided below. Kindly include the email address linked to your account and a statement confirming your California residency. We will ensure that the data is not publicly displayed on our Services. Please be aware that this data may not be entirely or comprehensively removed from all our systems, including backups.
                                            In accordance with the California Code of Regulations, a 'resident' is defined as someone who is not in California for a temporary or transitory purpose, or someone who is domiciled in California but temporarily outside the state. Anyone who does not meet this definition is considered a 'non-resident.' As a resident, you have certain rights and responsibilities regarding your personal information. We collect various categories of personal information, including your name and contact details, personal information listed in the California Customer Records statute, protected classification characteristics such as your gender and date of birth, commercial information like transaction details and payment information, biometric information like fingerprints and voiceprints, internet activity such as browsing and search history, geolocation data, and audio and visual recordings created in connection with our business activities.
                                            We will only use and keep your personal information for as long as necessary to provide our services, or for up to three months after your account is terminated. You can rest assured that we take all necessary precautions to protect your privacy and data. We may need to share your information with a service provider or contractor for certain reasons. However, you have the ability to manage how your sensitive personal information is used and disclosed. In addition, we collect personal information beyond this category when you interact with us in person, online, or through phone and mail communication.
                                            It's important to note that we offer customer support channels, opportunities to participate in surveys or contests, and a way to reach out to us with any questions about our Services. Our goal is to assist with the delivery of our Services and ensure a smooth experience for all users. At K.C. Morris Inc, we collect your personal information through various methods like targeting cookies, marketing cookies, social media cookies, beacons, pixels, tags, click redirects, and social media plugins. Our website's features may collect your IP address and monitor the specific page you are currently browsing. In order to ensure these features work correctly, we may install a cookie. If you are logged into a social media platform and interact with a widget or button related to that platform, the information may be saved to your profile on that social media platform. To avoid this, it is recommended that you log out of the social media platform before using our services. These social media widgets and features may be hosted by a third party or directly on our services. The privacy notices of the companies providing these features govern your interactions with them. By clicking on any of these buttons, you accept the use of the plugin and the transfer of personal information to the corresponding social media service. We are unable to regulate the nature and extent of the data transmitted or any additional processing.
                                            If you're concerned about how we collect and share your data, please refer to our privacy notice for more information. To prevent the sale or sharing of your personal information, you can disable cookies in your Cookie Preference Settings and click the 'Do Not Sell or Share My Personal Information' link on our homepage. If you need to get in touch with us, you can email us at ken@kcminc.io, call us toll-free at 4047400093, or find our contact information at the bottom of this document. Please be aware that if you authorize someone else to opt-out on your behalf, we may need proof of their authorization before processing the request.
                                            Will my information be shared with others? We may disclose your personal information with our service providers through a written agreement between us and each service provider. Each service provider is a for-profit organization that processes the information on our behalf, following the same strict privacy protection obligations mandated by the CPA. 
At K.C. Morris Inc, we may use your personal information for internal research and technological development purposes. We want to clarify that this is not considered as selling your personal information. We have shared certain categories of personal information with third parties for business or commercial purposes in the past twelve months. Please refer to the 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' section on our website for details on these categories of third parties. Rest assured that we have not sold or shared G category personal information with any third parties during this period. The categories of third parties to whom we have sold personal information are also listed on our website. We understand that ad networks, affiliate marketing programs, data analytics services, retargeting platforms, social networks, and user account registration and authentication services are essential tools for businesses to connect with their target audience, analyze data, and keep user accounts secure.
We may have shared your personal information with third-party categories such as ad networks, affiliate marketing programs, data analytics services, retargeting platforms, social networks, and user account registration and authentication services. However, you have the right to request the deletion of your personal information. We will comply with your request, unless it's prohibited by law. For example, if we're required to keep your information for legal obligations, protect against illegal activities, or respect another person's right to free speech. We will also provide information on how we handle your personal information, including the types of information we collect, how we use it, and whether we share or sell it to third parties. Moreover, we won't discriminate against you if you exercise your privacy rights. As a user, you have the right to limit the use and disclosure of sensitive personal information collected by a business. To verify your identity before processing your request, we may contact you through a communication method you have previously provided to us, such as phone or email. If you have any complaints about how we handle your data, please let us know.
                                            
                                            " />

                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="19. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS" >


                                        <Meta
                                            description="As a resident of Virginia, you may be entitled to certain rights regarding your personal information. Under the Virginia Consumer Data Protection Act (CDPA), a 'consumer' refers to a natural person who resides in the Commonwealth and acts in an individual or household context, not in a commercial or employment capacity. 'Personal data' refers to any information that can be linked to an identified or identifiable natural person, excluding de-identified data or publicly available information. The 'sale of personal data' refers to the exchange of personal data for monetary consideration.

                                            If you fall under the definition of a 'consumer', we are obligated to adhere to certain rights and responsibilities regarding your personal data. The information we collect, use, and disclose about you will vary based on your interaction with K.C. Morris Inc and our services. To learn more, please visit the links below:
                                            
                                            - Personal data we collect
                                            - How we use your personal data
                                            - When and with whom we share your personal data
                                            - Your rights with respect to your personal data
                                            
                                            You have the right to be informed if we are processing your personal data, the right to access and correct inaccuracies in your personal data, the right to request the deletion of your personal data, and the right to obtain a copy of the personal data you have shared with us. You also have the right to opt-out of the processing of your personal data for targeted advertising, sale of personal data, or profiling purposes that produce legal or similarly significant effects.
                                            
                                            K.C. Morris Inc may sell your personal data to third parties or use it for targeted advertising or profiling. If you wish to opt-out of further selling or sharing of your personal data, please refer to the relevant section in this privacy notice. You can exercise your rights provided under the Virginia CDPA by contacting us.
                                            
                                            For more information about our data collection and sharing practices, please refer to our privacy notice.
                                            To make sure your personal data is kept safe, you have the right to exercise your rights under the Virginia CDPA. Our privacy notice has more information about how we collect and share data. If you want to opt out of targeted advertising, profiling, or selling personal data, you can disable cookies in Cookie Preference Settings. You can also contact us via email at ken@kcminc.io or by using a data subject access request. If you're using an authorized agent to exercise your rights, we may need to see proof of authorization before fulfilling your request.
                                            
                                            We may need to verify your identity before processing your request. If you're using an authorized agent, we may require additional information to confirm your identity. We will respond to your request within 45 days of receipt. In some cases, we may need to extend the response period by an additional 45 days and will notify you with the reason for the extension.
                                            
                                            If we decline your request, we will inform you of our decision and you have the right to appeal. Please email us at ken@kcminc.io if you wish to appeal. We will respond to your appeal within 60 days and provide an explanation for our decision. If your appeal is denied, you can contact the Attorney General to submit a complaint." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title='20. DO WE MAKE UPDATES TO THIS NOTICE?'>


                                        <Meta
                                            description='Yes, we will always keep this notice up to date in compliance with relevant laws. We reserve the right to periodically revise this privacy notice and will provide a revised date to indicate the latest version, which will take effect as soon as it is available. If significant changes are made to this privacy notice, we may notify you either by prominently posting a notice of the changes or by directly sending you a notification. We strongly suggest that you review this privacy notice regularly to stay informed about how we protect your information.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="21.HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" >


                                        <Meta
                                            description="If you have questions or comments about this notice, you may email us at
                                            or contact us by post at:
                                            K.C. Morris Inc
                                            3500 Lenox Road Ne
                                            Atlanta, GA 30326
                                            United States" />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>


                                <div>
                                    <Card title="22.HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU" >


                                        <Meta
                                            description='You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete personal information. please fill out and submit a data subiect access request.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                       
                    </Space>

                </Content>
            </Layout>

            <Footer className='footer_public'>
                <Row justify={'space-between'} align='middle' gutter={[0, 75]}>
                    <Col xs={22} md={10}>
                        <h2 style={{ display: 'flex' }} className='footer_h1'>
                            <div className='logo'>

                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBlue'></div>
                                    <div className='logoBeige'></div>
                                </div>
                                <div style={{ height: 'fit-content' }}>
                                    <div className='logoBeige'></div>
                                    <div className='logoBlue'></div>

                                </div>
                            </div>Kcm Inc
                        </h2>
                        <p>KCM Inc is dedicated to offering B2B services that
                            provide practical and advantageous solutions to businesses.
                            Our team conducts comprehensive research and development,
                            utilizing publicly available data from both public and private
                            institutions. We meticulously analyze this data to develop
                            innovative and effective business services that cater to the
                            needs of communities and clients.</p>
                    </Col>
                    <Col xs={22} md={5} >
                        <Space wrap direction='vertical' >
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
                                <Link reloadDocument to='/'>
                                    <Button htmlType="submit">Log In</Button>
                                </Link>


                            </ConfigProvider>

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
                                <Link reloadDocument to='/signup'> <Button htmlType="submit">Sign Up</Button></Link>


                            </ConfigProvider>


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
                                <Link reloadDocument to='/termsofservice'><Button htmlType="submit">Terms of Service</Button></Link>


                            </ConfigProvider>

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

                                <Link reloadDocument to='/privacypolicy'><Button htmlType="submit">Privacy Policy</Button></Link>

                            </ConfigProvider>
                        </Space>

                    </Col>

                </Row>
            </Footer>
        </Layout>

    )
}

export default PrivacyPolicy;