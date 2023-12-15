import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import profileImage2 from "../../images/user2.svg" 
import profileImage3 from "../../images/user3.svg"
import profileImage4 from "../../images/user4.svg"
import profilePlaceholder from "../../images/profileplaceholder.svg"
import addIcon from "../../images/organiseCrowdfund/addIcon.svg"
import addIcon2 from "../../images/organiseCrowdfund/addIcon2.svg"
import { baseUrl } from "../../auth/checkauthentication";

function SearchCoOrganiser({displaySearchCoOrganiser, setdisplaySearchCoOrganiser, formdata, setformdata, selected ,setSelected }){

    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const access_token = localStorage.getItem('access_token')

    const [searchValue, setSearchValue] = useState('')
    //const [selected, setSelected] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = async (e) => {
        try {
            setSearchValue(e.target.value);
            const getSearchResults = await fetch(`${baseUrl}/funding/api/add-coorganisers/?q=${e.target.value}`, {
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
            });
        
            if (!getSearchResults.ok) {
                // Handle non-successful response (e.g., 404)
                console.error(`Request failed with status: ${getSearchResults.status}`);
                setSearchResults([]); // Set results to an empty array or handle as needed
                return;
            }
        
            const data = await getSearchResults.json();
            setSearchResults(data);
        } catch (error) {
            // Handle other errors (e.g., network issues)
            console.error("An error occurred:", error);
            setSearchResults([]); // Set results to an empty array or handle as needed
        }
    };
      

    /* useEffect(() => {
        let results = Users.filter((user) => (
                    user.first_name.toLowerCase().includes(searchValue.toLowerCase()) || user.last_name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                )
            //console.log(results)
            setSearchResults(results)
    }, [searchValue]) */

    
    return(
        <div className={`fixed z-50 inset-0 overflow-y-auto font-arial ${displaySearchCoOrganiser ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true" >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8">
                    
                        <div className={`w-full md:w-[681px] min-h-[300px] h-fit py-5 md:py-10 px-1 phones:px-4 md:px-9 bg-white rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] `} >
                            <div className="relative flex gap-5 md:gap-20 lg:gap-11 items-center justify-center ">
                                <input
                                    type="search"
                                    className=" w-[65%] phones:w-[70%] md:w-[420px] h-[30px] xphones:h-[40px] xl:w-[450px] xl:h-[44px] relative right-5 md:right-2
                                        text-sm xphones:text-base pl-10 md:pl-12 lg:pl-14 placeholder-[#7A7575] bg-[#F9F9F9] bg-[length:20px] md:bg-[length:24px] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(48%)]
                                        bg-no-repeat rounded-3xl shadow-[0px_0px_16px_rgba(0,0,0,0.04)] md:shadow-none font-arial font-normal focus:border-2 focus:border-[#37BCF7]
                                        focus:caret-[#2CA9F2] "
                                    placeholder= {isMobile ? 'Search':'Search for Co-organiser(s)'}
                                    onChange={handleSearch}
                                />
                                <button className="text-[#37BCF7] text-sm xphones:text-base md:text-xl font-bold absolute right-1 " onClick={
                                    () => {
                                        setdisplaySearchCoOrganiser(false)
                                    }

                                } >
                                    Cancel
                                </button>
                            </div>
                            <div className={` ${searchValue == '' ? 'flex items-center justify-center h-[300px] text-[#8E8E93] text-center text-base md:text-xl' : 'hidden'} `} >
                                Search for co-organisers and add them to your campaign
                            </div>
                            <div className={`${searchValue == '' ? 'hidden' :'h-full pt-7 flex flex-col' } `} >
                                <p className="text-[#8E8E93] text-sm xphones:text-base md:text-lg text-center mb-8 " >
                                    Selected {selected.length} of {searchResults.length}
                                </p>
                                <div className="mb-10 modalScrollbar flex flex-col gap-10 max-h-[350px] overflow-auto p-2 xphones:p-4 " >
                                    {
                                        searchResults.map((user,i) => (
                                            <Coorganiser pk = {user.pk} user = {user} key = {user.pk} selected = {selected} setSelected = {setSelected} 
                                                formdata = {formdata} setformdata = {setformdata}
                                            />
                                        ))
                                    }
                                </div>
                                <p className="text-sm md:text-base text-center" >
                                    Users you invite will have to accept your invitation before they can appear on your campaign
                                </p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SearchCoOrganiser;


const Users = [
    {
        first_name:'Doggo',
        last_name:'Leia',
        dp:profileImage2
    },
    {
        first_name:'Doggy',
        last_name:'Sias',
        dp:profileImage3
    },
    {
        first_name:'Doglas',
        last_name:'Nicholas',
        dp:profileImage4
    },
    {
        first_name:'Micheal',
        last_name:'Scott',
        dp:profileImage2
    },
    {
        first_name:'Jim',
        last_name:'Halpert',
        dp:profileImage3
    },
    {
        first_name:'Pam',
        last_name:'Beesly',
        dp:profileImage4
    },
    {
        first_name:'Dwight',
        last_name:'Schrute',
        dp:profileImage2
    },
    {
        first_name:'Andy',
        last_name:'Bernard',
        dp:profileImage3
    },
]

const Coorganiser = ({user, pk, selected, setSelected, formdata ,setformdata}) => {
    
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))    

    return(
        <div className="flex flex-col phones:flex-row phones:items-center phones:justify-between gap-3 md:gap-4 font-arial " >
            <div className="flex gap-2 md:gap-[15px] items-center phones:justify-center" >
                <img src={user.dp == null ? profilePlaceholder : user.dp } alt="Profile pic" className="w-10 xphones:w-12 h-10 xphones:h-12 md:w-[60px] md:h-[60px] rounded-full " />                
                <p className="text-xs phones:text-sm md:text-base font-black " >{user.first_name} {user.last_name}</p>
            </div>
            <button className={` ${formdata.co_organisers.includes(pk) ? 'bg-[#37BCF7] text-white ' : 'border-[3px] border-[#37BCF7] hover:bg-[#37BCF71A] text-[#37BCF7]'} 
                flex items-center justify-center gap-1 md:gap-2 py-1 xphones:py-[6px] pr-[2px] phones:pl-1 phones:pr-[6px] md:px-3 rounded-xl w-fit min-w-[100px] `}
                onClick={() => {

                    // Check if the user is the same as the organiser
                    if (userInfo.username === user.username) {
                        alert('You cannot add yourself as a co-organiser');
                        return;
                    }
                    // Check if the user has already selected 2 co-organisers                    
                    if (selected.length >= 2 && !formdata.co_organisers.includes(pk)) {
                      alert('You can only add 2 co-organisers');
                      return;
                    }
                    if (formdata.co_organisers.includes(pk)) {
                        // Remove the user from the selected list
                        setSelected(selected.filter((selectedUser) => selectedUser.pk !== pk));
                        setformdata({...formdata, co_organisers: formdata.co_organisers.filter((selectedUser) => selectedUser !== pk)})
                    } else {
                        // Add the user to the selected list
                        setSelected([...selected, user]);
                        setformdata({...formdata, co_organisers: [...formdata.co_organisers, Number(pk)]})
                    }
                                        
                  }}
                  
            >
                <img src={formdata.co_organisers.includes(pk) ? addIcon2 : addIcon} alt="add Icon" className="w-6 md:w-[30px]" />    
                <p className="text-xs phones:text-sm md:text-base font-black pt-1 " >
                    {
                        formdata.co_organisers.includes(pk) ? 'Invited User' : 'Invite user'
                    }
                </p>
            </button>
        </div>
    )
}