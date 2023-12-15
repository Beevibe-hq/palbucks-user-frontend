import { useMediaQuery } from "react-responsive";

function Searchbar(){

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    return(
        <input type="search" className="w-[100%] xphones:w-[80%] md:w-[320px] brkpoint:w-[300px] h-[30px] phones:h-[40px] lg:w-[345px] xl:w-[480px] xl:h-[44px] 
        text-base pl-10 md:pl-12 lg:pl-14 placeholder-[#7A7575] bg-[length:20px] md:bg-[length:24px] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(48%)]
        bg-no-repeat rounded-3xl shadow-[0px_0px_16px_rgba(0,0,0,0.04)] md:shadow-none font-arial font-normal 
        focus:caret-[#2CA9F2] focus:border-2 focus:border-[#37BCF7]  " 
        placeholder= {isMobile ? 'Search':'Search for campaign or user'} />
    )
}

export default Searchbar;