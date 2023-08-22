import muteicon from "../../images/Mute icon2.svg"

function Muteduser(props){

    return(
        <div className = "flex items-center max-w-[280px] truncate " >
            <img src={props.image} alt={`${props.name}'s profile picture `} className = "w-[50px] h-[50px] mr-2 "  />
            <h4 className = "font-bold text-base mr-4 truncate " >
                {props.name}
            </h4>

            <button className = " bg-[#2CA9F2] min-w-[90px] gap-1 flex items-start justify-center h-[33px] text-white py-2 px-2 rounded-xl font-semibold text-sm  " >
                <img src={muteicon} alt="mute icon" className = "w-[17px] h-[17px]"  />
                <span>Unmute</span>
            </button>
        </div>
    )
}

export default Muteduser