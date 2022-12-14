
function Navelements(props){

    return(
        <div className = 'flex gap-4 items-center text-[#525252] font-medium text-xl cursor-pointer ' >
            <img src={props.image} alt="props.alt" />
            <h2>{props.title}</h2>
        </div>                                
    )
}

export default Navelements;