import { useDispatch, useSelector } from "react-redux"
import { removeNotificationAlert } from "../actions/actions"
import { useMediaQuery } from "react-responsive"

function Notificationsicon(props){
    
    const newNotificationsAlert = useSelector(state => state.newNotificationsAlert)
    const dispatch = useDispatch()
    //const isMobile = useMediaQuery()

    return(
        <div className={`block relative`}
            onClick={() => {
                dispatch(removeNotificationAlert())
             }}    
        >
            <div className={` ${newNotificationsAlert ? 'block':'hidden'} w-[10px] h-[10px] bg-[#35FAA0] rounded-full absolute right-0 `} >
            </div>
            <svg
                onClick={props.onClick}
                width="22"
                height="30"
                viewBox="0 0 22 30"
                fill={props.active ? "#37BCF7" : "none"}
                xmlns="http://www.w3.org/2000/svg"
                id="notificationsicon"
                className=' cursor-pointer block w-[18px] md:w-[21px]'
                alt="notifications icon">
                <path d="M11.0308 3.66797C6.90428 3.66797 3.55069 7.02156 3.55069 11.1481V14.751C3.55069 15.5115 3.22655 16.6709 2.84007 17.3192L1.40638 19.7004C0.52123 21.1715 1.13211 22.8047 2.7528 23.3532C8.12604 25.1484 13.9231 25.1484 19.2964 23.3532C20.8049 22.8545 21.4656 21.0718 20.6428 19.7004L19.2091 17.3192C18.8351 16.6709 18.511 15.5115 18.511 14.751V11.1481C18.511 7.03403 15.1449 3.66797 11.0308 3.66797Z" stroke={props.active ? "none" : "black"} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                <path d="M13.3315 4.02896C11.8239 3.59959 10.2264 3.59959 8.71875 4.02896C9.08029 3.10641 9.97791 2.45813 11.0251 2.45813C12.0723 2.45813 12.97 3.10641 13.3315 4.02896V4.02896Z" stroke={props.active ? "none" : "black"} strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.7702 23.8019C14.7702 25.8589 13.0871 27.5419 11.0301 27.5419C10.0078 27.5419 9.06034 27.1181 8.38713 26.4449C7.68668 25.7434 7.29228 24.7932 7.29004 23.8019" stroke={props.active ? "none" : "black"} strokeWidth="3" strokeMiterlimit="10"/>
            </svg>
        </div>
    )
}

export default Notificationsicon