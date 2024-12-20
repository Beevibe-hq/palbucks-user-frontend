import { infoicon, infoicon2, uploadicon } from "../../images";
import uploadSuccessIcon from "../../images/organiseCrowdfund/Information icon.png"
import arrowup from "../../images/arrowup.svg"
import arrowdown from "../../images/arrowdown.svg"
import arrowdown2 from "../../images/organiseCrowdfund/arrowdown2.svg"
import plusicon from "../../images/plusicon.svg"
import removeicon from "../../images/removeicon.svg"
import animalLabel from "../../images/categoryImages/animal label.svg"
import businessLabel from "../../images/categoryImages/Business label.svg"
import charityLabel from "../../images/categoryImages/charity label.svg"
import communityLabel from "../../images/categoryImages/Community label.svg"
import environmentLabel from "../../images/categoryImages/environment label.svg"
import faithLabel from "../../images/categoryImages/Faith label.svg"
import familyLabel from "../../images/categoryImages/Family label.svg"
import footballLabel from "../../images/categoryImages/Football icon.svg"
import medicalLabel from "../../images/categoryImages/medical label.svg"
import othersLabel from "../../images/categoryImages/Others icon.svg"
import travelLabel from "../../images/categoryImages/travel label.svg"
import wishLabel from "../../images/categoryImages/Wish label.svg"
import profilePlaceholder from "../../images/profileplaceholder.svg"

import { useEffect, useState } from "react";
import CropImage from "../cropping/cropimage/cropimage";
import { urltoFile } from "../cropping/cropimage/cropimage";
import { useDispatch, useSelector } from "react-redux";
import { addCrowdfundEvent, editEventData } from "../../actions/actions";
import SearchCoOrganiser from "../searchCoOrganiser/searchCoOrganiser";
import { useNavigate, useParams } from "react-router-dom";
import Loadingspinner from "../loadingspinner/loadingSpinner";
import { useMediaQuery } from "react-responsive";
import Select from "react-select";
import SuccessfulCrowdfundLaunchModal from "./successfulcrowdfundlaunch";
import { baseUrl } from "../../auth/checkauthentication";

// Variables and components for Category react select
export const options = [
    {value: 'medical', label: 'Medical', icon:medicalLabel },
    {value:'faith', label: 'Faith', icon:faithLabel },
    { value: 'environment', label: 'Environment', icon:environmentLabel },
    {value:'travel', label: 'Travel', icon:travelLabel },
    {value:'family', label: 'Family', icon:familyLabel },
    {value:'wish', label: 'Wish', icon:wishLabel },
    { value: 'business', label: 'Business', icon:businessLabel },
    {value: 'animal', label: 'Animals', icon:animalLabel },
    {value: 'charity', label: 'Charity', icon:charityLabel },
    {value:'community', label: 'Community', icon:communityLabel },
    {value:'creative', label: 'Creative', icon:othersLabel },
    {value:'sports', label: 'Sports', icon:footballLabel },
    {value:'others', label: 'Others', icon:othersLabel },
]


function Organisecrowdfundbody(){

    const isMobile = useMediaQuery({
        query:'(max-width: 768px)'   
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const [isLoading, setIsLoading] = useState(false)
    const [displaySearchCoOrganiser, setdisplaySearchCoOrganiser] = useState(false)

    const [crowdfundMode, setCrowdfundMode] = useState('new')
    useEffect(() => {
        params.id ? setCrowdfundMode('edit') : setCrowdfundMode('new')
    }, [])
    
    const eventid = params.id ? params.id : null
    let homebodydata = useSelector(state => state.crowdfundEvents)
    const [eventdetails, setEventDetails] = useState(homebodydata.filter(item => item.id == eventid)[0]);
    //console.log(eventdetails)
    const [EditFormData, setEditFormData] = useState({ })

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

    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    const [formdata, setformdata] = useState({
        banner:null,        
        date_posted:today.toISOString(),        
        end_date: "",        
        organiser:{
            pk:userInfo.pk,
            first_name:userInfo.first_name,
            last_name:userInfo.last_name,
            email:userInfo.email,
            username:userInfo.username
        },
        title:'',
        description:'',
        start_date:today.toISOString(),
        target_amount:0,
        amt_raised:0,
        tags:'',
        location: userInfo.location ? userInfo.location : '',
        //co_organisers:[],
    })

    const handleInputChange = (event)=>{
        if(crowdfundMode == 'new'){
            if (event.target.name === 'end_date') {
                console.log(event.target.value)
                const formattedDate = new Date(event.target.value).toISOString()
                console.log(formattedDate)
                setformdata((prevdata)=> ({
                    ...prevdata,
                    end_date:formattedDate
                }) )    

            } else {
                setformdata((prevdata)=> ({
                    ...prevdata,
                    [event.target.name]:event.target.value
                }) )
            }
        } else if (crowdfundMode == 'edit') {
            setEditFormData((prevdata)=> ({
                ...prevdata,
                [event.target.name]:event.target.value
            }) )
        }
    }

    const startCrowdfund = async () => {
        setIsLoading(true)
                
        console.log(formdata)
        const form = new FormData();
        // Iterate over the properties of the formdata object
        for (const [key, value] of Object.entries(formdata)) {
            form.append(key, value);
        }

        // Validate the input fields
        if (formdata.title === '') {
            alert('Please enter a title for your crowdfund')
            setIsLoading(false)
            return;
        }
        
        if (formdata.tags === '') {
            alert('Please select a category for your crowdfund')
            setIsLoading(false)
            return;
        }
        if (formdata.target_amount <= 0) {
            alert('Please enter a valid target price for your crowdfund')
            setIsLoading(false)
            return;
        }
        if (formdata.target_amount > 9999999) {
            alert("You've exceeded the maximum target amount")
            setIsLoading(false)
            return;
        }

        /* if (formdata.location === '') {
            alert('Please enter a location for your crowdfund')
            setIsLoading(false)
            return;
        } */ 
        if (formdata.end_date === '') {
            alert('Please select an end date for your crowdfund')
            setIsLoading(false)
            return;
        }
        if (formdata.banner === null) {
            alert('Please upload a banner for your crowdfund')
            setIsLoading(false)
            return;
        }        
        
        const access_token = localStorage.getItem('access_token')

        const sendCrowdfund = await fetch(`${baseUrl}/funding/api/`,{
            method:'POST',
            body: form,
            headers: {
                Authorization: `Bearer ${access_token}`,
                //"Content-Type": "multipart/form-data"
            }
        })
        
        const resp = await sendCrowdfund.json();
        console.log(resp)

        if(sendCrowdfund.status === 201){
            console.log('success')            
            dispatch(addCrowdfundEvent(resp))

            // Display successful crowdfund launch modal
            setSuccessfulLaunchModal({display:true, launchedCampaign: true, crowdfundData:resp})
            //navigate('/home')
        } else {
            setIsLoading(false)
        }
        
        setIsLoading(false)
    };

    
    const [selectedOption, setSelectedOption] = useState(null)
    const editCrowdfund = async () => {
        setIsLoading(true)
        const access_token = localStorage.getItem('access_token')
        console.log(EditFormData)
        const form = new FormData();
        // Iterate over the properties of the formdata object
        for (const [key, value] of Object.entries(EditFormData)) {
            form.append(key, value);
        }
        const sendCrowdfund = await fetch(`${baseUrl}/funding/api/${eventid}/`,{
            method:'PATCH',
            body: form,
            headers: {
                Authorization: `Bearer ${access_token}`,  
                //'Content-Type': 'application/json'
            }
        })
             
        try {
            const resp = await sendCrowdfund.json();
            console.log(resp);

            if (resp.success) {
                console.log('success');
                dispatch(editEventData({
                    id: eventid,
                    ...EditFormData
                }));

                // Display successful crowdfund launch modal
                setSuccessfulLaunchModal({ display: true,launchedCampaign: true, crowdfundData: resp });
                // navigate('/home')
            } else {
                alert('An error occurred, please try again later.');
            }
        } catch (error) {
            console.error('Error updating crowdfund:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const [successfulLaunchModal, setSuccessfulLaunchModal] = useState({
        display: false,
        launchedCampaign: true,
        crowdfundData: {
            id:10
        }
    })
        

    const [managetoggles, setmanagetoggles] = useState({
        crowdfundingdetails:true,
        amountdetails:true,
        co_organisers:true,
        location:true,
        enddate:true,
    })

    const managetoggleclick = (e) =>{
        const currentevent = e.target.id
        console.log(currentevent)
        let currenttogglevalue = managetoggles[currentevent]
        console.log(e.target.id)
        setmanagetoggles({...managetoggles, [currentevent]:!currenttogglevalue })
        //console.log(managetoggles)
    }
    

    const CustomDropdownIndicator = () => (
        <img src = {arrowdown2} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    // Storing the selected coOrganisers
    const [selectedCoOrganisers, setSelectedCoOrganisers] = useState([])
    useEffect(() => {
        console.log(selectedCoOrganisers)
    },[selectedCoOrganisers])
    
    const numberInputOnWheelPreventChange = (e) => {
        // Prevent the input value change
        e.target.blur()

        // Prevent the page/container scrolling
        e.stopPropagation()

        // Refocus immediately, on the next tick (after the current function is done)
        setTimeout(() => {
            e.target.focus()
        }, 0)
    }
    
    return(
        
        <div className = 'fold:px-2 phones:px-5 md:px-6 lg:px-10 pt-6 md:pt-10 pb-16 md:pb-20 mt-[90px] md:mt-[100px] w-full h-full font-arial '>
            <h1 className = 'font-black text-xl phones:text-xl md:text-3xl leading-7 tracking-[0.5px] mb-8 md:mb-[15px] font-merriweather ' >
                Setup your crowdfunding campaign
            </h1>
            <p className="hidden md:block text-lg tracking-[0.8px] mb-14 " >Organising your campaign take less than 2 minutes</p>

            <div className="max-w-full 2xl:max-w-[960px] 4xl:max-w-[1000px] ">                
                <div className="bg-white rounded-[4px] mb-[59px] " >
                    <div className="text-center py-3 md:py-6 border-b-2 border-[#e5e2e2] ">
                        <h3 className="font-black text-xl " >Upload campaign image</h3>
                    </div>
                    <div className="p-3 md:p-7 flex flex-col items-center relative " >
                        <CropImage formdata = {formdata} setformdata = {setformdata} crowdfundMode={crowdfundMode} eventdetails={eventdetails} params = {params}  />
                        <div className={` ${crowdfundMode == 'edit'? 'hidden' : ''}  ${ formdata.banner ? '' : 'mt-4 md:mt-5' } flex gap-3 items-center py-1 `} >
                            <img src={formdata.banner ? uploadSuccessIcon:infoicon} alt="info icon" />
                            <p className={` ${formdata.banner ? 'text-[#37BCF7]':'text-[#8E8E93]'} text-sm md:text-base`} >
                                {
                                    formdata.banner ? 'Image uploaded successfully':'Click icon to upload campaign image' 
                                }
                                {/* Recommended size is 837px by 240px */}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-[#FFFFFF] rounded-t-[4px] rounded-b-[10px] mb-6 md:mb-[59px] " >
                    <div  
                        id="crowdfundingdetails" 
                        className=" p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                        onClick={managetoggleclick} 
                    >
                        <h3 className="text-base md:text-[22px] md:leading-[22px] tracking-[0.5px] font-black pointer-events-none " >Enter crowdfunding details</h3>                        
                        <img 
                            src={arrowup} 
                            alt="down arrow" 
                            className = {` ${managetoggles.crowdfundingdetails? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                        />
                    </div>
                    <div className={` ${managetoggles.crowdfundingdetails? 'block' : 'hidden' } p-3 md:p-[30px] bg-[#FFFFFF]`} >
                        <label htmlFor="title" className="block text-sm md:text-xl leading-[20px] tracking-[1px] font-bold mb-3 md:mb-4 " >
                            Title*
                        </label>
                        <input 
                            type="text" 
                            id="title"
                            name="title" 
                            defaultValue={crowdfundMode == 'edit'  ? eventdetails.title : null }
                            className={`px-[10px] md:px-5 py-3 mb-3 md:mb-5 w-full md:h-[56px] border-[1px] bg-white border-[#8E8E93] rounded-[4px] 
                            hover:border-[#37BCF7] hover:border-2 active:border-2 hover:bg-[#F9F9F9] 
                            outline-[#37BCF7] active:bg-[#FFFFFF] focus:caret-[#2CA9F2]
                            text-sm md:text-base
                            ${crowdfundMode == 'edit' ? 'text-[#888888]' : ''}    `}
                            readOnly = {crowdfundMode === 'edit'}
                            placeholder="What is the title of your crowdfund?"                         
                            onChange={handleInputChange}
                        />
                        
                        <div className="flex gap-2 items-center mb-5 md:mb-[53px] ">
                            <img src={infoicon} alt="info icon" className="w-[15px] md:w-[20px] " />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >Limited to 50 characters</p>
                        </div>

                        <label htmlFor="category" className=" block text-sm md:text-xl leading-[20px] tracking-[1px] font-bold mb-3 md:mb-4  " > 
                            Category* 
                        </label>                        
                        <div className="w-full max-w-[470px] mb-5 md:mb-[53px] ">
                            
                            <Select                                
                                options={options}
                                placeholder="Select your category"
                                onChange={(e) => {                                    
                                    setformdata((prevdata) => ({ ...prevdata, tags: e.value }))
                                    setSelectedOption(e)
                                }}
                                value={crowdfundMode == 'edit' ? options.find(option => option.value === eventdetails.tags) : selectedOption }
                                isDisabled={crowdfundMode === 'edit'}
                                components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                    IndicatorSeparator : () => null 
                                }}
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        width:'100%',
                                        height:'50px',                                        
                                        border: state.isFocused ? '1px solid gray' : '1px solid gray',
                                        // This line disable the blue border
                                        boxShadow: state.isFocused ? 0 : 0,
                                        "&:hover": {
                                            border: state.isFocused ? '1px solid gray' : '1px solid gray',
                                        },
                                        cursor:'pointer',
                                        caretColor:'transparent',
                                        paddingRight:'20px',
                                        paddingLeft:'-10px',
                                    }),                    
                                }}
                                formatOptionLabel={(option) => (
                                    <div className="flex items-center gap-2 ">
                                        <img src={option.icon} alt="category icon" className="w-4 h-4" />
                                        <span className="text-sm font-black pt-1" >{option.label}</span>                                        
                                    </div>
                                )}
                            />
                        </div>


                        <label htmlFor="description" className="block text-sm md:text-xl leading-[20px] tracking-[1px] font-bold mb-3 md:mb-4  " > 
                            Description* 
                        </label>
                        <textarea 
                            name="description" 
                            id="description" 
                            rows="10" 
                            defaultValue={crowdfundMode == 'edit'  ? eventdetails.description : null }
                            className={` mb-[10px] md:mb-5 w-full p-[10px] md:p-5 text-sm md:text-base outline-none border-[1px] border-[#8E8E93] focus:border-[#37BCF7] focus:border-2 `} 
                            placeholder="Tell us a bit more about your crowdfund in other to make people understand your reason for your crowdfund. A story can also go a long way." 
                            onChange={handleInputChange}
                            maxLength= "1500"
                        >
                        </textarea>

                        <div className="flex gap-2 items-center mb-5 md:mb-[53px] ">
                            <img src={infoicon} alt="info icon" className="w-[15px] md:w-[20px] " />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >Limited to 1500 characters</p>
                        </div>
                    </div>   
                </div>


                <div className="bg-white mb-6 md:mb-[59px] " >
                    <div className="bg-[#37BCF7] rounded-t md:rounded-t-none py-[15px] md:py-5 px-[15px] md:pl-[30px] md:pr-[10px] flex gap-2 md:gap-5 items-center text-white  " >
                        <img src={infoicon2} alt="info icon" className="w-4 h-4 md:w-6 md:h-6"  />
                        <h3 className="text-sm md:text-[18px] leading-[20px] tracking-[0.5px] font-black" >
                            {
                                isMobile ? 'Click to view an important information' : 'At the end of your crowdfund, you will get 98% of total raised.'
                            }
                        </h3>
                    </div>
                    
                    <div  
                        id="amountdetails" 
                        className=" p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                        onClick={managetoggleclick} 
                    >
                        <h3 className="text-base md:text-[22px] md:leading-[22px] tracking-[0.5px] font-black pointer-events-none" >Enter amount details</h3>                        
                        <img 
                            src={arrowup} 
                            alt="down arrow" 
                            className = {` ${managetoggles.amountdetails? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                        />
                    </div>
                    
                    <div className={` ${managetoggles.amountdetails? 'block' : 'hidden' } p-3 md:p-[30px] `} >                        
                        <label htmlFor="target_amount" className="block text-sm md:text-xl leading-[20px] tracking-[1px] font-bold mb-3 md:mb-4  " >
                            Target amount*
                        </label> 
                        <div className="flex flex-col md:flex-row gap-5 ">
                            <div className="flex flex-col w-full md:w-4/6 gap-[10px] md:gap-5 ">
                                <input
                                    type="number"
                                    defaultValue={crowdfundMode == 'edit'  ? eventdetails.target_amount : null }
                                    className={`md:h-[56px] w-full rounded text-sm md:text-base px-[10px] md:px-5 py-3 outline-[#37BCF7] outline-2 focus:caret-[#37BCF7]
                                    border-[1px] border-[#8E8E93] hover:border-[#37BCF7] hover:border-2
                                    ${formdata.target_amount > 9999999 ? 'border-[#FD6150] outline-[#FD6150] focus:border-[#FD6150] focus:caret-[#FD6150]': ''}
                                    ${crowdfundMode == 'edit' ? 'text-[#888888]' : ''}    `}
                                    readOnly = {crowdfundMode === 'edit'}
                                    min='100'
                                    max='9999999'
                                    maxLength="6"
                                    placeholder="How much do you want to raise(amount is in ₦)?"
                                    onChange={handleInputChange}
                                    onWheel={numberInputOnWheelPreventChange}
                                    id = "target_amount"
                                    name="target_amount"
                                />
                                <div className="flex gap-2 items-center">
                                    <img src={infoicon} alt="info icon" />
                                    <p className="text-[#8E8E93] text-base leading-5 tracking-[0.1px]" >₦100 - ₦9999999 </p>
                                </div>
                            </div>
                            {/* <span className="text-sm md:text-lg md:pt-4 leading-[22px] text-[#2CA9F2] font-black cursor-pointer " >
                                What is USDT?
                            </span> */}
                        </div>
                    </div>
                </div>

                <div className="bg-white mb-6 md:mb-[59px] " >                                        
                    <div 
                        id="co_organisers" 
                        className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                        onClick={managetoggleclick}
                    >
                        <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                            Add Co-organisers (Optional)
                        </h3>

                        <img 
                            src={arrowup} 
                            alt="down arrow" 
                            className = {` ${managetoggles.co_organisers? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                        />
                    </div>
                    <div className={` ${managetoggles.co_organisers? 'block' : 'hidden' } p-3 md:p-[30px]`} >
                        <div className="flex gap-5 lg:gap-10 items-center mb-[10px] md:mb-5">
                            {
                                selectedCoOrganisers.length > 0 ?
                                selectedCoOrganisers.map((coOrganiser, index) => (
                                    <button key={index} className="flex justify-between rounded-r-[14px] md:rounded-r-[24px] rounded-l-[5px] md:rounded-l-lg py-[2px] md:py-1 px-[10px] md:px-4 items-center h-[34px] md:h-14 min-w-[106px] md:min-w-[183px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >                                        
                                        <p className="text-sm md:text-lg font-black" >{coOrganiser.username}</p>
                                        <img src={removeicon} alt="remove icon" className="w-[18px] md:w-6 "
                                            onClick={() => {
                                                // Remove the selected co-organiser from both selectedCoOrganisers and formdata using pk
                                                //setSelectedCoOrganisers(selectedCoOrganisers.filter((item) => item.username !== coOrganiser.username))
                                                setSelectedCoOrganisers(selectedCoOrganisers.filter((selectedUser) => selectedUser.pk !== coOrganiser.pk));
                                                /* setformdata((prevdata) => {
                                                    const newCoOrganisers = prevdata.co_organisers.filter((item) => item.username !== coOrganiser.username)
                                                    return {
                                                        ...prevdata,
                                                        co_organisers: newCoOrganisers
                                                    }
                                                }) */
                                                setformdata({...formdata, co_organisers: formdata.co_organisers.filter((selectedUser) => selectedUser !== coOrganiser.pk)})
                                            }}
                                        />
                                    </button>                                    
                                )) : null
                            }
                            <button className={` ${selectedCoOrganisers.length > 1 ? "hidden" : "flex"} 
                                justify-between rounded-r-[14px] md:rounded-r-[24px] rounded-l-[5px] md:rounded-l-lg
                                py-1 px-[10px] md:px-4 items-center h-[35px] md:h-14 w-[145px] md:w-[294px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]`}
                             onClick={() => {
                                setdisplaySearchCoOrganiser(true)
                             }}
                             >
                                <span className="text-xs md:text-base" >
                                    {
                                        'Add co-organiser'                                        
                                    }
                                </span>
                                <img src={plusicon} alt="plus icon" />
                            </button>
                            
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" className="w-[15px] md:w-[20px] " />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >
                                A maximum of two(2) users can be added
                            </p>
                        </div>
                    </div>
                </div>

                <SearchCoOrganiser
                    displaySearchCoOrganiser={displaySearchCoOrganiser}
                    setdisplaySearchCoOrganiser={setdisplaySearchCoOrganiser}
                    formdata={formdata} setformdata={setformdata}
                    selected={selectedCoOrganisers}
                    setSelected={setSelectedCoOrganisers}
                />

                <div className="bg-white mb-6 md:mb-[59px] " >                    
                    <div 
                        id="location" 
                        className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                        onClick={managetoggleclick}
                    >
                        <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                            Location
                        </h3>

                        <img 
                            src={arrowup} 
                            alt="down arrow" 
                            className = {` ${managetoggles.location? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                        />
                    </div>
                    <div className={` ${managetoggles.location? 'block' : 'hidden' } p-3 md:p-[30px]`} >
                        <button className="flex justify-between mb-[10px] md:mb-5 rounded-r-[14px] md:rounded-r-[24px] rounded-l-[5px] md:rounded-l-lg py-[2px] md:py-1 px-[10px] md:px-4 items-center h-[34px] md:h-14 min-w-[106px] md:min-w-[183px] border-[1px] border-[#8E8E93] bg-[#F9F9F9]   " >
                            <span className={`text-xs md:text-base ${crowdfundMode == 'edit' ? 'text-[#888888]' : ''} `} >
                                {userInfo.location && userInfo.location}
                            </span>
                            <img src={removeicon} alt="remove icon" className="w-[18px] md:w-6 " />
                        </button>
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" className="w-[15px] md:w-5 " />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >By default the location you added in your settings will be used</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white mb-[47px] md:mb-[59px] " >                    
                    <div 
                        id="enddate" 
                        className="  p-[15px] md:py-[25px] md:px-[30px] flex justify-between border-b-2 border-[#c2bfbf] items-center cursor-pointer "
                        onClick={managetoggleclick}
                    >
                        <h3 className="text-base md:text-[22px] leading-[22px] tracking-[0.5px] font-black pointer-events-none" >
                            End date*
                        </h3>

                        <img 
                            src={arrowup} 
                            alt="down arrow" 
                            className = {` ${managetoggles.enddate? '' : 'rotate-180'} cursor-pointer w-[22px] md:w-[30px] md:h-[14px] pointer-events-none`}
                        />
                    </div>
                    <div className={` ${managetoggles.enddate? 'block' : 'hidden' } p-3 md:p-[30px]`} >
                        <input
                            type="date"
                            name="end_date"
                            id="end_date"
                            defaultValue={crowdfundMode == 'edit'  ? (new Date(eventdetails.end_date).toISOString().split('T')[0] ) : null }
                            className={`md:h-[56px] w-[250px] md:w-[393px] rounded px-[8px] md:px-5 py-[10px] outline-[#37BCF7] outline-2 
                            focus:caret-[#37BCF7] border-[1px] border-[#8E8E93] hover:border-[#37BCF7] hover:border-2 mr-5 mb-5
                            ${crowdfundMode == 'edit' ? 'text-[#888888]' : ''}    `}
                            readOnly = {crowdfundMode === 'edit'}
                            min={formatDate(today)}
                            max={maxDateFormatted}
                            onChange = {handleInputChange}
                        />
                        <div className="flex gap-2 items-center">
                            <img src={infoicon} alt="info icon" className="w-[15px] md:w-5 " />
                            <p className="text-[#8E8E93] text-xs md:text-base leading-5 tracking-[0.1px]" >Maximum period for a campaign is 90days</p>
                        </div>
                    </div>
                </div>

                <button className="bg-[#37BCF7] mb-3 md:mb-4 mx-auto px-5 py-[10.4px] min-w-full phones:min-w-[300px] w-fit md:w-1/2 md:min-h-[48px] rounded md:rounded-[10px] text-white font-bold text-base md:text-[18px] block  " 
                    onClick={crowdfundMode == 'edit' ? editCrowdfund : startCrowdfund}
                >
                    <div className={` ${isLoading ? 'block' : 'hidden' } `}>
                        <Loadingspinner width = '28px' height = '28px' />
                    </div>
                    <span className={` ${isLoading ? 'hidden' : 'block' } `} >
                        { crowdfundMode == 'new' ?  'All done, begin your crowdfund' : 'Make changes to campaign'  }
                    </span>
                </button>
                <button className="text-[#37BCF7] mx-auto px-5 py-[10.4px] min-w-full phones:min-w-[250px] w-fit md:w-1/2 md:h-[48px] rounded md:rounded-[10px] hover:bg-white font-bold text-base md:text-[18px] block " >
                    { crowdfundMode == 'new' ? 'Not now, save for later' : 'Go back' }
                </button>
                
                <SuccessfulCrowdfundLaunchModal successfulLaunchModal = {successfulLaunchModal} setSuccessfulLaunchModal = {setSuccessfulLaunchModal} />
            </div>

        </div>
    )
}

export default Organisecrowdfundbody;


