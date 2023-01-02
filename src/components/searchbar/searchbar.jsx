import { useMediaQuery } from "react-responsive";

function Searchbar(){

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <input type="search" className="w-[150px] md:w-[250px] h-[30px] phones:h-[35px] lg:w-[345px] lg:h-[32px] xl:w-[380px] xl:h-[39px] 
        text-[16px] pl-12 text-[#7A7575] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(50%)] bg-no-repeat outline-0 rounded-3xl" 
        placeholder= {isMobile ? 'Search':'Search for campaign or user'} />
    )
}

export default Searchbar;