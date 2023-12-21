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

function CommunityGuidelines(){

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
                <div className = 'fold:px-2 phones:px-5 md:px-10 lg:pl-[25px] lg:pr-[27px] pt-8 md:pt-12 pb-5 mt-[90px] md:mt-[100px] font-arial w-full h-full '>
                    
                    <img src={backarrow} alt="backarrow" className="mb-10 w-[32px] inline-block cursor-pointer "  onClick={goback} />
                    <h1 className="font-black font-merriweather text-[32px] mb-4 " >Learn About Our Community Guidelines</h1>
                    <p className=" text-[18px] mb-16 " >The Palbucks community cannot condole any immoral or illicit behaviour</p>

                    <h2 className="text-[24px] font-black mb-[15px] " >Palbucks Community Guidelines</h2>
                    <p className="text-[18px] tracking-[0.8px] mb-[60px] " >
                        Palbucks’ purpose is to serve the public conversation. Violence, harassment and other similar types of 
                        behavior discourage people from expressing themselves, and ultimately diminish the value of global 
                        public conversation. Our rules are to ensure all people can participate in the public conversation 
                        freely and safely.
                    </p>

                    <div className={`flex gap-2 lg:gap-5 mb-12 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >Safety</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Violent Speech:</span> You may not threaten, incite, glorify, or express desire for violence or harm. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold" >Violent & Hateful Entities:</span> You can’t affiliate with or promote the activities of violent and hateful entities. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Child Sexual Exploitation:</span> We have zero tolerance for child sexual exploitation on Twitter. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Abuse/Harassment:</span> You may not share abusive content, engage in the targeted harassment of someone, or incite other people to do so. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Hateful conduct:</span> You may not attack other people on the basis of race, ethnicity, national origin, caste, sexual orientation, gender, gender identity, religious affiliation, age, disability, or serious disease. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Perpetrators of Violent Attacks:</span> We will remove any accounts maintained by individual perpetrators of terrorist, violent extremist, or mass violent attacks, and may also remove Tweets disseminating manifestos or other content produced by perpetrators. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Suicide:</span> You may not promote or encourage suicide or self-harm. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Sensitive media:</span> You may not post media that is excessively gory or share violent or adult content within live video or in profile or header images. Media depicting sexual violence and/or assault is also not permitted. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                <span className="font-bold">Illegal or Certain Regulated Goods or Services:</span> You may not use our service for any unlawful purpose or in furtherance of illegal activities. This includes selling, buying, or facilitating transactions in illegal goods or services, as well as certain types of regulated goods or services. Learn more.
                            </p>
                        </div>
                    </div>

                    <div className={`flex gap-2 lg:gap-5 mb-12 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >Privacy</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Private Information:</span> You may not publish or post other people's 
                                private information (such as home phone number and address) without their express authorization 
                                and permission. We also prohibit threatening to expose private information or incentivizing others 
                                to do so. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold" >Non-Consensual Nudity: </span> You may not post or share 
                                intimate photos or videos of someone that were produced or distributed without their consent. 
                                Learn more.
                            </p>
                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                <span className="font-bold">Account Compromise: </span> You may not use or attempt to use 
                                credentials, passwords, tokens, keys, cookies or other data to log into or otherwise access, add, 
                                delete or modify the private information or account features of any Twitter account other than your 
                                own (or those you have been directly authorized to do so via Twitter’s Teams authorization, 
                                OAuth authorization or similar mechanism).
                            </p>
                            
                        </div>
                    </div>

                    <div className={`flex gap-2 lg:gap-5 mb-8 `}>
                        <div className="w-[10px] bg-[#37BCF7] rounded-[20px] " >                
                        </div>

                        <div className="w-full" >
                            <h2 className="text-[24px] font-black mb-[15px] leading-7 tracking-[0.5px] " >Authenticity</h2>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Platform Manipulation and Spam: </span> You may not use Twitter’s services in a 
                                manner intended to artificially amplify or suppress information or engage in behavior that 
                                manipulates or disrupts people’s experience on Twitter. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold" >Civic Integrity: </span> You may not use Twitter’s services for 
                                the purpose of manipulating or interfering in elections or other civic processes. This 
                                includes posting or sharing content that may suppress participation or mislead people 
                                about when, where, or how to participate in a civic process. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Misleading and Deceptive Identities: </span> You may not impersonate 
                                individuals, groups, or organizations to mislead, confuse, or deceive others, nor use a fake 
                                identity in a manner that disrupts the experience of others on Twitter. Learn more.
                            </p>
                            <p className="text-[18px] leading-6 mb-5 tracking-[0.8px]" >
                                <span className="font-bold">Synthetic and Manipulated Media: </span> You may not deceptively 
                                share synthetic or manipulated media that are likely to cause harm. In addition, we may label 
                                Tweets containing synthetic and manipulated media to help people understand their authenticity 
                                and to provide additional context. Learn more.
                            </p>

                            <p className="text-[18px] leading-6 tracking-[0.8px]" >
                                <span className="font-bold">Copyright and Trademark: </span>You may not violate others’ 
                                intellectual property rights, including copyright and trademark. Learn more about our 
                                trademark policy and copyright policy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CommunityGuidelines