import { useState } from "react";

function Navelements(props){

    const [pagelinkcolor , setpagelinkcolor] = useState(props.pagelinkcolor)
    const [image, setimage] = useState(props.image)

    return(
        <div id = {props.title} className = {`flex gap-4 items-center font-medium text-xl cursor-pointer`} >
            <img src={image} alt="props.alt" className = 'w-[20px]' />
            <h2 className='text-[18px] minitablet:text-base leading-4 xl:text-lg'>{props.title}</h2>
        </div>
    )
}

export default Navelements;