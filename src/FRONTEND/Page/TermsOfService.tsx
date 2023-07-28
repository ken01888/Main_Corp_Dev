import * as React from 'react'
import { Col, Divider, Layout, Row, ConfigProvider,Space, Card, Button } from 'antd'
import Menu from './Components/Navigation/Main_Menu'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import 'isomorphic-fetch';




import {  Link } from 'react-router-dom'
import Meta from 'antd/es/card/Meta'



const TermsOfService: React.FC = () => {



    return (

        <Layout className='layout'>

            <Header className='header'>

                <Menu/>

            </Header>

            <Layout className='homeScreenDesktop'>

                <Content >
                    <Space wrap size={[125, 125]}>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                                <h1>TERMS OF USE</h1>
                                <Divider className='dividerHeader'></Divider>
                                <p >
                                    At Kcm Inc, our focus is on providing business solutions that
                                    benefit both consumers and producers. Our solutions are specifically
                                    designed to maximize benefits for the community and stakeholders alike.
                                    We take pride in our commitment to delivering solutions that promote
                                    mutual success for all parties involved.
                                </p>

                                <div>
                                    <Card title="1. AGREEMENT TO TERMS" >


                                        <Meta
                                            description="Greetings from K.C. Morris Inc, also known as Kcm Inc ('Kcm Inc,' 'we,' 'us,' or 'our'). When you access our website, http://www.kcminc.io, and any related media channels or applications (collectively referred to as the 'Site'), you agree to the following Terms of Use. These terms create a legally binding agreement between you, whether you are using the Site personally or on behalf of an entity. Please read and understand these terms before using the Site. If you do not agree to these terms, you may not use the Site.

                                            We may update these Terms of Use from time to time. Please check the 'Last updated' date to see if any changes have been made. By continuing to use the Site, you agree to the updated terms posted. Any other terms or documents posted on the Site are also included by reference.
                                            
                                            The information provided on the Site is intended for use only in locations where it is lawful and complies with local regulations. If you access the Site from another location, you must comply with local laws.
                                            
                                            If you are under 18 years of age, you must obtain your parent or guardian's permission and supervision before using the Site. Please have your parent or guardian read and agree to these Terms of Use before using the Site." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="2. INTELLECTUAL PROPERTY RIGHTS" >


                                        <Meta
                                            description='We own the Site and all the material on it, including the source code, databases, features, software, website designs, audio, video, text, photos, and graphics. We also control the trademarks, service marks, and logos on the Site, which are protected by copyright, trademark laws, intellectual property rights, and unfair competition laws. The Content and the Marks are only available for your personal use on the Site. You cannot copy, reproduce, aggregate, republish, upload, publicly display, encode, translate, transmit, distribute, sell, license, or exploit them commercially without our permission. However, if you are eligible, you can access and use the Site, download, or print any part of the Content for your personal, non-commercial use. We retain all rights not explicitly granted to you in the Site, the Content, and the Marks.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="3. USER REPRESENTATIONS" >


                                        <Meta
                                            description='To use the Site, users must provide truthful, accurate, current, and complete information during registration. It is important to keep this information up to date. By using the Site, users agree to these Terms of Use and must have the legal capacity to do so. Minors need parental permission to access the Site. Accessing the Site through non-human or automated means is not allowed, and it should only be used for legal and authorized purposes. Users must comply with all laws and regulations while using the Site. Providing false or incomplete information may result in account suspension or termination, and may prevent access to the Site.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="4. USER REGISTRATION" >


                                        <Meta
                                            description='In order to access the Site, you may need to register and create a password. It is very important to keep your password confidential as you are responsible for any activity that happens under your account. We have the right to remove, reclaim, or modify your username if we consider it inappropriate, obscene, or objectionable.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="5. PROHIBITED ACTIVITIES" >


                                        <Meta
                                            description="When using the Site, please keep in mind that it is only intended for its designated purpose. Engaging in any commercial activity is not permitted without our express endorsement or approval. Additionally, as a user, it is prohibited to perform the following actions: retrieving data or content without our written consent, participating in fraudulent or misleading activities, attempting to bypass security measures, creating harm or negative comments towards us or the Site, harassing or harming others with information obtained from the Site, misusing support services, violating any applicable laws or regulations, attempting to manipulate the Site's framework, uploading or transmitting harmful material, using automated systems, removing copyright or proprietary rights notices, impersonating other users, collecting or transmitting information without consent, disrupting the Site or its services, harassing our employees or agents, circumventing access restrictions, copying or adapting Site software, decoding or reverse engineering software, launching automated systems without permission, using the Site without authorization, using the Site for commercial purposes, advertising or offering goods and services, and selling or transferring profiles." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="6. USER GENERATED CONTRIBUTIONS" >


                                        <Meta
                                            description="As a user of this site, you can chat, post blogs, and use message boards. You can also submit various forms of content such as text, videos, audio, photographs, and graphics. Please note that other users and third-party websites can see your contributions, and they are not confidential or proprietary.

                                            When submitting any contributions, it's crucial to confirm that you haven't infringed on any third-party rights, including copyrights, patents, trademarks, trade secrets, or moral rights. You must confirm that you're the owner of the materials or have the necessary licenses, rights, consents, releases, and permissions to use and authorize us, the site, and other users to use your contributions.
                                            
                                            If your contributions feature identifiable individuals, you must obtain their written consent and permission to use their names or likeness on the site. Your contributions must be truthful, accurate, and free of unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
                                            
                                            Also, your contributions must not contain any obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable content. They must not ridicule, mock, disparage, intimidate, or abuse anyone. They must not be used to harass or threaten any person or promote violence against someone or a class of people.
                                            
                                            Furthermore, your contributions must comply with all applicable laws, regulations, and rules, including those concerning child protection and the well-being of minors. Please avoid including any offensive comments related to race, national origin, gender, sexual references, or physical disabilities. Failure to comply with these guidelines may result in the termination or suspension of your access to the site.
                                            
                                            Please abide by these terms of use and all applicable laws and regulations while using the site." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="7. CONTRIBUTION LICENSE" >


                                        <Meta
                                            description='By contributing to our Site or linking your social networking accounts to your Site account, you are giving us permission to use your contributions in any way we see fit, including for commercial and advertising purposes. This includes any images or voice recordings you provide, which we may use to create new works or add to existing ones. Our license applies to all forms of media and communication, and we may use your name, company name, franchise name, trademarks, service marks, trade names, logos, as well as your personal and commercial images. You will still own all of your contributions and any associated intellectual property or proprietary rights, but you waive all moral rights. You are responsible for anything you say or represent in your contributions, and we are not responsible for them. We reserve the right to categorize, edit, or delete your contributions without notice, and we have no obligation to monitor them.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>

                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="8. GUIDELINES FOR REVIEWS" >


                                        <Meta
                                            description='Our website allows you to share your personal experiences by leaving reviews and ratings. To ensure that all reviews are accurate and fair, please follow these guidelines: (1) Only review individuals or entities that you have personally experienced. (2) Please refrain from using offensive, abusive, racist, or hateful language in your reviews. (3) Discrimination based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability is strictly prohibited. (4) No references to illegal activities are permitted. (5) If you have affiliations with competitors, please do not post negative reviews. (6) Please avoid making conclusions about the legality of conduct. (7) False or misleading statements are not allowed. (8) Organizing campaigns to encourage reviews, positive or negative, is prohibited. We reserve the right to accept, reject, or remove reviews at our discretion. Please note that reviews do not necessarily reflect our opinions or those of our affiliates or partners, and they are not endorsed by us. We are not liable for any claims, liabilities, or losses resulting from any review. By submitting a review, you give us permission to reproduce, modify, translate, transmit, display, perform, and/or distribute all content relating to reviews in a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable way.
                                            ' />



                                    </Card>
                                </div>
                            </Col>

                        </Row> <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="9. MOBILE APPLICATION LICENSE" >


                                        <Meta
                                            description="You can access our Site through a mobile application on any wireless electronic device that you own or control. However, please note that this permission is limited and non-transferable. You must follow the terms and conditions outlined in the mobile application license, which is included in these Terms of Use. It is strictly prohibited to modify the application or use it for unlawful purposes. You should not remove any proprietary notices or use the application for commercial purposes, or compete with any products or services. If you use the mobile application on an Apple or Android device, you must follow the usage rules of the App Distributor. Please note that the App Distributor is not responsible for providing maintenance or support services for the application. You must also follow any applicable third-party terms of agreement. Furthermore, the App Distributors have the legal right to enforce the terms and conditions against you as third-party beneficiaries of the mobile application license contained in these Terms of Use.
                                            " />



                                    </Card>
                                </div>
                            </Col>

                        </Row> 
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="10. SOCIAL MEDIA" >


                                        <Meta
                                            description="To enhance your experience on our website, you can link your account with third-party service providers' online accounts, which we refer to as 'Third-Party Accounts'. You can link your accounts by providing your login information through our site or allowing us to access your Third-Party Account, as long as it's permitted under the terms and conditions that govern your use of each account. By linking your accounts, you acknowledge that we may access and store any content you've provided to your Third-Party Account, such as friend lists, and we may also submit or receive additional information. Please keep in mind that depending on the Third-Party Accounts you choose and your privacy settings, any personally identifiable information you post to your Third-Party Accounts may be available on our site.
                                            It's important to note that the third-party service providers associated with your Third-Party Accounts have sole authority over your relationship with them. We do not review any Social Network Content for accuracy, legality, or non-infringement, and we are not responsible for any Social Network Content.
                                            
                                            If you wish to disconnect your Third-Party Account from our site, you can do so at any time. However, please note that terminating our access to your Third-Party Account may result in any Social Network Content no longer being available on our site.
                                            
                                            We may access your email address book and contacts list stored on your mobile device or tablet computer only for identifying and informing you of contacts who have also registered to use our site. If you decide to disconnect your Third-Party Account from our site, we will try to delete any information obtained through your Third-Party Account." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="11. SUBMISSIONS" >


                                        <Meta
                                            description='If you provide us with any thoughts, ideas, feedback, or other information about the Site, please note that we will consider them our exclusive property, and we will hold all intellectual property rights to them. We may use and share these submissions for any lawful purpose, commercial or otherwise, without acknowledging or compensating you. You waive all moral rights to them and confirm that they are original or that you have the right to submit them. Please understand that we cannot be held responsible for any alleged or actual infringement or misappropriation of any proprietary right in your submissions.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="12. THIRD-PARTY WEBSITE AND CONTENT" >


                                        <Meta
                                            description="Our website may contain links to Third-Party Websites and Third-Party Content. We want you to know that we take the accuracy, appropriateness, and completeness of these links seriously. However, we do not investigate, monitor, or check them ourselves. As a result, we cannot be held responsible for any Third-Party Websites accessed through our site or any Third-Party Content posted, available through, or installed from our site. This includes the content's accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of the Third-Party Websites or the Third-Party Content. It's important to note that the inclusion of links or permission to use or install any Third-Party Websites or any Third-Party Content does not imply our approval or endorsement. If you decide to leave our site and access the Third-Party Websites or use or install any Third-Party Content, you do so at your own risk, and our Terms of Use no longer apply. We recommend reviewing the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from our site or any applications you use or install from our site. Finally, any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases, which are exclusively between you and the applicable third party. We do not endorse the products or services offered on Third-Party Websites, and you will hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="13. ADVERTISERS" >


                                        <Meta
                                            description="As an advertiser, you have complete control over the placement of your ads and other information on the Site. This includes banner and sidebar ads, as well as any products or services sold through those ads. It's important to note that you are solely responsible for the content you place on the Site and for ensuring that you have all necessary rights and authority, including intellectual property, publicity, and contractual rights. We simply provide the space for your ads and have no affiliation with advertisers." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="14. SITE MANAGEMENT" >


                                        <Meta
                                            description='As part of our responsibility to maintain these Terms of Use, we are authorized to monitor the Site and take necessary legal actions against anyone who violates them. We may also report such violations to law enforcement authorities. In certain circumstances, we may limit your access to the Site, disable your Contributions, or remove excessive files or content that may burden our systems. We are committed to protecting our rights and property and ensuring the proper functioning of the Site.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="15. PRIVACY POLICY" >


                                        <Meta
                                            description='We prioritize data privacy and security. By using the site, you are agreeing to our Privacy Policy located on the site, which is included in these Terms of Use. Please note that the site is based in the United States. If you access the site from a region with laws or regulations regarding personal data that differ from those in the United States, you are transferring your data to the United States by continuing to use the site. You also agree to have your data transferred and processed in the United States.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="16. COPVRIGHT INFRINGEMENTS" >


                                        <Meta
                                            description='If you believe that any material available on or through our Site infringes upon your copyright, we take this matter seriously and want to be notified immediately. Please use the contact information provided below to send us a "Notification." We will promptly forward a copy of your Notification to the individual who posted or stored the material in question. Please keep in mind that, according to applicable law, you may be held liable for damages if you make false statements in your Notification. If you are unsure whether material on or linked to our Site infringes your copyright, we recommend that you consult with a legal professional before taking any action.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="17. TERM AND TERMINATION" >


                                        <Meta
                                            description='By using the Site, you agree to follow these Terms of Use. If we find that you have violated these terms or any laws or regulations, we may block your access to the Site, including specific IP addresses, without any prior warning or liability. We also reserve the right to terminate your use of the Site and delete your account and any content or information you have posted, at any time and without notice. If we do decide to terminate your account, you are not allowed to create a new one under your name, a fake name, or the name of a third party. We may take legal action against you, including pursuing civil, criminal, and injunctive remedies.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="18. MODIFICATIONS AND INTERRUPTIONS" >


                                        <Meta
                                            description="At any time, we have the right to modify, change, or remove any content on our site without prior notice. Although we are not obligated to update any information on the site, we may discontinue or modify all or part of it without notice. We cannot be held responsible for any changes, suspensions, or discontinuations that may occur. While we strive to ensure the site is always available, technical issues or maintenance may cause occasional interruptions or errors. We reserve the right to make changes or updates to the site without notice, and we are not responsible for any inconvenience caused by the site's downtime or discontinuance.

                                            Linking your account with third-party service providers is simple. You may provide your login information or allow us to access your account. By granting us access, you confirm that you are authorized to disclose your login information and allow us to access your account without violating any terms or conditions. Depending on the privacy settings, we may access and store any content you have provided on the third-party site. If the third-party account becomes unavailable, the content may no longer be accessible on our site. However, you can disconnect your account at any time.
                                            
                                            We do not review user-generated content for accuracy, legality, or non-infringement. However, we may access your email address book and contacts list solely for identifying and informing you of contacts who have also registered to use the site. You may deactivate the connection by contacting us or adjusting your account settings. We will attempt to delete any information obtained from the third-party account, except for the username associated with the account." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="19. GOVERNING LAW" >


                                        <Meta
                                            description="To use the Site, it is important to follow the laws of the State of Georgia and comply with these Terms of Use. These Terms of Use will be interpreted according to Georgia's laws, regardless of any conflicts of law principles, even if the agreement is executed in Georgia." />

                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="20. DISPUTE RESOLUTION" >


                                        <Meta
                                            description="If informal negotiations fail, any dispute will be resolved through binding arbitration, except for specific disputes. This provision eliminates the right to sue and have a trial by jury. The arbitration process will follow the Commercial Arbitration Rules of the American Arbitration Association and the AAA Consumer Rules, which will govern arbitration fees and compensation for the arbitrator. Arbitration can be done in person, online, by phone, or through document submission. The arbitrator's decision will be in writing, but they are not required to provide a statement of reasons unless requested by either party. The arbitrator must comply with applicable law, and if they fail to do so, the award may be challenged. The arbitration will take place in Fulton, Georgia, unless otherwise required by applicable AAA rules or law. If a dispute proceeds in court instead of arbitration, it must be initiated or prosecuted in the state and federal courts located in Fulton, Georgia. The United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act do not apply to these Terms of Use. Any dispute related to the Site brought by either party cannot be initiated more than one year after the cause of action occurred. Disputes seeking to enforce or protect intellectual property rights, disputes related to theft, piracy, invasion of privacy, or unauthorized use, and claims for injunctive relief are not subject to the above provisions concerning binding arbitration. If this provision is deemed illegal or unenforceable, neither party will elect to arbitrate any dispute that falls within that part of the provision, and such dispute will be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, with both parties agreeing to submit to the personal jurisdiction of that court. The parties agree that any arbitration will be limited to the dispute between the parties individually, will not be combined with any other proceeding, will not be conducted as a class action, and will not be brought in a purported representative capacity on behalf of the general public or any other persons." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title='21. CORRECTIONS'>


                                        <Meta
                                            description='Please be aware that there may be errors or omissions in the information provided on the Site, including typos, inaccuracies, descriptions, pricing, availability, and other details. However, we want to assure you that we have the right to correct any mistakes and update the information on the Site without prior notice.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="22. DISCLAIMER" >


                                        <Meta
                                            description="Please be aware that the site is provided as-is and as-available. By using the site and our services, you acknowledge and accept that you are solely responsible for any risks that may arise from your use of the site. We want to be clear that we do not offer any warranties, whether expressed or implied, regarding the site and your use of it. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We cannot guarantee the accuracy or completeness of the content on the site or any linked websites. We cannot be held responsible for any errors, mistakes, or inaccuracies in the content and materials provided. Additionally, we cannot accept responsibility for any personal injury or property damage that may occur as a result of your use of the site, any unauthorized access to or use of our secure servers, or any interruption or cessation of transmission to or from the site. We also do not endorse any product or service advertised or offered by a third party through the site. We will not be a party to any transaction between you and any third-party providers of products or services. Please use caution and your best judgment when making a purchase or using any service offered through the site. We want to assure you that we are dedicated to providing you with a secure and reliable site." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="23. LIMITATIONS OF LIABILITY" >


                                        <Meta
                                            description='Please be aware that we cannot be held responsible for any damages suffered by you or any third party resulting from the use of our website. These damages may include lost profits, lost revenue, or loss of data, among others. Even if we had prior knowledge of such damages, our employees, directors, and agents are not liable. However, if you encounter any issues, we will only be liable for the amount you paid us within three months before the issue arose. Please note that there may be certain state and international laws that prohibit limitations on implied warranties or the exclusion or reduction of certain damages. If these laws apply to you, some of the above disclaimers or limitations may not be relevant, and you may have additional rights.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="24. INDEMNIFICATION" >


                                        <Meta
                                            description="By using the Site, you have agreed to protect and defend us, along with our subsidiaries, affiliates, officers, agents, partners, and employees against any loss, damage, liability, claim, or demand made by a third party. This includes reasonable attorney fees and expenses that arise from any of the following: (1) your Contributions, (2) your use of the Site, (3) any breach of these Terms of Use, (4) any misrepresentation or warranty breach made by you, or (5) any violation of a third party's rights, including intellectual property rights, or any harmful act towards another user of the Site. If you are required to indemnify us, we have the right to assume exclusive defense and control of the matter at your expense. It is important that you cooperate with us in defending such claims. As soon as we become aware of any claims, actions, or proceedings that fall under this indemnification, we will promptly inform you." />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="25 USER DATA" >


                                        <Meta
                                            description='We collect data from your use of the Site to ensure it performs well. We have strong security measures in place, but you are responsible for all data transmitted and any activity on the Site. By using the Site, you accept that we cannot be held responsible for any loss or corruption of your data and you waive any right to take action against us in such cases.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES" >


                                        <Meta
                                            description='When you interact with us through our website, online forms, or email, you are engaging in electronic communications. By doing so, you are agreeing to receive these electronic communications and acknowledging that any information we provide to you via email or on the site meets legal requirements for written communication. You also agree to the use of electronic signatures, contracts, orders, and records, as well as electronic delivery of notices, policies, and transaction records. By agreeing to this, you waive any requirements under laws that may mandate original signatures or non-electronic records. Additionally, please note that payments and credits will be made electronically.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="27. CALIFORNIA USERS AND RESIDENTS" >


                                        <Meta
                                            description='If for any reason you are not completely satisfied with the resolution of your complaint with LIS, there is a solution. You can confidently reach out to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs. They can assist you in writing at 1625 North Market Blvd, Suite N 112, Sacramento, California 95834, or by telephone at (800) 952-5210 or (916) 445-1254. Rest assured that your concerns will be handled with the utmost care and professionalism.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="28. MISCELLANEOUS" >


                                        <Meta
                                            description='By using this Site, you agree to our Terms of Use and other policies, which represent your entire agreement with us. We will uphold our rights to the fullest extent permitted by law, and not enforcing any part of these terms does not mean we are waiving those rights. We are fully compliant with applicable laws and may transfer our rights and obligations to others at any time. We are not responsible for any losses, damages, delays, or failures beyond our control. If any part of these terms is illegal, invalid, or unenforceable, it will be removed, but the rest of the terms will still apply. Using this Site does not create any joint venture, partnership, employment, or agency relationship between you and us. By agreeing to these terms, you acknowledge that they are fair and impartial. Additionally, you waive any defenses that may arise from the electronic form of these terms or the lack of physical signatures from both parties.' />



                                    </Card>
                                </div>
                            </Col>

                        </Row>
                        <Row justify={'space-evenly'} gutter={[0, 75]} >
                            <Col xs={22} md={12}>
                               

                                <div>
                                    <Card title="29. CONTACT US" >


                                        <Meta
                                            description='In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site please contact us at
                                            K.C. Morris Inc
                                            3500 LENOX Road Suite 1500
                                            ATLANTA,GA
                                            Phone 4045850349
                                            ken@kcminc.io' />
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
                                <Link reloadDocument to='/terms_of_service'><Button htmlType="submit">Terms of Service</Button></Link>


                            </ConfigProvider>
                        </Space>

                    </Col>

                </Row>
            </Footer>
        </Layout>

    )
}

export default TermsOfService;