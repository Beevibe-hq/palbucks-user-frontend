import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

function Navelements(props){

    const [pagelinkcolor , setpagelinkcolor] = useState(props.pagelinkcolor)
    const [image, setimage] = useState(props.image)

    const sidebarslid = useSelector(state => state.sidebarslid)

    const isMobile = useMediaQuery({
        query: '(max-width: 940px)'
    })

    return(
        <div id = {props.title} className = {`flex gap-4 items-center font-medium text-xl cursor-pointer`} >
            <img src={image} alt="props.alt" className = 'w-[20px]' />
            <h2 className={`${ isMobile ? 'block' : sidebarslid ? 'hidden' : 'block' } text-[18px] minitablet:text-base leading-4 xl:text-lg`}>{props.title}</h2>
        </div>
    )
}

export default Navelements;