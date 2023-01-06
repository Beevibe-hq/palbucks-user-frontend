import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home(){

    return(
        <div className=' bg-[#F9F9F9] h-full relative' >
            <Sidebar />
            <div className = ' md:ml-[250px] lg:ml-[280px] xl:ml-[320px]' >
                <Navbar />
                <Homebody />
            </div>
        </div>
    )
}

export default Home