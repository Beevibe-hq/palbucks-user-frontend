import Homebody from "../../components/homebody/homebody";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";

function Home(){

    return(
        <div className=' bg-[#F9F9F9] flex' >
            <Sidebar />
            <div className = 'w-full' >
                <Navbar />
                <Homebody />
            </div>
        </div>
    )
}

export default Home