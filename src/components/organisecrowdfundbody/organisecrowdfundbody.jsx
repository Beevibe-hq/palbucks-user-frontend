import { infoicon, infoicon2, uploadicon } from "../../images";
import arrowup from "../../images/arrowup.svg"
import arrowdown from "../../images/arrowdown.svg"
import arrowdown2 from "../../images/arrowdown2.svg"
import plusicon from "../../images/plusicon.svg"
import removeicon from "../../images/removeicon.svg"
import { useEffect, useState } from "react";
import CropImage from "../cropping/cropimage/cropimage";
import { urltoFile } from "../cropping/cropimage/cropimage";
import { useDispatch } from "react-redux";
import { addCrowdfundEvent } from "../../actions/actions";

function Organisecrowdfundbody(){

    const dispatch = useDispatch()

    //Date formatting to prevent past date selection and limit to max period of 90 days
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 90);

    const formatDate = (date) => {
        const year = date.getFullYear();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        if (month.length === 1) {
            month = '0' + month;
        }
        if (day.length === 1) {
            day = '0' + day;
        }

        return `${year}-${month}-${day}`;
    };
    const maxDateFormatted = formatDate(maxDate);


    const [formdata, setformdata] = useState({
        pic:null,        
        date_posted:today.toISOString(),        
        end_date: "2019-08-24T14:15:22Z",        
        user_name:localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')).username : 'Jane Doe',
        title:'',
        description:'',
        start_date:today.toISOString(),
        target_price:0,
        amt_raised:0,
        tags:'',
        location:'',
        co_organisers:'',
    })

    const handleInputChange = (event)=>{
        if(event.target.name === 'end_date'){
            const formattedDate = new Date(event.target.value).toISOString()
            console.log(formattedDate)
            setformdata((prevdata)=> ({
                ...prevdata,
                end_date:formattedDate
            }) )    

        }else{
            setformdata((prevdata)=> ({
                ...prevdata,
                [event.target.name]:event.target.value
            }) )
        }
    }

    const startCrowdfund = async () => {
        
        console.log('starting')
        const formData = new FormData();
        // Iterate over the properties of the formdata object
        for (const [key, value] of Object.entries(formdata)) {
            formData.append(key, value);
        }
        
        const access_token = localStorage.getItem('access_token')

        const sendCrowdfund = await fetch('https://palbucks-api.onrender.com/funding/api/',{
            method:'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${access_token}`,
                //"Content-Type": "multipart/form-data"
            }
        })
        
        const resp = await sendCrowdfund.json();
        console.log(resp)

        if(sendCrowdfund.ok){
            console.log('success')
            dispatch(addCrowdfundEvent({
                id:resp.id,
                title:resp.title,
                description:resp.description,
                target_price:resp.target_price,
                amt_raised:resp.amt_raised,
                category:resp.tags,
                end_date:resp.end_date,
                crowdfundImagep:resp.pic,
                start_date:resp.start_date,
                user_name:resp.user_name,
                organizeraccounts:[resp.user_name],
                date_posted:resp.date_posted,
                deleted:resp.deleted,
            }))
        }
        
        
    };
      

    const [managetoggles, setmanagetoggles] = useState({
        crowdfundingdetails:true,
        amountdetails:true,
        co_organisers:true,
        location:true,
        enddate:true,
    })

    const managetoggleclick = (e) =>{
        const currentevent = e.target.id
        
        let currenttogglevalue = managetoggles[currentevent]
        
        setmanagetoggles({...managetoggles, [currentevent]:!currenttogglevalue })
        console.log(managetoggles)
    }

      
    
    return(
        
        <div className = 'fold:px-2 phones:px-5 md:px-6 lg:px-10 pt-8 md:pt-10 pb-16 md:pb-20 mt-[90px] md:mt-[100px] font-merriweather w-full h-full '>
            <h1 className="font-black text-4xl leading-7 tracking-[0.35px] mb-5 " >Setup your crowdfunding campaign</h1>
            <p className="text-lg tracking-[0.8px] mb-14 " >Organising your campaign take less than 2 minutes</p>

            <div className="2xl:max-w-[960px] 4xl:max-w-[1000px] ">
                
                <div className=" bg-white rounded-[4px] mb-[59px] " >
                    <div className="text-center py-6 border-b-2 border-[#e5e2e2] ">
                        <h3 className="font-black text-xl " >Upload campaign image</h3>
                    </div>
                    <div className="p-7 flex flex-col items-center relative " >
                        {/* <div className={` ${formdata.pic ? 'bg-inherit' : 'bg-[#F9F9F9]' }  w-[837px] h-[240px] flex justify-center items-center mb-5 `} >
                            <label htmlFor="campaignimage" className={` ${formdata.pic ? 'hidden' : 'block'} cursor-pointer`} >
                                <img src={uploadicon} alt="upload icon" className="w-9 h-11"  />
                            </label>
                            <input type="file" name="campaignimage" id="campaignimage" className="hidden" 
                            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
                            onChange={ (event) => {
                                setformdata((prevformdata)=> ({...prevformdata, pic:URL.createObjectURL(event.target.files[0]) }) )
                            } }                            
                            />
                            <img src={formdata.pic} alt="" className={` ${formdata.pic? 'w-[442px] h-[240px]' : 'hidden' }`}  />
                        </div> */}
                        <CropImage formdata = {formdata} setformdata = {setformdata}  />
                        <div className={` ${ formdata.pic ? 'hidden' : 'flex' } gap-3 items-center py-1 `} >
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base " >Click icon to upload campaign image</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#FFFFFF] rounded-t-[4px] rounded-b-[10px] mb-[59px] " >
                    <div  id="crowdfundingdetails" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                    onClick={managetoggleclick} >
                        <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Enter crowdfunding details</h3>
                        <img src={managetoggles.crowdfundingdetails ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                    </div>
                    <div className={` ${managetoggles.crowdfundingdetails? 'block' : 'hidden' } p-[30px] bg-[#FFFFFF]`} >
                        <label htmlFor="title" className="text-xl leading-[20px] tracking-[1px] font-bold mb-5 " >Title*</label>
                        <input 
                            type="text" 
                            id="title"
                            name="title" 
                            className={`py-[10px] px-5 mb-5 w-full h-[56px] border-[1px] bg-white border-[#8E8E93] rounded-[4px] 
                            hover:border-[#37BCF7] hover:border-2 active:border-2 hover:bg-[#F9F9F9] outline-[#37BCF7] active:bg-[#FFFFFF] focus:caret-[#2CA9F2]  `} placeholder="What is the title of your crowdfund?"                         
                            onChange={handleInputChange}
                        />
                        
                        <div className="flex gap-2 items-center mb-[53px] ">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >Limited to 50 characters</p>
                        </div>

                        <label htmlFor="category" className=" block text-xl leading-[20px] tracking-[1px] font-bold mb-5 " > Category* </label>
                        {/* <select name="category" id="category" className={`h-[56px] w-[470px] mb-[53px] py-[10px] px-[20px]
                         border-[#D8D8D8] border-[1px] bg-[#F9F9F9] outline-[#37BCF7] rounded-[4px] text-[#888888] cursor-pointer `}  >
                            <option value="">
                                <p>Select your category</p>
                                <img src={arrowdown2} alt="" className="w-5" />
                            </option>
                            <option value="food">Food</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="education">Education</option>
                        </select> */}
                        <div className="relative inline-block w-64 mb-[53px] ">
                            <select 
                                className={`block cursor-pointer appearance-none w-full bg-white border border-gray-400 
                                hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none 
                                focus:shadow-outline`}
                                id="category"
                                name = "tags"
                                onChange={handleInputChange}
                                defaultValue = "placeholder"
                            >
                                <option disabled value="placeholder">Placeholder Title</option>
                                <option value="Environment" >Environment</option>
                                <option value="Medical" >Medical</option>
                                <option value="Sports" >Sports</option>
                                <option value= "Family"  >Family</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4z"/></svg>
                            </div>
                        </div>


                        <label htmlFor="description" className=" block text-xl leading-[20px] tracking-[1px] font-bold mb-5 " > Description* </label>
                        <textarea 
                            name="description" 
                            id="description" 
                            rows="10" 
                            className={` mb-5 w-full p-5 outline-none border-[1px] border-[#8E8E93] `} 
                            placeholder="Tell us a bit more about your crowdfund in other to make people understand your reason for your crowdfund. A story can also go a long way." 
                            onChange={handleInputChange}
                            maxLength= "1500"
                        >
                        </textarea>

                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >Limited to 1500 characters</p>
                        </div>
                    </div>   
                </div>


                <div className="bg-white mb-[59px] " >
                    <div className="bg-[#37BCF7] py-5 pl-[30px] pr-[10px] flex gap-5 items-center text-white  " >
                        <img src={infoicon2} alt="info icon" className="w-6 h-6"  />
                        <h3 className="text-[18px] leading-[20px] tracking-[0.5px] font-black" >At the end of your crowdfund, you will get 98% of total raised.</h3>
                    </div>
                    
                    <div id="amountdetails" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                    onClick={managetoggleclick} >
                        <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Enter amount details</h3>
                        <img src={managetoggles.amountdetails ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                    </div>
                    
                    <div className={` ${managetoggles.amountdetails? 'block' : 'hidden' } p-[30px] `} >
                        <label htmlFor="target_price" className="block text-xl leading-[20px] tracking-[1px] font-bold mb-5 " >Target amount*</label>
                        
                        <input 
                            type="number"  
                            className={`h-[56px] w-4/6 rounded px-5 py-[10px] outline-[#37BCF7] outline-2 focus:caret-[#37BCF7]
                            border-[1px] border-[#8E8E93] hover:border-[#37BCF7] hover:border-2 mr-5 mb-5  `} min='100' max='9999999' maxLength="6"
                            placeholder="How much do you want to raise(amount is in USDT)?"  
                            onChange={handleInputChange}
                            id = "target_price"
                            name="target_price"
                        />

                        <span className="text-lg leading-[22px] text-[#2CA9F2] font-black " >What is USDT?</span>
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >100 - 9999999 USDT</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mb-[59px] " >
                    <div id="co_organisers" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                    onClick={managetoggleclick}>
                        <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Add co-organisers (Optional)</h3>
                        <img src={managetoggles.co_organisers ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                    </div>
                    <div className={` ${managetoggles.co_organisers? 'block' : 'hidden' } p-[30px]`} >
                        <button className="flex justify-between mb-5 rounded-r-[24px] rounded-l-lg  py-1 px-4 items-center h-14 w-[294px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >
                            <span>Added co-organiser</span>
                            <img src={plusicon} alt="plus icon" />
                        </button>
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >A maximum of three(3) users can be added</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mb-[59px] " >
                    <div id="location" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                    onClick={managetoggleclick}>
                        <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >Location</h3>
                        <img src={managetoggles.location ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                    </div>
                    <div className={` ${managetoggles.location? 'block' : 'hidden' } p-[30px]`} >
                        <button className="flex justify-between mb-5 rounded-r-[24px] rounded-l-lg  py-1 px-4 items-center h-14 min-w-[183px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >
                            <span>Nigeria</span>
                            <img src={removeicon} alt="remove icon" />
                        </button>
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >By default the location you added in your settings will be used</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mb-[59px] " >
                    <div id="enddate" className=" py-[25px] px-[30px] flex justify-between border-b-2 border-[#e5e2e2] items-center cursor-pointer "
                    onClick={managetoggleclick}>
                        <h3 className="text-[22px] leading-[22px] tracking-[0.5px] font-black" >End date*</h3>
                        <img src={managetoggles.enddate ? arrowup: arrowdown} alt="up arrow" className="w-[30px] h-[15px]" />
                    </div>
                    <div className={` ${managetoggles.enddate? 'block' : 'hidden' } p-[30px]`} >
                        <input
                            type="date"
                            name="end_date"
                            id="end_date"
                            className={`h-[56px] w-[393px] rounded px-5 py-[10px] outline-[#37BCF7] outline-2 
                            focus:caret-[#37BCF7] border-[1px] border-[#8E8E93] hover:border-[#37BCF7] hover:border-2 mr-5 mb-5`}
                            min={formatDate(today)}
                            max={maxDateFormatted}
                            onChange = {handleInputChange}
                        />
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" />
                            <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >Maximum period for a campaign is 90days</p>
                        </div>
                    </div>
                </div>

                <button className="bg-[#37BCF7] mb-4 mx-auto px-5  w-1/2 h-[48px] rounded-[10px] text-white font-bold text-[18px] block  " 
                    onClick={startCrowdfund}
                >
                    All done, begin your crowdfund
                </button>
                <button className="text-[#37BCF7] mx-auto px-5  w-1/2 h-[48px] rounded-[10px] hover:bg-white font-bold text-[18px] block " >Not now, save for later</button>

            </div>

        </div>
    )
}

export default Organisecrowdfundbody;