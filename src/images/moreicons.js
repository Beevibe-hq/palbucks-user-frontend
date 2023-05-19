
function Moreicons(props){

    return(
        <svg width="48" height="14" viewBox="0 0 48 14" fill="none" xmlns="http://www.w3.org/2000/svg"
        className = 'hidden md:block w-[35px] h-[10px] cursor-pointer'
        onClick={props.onClick}
        >
            <circle cx="7" cy="7" r="7" fill=  { props.active? '#37BCF7':  '#525252'}/>
            <circle cx="24" cy="7" r="7" fill=  { props.active? '#37BCF7':  '#525252'}/>
            <circle cx="41" cy="7" r="7" fill=  { props.active? '#37BCF7':  '#525252'}/>
        </svg>

    )
}

export default Moreicons