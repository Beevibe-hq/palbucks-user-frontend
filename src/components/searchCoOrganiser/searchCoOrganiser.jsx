import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import profileImage2 from "../../images/user2.svg" 
import profileImage3 from "../../images/user3.svg"
import profileImage4 from "../../images/user4.svg"
import addIcon from "../../images/organiseCrowdfund/addIcon.svg"

function SearchCoOrganiser(props){

    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    const [searchValue, setSearchValue] = useState('')
    const [selected, setSelected] = useState(0)
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)                
    }

    useEffect(() => {
        let results = Users.filter((user) => (
                    user.first_name.toLowerCase().includes(searchValue.toLowerCase()) || user.last_name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                )
            console.log(results)
            setSearchResults(results)
    }, [searchValue])

    
    return(
        <div className={`mb-10 w-[681px] min-h-[352px] h-fit py-10 px-11 bg-white rounded-[10px] shadow-[0px_0px_72px_0px_rgba(0,0,0,0.04)] `} >
            <div className="flex gap-11 items-center justify-center ">
                <input
                    type="search"
                    className="w-[80%] xphones:w-[80%] md:w-[320px] brkpoint:w-[300px] h-[30px] phones:h-[40px] lg:w-[345px] xl:w-[480px] xl:h-[44px]
                        text-base pl-10 md:pl-12 lg:pl-14 text-[#7A7575] bg-[#F9F9F9] bg-[length:20px] md:bg-[length:24px] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(48%)]
                        bg-no-repeat rounded-3xl shadow-[0px_0px_16px_rgba(0,0,0,0.04)] md:shadow-none font-merriweather font-normal outline-2 outline-[#37BCF7]
                        focus:caret-[#2CA9F2] "
                    placeholder= {isMobile ? 'Search':'Search for Co-organiser(s)'}
                    onChange={handleSearch}
                />
                <button className="text-[#37BCF7] text-2xl font-bold " >
                    Cancel
                </button>
            </div>

            <div className={` ${searchValue == '' ? 'flex items-center justify-center h-full text-[#8E8E93] text-center text-2xl' : 'hidden'} `} >
                Search for co-organisers and add them to your campaign
            </div>

            <div className={`${searchValue == '' ? 'hidden' :'h-full pt-7 flex flex-col' } `} >
                <p className="text-[#8E8E93] text-lg text-center mb-8 " >
                    Selected {selected} of {searchResults.length}
                </p>
                <div className="mb-10 flex flex-col gap-10 " >
                    {
                        searchResults.map((user,i) => (
                            <Coorganiser first_name={user.first_name} last_name={user.last_name} dp={user.dp} key = {i} />
                        ))
                    }
                </div>
                <p className="text-lg text-center" >
                    Users you invite will have to accept your invitation before they can appear on your campaign
                </p>

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

const Coorganiser = ({first_name, last_name, dp}) => {
    return(
        <div className="flex items-center justify-between gap-4 " >
            <div className="flex gap-[15px] items-center justify-center" >
                <img src={dp} alt="Profile image" className="w-[60px] h-[60px] rounded-full " />                
                <p className="text-base font-black " >{first_name} {last_name}</p>
            </div>
            <button className="flex items-center justify-center gap-4 py-[6px] px-3 border-[#37BCF7] rounded-xl border-[3px] " >
                <img src={addIcon} alt="add Icon" className="w-[30px]" />    
                <p className="text-base font-black text-[#37BCF7] pt-1 " >Invite user</p>
            </button>
        </div>
    )
}