import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import policyicon1 from "../../images/policyicon1.svg"
import policyicon2 from "../../images/policyicon2.svg"
import policyicon3 from "../../images/policyicon3.svg"
import policyicon4 from "../../images/policyicon4.svg"

import Navbar from "../../components/navbar/navbar";
import backarrow from "../../images/backarrow.svg"
import Sidebar from "../../components/sidebar/sidebar";
import Policyheads from "../../components/policyheads/policyheads";
import Policylists from "../../components/policylists/policylists";

function Privacypolicy(){

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

    /* useEffect(()=>{
        window.scrollTo(0,0)
    },[]) */

    return(
        <div className='bg-[#F9F9F9] min-h-full overflow-y-auto max-h-[100vh]'>
            <Sidebar />
            <div className =  {` ${sidebarslid ? 'ml-[100px]' :' brkpoint:ml-[250px] lg:ml-[280px] xl:ml-[320px]' } ${isMobile && sidebaropen ? 'blur-sm' : '' } `} >
                <Navbar />
                <div className = 'fold:px-2 phones:px-3 md:px-3 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black text-[32px] mb-4 " >Learn About our Privacy Policy</h1>
                    <p className=" text-[18px] mb-16 " >Updated: March 30, 2022</p>

                    <h2 className="text-[24px] font-black mb-[15px] " >Palbucks Privacy Policy</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-[45px] " >
                        At Palbucks we take the protection of Personal Data seriously. In this Privacy Notice we will explain what 
                        Personal Data we collect from you, how we use and share that data, how we keep your Personal Data safe, and 
                        how long we keep it for. We will also explain how we Process your data (and the Legal Basis for doing so) 
                        and help you to understand your Personal Data Rights.
                    </p>

                    <Policyheads title = 'WHAT DO WE MEAN BY PERSONAL DATA?' icon = {policyicon1} />
                    <p className="text-[18px] mb-8 " >
                        Personal Data is any information that could be used to identify you. That could be anything from your name and address, 
                        your bank details, your email address, an image or recording of you, your IP address or any other data that could be used 
                        to identify you.
                    </p>

                    <Policyheads title = 'WHAT DO WE MEAN BY PROCESSING YOUR PERSONAL DATA?' icon= {policyicon2} />
                    <p className="text-[18px] mb-8 " >
                        Processing Data simply means doing something with your Personal Data in the course of our business in order to provide 
                        our services to you. If a company or organization does anything with your Personal Data, they are processing it.
                    </p>

                    <Policyheads title='WE ARE ACCOUNTABLE' icon = {policyicon3} />
                    <p className="text-[18px] mb-20 " >
                        At Palbucks we are committed to processing personal data in accordance with the Nigeria Data Protection Regulation 
                        (NDPR) principles, which ensure the safe processing of personal data.
                    </p>
                    
                    <h2 className="text-[24px] font-black mb-[15px] " >DATA COLLECTION</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >
                        We Collect Your Personal Data When You Register For Our Services, When You Contact Us Through Social Media, Online 
                        Through The “Contact Us Form” On Our Websites, Over The Telephone And When You Visit One Of Our Retail Outlets. We also 
                        collect your personal data when you directly apply for employment with us. We do not collect Personal Data 
                        of persons below the age of 18.
                    </p>

                    <h2 className="text-[24px] font-black mb-[15px] " >HOW WE COLLECT INFORMATION ABOUT YOU</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >
                        We collect your personal data in the following ways:
                        <ul className=" list-disc mt-4 flex flex-col gap-5 pl-7 " >
                            <li>
                                <span className="font-bold" >When you sign up for a service - </span>when you sign up, we collect certain personal data such as your 
                                email address, home address, birth date, gender (where possible) so you can use the service.
                            </li>
                            <li>
                                <span className="font-bold" > Personal data collected that enables us to provide you with additional features/functionality - </span> 
                                from time to time, you also may provide us with additional personal data or give us your permission 
                                to collect additional personal data, for example to provide you with better services.
                            </li>
                            <li>
                                <span className="font-bold" > From third parties - </span> we may receive personal data about you and your activity from third parties, 
                                including partners we work with to provide you with a service.
                            </li>
                        </ul>
                    </p>

                    <h2 className="text-[24px] font-black mb-[15px] " >INFORMATION DIRECTLY GIVEN</h2>
                    <p className="text-[18px] tracking-[0.8px] leading-7 mb-8 " >
                        We use anonymised and aggregated information for purposes that include testing our IT systems, research, data analysis, 
                        creating marketing and promotion models, improving services, and developing new features and functions.
                    </p>

                    <Policylists title = '1. Registration information:' description = {`When you register for our Services or 
                    open an account, we collect your email address and login details, your zip code, your country, your phone 
                    number (for purposes of multi-factor authentication and to provide you with important messages) and any 
                    information you choose to provide us (such as a profile picture). If you are a charity or nonprofit 
                    organization and are established as such under the applicable laws of incorporation (“Charity”), then 
                    we collect your name and email address. Thereafter, we will ask that you select your Charity and 
                    provide information to verify that you are a representative of said Charity.`} />

                    <Policylists title = '2. Creation of a fundraiser:' description = {`When you create a fundraiser on the 
                    Platform, we collect the information you choose to provide us in relation to your fundraiser and we display 
                    it through our Platform. For example, you can provide a fundraiser title, choose a fundraiser category, 
                    upload images and describe your fundraiser goal(s). You might, in creating a fundraiser, choose to provide 
                    us with information relating to third parties by organizing a fundraiser for a family member or friend, 
                    and in doing so, you disclose the name or circumstances of that family member or friend. By providing 
                    information in a fundraiser, you consent to our collection, storage and use of your data. If you upload 
                    personal data related to third parties, you acknowledge and agree that you have the authority of the relevant 
                    third parties for us to access and use the relevant data and that you have notified the third parties and 
                    informed them of how their information is collected and used by Palbucks to provide the Services. We reserve 
                    the right to identify you as the person who has made the referral in any messages that are sent to them.`} />

                    <Policylists title = '3. Setting up withdrawals:' description = {`When you are the beneficiary (or the 
                    recipient of funds from a fundraiser), we collect your contact details (such as name and email address), 
                    zip code, country, your phone number (for purposes of multi-factor authentication and to send you important 
                    messages) and any information you choose to provide us.`} />

                    <Policylists title = '4. Donation information:' description = {`On the Platform, when you donate to a 
                    fundraiser, we collect your contact details (such as name and email address), zip code, country, and any 
                    information you choose to provide us (such as a description of why you have donated).`} />

                    <Policylists title = '5. Public Communications:' description = {`You can post comments, leave feedback, send 
                    thank-you notes or otherwise communicate with other users through our Platform. Any content, including such 
                    comments, feedback, and notes that you choose to post through our Platform are available to the public by 
                    default. Please remember that any information that is disclosed in these areas becomes public information 
                    for both us and other users to use and share. Take care not to share personal data unless you intend for 
                    that data to become public. Please also be considerate and respectful of others while using the community 
                    to share your opinions. We reserve the right, but do not have the obligation, to review and monitor such 
                    posting or any other content on our Services, and to remove postings or content that may be viewed as 
                    inappropriate or offensive to others`} />

                    <Policylists title = '6. Communications to Palbucks:' description = {`You may contact us via a contact form, 
                    email, or by other means (for example, with questions about our Services, for customer support, or to let us 
                        know your ideas for new products or modifications to existing products). You may also choose to respond 
                        to surveys that we send out, or queries about your fundraisers. When you do so, we collect the information 
                        you choose to provide us, such as your contact details, any images you choose to upload and the contents 
                        and nature of your message. We would ask that you take care not to send financial information or other 
                        sensitive personal data to us through our chat services or other means, unless we ask you specifically 
                        for that data as part of providing our Service to you. When you provide such information to us directly, 
                        you consent to the processing of this data by Palbucks and/or our service providers. We collect the 
                        information listed in this section for the purposes described below in the sections “Our Use of Information 
                        Collected” and “Our Disclosure of Information Collected Through the Services.” While you are under no 
                        obligation to provide us with such information, should you choose to withhold such information, we may 
                        not be able to provide you with some or all of the Services.`} />
                    
                    <Policylists title = '7. Information relating to third parties:' description = {`You can choose to provide us 
                    with information relating to third parties. For example, if you choose to share your fundraiser with family 
                    and friends through our Platform’s texting services. If you decide to do that, we give you the option to either 
                    add information to our Platform or to provide us access to information stored in your email and mobile device’s 
                    address books, such as names, email addresses, or phone numbers of your contacts (collectively, “Third-Party 
                        Data”). If you use any feature of the Services that allows you to communicate with third parties (such as 
                            to refer a third party to the Services or to communicate with them regarding a fundraiser or a 
                            donation), either by submitting Third-Party Data to the Services or otherwise permitting the Services 
                            to automatically access Third-Party Data in your possession, you acknowledge, represent, and agree (a) 
                            that you have the authority of the relevant third party for us to access and use the relevant Third-Party 
                            Data, and (b) that you have notified these third parties and informed them how their information is 
                            collected and used by Palbucks to provide the Services. We reserve the right to identify you as the 
                            person who has made the referral in any messages that are sent to them. We use Third-Party Data to 
                            (1) contact such third party using the Third-Party Data provided, and/or (2) provide you with an 
                            editable template message designed to facilitate communication between you and such third party 
                            through the Services. In addition to sending the foregoing communications, we may also send reminders 
                            or related messages to you and to third parties on your behalf from time to time where permitted by 
                            applicable law. In each case, any such communications sent to third parties using Third-Party Data 
                            will provide a means to “opt out” of receiving further communication of the same nature.`}
                    />

                    <Policylists title = '8. Sensitive information:' description = {`You can also provide us with information 
                    about yourself or third parties that is considered sensitive, such as political opinions, health information 
                    or religious beliefs. If you post this information in a fundraiser, you choose to provide such information 
                    to be published publicly in relation to your fundraiser, donation or otherwise. When you provide such 
                    information to us directly, you consent to the processing of this data by Palbucks and/or its service providers. 
                    We collect the information listed in this section for the purposes described below in the sections “Our Use 
                    of Information Collected” and “Our Disclosure of Information Collected Through the Services.`} />

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >9. Biometric information:</h2>
                            <p className="text-[18px] tracking-[0.8px] leading-7" >
                                We use third-party services for identity 
                                verification and fraud prevention purposes. These biometric information services, acting as our processors, 
                                may collect a copy of your government-issued ID (i.e., your driver’s license, state ID card, or passport) and 
                                a scan of the picture on your government-issued ID for identification purposes (“biometric information”) and 
                                employ facial recognition technology to verify your identity. These biometric information services provide us 
                                with a confirmation as to whether your identity has been validated or not. Except as stated here, Palbucks 
                                does not retain any biometric information, and instead that information is maintained by the processors 
                                performing the services. By sharing your information with these biometric information services, you consent 
                                to the collection, processing, sharing and storage of your biometric information for identity verification 
                                and fraud prevention purposes. Your biometric information will be used for identity verification and fraud 
                                prevention purposes and in accordance with this Notice. If you do not consent to the collection and use of 
                                your biometric information, we will use a copy of your government-issued ID and other information to verify 
                                your identity. Your biometric information will be retained by our processors for as long as necessary for 
                                identity verification and fraud prevention and in accordance with applicable law. Please contact us as detailed 
                                in the <Link to= '/helpcenter' className="text-[#37BCF7]" >Help Center</Link> section to the 
                                extent you have any questions regarding your biometric information.
                            </p>
                        </div>
                    </div>


                    <div className={`flex gap-2 lg:gap-5 mb-20 `}>
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

                    <Policyheads title = 'WHY WE COLLECT INFORMATION ABOUT YOU' icon = {policyicon4} />
                    
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >                    
                            We may not be able to provide you with a product or service unless we have enough information, 
                            or your permission to use that information. Some of the services we offer, that we cannot complete 
                            without your information, are below:
                        <ul className=" list-disc mt-4 flex flex-col gap-5 pl-7 " >
                            <li>confirm your identity to provide services</li>
                            <li>contact you when the need arises</li>
                            <li>understand your needs to advise you on the correct service and then provide that service</li>
                            <li>obtain your opinion about our service</li>
                            <li>update our customer record</li>
                            <li>process financial transactions</li>
                            <li>prevent and detect fraud</li>
                        </ul>
                    </p>

                    <h2 className="text-[24px] font-black mb-[15px] " >HOW WE USE INFORMATION ABOUT YOU</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >
                        We Will Use The Information You Have Provided In Accordance With Data Protection Regulation. We Will 
                        Not Keep It For Longer Than Is Necessary. In Some Instances, The Law Sets The Length Of Time Information 
                        Has To Be Kept. We Will Strive To Keep Your Information Up-To-Date And Accurate. We Will Always Make Sure 
                        You Understand Why We Need The Information. We Will Not Collect Irrelevant Information.
                    
                        <ul className=" list-disc mt-4 flex flex-col gap-5 pl-7 mb-5 " >
                            
                        <p className="-ml-7" >In General, We Process Your Information For The Following Reasons:</p>
                            <li>
                                for the service you have requested, to monitor and improve our performance in responding to 
                                your request
                            </li>

                            <li>to allow us to communicate effectively with you and provide services appropriate to your needs</li>

                            <li>to ensure we meet our legal obligations</li>

                            <li>to prevent or detect fraud or crime.</li>
                        </ul>
                        
                        <p>We will not pass any personal data on to third parties, other than:</p>
                        
                        <ul className=" list-disc mt-4 flex flex-col gap-5 pl-7 mb-5 " >
                            <li>
                                those who process information on our behalf e.g other service providers, suppliers or partners
                                sometimes need access to information to deliver services for us)
                            </li>

                            <li>for legal or regulatory requirement</li>

                            <li>organizations that we engage with in joint working</li>
                        </ul>
                        
                        We will only do so, where possible, after we have ensured that sufficient steps have been taken to protect the personal data by the recipient.
                            
                    </p>
                    
                    <h2 className="text-[24px] font-black mb-[15px] " >RETENTION OF YOUR INFORMATION</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-5 " >
                        We retain your information for as long as we deem necessary for the purpose for which that information was collected and for our legitimate business operations; provided, however, that your information is only retained to the extent permitted or required by applicable laws. When we no longer need to retain your information, we will take reasonable steps to remove it from our systems and records and/or take steps to anonymize it so that you can no longer be identified from it in accordance with our internal document retention policies.

                    </p>
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >
                        When determining the retention period for your information, we take into account various criteria, such as the type of products and services requested by or provided to you, the nature and length of our relationship with you, possible re-enrollment with our products or services, the impact on the Services we provide to you if we delete some information about you, mandatory retention periods provided by law and the statute of limitations.
                    </p>
                    
                    <h2 className="text-[24px] font-black mb-[15px] " >CONTACTING BEEVIBE</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-20 " >
                        Please also feel free to contact us if you have any questions about this Notice or the information 
                        practices of the Services.

                        You can contact us as follows:
                        +2348035380697
                    </p>


                </div>
            </div>

        </div>
    )
}

export default Privacypolicy;