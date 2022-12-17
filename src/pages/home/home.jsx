import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home(){

    return(
        <div className=' bg-[#F9F9F9] h-full' >
            <Sidebar />
            <div className = 'ml-[350px]' >
                <Navbar />
                <Homebody />
            </div>
        </div>
    )
}

export default Home