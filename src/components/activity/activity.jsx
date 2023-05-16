import user6 from "../../images/user6.svg"

function Activity(props){

    return(
        <div className="bg-[#F9F9F9] flex lg:gap-3 py-3 px-5 items-start rounded-[5px] " >
            <img src={props.userdp ? props.userdp : user6} alt="user profile dp" className="w-[57px] rounded-full " />
            <section>
                <h3 className="font-black text-[17px] mb-[6px] " >Doggo</h3>
                <h4 className="text-[15px] mb-3" >5 mins ago</h4>
                <h4 className="text-[18px]" >Made a donation of<span className="font-black" > 500USDT </span>to your crowdfund campaign</h4>
            </section>
        </div>
    )
}

export default Activity