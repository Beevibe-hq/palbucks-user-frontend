
function Searchbar(){

    return(
        <input type="search" className="w-[415px] h-[30px] lg:w-[325px] lg:h-[32px] xl:w-[350px] xl:h-[39px] 
        text-[16px] pl-12 text-[#7A7575] bg-[image:url('./images/search.svg')] bg-[left_calc(5%)_top_calc(50%)] bg-no-repeat outline-0 rounded-3xl" 
        placeholder="Search for campaign or user" />
    )
}

export default Searchbar;