import Navbar from "../../components/navbar/navbar";
import palbucks from '../../images/palbucks2.svg'
import applogo from '../../images/appLogo.svg'
import { useNavigate } from "react-router-dom";
import profilePlaceholder from "../../images/profileplaceholder.svg"
import { useDispatch, useSelector } from "react-redux";
import { setprofilepageactive } from "../../actions/actions";
import { useState, useEffect } from "react";
import Select from 'react-select'
import arrowdown from "../../images/arrowdown.svg"
import { addCountryOptions } from "../../actions/actions"
import { useMediaQuery } from "react-responsive";
import uploadIcon from "../../images/kyc/Upload.svg"
import flyIcon from "../../images/kyc/Group 841.svg"
import uploadingImage from "../../images/kyc/uploadingImage.svg"
import uploadedImage from "../../images/kyc/uploadedImage.svg"

function Kyc() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onprofilepage = useSelector(state => state.onprofilepage)
    const profilepage = () => {
        navigate('/profilepage')        
        dispatch(setprofilepageactive())
    }

    const [pageDisplay, setPageDisplay] = useState('idProof')

    // Current problem with this is that when the user changes details on another browser, the details wont be updated on this browser
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    const [selectedCountry, setSelectedCountry] = useState('')
    const [countries, setcountries] = useState([])

    //custom dropdown indicator for Select tag/component
    const CustomDropdownIndicator = () => (
        <img src = {arrowdown} alt = 'down arrow' className="w-[15px] h-[14px] " />
    )

    useEffect(() => {

        const getCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
                const data = await response.json()
                setcountries(data)
                //console.log(data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        getCountries()
    }, [])
    
    const countryOptions = countries.map((country) => ({
        value: country.name.common,
        label: country.name.common
    })).sort((a, b) => a.label.localeCompare(b.label)); // Sort alphabetically    
    dispatch(addCountryOptions(countryOptions))

    const isMobile = useMediaQuery({
        query:'(max-width:768px)'
    })

    const idOptions = [
        {value: 'passport', label: 'Passport'},
        {value: 'nationalID', label: 'National ID'},
        {value: 'driversLicense', label: 'Drivers License' },                
        {value: 'votersCard', label: 'Voters Card'},
    ]

    const bank_documentOptions = [
        {value: 'bankStatement', label: 'Bank Statement'},
        {value: 'voidedCheck', label: 'Voided Check'},
        {value: 'directDepositForm', label: 'Direct Deposit Form' },                
        {value: 'bankApplication', label: 'Bank Application'},
        {value: 'bankteller', label: 'Bank Teller'},
    ]

    const [selectedDocuments, setSelectedDocuments] = useState({
        idType: '',
        id_front: '',
        id_back: '',
        bank_document: ''
    })

    const [fileUploadManager, setFileUploadManager] = useState({
        id_front: {
            inactive: true,
            uploading: false,
            uploadSuccess: false,
            uploadError: false,
            filename: '',
            file: null
        },
        id_back: {
            inactive: true,
            uploading: false,
            uploadSuccess: false,
            uploadError: false,
            filename: '',
            file: null
        },
        bank_document: {
            inactive: true,
            uploading: false,
            uploadSuccess: false,
            uploadError: false,
            filename: '',
            file: null
        }        
    })

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // SetfileUploadManager once dynamically according to the event.target.name
        setFileUploadManager({
            ...fileUploadManager,
            [event.target.name]: {
                ...fileUploadManager[event.target.name],
                inactive: false,
                uploading: true,
                uploadSuccess: false,
                uploadError: false,
                filename: file.name,
                file: file
            }
        });
                
        
        // For simplicity, let's just simulate a delay
        setTimeout(() => {
                        
            // Simulate success and setfileuploadmanager for the event.target.name to be successful
            setFileUploadManager({
                ...fileUploadManager,
                [event.target.name]: {
                    ...fileUploadManager[event.target.name],
                    inactive: false,
                    uploading: false,
                    uploadSuccess: true,
                    uploadError: false,
                    filename: file.name,
                    file: file
                }
            });

            // Simulate failure and setfileuploadmanager for the event.target.name to be failure
            /* setFileUploadManager({
                ...fileUploadManager,
                [event.target.name]: {
                    ...fileUploadManager[event.target.name],
                    inactive: false,
                    uploading: false,
                    uploadSuccess: false,
                    uploadError: true,
                    filename: file.name,
                    file: file
                }
            }); */
            
        }, 2000);
    };


    

    return (
        <div className="font-arial">
            <header className = {`bg-[#FFFFFF] py-4 md:py-[25px] px-8 md:px-[48px] lg:px-[95px] flex justify-between items-center shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] `} >
                <div className={` flex gap-[18px] items-center `}
                    onClick={() => {
                        navigate('/home');
                }}>
                    <img src={applogo} alt="Palbucks logo" className = 'cursor-pointer w-5 md:w-6 ' />
                    {/* <h1 className = {` ${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } font-bold text-[#033F59] text-xl md:text-2xl leading-6 tracking-tighter `} >Palbucks</h1> */}
                    <img src={palbucks} alt="palbucks" className = {` w-[100px] h-[18px] `} />
                </div>
                <div className=" flex gap-[10px] items-center">
                    <img
                        src={userInfo?.dp ? userInfo.dp : profilePlaceholder}
                        onClick = {profilepage}
                        alt="user avatar"
                        className={` ${onprofilepage ? 'border-[3px] border-[#37BCF7]': '' } w-[28px] phones:w-[35px] md:w-[40px] cursor-pointer rounded-[50%]`}
                    />
                    <h2 className = 'hidden md:block text-base font-black'>{userInfo?.first_name? userInfo.first_name : ''} {userInfo?.last_name? userInfo.last_name:''}</h2>
                </div>
            </header>
            
            <main className="py-[72px] md:py-[94px] px-[35px] md:px-[142px] lg:px-[180px] 2xl:px-[284px] ">
                
                <div className="mb-[63px] md:mb-[56px] mx-auto w-fit flex gap-[5px] items-center" >
                    <div 
                        className="w-8 md:w-10 h-8 md:h-10 bg-[#35FAA0] rounded-full flex items-center justify-center text-base md:text-lg font-bold " >
                        1
                    </div>
                    <hr className=" w-[30px] md:w-[103px] bg-[#D2F9E7] h-[6px] " />
                    <div
                        className={` ${pageDisplay !== 'idProof'? 'bg-[#35FAA0]' : 'bg-[#35FAA033]' }
                        w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg font-bold
                        `}
                    >
                        2
                    </div>
                    <hr className=" w-[30px] md:w-[103px] bg-[#D2F9E7] h-[6px] " />
                    <div
                        className={` ${pageDisplay == 'successfulSubmission' ? 'bg-[#35FAA0]' : 'bg-[#35FAA033]' }
                        w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center text-base md:text-lg font-bold
                        `}
                    >
                        3
                    </div>
                </div>
                
                {pageDisplay === 'idProof' ? 
                    <div className="">
                        <h1 className="text-center text-[16px] md:text-[32px] font-black mb-4 text-[#000000] " >
                            Upload a proof of your identity
                        </h1>
                        <p className="mb-[56px] md:mb-[74px] text-[14px] md:text-[20px] text-[#000000] text-center " >
                            Palbucks requires a valid government issued ID (drivers license, passport, national ID, voters card)
                        </p>
                        <div className="mb-[64px] md:mb-[84px] flex flex-col lg:flex-row gap-8 lg:gap-[57px] mx-auto justify-center w-full max-w-[880px] " >
                            <div className="flex flex-col gap-3 md:gap-5 flex-1 " >
                                <label htmlFor="location" className="text-[14px] md:text-[20px] font-bold" >What is your country? </label>
                                <Select
                                    options={countryOptions}
                                    placeholder="Select your country"
                                    onChange={(e) => {
                                        setSelectedCountry(e.value)
                                    }}
                                    components={{
                                        DropdownIndicator: CustomDropdownIndicator,
                                        IndicatorSeparator : () => null
                                    }}
                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            width: '100%',
                                            height: isMobile ? '50px' : '62px',
                                            border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                            "&:hover": {
                                            border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                            },
                                            boxShadow: state.isFocused ? 0 : 0,
                                            cursor:'pointer',
                                            caretColor:'transparent',
                                            paddingRight: isMobile ? '12px' : '22px',
                                            paddingLeft: isMobile ? '4px' : '22px',
                                            paddingTop: isMobile ? '4px' : '11px',
                                            paddingBottom:isMobile ? '4px' : '11px',
                                            borderTopLeftRadius:'5px',
                                            borderBottomLeftRadius:'5px',
                                            borderTopRightRadius:'5px',
                                            borderBottomRightRadius: '5px',
                                            backgroundColor:'#F9F9F9',
                                            color: 'black',
                                            z:'10'
                                        }),
                                        menu: base => ({
                                            ...base,
                                            width: '100%',
                                            zIndex: '30',
                                            color: 'black',
                                        }),
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-3 md:gap-5 flex-1  " >
                                <label htmlFor="location" className="text-[14px] md:text-[20px] font-bold" >
                                    Document type
                                </label>
                                <Select
                                    options={idOptions}
                                    placeholder="Select an ID type"
                                    onChange={(e) => {
                                        setSelectedDocuments({...selectedDocuments, idType: e.value})
                                    }}
                                    components={{
                                        DropdownIndicator: CustomDropdownIndicator,
                                        IndicatorSeparator : () => null
                                    }}
                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            width: '100%',
                                            height: isMobile ? '50px' : '62px',
                                            border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                            "&:hover": {
                                            border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                            },
                                            boxShadow: state.isFocused ? 0 : 0,
                                            cursor:'pointer',
                                            caretColor:'transparent',
                                            paddingRight: isMobile ? '12px' : '22px',
                                            paddingLeft: isMobile ? '4px' : '22px',
                                            paddingTop: isMobile ? '4px' : '11px',
                                            paddingBottom:isMobile ? '4px' : '11px',
                                            borderTopLeftRadius:'5px',
                                            borderBottomLeftRadius:'5px',
                                            borderTopRightRadius:'5px',
                                            borderBottomRightRadius: '5px',
                                            backgroundColor:'#F9F9F9',
                                            color: 'black',
                                            z:'10'
                                        }),
                                        menu: base => ({
                                            ...base,
                                            width: '100%',
                                            zIndex: '30',
                                            color: 'black',
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-12 md:mb-[72px] flex flex-col lg:flex-row  gap-12 lg:gap-[57px] mx-auto justify-center w-full max-w-[880px] " >
                        
                            <div className="flex-1 border-dashed border-[1.5px] border-black bg-[#FFFFFF] rounded-[10px] pt-[11px] pb-[31px] px-[12px] xl:px-[104px] h-fit">
                                <img
                                    src={uploadIcon}
                                    alt="upload icon"
                                    className={` ${fileUploadManager.id_front.inactive ? 'block' : 'hidden'} mx-auto mb-[18px] w-[48px] h-[48px]`}
                                />
                                <img
                                    src={fileUploadManager.id_front.uploading ? uploadingImage : uploadedImage}
                                    alt="uploading icon"
                                    className={` ${fileUploadManager.id_front.inactive ? 'hidden' : fileUploadManager.id_front.uploading ? 'w-[60px] md:w-[95px] ' : 'w-[40px] '} mt-8 mb-5 mx-auto`}
                                />{/* Image for uploading */}
                                
                                <h4 className={` ${fileUploadManager.id_front.inactive ? '' : 'hidden'} mb-3 text-[18px] font-bold text-center`}>
                                    Front side of your ID
                                </h4>
                                <h4 className={` ${fileUploadManager.id_front.inactive ? 'hidden' : ''} mb-7 text-[15px] text-center`}>
                                    {
                                        fileUploadManager.id_front.uploading && (
                                            <p>
                                                <span className="text-[#2CA9F2] font-bold" > Uploading </span> {fileUploadManager.id_front.filename}
                                            </p>
                                    )}
                                    {
                                        fileUploadManager.id_front.uploadSuccess && (
                                            <p>
                                                <span className="text-[#2CA9F2] font-bold" >{fileUploadManager.id_front.filename}</span> uploaded successfully
                                            </p>
                                   )}
                                    {
                                        fileUploadManager.id_front.uploadError && (
                                            <span className="font-bold text-[#D52B1E]" >
                                                {` ${fileUploadManager.id_front.filename} upload failed`}
                                            </span>
                                    )}
                                </h4>
                                
                                <p className={` ${fileUploadManager.id_front.inactive ? '' : 'hidden'} text-[10px] mb-[22px] text-center`}>
                                    Upload the front side of your ID <br />Supports: JPG, PNG, PDF
                                </p>
                                <label htmlFor="id_front" className="mx-auto h-full block w-fit">
                                    <div className="py-3 px-8 border-2 border-black rounded-md mx-auto block text-[14px] font-bold cursor-pointer ">
                                        Choose a file
                                        <input
                                            type="file"
                                            name="id_front"
                                            id="id_front"
                                            accept="image/*, application/pdf"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </label>
                            </div>

                            <div className="flex-1  border-dashed border-[1.5px] border-black bg-[#FFFFFF] rounded-[10px] pt-[11px] pb-[31px] px-5 xl:px-[104px] h-fit " >
                                <img
                                    src={uploadIcon}
                                    alt="upload icon"
                                    className={` ${fileUploadManager.id_back.inactive ? 'block' : 'hidden'} mx-auto mb-[18px] w-[48px] h-[48px]`}
                                />
                                <img
                                    src={fileUploadManager.id_back.uploading ? uploadingImage : uploadedImage}
                                    alt="uploading icon"
                                    className={` ${fileUploadManager.id_back.inactive ? 'hidden' : fileUploadManager.id_back.uploading ? 'w-[60px] md:w-[95px] ' : 'w-[40px] '} mt-8 mb-5 mx-auto`}
                                />{/* Image for uploading */}
                                <h4 className={` ${fileUploadManager.id_back.inactive ? '' : 'hidden'} mb-3 text-[18px] font-bold text-center`}>
                                    Back side of your ID
                                </h4>
                                <h4 className={` ${fileUploadManager.id_back.inactive ? 'hidden' : ''} mb-7 text-[15px] text-center`}>
                                    {
                                        fileUploadManager.id_back.uploading && (
                                            <p>
                                                <span className="text-[#2CA9F2] font-bold" > Uploading </span> {fileUploadManager.id_back.filename}
                                            </p>
                                    )}
                                    {
                                        fileUploadManager.id_back.uploadSuccess && (
                                            <p>
                                                <span className="text-[#2CA9F2] font-bold" >{fileUploadManager.id_back.filename}</span> uploaded successfully
                                            </p>
                                   )}
                                    {
                                        fileUploadManager.id_back.uploadError && (
                                            <span className="font-bold text-[#D52B1E]" >
                                                {` ${fileUploadManager.id_front.filename} upload failed`}
                                            </span>
                                    )}
                                </h4>
                                <p className={` ${fileUploadManager.id_back.inactive ? '' : 'hidden'} text-[10px] mb-[22px] text-center`}>
                                    Upload the front side of your ID <br />Supports: JPG, PNG, PDF
                                </p>
                                <label htmlFor="id_back" className="mx-auto h-full block w-fit">
                                    <div className="py-3 px-8 border-2 border-black rounded-md mx-auto block text-[14px] font-bold cursor-pointer ">
                                        Choose a file
                                        <input
                                            type="file"
                                            name="id_back"
                                            id="id_back"
                                            accept="image/*, application/pdf"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className="max-w-[880px] block mx-auto">
                            <p className="text-[15px] mb-2 md:mb-3" >
                                By clicking on “Continue” you confirm that you uploaded valid government - issued photo ID. You also certify that your ID includes your picture, signature, name, date of birth, and address.
                            </p>
                            <p className="text-[15px] mb-4 md:mb-6 " >
                                Note that your data is securely encrypted and protected as we prioritize your privacy.
                            </p>
                            <button className="w-full bg-black rounded-lg py-[10px] md:py-5 px-5 md:px-8 tect-[15px] md:text-[28px] text-[#FFFFFF] font-bold "
                                onClick={() => setPageDisplay('bank_document')}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                    : pageDisplay == 'bank_document' ? 
                        <div className="">
                            <h1 className="text-center text-[16px] md:text-[32px] font-black mb-4 text-[#000000] " >
                                Upload a bank document
                            </h1>
                            <p className="mb-[56px] md:mb-[74px] text-[14px] md:text-[20px] text-[#000000] text-center " >
                                Palbucks requires a valid bank document (bank statements, voided check, direct deposit form, bank application, bank letter).
                            </p>
                            <div className="mb-[48px] md:mb-[84px] flex flex-col gap-[64px] lg:gap-[73px] mx-auto justify-center w-full max-w-[880px] " >
                                <div className="flex flex-col gap-[13px] md:gap-5 flex-1 " >
                                    <label htmlFor="location" className="text-[14px] md:text-[20px] font-bold" >Bank document type </label>
                                    <Select
                                        options={bank_documentOptions}
                                        placeholder="Select a document type"
                                        onChange={(e) => {
                                            setSelectedDocuments({...selectedDocuments, bank_document: e.value})
                                        }}
                                        components={{
                                            DropdownIndicator: CustomDropdownIndicator,
                                            IndicatorSeparator : () => null
                                        }}
                                        styles={{
                                            control: (base, state) => ({
                                                ...base,
                                                width: '100%',
                                                height: isMobile ? '50px' : '62px',
                                                border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                                "&:hover": {
                                                border: state.isFocused ? '1px solid #2CA9F2' : '2px solid #000000',
                                                },
                                                boxShadow: state.isFocused ? 0 : 0,
                                                cursor:'pointer',
                                                caretColor:'transparent',
                                                paddingRight: isMobile ? '12px' : '22px',
                                                paddingLeft: isMobile ? '4px' : '22px',
                                                paddingTop: isMobile ? '4px' : '11px',
                                                paddingBottom:isMobile ? '4px' : '11px',
                                                borderTopLeftRadius:'5px',
                                                borderBottomLeftRadius:'5px',
                                                borderTopRightRadius:'5px',
                                                borderBottomRightRadius: '5px',
                                                backgroundColor:'#F9F9F9',
                                                color: 'black',
                                                z:'10'
                                            }),
                                            menu: base => ({
                                                ...base,
                                                width: '100%',
                                                zIndex: '30',
                                                color: 'black',
                                            }),
                                        }}
                                    />
                                </div>
                                <div className="border-dashed border-[1.5px] border-black bg-[#FFFFFF] rounded-[10px] pt-[11px] pb-[31px] px-[12px] xl:px-[104px] h-fit " >
                                    <img
                                        src={uploadIcon}
                                        alt="upload icon"
                                        className={` ${fileUploadManager.bank_document.inactive ? 'block' : 'hidden'} mx-auto mb-[18px] w-[48px] h-[48px]`}
                                    />
                                    <img
                                        src={fileUploadManager.bank_document.uploading ? uploadingImage : uploadedImage}
                                        alt="uploading icon"
                                        className={` ${fileUploadManager.bank_document.inactive ? 'hidden' : fileUploadManager.bank_document.uploading ? 'w-[60px] md:w-[95px] ' : 'w-[40px] '} mt-8 mb-5 mx-auto`}
                                    />{/* Image for uploading */}
                                    <h4 className={` ${fileUploadManager.bank_document.inactive ? '' : 'hidden'} mb-3 text-[18px] font-bold text-center`}>
                                        Upload bank document
                                    </h4>
                                    <h4 className={` ${fileUploadManager.bank_document.inactive ? 'hidden' : ''} mb-7 text-[15px] text-center`}>
                                        {
                                            fileUploadManager.bank_document.uploading && (
                                                <p>
                                                    <span className="text-[#2CA9F2] font-bold" > Uploading </span> {fileUploadManager.bank_document.filename}
                                                </p>
                                        )}
                                        {
                                            fileUploadManager.bank_document.uploadSuccess && (
                                                <p>
                                                    <span className="text-[#2CA9F2] font-bold" >{fileUploadManager.bank_document.filename}</span> uploaded successfully
                                                </p>
                                    )}
                                        {
                                            fileUploadManager.bank_document.uploadError && (
                                                <span className="font-bold text-[#D52B1E]" >
                                                    {` ${fileUploadManager.bank_document.filename} upload failed`}
                                                </span>
                                        )}
                                    </h4>
                                    <p className={` ${fileUploadManager.bank_document.inactive ? '' : 'hidden'} text-[10px] mb-[22px] text-center`}>
                                        Upload your bank document file <br /> Supports: JPG, PNG, PDF
                                    </p>
                                    <label htmlFor="bank_document" className="mx-auto h-full block w-fit">
                                        <div className="py-3 px-8 border-2 border-black rounded-md mx-auto block text-[14px] font-bold cursor-pointer">
                                            Choose a file
                                            <input
                                                type="file"
                                                name="bank_document"
                                                id="bank_document"
                                                accept="image/*, application/pdf"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </label>
                                </div>
                                
                            </div>
                            
                            <div className="max-w-[880px] block mx-auto">
                                <p className="text-[15px] mb-2 md:mb-3" >
                                    By clicking on “Continue” you confirm that you uploaded valid government - issued photo ID. You also certify that your ID includes your picture, signature, name, date of birth, and address.
                                </p>
                                <p className="text-[15px] mb-4 md:mb-6 " >
                                    Note that your data is securely encrypted and protected as we prioritize your privacy.
                                </p>
                                <button className="w-full bg-black rounded-lg py-[10px] md:py-5 px-5 md:px-8 tect-[15px] md:text-[28px] text-[#FFFFFF] font-bold "
                                onClick={() => {setPageDisplay('successfulSubmission')}}>
                                    Continue
                                </button>
                            </div>
                        </div>
                        : pageDisplay == 'successfulSubmission' ?
                            <div className="mt-[100px] md:mt-[120px] max-w-[820px] block mx-auto" >
                                <img src={flyIcon} alt="success" className="mb-[34px] w-[49px] md:w-[71px] mx-auto " />
                                <h3 className="text-[16px] md:text-[35px] font-black mb-4 md:mb-2 text-center " >
                                     Documents submitted successfully
                                </h3>
                                <p className="text-[14px] md:text-[20px] mb-8 md:mb-10 text-center " >
                                    Your documents have been successfully sent for verification. We'll notify you via email once they've been processed.
                                </p>

                                <button className="py-[10px] md:py-5 px-6 md:px-10 bg-black text-[#FFFFFF] text-[16px] md:text-[28px] font-bold rounded-md md:rounded-lg mx-auto block  "
                                onClick={()=> navigate('/home') }>
                                    Go back to homepage
                                </button>
                            </div>
                        : null
                }

            </main>

        </div>
    )
}

export default Kyc;