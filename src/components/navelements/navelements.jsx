
function Navelements(props){

    return(
        <div className = 'flex gap-4 items-center text-[#525252] font-medium text-xl cursor-pointer ' >
            <img src={props.image} alt="props.alt" className = 'w-[20px]' />
            <h2 className='text-[18px] minitablet:text-base leading-4 xl:text-lg'>{props.title}</h2>
        </div>                                
    )
}

export default Navelements;