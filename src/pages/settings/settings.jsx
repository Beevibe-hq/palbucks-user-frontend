import Sidebar from "../../components/sidebar/sidebar"
import Navbar from "../../components/navbar/navbar"
import Settingsbody from "../../components/settingsbody/settingsbody"

function Settings(){

    return(
        <div className=' bg-[#F9F9F9] h-full' >
            <Sidebar />
            <div className = ' md:ml-[250px] lg:ml-[280px] xl:ml-[320px]' >
                <Navbar />   
                <Settingsbody />
                
            </div>
        </div>
    )
}

export default Settings