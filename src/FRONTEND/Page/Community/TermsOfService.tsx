import * as React from 'react'
import { Col, Divider, Layout, Row, Space, Card, Alert } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import 'isomorphic-fetch';





import Meta from 'antd/es/card/Meta'
import Public_Footer from '../Components/Navigation/Footer';
import Main_Menu from '../Components/Navigation/Main_Menu';
import { motion } from 'framer-motion';




const TermsOfService: React.FC = () => {
    document.title = 'Terms Of Service'


    return (

        <Layout className='layout'>
            <Header className='header'>

                <Main_Menu />
            </Header>
            <Layout className='homeScreenDesktop'>

                <Content >
                
                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} className='sectionHeaderOther'>
                            <Col >
                                <h3>Terms of Service</h3>
                            </Col>
                        </Row>
                        <Row justify={'center'} align={'middle'} gutter={[0, 16]} >
            <Col xs={22} md={20}  style={{ borderBottom: '5px solid var(--light_beige)', marginTop: '6rem'}}>

                               
                                <h1>K.C. Morris Inc. Terms of Service</h1>
                                <p>[November 26, 2023]</p>

                                <Alert
                                    description="Greetings from K.C. Morris Inc., also known as Kcm Inc ('Kcm Inc,' 'we,' 'us,' or 'our'). When you access our website, http://www.kcminc.io, and any related media channels or applications (collectively referred to as the 'Site'), you agree to the following Terms of Use. These terms create a legally binding agreement between you, whether you are using the Site personally or on behalf of an entity. Please read and understand these terms before using the Site. You may not use the Site if you do not agree to these terms. We may update these Terms of Use from time to time. Please check the 'Last updated' date to see if any changes have been made. You agree to the updated terms posted by continuing to use the Site. Any other terms or documents posted on the Site are also included by reference. The information provided on the Site is intended for use only in locations where it is lawful and complies with local regulations. If you access the Site from another location, you must comply with local laws. If you are under 18, you must obtain your parent or guardian's permission and supervision before using the Site. Please have your parent or guardian read and agree to these Terms of Use before using the Site. 
                                    "
                                    type="warning"
                                    className='heroText'
                                />




                            </Col>

                    

                         
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                        <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Intellectual Property Rights </h1>
                                    <Alert
                                        description='We own the Site and all its material, including the source code, databases, features, software, website designs, audio, video, text, photos, and graphics. We also control the trademarks, service marks, and logos on the Site, which are protected by copyright, trademark laws, intellectual property rights, and unfair competition laws. The Content and the Marks are only available for your personal use on the Site. You cannot copy, reproduce, aggregate, republish, upload, publicly display, encode, translate, transmit, distribute, sell, license, or exploit them commercially without our permission. However, if you are eligible, you can access and use the Site, download, or print any part of the Content for your personal, non-commercial use. We retain all rights not explicitly granted to you in the Site, the Content, and the Marks.

                                        '
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>User Representation</h1>
                                    <Alert
                                        description="Users must provide truthful, accurate, current, and complete information during registration to use the Site. It is essential to keep this information up to date. By using the Site, users agree to these Terms of Use and must have the legal capacity to do so. Minors need parental permission to access the Site. Accessing the Site through non-human or automated means is not allowed, and it should only be used for legal and authorized purposes. Users must comply with all laws and regulations while using the Site. Providing false or incomplete information may result in account suspension or termination and prevent access to the Site."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        </Row>


                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>User Registration</h1>
                                    <Alert
                                        description={`In order to access the Site, you need to register and create a password. It is important to keep your password confidential as you are responsible for any activity that happens under your account. We have the right to remove, reclaim, or modify your username or password if we consider it inappropriate, obscene, objectionable, or compromised.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Prohibited Activities</h1>
                                    <Alert
                                        description="When using the Site, please remember that it is only intended for its designated purpose. Engaging in commercial activity is prohibited without our express endorsement or approval. Additionally, as a user, it is not permitted to perform the following actions: retrieving data or content without our written consent, participating in fraudulent or misleading activities, attempting to bypass security measures, creating harm or negative comments towards us or the Site, harassing or harming others with information obtained from the Site, misusing support services, violating any applicable laws or regulations, attempting to manipulate the Site's framework, uploading or transmitting harmful material, using automated systems, removing copyright or proprietary rights notices, impersonating other users, collecting or transmitting information without consent, disrupting the Site or its services, harassing our employees or agents, circumventing access restrictions, copying or adapting Site software, decoding or reverse engineering software, launching automated systems without permission, using the Site without authorization, using the Site for commercial purposes, advertising or offering goods and services, and selling or transferring profiles."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>User Generated Contributions</h1>
                                    <Alert
                                        description="You can chat, post blogs, and use message boards as a site user. You can also submit various forms of content such as text, videos, audio, photographs, and graphics. Please note that other users and third-party websites can see your contributions, which are not confidential or proprietary. When submitting any donations, you must confirm that you haven't infringed on any third-party rights, including copyrights, patents, trademarks, trade secrets, or moral rights. You must ensure that you own the materials or have the necessary licenses, rights, consents, releases, and permissions to use and authorize us, the site, and other users to use your contributions. If your contributions feature identifiable individuals, you must obtain their written consent and permission to use their names or likeness on the site. Your contributions must be truthful, accurate, and free of unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation. Also, your contributions must not contain any obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable content. They must not ridicule, disparage, intimidate, or abuse anyone. They must not be used to harass or threaten any person or promote violence against someone or a class of people.
                                        Furthermore, your contributions must comply with all applicable laws, regulations, and rules, including those concerning child protection and the well-being of minors. Please avoid including any offensive comments related to race, national origin, gender, sexual references, or physical disabilities. Please comply with these guidelines to avoid the termination or suspension of your access to the site. Please abide by these terms of use and all applicable laws and regulations while using the site."

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Contribution License</h1>
                                    <Alert
                                        description="By contributing to our Site or linking your social networking accounts to your Site account, you permit us to use your contributions in any way we see fit, including for commercial and advertising purposes. This includes any images or voice recordings you provide, which we may use to create or add to existing works. Our license applies to all forms of media and communication, and we may use your name, company name, franchise name, trademarks, service marks, trade names, logos, and your personal and commercial images. You will still own all your contributions and any associated intellectual property or proprietary rights, but you waive all moral rights. You are responsible for anything you say or represent in your contributions, and we are not responsible for them. We reserve the right to categorize, edit, or delete your contributions without notice, and we have no obligation to monitor them."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Guidelines For Reviews</h1>
                                    <Alert
                                        description={`Our website lets you share your experiences by leaving reviews and ratings. To ensure that all reviews are accurate and fair, please follow these guidelines: (1) Only review individuals or entities you have personally experienced. (2) Avoid using offensive, abusive, racist, or hateful language in your reviews. (3) Discrimination based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability is strictly prohibited. (4) No references to illegal activities are permitted. (5) If you have affiliations with competitors, please do not post negative reviews. (6) Please avoid making conclusions about the legality of conduct. (7) False or misleading statements are not allowed. (8) Organizing campaigns to encourage positive or negative reviews is prohibited. We reserve the right to accept, reject, or remove reviews at our discretion. Please note that reviews do not necessarily reflect our opinions or those of our affiliates or partners, and we do not endorse them. We are not liable for any claims, liabilities, or losses from any review. By submitting a review, you give us permission to reproduce, modify, translate, transmit, display, perform, and/or distribute all content relating to reviews in a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable way.`}

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
                                    <h1>Mobile Application License</h1>
                                    <Alert
                                        description={`You can access our Site through a mobile application on any wireless electronic device you own or control. However, please note that this permission is limited and non-transferable. You must follow the terms and conditions outlined in the mobile application license included in these Terms of Use. Modifying the application or using it for unlawful purposes is strictly prohibited. You should not remove proprietary notices, use the application for commercial purposes, or compete with any products or services. If you use the mobile application on an Apple or Android device, you must follow the usage rules of the App Distributor. Please note that the App Distributor is not responsible for providing maintenance or support services for the application. You must also follow any applicable third-party terms of the agreement. Furthermore, the App Distributors have the legal right to enforce the terms and conditions against you as third-party beneficiaries of the mobile application license contained in these Terms of Use.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Social Media</h1>
                                    <Alert
                                        description="To provide you with an improved experience on our website, we offer the option to link your account with third-party service providers' online accounts, which we refer to as 'Third-Party Accounts'. You can establish this link by providing your login information through our website, or by allowing us to access your Third-Party Account, provided it's permitted under the terms and conditions governing your use of each account. When you link your accounts, you acknowledge that we may access and store any content you've provided to your Third-Party Account, such as friend lists, and we may also submit or receive additional information. Please note that the information you post to your Third-Party Accounts may be available on our website, depending on the Third-Party Account you choose and your privacy settings. It's essential to understand that the third-party service providers associated with your Third-Party Accounts have sole authority over your relationship with them. We don't review any Social Network Content for accuracy, legality, or non-infringement, and we're not responsible for any Social Network Content. If you wish to disconnect your Third-Party Account from our site, you can do so at any time. However, please note that terminating our access to your Third-Party Account may result in any Social Network Content no longer being available on our site. We may access your email address book and contacts list stored on your mobile device or tablet computer only to identify and inform you of contacts who have also registered to use our site. If you decide to disconnect your Third-Party Account from our site, we will try to delete any information obtained through your Third-Party Account."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Submissions</h1>
                                    <Alert
                                        description={`If you provide us with any thoughts, ideas, feedback, or other information about the Site, please note that we will consider them our exclusive property and hold all intellectual property rights to them. We may use and share these submissions for any lawful purpose, commercial or otherwise, without acknowledging or compensating you. You waive all moral rights to them and confirm that they are original or that you can submit them. Please understand that we cannot be held responsible for any alleged or actual infringement or misappropriation of any proprietary right in your submissions.`}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Third-Party Website and Content</h1>
                                    <Alert
                                        description={`Our website may contain links to Third-Party Websites and Third-Party Content. We take the accuracy, appropriateness, and completeness of these links seriously. However, we do not investigate, monitor, or check them ourselves. As a result, we cannot be held responsible for any Third-Party Websites accessed through our site or any Third-Party Content posted, available through, or installed from our site. This includes the content's accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of the Third-Party Websites or the Third-Party Content. It's important to note that including links or permission to use or install any Third-Party Websites or any Third-Party Content does not imply our approval or endorsement. If you decide to leave our site and access the Third-Party Websites or use or install any Third-Party Content, you do so at your own risk, and our Terms of Use no longer apply. We recommend reviewing the applicable terms and policies, including privacy and data gathering practices, of any website you navigate from our site or any applications you use or install. Finally, any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever for such investments, which are exclusively between you and the applicable third party. We do not endorse the products or services offered on Third-Party Websites, and you will hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or damage caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.
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
                                    <h1>Advertisers</h1>
                                    <Alert
                                        description={`
                                        As an advertiser, you have complete control over the placement of your ads and other information on the Site. This includes banner and sidebar ads and any products or services sold through those ads. It's important to note that you are solely responsible for the content you place on the Site and for ensuring you have all necessary rights and authority, including intellectual property, publicity, and contractual rights. We provide the space for your ads and have no affiliation with advertisers.

            `}

                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>

                                <div >
                                    <h1>Site Management </h1>
                                    <Alert
                                        description='As part of our responsibility to maintain these Terms of Use, we are authorized to monitor the Site and take necessary legal actions against anyone who violates them. We may also report such violations to law enforcement authorities. In certain circumstances, we may limit your access to the Site, turn off your Contributions, or remove excessive files or content that may burden our systems. We are committed to protecting our rights and property and ensuring the proper functioning of the Site.
                                            '
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>






                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Privacy Policy</h1>
                                    <Alert
                                        description='We prioritize data privacy and security. By using the site, you agree to our Privacy Policy located on the site, which is included in these Terms of Use. Please note that the site is based in the United States. Suppose you access the site from a region with laws or regulations regarding personal data that differ from those in the United States. In that case, you are transferring your data to the United States by continuing to use the site. You also agree to have your data transferred and processed in the United States.
                                            '
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Copyright Infringement</h1>
                                    <Alert
                                        description='
                                        If you believe that any material available on or through our Site infringes upon your copyright, we take this matter seriously and want to be notified immediately. Please use the contact information below to send us a "Notification." We will promptly forward a copy of your Notification to the individual who posted or stored the material. Please remember that, according to applicable law, you may be liable for damages if you make false statements in your Notification. If you are unsure whether material on or linked to our Site infringes your copyright, we recommend that you consult with a legal professional before taking any action.'
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                        </Row>
                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Terms and Termination</h1>
                                    <Alert
                                        description={`By using the Site, you agree to follow these Terms of Use. Suppose we find that you have violated these terms or any laws or regulations. In that case, we may block your access to the Site, including specific IP addresses, without any prior warning or liability. We also reserve the right to terminate your use of the Site and delete your account and any content or information you have posted, at any time and without notice. If we do decide to terminate your account, you are not allowed to create a new one under your name, a fake name, or the name of a third party. We may take legal action against you, including pursuing civil, criminal, and injunctive remedies.
                                        `}
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>
                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Modifications And Interruptions</h1>
                                    <Alert
                                        description="Please note that we reserve the right to modify, change, or remove any content on our site without prior notice. Although we are not obliged to update any information on the site, we may discontinue or modify all or part of it without notice. We cannot be held responsible for any changes, suspensions, or discontinuations that may occur. While we strive to ensure the site is always available, technical issues or maintenance may cause occasional interruptions or errors. We reserve the right to make changes or updates to the site without notice, and we are not responsible for any inconvenience caused by the site's downtime or discontinuance. Linking your account with third-party service providers is a straightforward process. Please provide your login information or allow us to access your account. By granting us access, you confirm that you are authorized to disclose your login information and will enable us to access your account without violating any terms or conditions. We may access and store any content you have provided on the third-party site, depending on the privacy settings. If the third-party account becomes unavailable, the content may no longer be accessible on our site. However, you can disconnect your account at any time. We do not review user-generated content for accuracy, legality, or non-infringement. However, we may access your email address book and contacts list solely to identify and inform you of contacts registered to use the site. You may deactivate the connection by contacting us or adjusting your account settings. We will attempt to delete any information obtained from the third-party account except for the username associated with the account."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>




                            </Col>
                        </Row>






                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Governing Law</h1>
                                    <Alert
                                        description="In order to use the Site, it is crucial to abide by the laws of the State of Georgia, United States, and adhere to these Terms of Use. These Terms of Use will be interpreted in accordance with Georgia's laws and Federal Statutes, irrespective of any conflicts of law principles, even if the agreement is executed in Georgia."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Dispute Resolution</h1>
                                    <Alert
                                        description="If informal negotiations fail, any dispute, except for specific disputes, will be resolved through binding arbitration. This provision eliminates the right to sue and have a trial by jury. The arbitration process will follow the Commercial Arbitration Rules of the American Arbitration Association and the AAA Consumer Rules, which will govern arbitration fees and compensation for the arbitrator. Arbitration can be done in person, online, by phone, or through document submission. The arbitrator's decision will be in writing, but they are not required to provide a statement of reasons unless requested by either party. The arbitrator must comply with applicable law, and the award may be challenged if they fail. The arbitration will occur in Fulton, Georgia unless otherwise required by applicable AAA rules or law. If a dispute proceeds in court instead of arbitration, it must be initiated or prosecuted in Fulton, Georgia's state and federal courts. The United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act do not apply to these Terms of Use. Any dispute related to the Site brought by either party cannot be initiated more than one year after the cause of action occurred. Disputes seeking to enforce or protect intellectual property rights, disputes related to theft, piracy, invasion of privacy, or unauthorized use, and claims for injunctive relief are not subject to the above provisions concerning binding arbitration. Suppose this provision is deemed illegal or unenforceable. In that case, neither party will elect to arbitrate any dispute that falls within that part of the provision, and such dispute will be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, with both parties agreeing to submit to the personal jurisdiction of that court. The parties agree that any arbitration will be limited to the dispute between the parties individually, will not be combined with any other proceeding, will not be conducted as a class action, and will not be brought in a purported representative capacity on behalf of the general public or any other persons.
                                        "
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Corrections</h1>
                                    <Alert
                                        description="Please be aware that there may be errors or omissions in the information provided on the Site, including typos, inaccuracies, descriptions, pricing, availability, and other details. However, we want to assure you that we have the right to correct any mistakes and update the information on the Site without prior notice."
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                            <Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
                                <div >
                                    <h1>Disclaimer</h1>
                                    <Alert
                                        description="
                                        Please be aware that the site is provided as-is and as-available. By using the site and our services, you acknowledge and accept that you are solely responsible for any risks arising from using the site. We want to be clear that we do not offer any warranties, expressed or implied, regarding the site and your use of it. This includes but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We cannot guarantee the accuracy or completeness of the content on the site or any linked websites. We cannot be held responsible for any errors, mistakes, or inaccuracies in the content and materials.
                                        Additionally, we cannot accept responsibility for any personal injury or property damage that may occur due to your use of the site, any unauthorized access to or use of our secure servers, or any interruption or cessation of transmission to or from the site. We also do not endorse any product or service advertised or offered by a third party through the site. We will not be a party to any transaction between you and any third-party providers of products or services. Please use caution and your best judgment when purchasing or using any service offered through the site. We assure you that we are dedicated to providing a secure and reliable site.
            "
                                        type="warning"
                                        className='heroText'
                                    />


                                </div>

                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>Limitations of Liability</h1>
        <Alert
            description="Please be aware that we cannot be held responsible for any damages you or any third party suffered from using our website. These damages may include lost profits, revenue, or data loss, among others. Our employees, directors, and agents are not liable even if we had prior knowledge of such damages. However, if you encounter any issues, we will only be liable for the amount you paid us within three months before the issue arose. Please note that certain state and international laws may prohibit limitations on implied warranties or the exclusion or reduction of certain damages. If these laws apply to you, some of the above disclaimers or limitations may not be relevant, and you may have additional rights.
            "
            type="warning"
            className='heroText'
        />


    </div>

</Col>

<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>Indemnification</h1>
        <Alert
            description="
            Using the Site, you have agreed to protect and defend us and our subsidiaries, affiliates, officers, agents, partners, and employees against any loss, damage, liability, claim, or demand made by a third party. This includes reasonable attorney fees and expenses that arise from any of the following: (1) your Contributions, (2) your use of the Site, (3) any breach of these Terms of Use, (4) any misrepresentation or warranty breach made by you, or (5) any violation of a third party's rights, including intellectual property rights, or any harmful act towards another user of the Site. If you are required to indemnify us, we have the right to assume exclusive defense and control of the matter at your expense. It is important that you cooperate with us in defending such claims. We will promptly inform you as soon as we become aware of any claims, actions, or proceedings that fall under this indemnification.
"
            type="warning"
            className='heroText'
        />


    </div>

</Col>

</Row>

<Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>User Data</h1>
        <Alert
            description="We collect data from the site to ensure it performs well. We have robust security measures in place, but you are responsible for all data transmitted and any activity on the Site. By using the Site, you accept that we cannot be held accountable for any loss or corruption of your data, and you waive any right to take action against us in such cases.
            "
            type="warning"
            className='heroText'
        />


    </div>

</Col>

<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>Electronic Communications, Transactions, and Signatures</h1>
        <Alert
            description="
            You engage in electronic communications when you interact with us through our website, online forms, or email. By doing so, you agree to receive these electronic communications and acknowledge that any information we provide you via email or on the site meets the legal requirements for written communication. You also agree to use electronic signatures for contracts, orders, records, and electronic delivery of notices, policies, and transaction records. By agreeing to this, you waive any requirements under laws that may mandate original signatures or non-electronic records. Additionally, please note that payments and credits will be made electronically.
"
            type="warning"
            className='heroText'
        />


    </div>

</Col>

</Row>

<Row justify={'space-evenly'} align={'top'} gutter={[0, 16]} >


<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>State of California</h1>
        <Alert
            description="If, for any reason, you are not completely satisfied with the resolution of your complaint with LIS, there is a solution. You can confidently contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs. They can assist you in writing at 1625 North Market Blvd, Suite N 112, Sacramento, California 95834, or by telephone at (800) 952-5210 or (916) 445-1254. Rest assured that your concerns will be handled with the utmost care and professionalism."
            type="warning"
            className='heroText'
        />


    </div>

</Col>

<Col xs={{ span: 22, order: 2 }} md={{ span: 8, order: 1 }} className='alignCol_1'>
    <div >
        <h1>Miscellaneous</h1>
        <Alert
            description="
            By using this Site, you agree to our Terms of Use and other policies, representing your entire agreement with us. We will uphold our rights to the fullest extent permitted by law, and not enforcing any part of these terms does not mean we are waiving those rights. We fully comply with applicable laws and may transfer our rights and obligations to others. We are not responsible for losses, damages, delays, or failures beyond our control. If any part of these terms is illegal, invalid, or unenforceable, it will be removed, but the rest will still apply. Using this Site does not create any joint venture, partnership, employment, or agency relationship between you and us. By agreeing to these terms, you acknowledge that they are fair and impartial. Additionally, you waive any defenses arising from the electronic form of these terms or the lack of physical signatures from both parties.
"
            type="warning"
            className='heroText'
        />


    </div>

</Col>

</Row>

<Row justify={'center'} align={'middle'} gutter={[0, 16]}>


<Col xs={{ span: 22, order: 2 }} md={{ span: 18, order: 1 }} className='alignCol_1'>
    <div >
        <h1>Contact Us</h1>
        <Alert
            description="To resolve a complaint regarding the Site or to receive further information regarding the use of the Site, please get in touch with us at K.C. Morris Inc 3500 Lenox Road Suite 1500 Atlanta, Ga;  Phone 4045850349; Email ken@kcminc.io"
            type="warning"
            className='heroText'
        />


    </div>

</Col>



</Row>



         

                </Content>
            </Layout>

            <Public_Footer />

        </Layout>

    )
}

export default TermsOfService;