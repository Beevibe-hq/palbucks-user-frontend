import { useMediaQuery } from "react-responsive";

function Searchbar(){

    //a react package for responsiveness
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    })

    return(
        <input type="search" className="w-[200px] md:w-[415px] h-[35px] lg:w-[325px] lg:h-[32px] xl:w-[350px] xl:h-[39px] 
        text-[16px] pl-12 text-[rgb(122,117,117)] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(50%)] bg-no-repeat outline-0 rounded-3xl" 
        placeholder= {isMobile ? 'Search':'Search for campaign or user'} />
    )
}

export default Searchbar;