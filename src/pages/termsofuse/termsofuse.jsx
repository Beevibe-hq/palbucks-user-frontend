import Sidebar from "../../components/sidebar/sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import Policylists from "../../components/policylists/policylists";



function Termsofuse(){

    const dispatch = useDispatch()
    
    const sidebarslid = useSelector(state => state.sidebarslid)
    const sidebaropen = useSelector(state => state.sidebarstate)
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const navigate = useNavigate()
    const goback = () =>{
        navigate(-1)
        
    }

    useEffect(()=>{
        window.scrollTo(0,0)

    },[])

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Learn About our Terms of Service</h1>
                    <p className=" text-[18px] mb-14 " >Updated: March 30, 2022</p>

                    <h2 className="text-[24px] font-black mb-[15px] " >Palbucks Terms of Service</h2>
                    <p className="text-[18px] mb-5 " >
                        These General Terms of Service (“General Terms”) are a legal agreement between you, If you are an Organizer 
                        (as defined below), Beneficiary (as defined below) to a Fundraiser (as defined below), comment contributor, 
                        or Donor (as defined below) (collectively referred to herein as a “User”)  ) AND Palbucks, 
                        (”Palbucks,” “we,” “our” or “us”) and govern your use of Palbucks’ services, including mobile applications, 
                        websites, software, hardware, and other products and services (collectively, the “Services”).
                    </p>
                    <p className="text-[18px] mb-5 " >
                        Subject to these Terms of Service, as amended from time to time (“Terms of Service”), Beevibe Technologies 
                        Limited. provides the Palbucks platform to You (user) through its website at www.Palbucks.com and the 
                        Palbucks Community and related services (collectively, with the Platform, including any new features and 
                        applications, the “Services”). If You are located anywhere in the world you are contracting with Beevibe 
                        Technologies Ltd. (Nigeria). Unless specifically indicated otherwise, for purposes of the following Terms 
                        of Service, “Palbucks,” “we,” “us,” “our,” and other similar terms, shall refer to the party with whom you 
                        are contracting.
                    </p>
                    <p className=" text-[18px] mb-5">
                        We reserve the right, at our sole discretion, to change or modify portions of these Terms of Service at any
                        time and without notice. When we do this, we will post the revised Terms of Service on this page and will
                        indicate the date of such revision.
                    </p>
                    <p className="text-[18px] mb-20 " >
                        Your continued use of the Services after the date of any such changes constitutes your acceptance of the new 
                        Terms of Service. To the extent allowed by law, the English version of these Terms of Service is binding and 
                        other translations are for convenience only. If you do not wish to accept the new Terms of Service, you may 
                        discontinue your use of the Services.
                    </p>

                    <h3 className="text-[24px] font-black mb-8 " >ACCESS AND USE OF THE SERVICES</h3>
                    
                    {/* 
                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >10. Data from Other Services:</h2>
                            <p className="text-[18px] tracking-[0.8px] leading-7" >
                                Palbucks may use other third-party 
                                services to improve the quality of our own customer database so that we might improve our Services to you. 
                                If you would like to opt out of these efforts, please contact us at the email address or mailing address 
                                set forth under <Link to='/helpcenter' className = 'text-[#37BCF7]' >Help Center</Link>
                            </p>
                        </div>
                    </div> 
                    */}


                    <Policylists title = '1. The Services Description:' description = {`The Services are offered as a platform to allow an individual, entity or non-profit organization 
                        (the “Organizer”) to post a fundraiser (“Fundraiser”) to the Platform to accept monetary donations 
                        (“Donations”) from donors (“Donors”) on behalf of the beneficiary of the Fundraiser (“Beneficiary”).`} 
                    />

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >2. Payment Processor:</h2>
                            <p className="text-[18px] tracking-[0.8px] leading-7" >
                                Palbucks is not a payment processor and does not hold any funds. Instead, Palbucks uses stable coins and 
                                elements of decentralised finance (defi) on the blockchain for the movement of funds on the platform.. You 
                                acknowledge and agree that the use of the blockchain is integral to the Services and that we do not exchange 
                                information with any third- party Payment Processors in order to facilitate the provision of the Services. 
                                See our <Link to= '/privacypolicy' className=" text-[#37BCF7] " >Privacy Policy</Link>.
                            </p>
                        </div>
                    </div>

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >3. Transaction Fee:</h2>
                            <p className="text-[18px] tracking-[0.8px] leading-7" >
                                Although there are no fees to start or maintain a Fundraiser, please keep in mind that a transaction fee, 
                            including credit and debit charges, is deducted from each withdrawal (hereinafter and on the website referred 
                            to as “Transaction Fee”). To learn more about the Platform and the applicable Transaction Fee, visit Palbucks 
                            <Link className="text-[#37BCF7]" > Pricing </Link>.
                            </p>
                        </div>
                    </div> 

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >4. The Services are Platforms; We are not a Broker, Financial Institution, Creditor or Charity:</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                The Services are administrative platforms only. Palbucks facilitates the Fundraiser of the Organizers and
                                permits Donors to make donations to these Fundraisers. Palbucks is not a broker, agent, financial institution,
                                creditor or nonprofit corporation.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                All information and content provided by Palbucks relating to the Services is for informational purposes only,
                                and Palbucks does not guarantee the accuracy, completeness, timeliness or reliability of any such information
                                or content. No content is intended to provide financial, legal, tax or other professional advice. Before
                                making any decisions regarding any Fundraisers, Charities (as defined below), Donations, Donors, or any
                                information or content relating to the Services, you should consult your financial, legal, tax or other
                                professional advisor as appropriate. You acknowledge that all information and content accessed by you using
                                the Services is at your own risk.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                Palbucks has no control over the conduct of, or any information provided by, a User and hereby disclaims all
                                liability in this regard to the fullest extent permitted by applicable law. We do not guarantee that a
                                Fundraiser will obtain a certain amount of Donations or any Donations at all. We do not endorse any Fundraiser,
                                User, or cause and we
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                make no guarantee, express or implied, that any information provided through the Services is accurate.
                                We expressly disclaim any liability or responsibility for the outcome or success of any Fundraiser. You,
                                as a Donor, must make the final determination as to the value and appropriateness of contributing to any
                                User or Fundraiser.
                            </p>
                        </div>
                    </div> 

                    <Policylists title = '5. No Solicitation:' description = {`The Platform is offered to help Organizers raise money. Palbucks merely provides the technology to allow 
                        Fundraisers to connect with Donors. The existence of the Services is not a solicitation of donations by 
                        Palbucks, and Palbucks does not engage in any solicitation activities, or consult on the solicitation of 
                        contributions from the public, on behalf of any individual, entity, or organization. By using the Services, 
                        you understand and agree that Palbucks is not responsible for the use of your Donations or the amount of 
                        funds raised for the User or Fundraiser.`} />

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >6. Donors:</h2>
                            <p className="text-[18px] tracking-[0.8px] leading-7" >
                                All Donations are at your own risk. When you make a Donation through the Platform, it is your responsibility 
                                to understand how your money will be used and to check the Fundraiser content regularly for any updates. 
                                Palbucks is not responsible for any offers, promises, rewards or Promotions (as defined below) made or offered 
                                by Users or Fundraisers; such conduct violates these Terms of Service. We do not and cannot verify the 
                                information that Users or Fundraisers supply, nor do we represent or guarantee that the Donations will be used 
                                in accordance with any fundraising purpose prescribed by a User or Fundraiser or in accordance with applicable 
                                laws. Notwithstanding the foregoing, we take possible fraudulent activity and the misuse of funds reported to us 
                                very seriously. You can learn more about How We Protect Our Community. If you have reason to believe that a User 
                                or Fundraiser is not raising or using the funds for their stated purpose, please use the 
                                “<span className="font-bold" >Report</span>” button on the Fundraiser to alert our team of this potential 
                                issue and we will investigate.
                            </p>
                        </div>
                    </div>

                    <Policylists title = '7. Organizers:' description = {`You, as an Organizer, represent, warrant, and covenant that: (i) all information you provide in connection 
                        with a Fundraiser or Beneficiary is accurate, complete, and not likely to deceive Users and that you will 
                        post updates as needed so that Users understand the use of funds and any other relevant information about 
                        your Fundraiser; (ii) all Donations contributed to your Fundraiser will be used solely as described in the 
                        materials that you post or otherwise provide; (iii) if you withdraw donations believed by Donors to be raised 
                        on behalf of someone other than you (i.e., the Beneficiary), all Donations will be given to and/or spent on 
                        behalf of the Beneficiary; (iv) if you add a Beneficiary through the Services, you relinquish control of the 
                        Donations; (v) you will not infringe the rights of others; (vi) you will comply with all relevant and 
                        applicable laws and financial reporting obligations, including but not limited to, laws and obligations 
                        relating to registration, tax reporting, political contributions, and asset disclosures for your Fundraiser; 
                        (vii) to the extent you share with us any personal data of any third party for any purpose, including the 
                        names, email addresses and phone numbers of your personal contacts, you have the authority (including any 
                        necessary consents), as required under applicable law, to provide us with such personal data and allow us 
                        to use such personal data for the purposes for which you shared it with us; and (viii) you will not provide 
                        or offer to provide goods or services in exchange for Donations. You authorize Palbucks, and Palbucks reserves 
                        the right to provide information relating to your Fundraiser to Donors, Beneficiaries of your Fundraiser or 
                        law enforcement or other regulatory authorities, and to assist in any investigation thereof. If you use the 
                        Services as an agent of a Charity to raise funds for such Charity, you represent and warrant that: (a) you 
                        are a representative of the Charity, which representative is authorized to raise funds for the Charity and 
                        bind the Charity to these Terms of Service; (b) you are raising funds for a Charity, with a cause or 
                        activity that is legal under all applicable federal, state, provincial, territorial and local laws and 
                        regulations; (c) all donated funds will be used solely for the purpose you have stated on and in connection 
                        with your Fundraiser, and under no circumstances may you use the funds for any other purpose; (d) your 
                        Charity has and will maintain tax-exempt status under applicable law (for example, the Internal Revenue 
                        Code in the United States or the Income Tax Act in Canada); and (e) if your Charity is in the United 
                        States, it is registered with GuideStar or the IRS tax exempt organization database, or, if your Charity 
                        is in Canada, it is listed in the Canada Revenue Agency’s database of registered charities.`}  />

                    <Policylists title = '8. Your Registration Obligations:' description = {`You may be required to register with Palbucks to access and use certain features of the Services. If you choose 
                        to register for the Services, you agree to provide and maintain true, accurate, current and complete information 
                        about yourself or your Charity as prompted by the Services’ registration form. Organizers must register using 
                        their true identities (or the identities of the Charities’ authorized representatives), including their name, 
                        address and any image or video purporting to depict the Organizer or the Beneficiary of such Fundraiser. You 
                        agree to keep registration information current and up to date. Registration data and certain other information 
                        about you are governed by these Terms of Service, including our Privacy Notice. If you are under 13 years of age 
                        (16 in Europe), you are not authorized to use the Services, with or without registering. In addition, if you are 
                        under the age of majority in your jurisdiction (typically 18 or 19 years of age), you may use the Services, with 
                        or without registering, only with the approval of your parent or guardian. Certain aspects of our Services may 
                        also require you to register with, and agree to the terms of, third-party service providers (e.g., Payment 
                        Processors), with whom Palbucks has entered into contracts, in order to be able to benefit from their services. 
                        If Palbucks or one of our partners at any time discovers that the information you provided about you or the 
                        purpose of your Fundraiser is incorrect or violates any of these Terms of Service or their terms of service, 
                        your access to the Services may be immediately suspended and/or terminated and fines may be applied by relevant 
                        authorities, which will in all such cases be payable by you.`}/>

                    <Policylists title = '9. Taxes:' description = {`It is your responsibility to determine what, if any, taxes apply to the Donations you receive through your use 
                        of the Services. It is solely your responsibility to assess, collect, report or remit the correct tax, if any, 
                        to the appropriate tax authority.`} />
                    
                    <Policylists title = '10. Member Account, Password and Security:' description = {`You are responsible for maintaining the confidentiality of your password and account, if any, and are fully 
                        responsible for any and all activities that occur under your password or account. You agree to: (i) 
                        immediately notify Palbucks of any unauthorized use of your password or account or any other breach of 
                        security; and (ii) sign out from your account at the end of each session when accessing the Services. 
                        Palbucks will not be liable for any loss or damage arising from your failure to comply with this section.`} />
                    
                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >11. Content Manifestly Made Public by the User:</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                A. Public Content; Public Display of Information and Donations. Some of your activity on and through the 
                                Services is public, such as content you post publicly on the Platform (including descriptions, texts, 
                                music, sound, information, data, software, graphics, comments, photos, videos, images, trademarks, logos, 
                                brands or other materials you upload or post through the Services or share with other Users or 
                                recipients) (collectively, “User Content”). Additionally, User profile information, including your 
                                first and last name, public email address, organization, personal biography, and other information you 
                                enter in connection with your User profile may be displayed to other Users to facilitate User interaction 
                                within the Services. For example, as an Organizer, you might post your personal data – such as information 
                                about a recent hospital stay – which data might be considered sensitive data. In addition, as a Donor, you 
                                have the option to publicly display your Donation for all to see, including on search engines (like Google 
                                and Yahoo). To keep the details of your Donation private from the general public, click the “Private” 
                                checkbox during the Donation process. Please remember that if you choose to provide information using 
                                certain public features of the Services, then that information is governed by the privacy settings of 
                                those particular features and may be publicly available. Individuals reading such information may use or 
                                disclose it to other individuals or entities without our knowledge and without your knowledge, and search 
                                engines may index that information. We therefore urge you to think carefully about including any specific 
                                information you may deem private in content that you create or information that you submit through the 
                                Services. Please see our Privacy Policy for information on the ways that we may collect, use, and store 
                                certain information about you and your use of the Services.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                B. Other Information. Please be advised that User Content and other information, solicited or unsolicited, 
                                that you provide to Palbucks may be publicly accessible, such as information you post in forums, comment 
                                sections or in response to surveys we may send out. We also collect information through customer support 
                                communications, your communications to us of ideas for new products or modifications to existing products, 
                                and other unsolicited submissions, or any questions, comments, suggestions, ideas, feedback or other 
                                information about the Services (collectively, with publicly-accessible information, “Other Information”). 
                                By sending us Other Information: (i) you agree that we are under no obligation of confidentiality, expressed 
                                or implied, with respect to the Other Information; (ii) you acknowledge that we may have something similar 
                                to the Other Information already under consideration or in development; (iii) you agree that Palbucks will 
                                be entitled to the unrestricted use and dissemination of the Other Information for any purpose, commercial 
                                or otherwise, without acknowledgment or compensation to you; (iv) you represent and warrant that you have 
                                all rights necessary to submit the Other Information; (v) to the extent necessary, you hereby grant to 
                                Palbucks a fully paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully transferable
                                and sublicensable right (through multiple tiers) and license to use, reproduce, perform, display, distribute, 
                                adapt, modify, re-format, create derivative works of, and otherwise commercially or non-commercially 
                                exploit in any manner, any and all Other Information, and to sublicense the foregoing rights; and (vi) 
                                you irrevocably waive, and cause to be waived, against Palbucks and its Users any claims and assertions 
                                of any moral rights contained in such Other Information. This Other Information section shall survive 
                                any termination of your account or the Services. You acknowledge and agree that Palbucks may preserve 
                                Other Information, as well as User Content, and may also disclose your Other Information or User Content 
                                if required to do so by law or in the good-faith belief that such preservation or disclosure is reasonably 
                                necessary to: (a) comply with legal process, applicable laws or government requests; (b) enforce these 
                                Terms of Service; (c) respond to claims that any User Content violates the rights of third parties; or 
                                (d) protect the rights, property, or personal safety of Beevibe, its Users, employees or the public.
                            </p>
                        </div>
                    </div>
                    
                    <Policylists title = '12. Third-Party Communications:' description = {`If you use any feature of the Services that allows you to communicate with third parties (such as to refer 
                        a third party to the Services or to communicate with them regarding a Fundraiser or a Donation), either by 
                        submitting data about the third party (“Third-Party Data”) to the Services or otherwise permitting the 
                        Services to automatically access Third-Party Data in your possession, you acknowledge and agree that you 
                        have the authority of the relevant third party for us to access and use the relevant Third-Party Data and 
                        that you have notified these third parties and informed them how their information is collected and used 
                        by Palbucks to provide the Services. We reserve the right to identify you as the person who has made the 
                        referral in any messages that are sent to them. We use Third-Party Data to: (i) contact such third party 
                        using the Third-Party Data provided; and/or (ii) provide you with an editable template message designed to 
                        facilitate communications between you and such third party through the Services. In addition to sending the 
                        foregoing communications, we may also send reminders or related messages to you and to third parties on your 
                        behalf from time to time where permitted by applicable law. In each case, any such communication sent to 
                        third parties using Third-Party Data will provide a means to “opt out” of receiving further communication of 
                        the same nature.`}
                    />
                    
                    <Policylists title = '13. Sales Prohibited on the Platform:' description = {`You are not permitted to offer any goods or service 
                    in exchange for a Donation on the Platform.`} />

                    <Policylists title = '14. Data Retention:' description = {`You acknowledge that Palbucks has no obligation to you to retain data relating to any account or 
                        Fundraiser. You acknowledge that Palbucks reserves the right to delete data or to terminate accounts 
                        or Fundraisers at any time and for any reason, with or without notice, and without any liability to you 
                        or to any third party for any claims, damages, costs or losses resulting therefrom. The foregoing does not 
                        apply to Fundraisers or accounts started by Charities on the Platform, in which case Palbucks will provide 
                        reasonable notice where possible.`}
                    />

                    <Policylists title = '15. Mobile Services and Text Messages:' description = {`The Palbucks Services include certain features that may be made available via a mobile device, including the ability to: 
                        (i) upload User Content to the Platform; (ii) browse the Platform; and (iii) access certain items through an application 
                        downloaded and installed on a mobile device (collectively, the “Mobile Services”). To the extent you access Mobile Services, 
                        your wireless service carrier’s standard charges, data rates and other fees may apply. In addition, downloading, installing, 
                        or using certain Mobile Services may be prohibited or restricted by your carrier, and not all Mobile Services may work with 
                        all carriers or devices. By using the Mobile Services, you agree that we may communicate with you about matters related to 
                        your account by SMS, MMS, text message or other electronic means to your mobile device and that certain information about 
                        your usage of the Mobile Services may be communicated to us. We will comply with any additional requirements that may apply 
                        under local laws and regulations before communicating with you in this manner. In the event that you change or deactivate 
                        your mobile telephone number, you agree to promptly update your Palbucks account information to ensure that your messages 
                        are not sent to the person that acquires your old number.`} />

                    <div className={`flex gap-2 lg:gap-5 mb-20 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >16. Prohibited Contents</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                You are solely responsible for compliance with all applicable law in relation to your Fundraiser or use of 
                                the Services. You are further solely responsible for all User Content that you upload, post, publish, 
                                display, transmit or otherwise use. If you are not the Beneficiary of the Fundraiser you organize, you 
                                agree to deliver funds to the ultimate Beneficiary directly and as soon as possible. You agree to fully 
                                cooperate with any request we make for evidence we deem necessary to verify your compliance with these 
                                Terms of Service. The following are examples of User Content and/or use that is illegal or prohibited by 
                                Palbucks. This list is not exhaustive and we reserve the right to remove any Fundraiser and/or investigate 
                                any User who, in our sole discretion, violates any of the terms or spirit of these Terms of Service, or 
                                other policies such as the Palbucks Giving Guarantee or Beneficiary Guarantee. As we investigate your 
                                Fundraiser, a User, or User Content, we may consider all available material including but not limited to 
                                social media, related news, and any other information that we, in our sole discretion, deem relevant in 
                                our review. We further reserve the right, without limitation, to ban or disable your use of the Services, 
                                remove the offending User Content, suspend or terminate your account, stop payments to any Fundraiser, 
                                freeze or place a hold on Donations, and report you to law enforcement authorities or otherwise take 
                                appropriate legal action, including without limitation, seeking restitution on behalf of ourselves and/or 
                                our Users. Without limiting the foregoing, you agree and represent, warrant and covenant:
                            </p>
                            <p className="text-[18px] leading-6 mb-8 tracking-[0.8px]" >
                                A. not to use the Services to raise funds or establish or contribute to any Fundraiser with the implicit or 
                                explicit purpose of promoting or involving:
                            </p>
                            <ul className=" list-disc flex flex-col gap-3 text-[18px] pl-10 mb-8 " >
                                    <li>
                                        the violation of any law, regulation, industry requirement, or third-party guidelines or agreements by which you are 
                                        bound, including those of payment card providers and transaction processors that you utilize in connection with the Services;
                                    </li>
                                    <li>
                                        any election campaigns in an unsupported country unless run by a registered organization within a supported country;
                                    </li>
                                    <li>
                                        User Content or Fundraisers that are fraudulent, misleading, inaccurate, dishonest, or impossible;
                                    </li>
                                    <li>
                                        drugs, narcotics, steroids, controlled substances, pharmaceuticals or similar products or 
                                        therapies that are either illegal, prohibited, or enjoined by an applicable regulatory body; legal 
                                        substances that provide the same effect as an illegal drug; or other products, medical practices, 
                                        or any related equipment or paraphernalia that have been found by an applicable regulatory body to 
                                        cause consumer harm;
                                    </li>
                                    <li>
                                        knives, explosives, ammunition, firearms, or other weaponry or accessories;
                                    </li>
                                    <li>
                                        annuities, investments, loans, equity or lottery contracts, lay-away systems, off-shore banking or 
                                        similar transactions, money service businesses (including currency exchanges, check cashing or the 
                                        like), pyramid schemes, “get rich quick schemes” (i.e., investment opportunities or other services 
                                        that promise high rewards), network marketing and referral marketing programs, debt collection or 
                                        crypto-currencies;
                                    </li>
                                    <li>
                                        gambling, gaming and/or any other activity with an entry fee and a prize, including, but not limited 
                                        to raffles, casino games, sports betting, fantasy sports, horse or greyhound racing, lottery tickets, 
                                        raffle tickets, auctions and other ventures that facilitate gambling, games of skill or chance 
                                        (whether or not it is legally defined as a lottery), Promotions involving monetary rewards, 
                                        including gift cards, or sweepstakes;
                                    </li>
                                    <li>
                                        User Content that reflects or promotes behavior that we deem, in our sole discretion, to be an 
                                        abuse of power or in support of hate, violence, harassment, bullying, discrimination, terrorism, 
                                        terrorist financing or intolerance of any kind relating to race, ethnicity, national origin, 
                                        religious affiliation, sexual orientation, sex, gender, gender identity, gender expression, 
                                        disabilities or diseases;
                                    </li>
                                    <li>
                                        the legal defense of alleged crimes associated with hate, violence, harassment, bullying, 
                                        discrimination, terrorism, or intolerance of any kind relating to race, ethnicity, national 
                                        origin, religious affiliation, sexual orientation, sex, gender, gender identity, gender expression, 
                                        serious disabilities or diseases, financial crimes or crimes of deception;
                                    </li>
                                    <li>
                                        the funding of a ransom, human trafficking or exploitation, vigilantism, bribes or bounty;
                                    </li>
                                    <li>
                                        pornography or other sexual content;
                                    </li>
                                    <li>
                                        offensive, graphic, perverse or sensitive content;
                                    </li>
                                    <li>
                                        credit repair or debt settlement services;
                                    </li>
                                    <li>
                                        the receipt or grant of cash advances or lines of credit to yourself or to another person for 
                                        purposes other than those purposes clearly stated in the Fundraiser;
                                    </li>
                                    <li>
                                        publication of User Content (such as mug shots), where we deem, in our sole discretion, that the 
                                        primary purpose of posting such User Content is to cause reputational harm;
                                    </li>
                                    <li>
                                        the sale or resale of a good or service;
                                    </li>
                                    <li>
                                        the aggregation of funds owed to third parties, factoring, or other activities intended to obfuscate 
                                        the origin of funds;
                                    </li>
                                    <li>
                                        counterfeit music, movies, software, or other licensed materials without the appropriate 
                                        authorization from the rights holder;
                                    </li>
                                    <li>
                                        products or services that directly infringe or facilitate infringement upon the trademark, patent, 
                                        copyright, trade secrets, or proprietary or privacy rights of any third party;
                                    </li>
                                    <li>
                                        the unauthorized sale or resale of brand name or designer products or services;
                                    </li>
                                    <li>
                                        the sale of goods or services that are illegally imported or exported;
                                    </li>
                                    <li>
                                        processing, where there is no bona fide donation accepted; cash advance; card testing; evasion of 
                                        card network chargeback monitoring programs;
                                    </li>
                                    <li>
                                        the collecting or providing of funds for any purpose other than as described in a Fundraiser 
                                        description;
                                    </li>
                                    <li>
                                        any other activity that Palbucks may deem, in its sole discretion, to be in support of 
                                        individuals and/or entities associated with alleged financial crimes including but not 
                                        limited to corruption, bribery, tax evasion, fraud, and activities of a similar nature; or
                                    </li>
                                    <li>
                                        any other activity that Palbucks may deem, in its sole discretion, to: (a) be unacceptable or 
                                        objectionable; (b) restrict or inhibit any other person from using or enjoying the Services; or 
                                        (c) expose Palbucks or Users to any harm or liability of any type.
                                    </li>
                            </ul>

                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >        
                                B. not to use the Services to transmit or otherwise upload any User Content that: (i) infringes any 
                                intellectual property or other proprietary rights of any party; (ii) you do not have a right to upload 
                                under any law or under contractual or fiduciary relationships; (iii) contains software viruses or any 
                                other computer code, files or programs designed to interrupt, destroy or limit the functionality of 
                                any computer software or hardware or telecommunications equipment; (iv) poses or creates a privacy or 
                                security risk to any person; or (v) constitutes unsolicited or unauthorized advertising, promotional 
                                materials, commercial activities and/or sales, “junk mail,” “spam,” “chain letters,” “pyramid schemes,” 
                                “contests,” “sweepstakes,” or any other form of solicitation;;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                C. not to interfere with or disrupt servers or networks connected to or used to provide the Services or 
                                their respective features, or disobey any requirements, procedures, policies or regulations of the 
                                networks connected to or used to provide the Services;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                D. not to harvest, collect or publish personally identifiable information of others;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                E. not to raise funds for a minor without the express permission of the minor’s guardian unless the funds 
                                are transferred into a trust account for the sole benefit of the minor;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                F. not to use the Services on behalf of a third party or post any personal data or other information about 
                                a third party, without the express consent of that third party;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                G. not to use another User’s account or URL without permission, impersonate any person or entity, falsely 
                                state or otherwise misrepresent your affiliation with a person or entity, misrepresent a Charity or 
                                Fundraiser through the Services, or post User Content in any inappropriate category or areas on the Services;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                H. not to create any liability for Palbucks or cause us to lose (in whole or in part) the services of 
                                our Internet Service Provider(s), web hosting company or any other vendors or suppliers;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                I. not to gain unauthorized access to the Services, or any account, computer system, or network connected 
                                to the Services, by any unauthorized or illegal means;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                J. not to obtain or attempt to obtain any materials or information not intentionally made available through 
                                the Services;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                K. not to use the Services to post, transmit or in any way exploit any information, software or other 
                                material for commercial purposes, or that contain advertising, except that using the Services for 
                                fundraising activities in accordance with these Terms of Service is expressly permitted;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                L. not to transmit more request messages through the Services in a given period of time than a human 
                                can reasonably produce in the same period by using a conventional online web browser;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                M. not to undertake any activity or engage in any conduct that is inconsistent with the business or 
                                purpose of the Services; or
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                N. not to attempt to undertake indirectly any of the foregoing
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                Additionally, with respect to all Donations you make or accept through the Services, you agree and 
                                represent, warrant and covenant:
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                A. not to make or accept any Donations that you know or suspect to be erroneous, suspicious or fraudulent;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                B. not to use the Services in or for the benefit of a country, organization, entity, or person embargoed 
                                or blocked by any government, including those on sanctions lists identified by the Nigerian Economic and 
                                financial Crimes commission and counterpart organisation elsewhere.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                C. to maintain reasonable and standard security measures to protect any information transmitted and 
                                received through the Services, including without limitation, adhering to any security procedures and 
                                controls required by Palbucks from time to time;
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                D. to maintain a copy of all electronic and other records related to Fundraisers and Donations as 
                                necessary for Palbucks to verify compliance with these Terms of Service and make such records available 
                                to Palbucks upon our request. For clarity, the foregoing does not affect or limit your obligations to 
                                maintain documentation as required by applicable laws, rules, regulations, or governmental authority; and
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                E. at Palbucks’ request, to fully cooperate in the auditing of, investigation of (including without 
                                limitation, investigations by Palbucks, a Payment Processor, or a regulatory or governmental authority), 
                                and remedial efforts to correct any alleged or uncovered violation or wrongdoing of a User to whom, or 
                                Fundraiser or Donation to which, you are connected.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                Palbucks reserves the right to refuse, condition, or suspend any Donations or other transactions that 
                                we believe in our sole discretion may violate these Terms of Service or harm the interests of our Users, 
                                business partners, the public, or Palbucks, or that expose you, Palbucks, or others to risks unacceptable 
                                to us. We may share any information related to your use of the Services with the appropriate financial 
                                institution, regulatory authority, or law enforcement agency consistent with our Privacy Notice. This 
                                information may include information about you, your account, your Donors, your Donations, and transactions 
                                made through or in connection with your use of the Service.
                            </p>

                        </div>
                    </div>                    

                    <h3 className="text-[24px] font-black mb-8 " >INTELLECTUAL PROPERTY RIGHTS</h3>

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >1. Services Content, Software and Trademarks:</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                You acknowledge and agree that the Services may contain content or features (“Services Content”) that are 
                                protected by copyright, patent, trademark, trade secret or other proprietary rights and laws. Except as 
                                expressly authorized by Palbucks, you agree not to modify, copy, frame, scrape, rent, lease, loan, sell, 
                                distribute or create derivative works based on the Services or the Services Content, in whole or in part, 
                                except that the foregoing does not apply to your own User Content that you legally upload to the Services. 
                                In connection with your use of the Services you will not engage in or use any data mining, spiders, robots, 
                                scraping or similar data gathering or extraction methods. If you are blocked by Palbucks from accessing the 
                                Services (including by blocking your IP address), you agree not to implement any measures to circumvent such 
                                blocking (e.g., by masking your IP address or using a proxy IP address). Any use of the Services or the 
                                Services Content other than as specifically authorized herein is strictly prohibited. The technology and 
                                software underlying the Services or distributed in connection therewith are the property of Palbucks, our 
                                affiliates and our partners (the “Software”). You agree not to copy, modify, create a derivative work of, 
                                reverse engineer, reverse assemble or otherwise attempt to discover any source code, sell, assign, 
                                sublicense, or otherwise transfer any right in the Software. Any rights not expressly granted herein are 
                                reserved by Palbucks.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                The Palbucks name and logos are trademarks and service marks of Palbucks (collectively the “Palbucks 
                                Trademarks”). Other company, product, and service names and logos used and displayed via the Services 
                                may be trademarks or service marks of their respective owners, who may or may not endorse or be affiliated 
                                with or connected to Palbucks. Nothing in these Terms of Service or the Services should be construed as 
                                granting, by implication, estoppel, or otherwise, any license or right to use any of Palbucks Trademarks 
                                displayed on the Services, without our prior written permission in each instance. All goodwill generated 
                                from the use of Palbucks Trademarks will inure to our exclusive benefit.
                            </p>
                        </div>
                    </div>
                    
                    <Policylists title = '2. Third-Party Material:' description = {`Under no circumstances will Palbucks be 
                        liable in any way for any content or materials of any third parties 
                        (including Users) or any User Content (including, but not limited to, for any errors or omissions in any User Content), 
                        or for any loss or damage of any kind incurred as a result of the use of any such User Content. You 
                        acknowledge that Palbucks does not pre-screen User Content, but that Palbucks and its designees will 
                        have the right (but not the obligation) in their sole discretion to refuse, remove, or allow any User 
                        Content that is available via the Services at any time and for any reason, with or without notice, and 
                        without any liability to you or to any third party for any claims, damages, costs or losses resulting 
                        therefrom.`} />
                    
                    <Policylists title = '3. User Content Transmitted Through the Services:' description = {`
                    With respect to the User Content, you represent and warrant that you own all right, title and interest in 
                    and to, or otherwise have all necessary rights and consents to (and to allow others to) fully exploit, 
                    such User Content, including, without limitation, as it concerns all copyrights, trademark rights and 
                    rights of publicity or privacy related thereto. By uploading, sharing, providing, or otherwise making 
                    available any User Content, or any portion thereof, in connection with the Services, you hereby grant 
                    and will grant Palbucks and its affiliated companies and Users a nonexclusive, worldwide, royalty free, 
                    fully paid up, transferable, sublicensable, perpetual, irrevocable license to copy, display, upload, 
                    perform, distribute, store, modify and otherwise use your User Content in connection with the operation 
                    of the Services or the promotion, advertising or marketing thereof, in any form, medium or technology 
                    now known or later developed. Without limiting the foregoing, if any User Content contains your name, 
                    image or likeness, you hereby release and hold harmless Palbucks and its contractors and employees, from: 
                    (i) all claims for invasion of privacy, publicity or libel; (ii) any liability or other claims by virtue 
                    of any blurring, distortion, alteration, optical illusion, or other use or exploitation of your name, 
                    image or likeness; and (iii) any liability for claims made by you (or any successor to any claim you 
                    might bring) in connection with your User Content, name, image or likeness. You waive any right to 
                    inspect or approve any intermediary version(s) or finished version(s) of the results of the use of your 
                    User Content (including your name, image or likeness). Further, if any person (other than you) appears 
                    in your User Content, you represent and warrant that you have secured all necessary licenses, waivers 
                    and releases from such person(s) for the benefit of Palbucks in a manner fully consistent with the licenses, 
                    waivers and releases set forth above. You further acknowledge that your participation in the Services and 
                    submission of User Content is voluntary and that you will not receive financial compensation of any type 
                    associated with the licenses, waivers, and releases set forth herein (or Palbucks’ exploitation thereof), 
                    and that the sole consideration for subject matter of this agreement is the opportunity to use the Services. 
                    We do not guarantee that any Services Content will be made available through the Services. We reserve the 
                    right to, but do not have any obligation to: (a) remove, edit or modify any Services Content or User 
                    Content, in our sole discretion, at any time, without notice to you and for any reason (including, but 
                    not limited to, upon receipt of claims or allegations from third parties or authorities relating to such 
                    Services Content or User Content, or if we are concerned that you may have violated these Terms of Service), 
                    or for no reason at all; and (b) remove or block any Services Content or User Content from the Services.`}
                    />
                    
                    <Policylists title = '4. Copyright or Trademark Complaints:' description = {`
                    Palbucks respects the intellectual property of others, and we ask our Users to do the same. If you believe 
                    that your work has been copied in a way that constitutes copyright infringement, or that your intellectual 
                    property rights have been otherwise violated, you should notify Palbucks of your infringement claim in 
                    accordance with the procedure set forth below. Palbucks will process and investigate notices of alleged 
                    infringement and will take appropriate actions under the extant Copyright Act, trademark infringement and 
                    other applicable intellectual property laws with respect to any alleged or actual infringement. A 
                    notification of claimed infringement should be emailed to Palbucks’s Copyright Agent via mail@palbucks.com. 
                    We do not guarantee that any Services Content will be made available through the Services. We reserve the 
                    right to, but do not have any obligation to: (a) remove, edit or modify any Services Content or User 
                    Content, in our sole discretion, at any time, without notice to you and for any reason (including, but 
                    not limited to, upon receipt of claims or allegations from third parties or authorities relating to 
                    such Services Content or User Content, or if we are concerned that you may have violated these Terms of 
                    Service), or for no reason at all; and (b) remove or block any Services Content or User Content from 
                    the Services.
                    `} marginb = '20' />
                    
                    <h3 className="text-[24px] font-black mb-3 " >DISCLAIMER OF WARRANTIES</h3>
                    <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                        YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” 
                        BASIS. PALBUCKS AND ITS AFFILIATES EXPRESSLY DISCLAIM AND EXCLUDE, TO THE FULLEST EXTENT PERMITTED BY 
                        APPLICABLE LAW, ALL WARRANTIES, CONDITIONS AND REPRESENTATIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED OR 
                        STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
                        PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                    </p>
                    <p className="text-[18px] leading-6 mb-20 tracking-[0.8px]" >
                        PALBUCKS AND ITS AFFILIATES MAKE NO WARRANTY OR CONDITION THAT: (I) THE SERVICES WILL MEET YOUR 
                        REQUIREMENTS; (II) THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE; (III) THE RESULTS 
                        THAT MAY BE OBTAINED FROM THE USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE; OR (IV) THE QUALITY OF ANY 
                        PRODUCTS, SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED BY YOU THROUGH THE SERVICES WILL 
                        MEET YOUR EXPECTATIONS.
                    </p>

                    <h3 className="text-[24px] font-black mb-3 " >LIMITATION OF LIABILITY</h3>
                    <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                        YOU EXPRESSLY UNDERSTAND AND AGREE THAT, TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, NEITHER 
                        PALBUCKS NOR ITS AFFILIATES WILL BE LIABLE FOR ANY: (I) INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                        PUNITIVE OR EXEMPLARY DAMAGES; (II) DAMAGES FOR LOSS OF PROFITS;, (III) DAMAGES FOR LOSS OF GOODWILL;, 
                        (IV) DAMAGES FOR LOSS OF USE; (V) LOSS OR CORRUPTION OF DATA; OR (VI) OTHER INTANGIBLE LOSSES (EVEN IF 
                        BEEVIBE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, 
                        STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (A) THE USE OR THE INABILITY TO USE THE SERVICES; (B) 
                        THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION 
                        OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM 
                        THE SERVICES; (C) ANY PROMOTIONS AND RELATED PRIZES OR REWARDS MADE AVAILABLE THROUGH THE SERVICES; 
                        (D) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (E) STATEMENTS OR CONDUCT OF 
                        ANY THIRD PARTY ON THE SERVICES; OR (F) ANY OTHER MATTER RELATING TO THE SERVICES. TO THE FULLEST EXTENT 
                        PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL PALBUCKS TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES 
                        (INCLUDING CONTRACT, NEGLIGENCE, STATUTORY LIABILITY OR OTHERWISE) OR CAUSES OF ACTION EXCEED THE AMOUNT 
                        YOU HAVE PAID PALBUCKS IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED U.S. DOLLARS (US$ 100).
                    </p>
                    <p className="text-[18px] leading-6 mb-20 tracking-[0.8px]" >
                        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF 
                        LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE LIMITATIONS SET FORTH ABOVE 
                        MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SERVICES OR WITH THESE TERMS OF 
                        SERVICE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICES.
                    </p>
                    
                    <h3 className="text-[24px] font-black mb-3 " >DISPUTES</h3>
                    <p className="text-[18px] leading-6 mb-8 tracking-[0.8px]" >
                        ARBITRATION CLAUSE & CLASS ACTION WAIVER – IMPORTANT – PLEASE REVIEW AS THIS AFFECTS YOUR LEGAL RIGHTS
                    </p>


                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >1. Arbitration; Class Action Waiver:</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                YOU AGREE THAT ALL DISPUTES BETWEEN YOU AND US OR ANY OF OUR OFFICERS, DIRECTORS OR EMPLOYEES ACTING IN 
                                THEIR CAPACITY AS SUCH (WHETHER OR NOT SUCH DISPUTE INVOLVES A THIRD PARTY) WITH REGARD TO YOUR RELATIONSHIP 
                                WITH US, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THESE TERMS OF SERVICE, YOUR USE OF THE SERVICES, 
                                AND/OR RIGHTS OF PRIVACY AND/OR PUBLICITY, WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU AND 
                                WE HEREBY EXPRESSLY WAIVE TRIAL BY JURY. DISCOVERY AND RIGHTS TO APPEAL IN ARBITRATION ARE GENERALLY MORE 
                                LIMITED THAN IN A LAWSUIT, AND OTHER RIGHTS THAT YOU AND WE WOULD HAVE IN COURT MAY NOT BE AVAILABLE IN 
                                ARBITRATION. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND WE ARE EACH WAIVING OUR 
                                RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                Notwithstanding the foregoing, nothing in these Terms of Service will be deemed to waive, preclude, or 
                                otherwise limit the right of either of us to: (i) bring an individual action in small claims court; (ii) 
                                pursue an enforcement action through the applicable federal, state, or local agency if that action is 
                                available; (iii) seek injunctive relief in a court of law; or (iv file suit in a court of law to address 
                                an intellectual property infringement claim.
                            </p>
                        </div>
                    </div>
 
                </div>
            </div>

        </div>
    )
}

export default Termsofuse;