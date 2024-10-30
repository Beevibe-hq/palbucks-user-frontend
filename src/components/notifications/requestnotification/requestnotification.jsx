import { baseUrl } from "../../../auth/checkauthentication"
import profilePlaceholder from "../../../images/profileplaceholder.svg"

function Requestnotification(props){
    
    async function acceptRequest() {
        console.log("accepting request")
        try{
            const response = await fetch(`${baseUrl}/funding/api/${props.id}/organiser/response/`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                },
                body: JSON.stringify({
                    response:true
                })
            })

            const result = await response.json();
            console.log(result);
            if (result.message == "Co Organiser request accepted successfully.") {
                alert("Co Organiser request accepted successfully.")
            }
        } catch (error) {
            console.error("Error Accepting Request: ", error);
            alert("Error Accepting Request");
        }
    }

    async function rejectRequest() {
        console.log("rejecting request")
        try {
            const response = await fetch(`${baseUrl}/funding/api/${props.id}/organiser/response/`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("access_token")}`
                },
                body: JSON.stringify({
                    response: false
                })
            })

            const result = await response.json();
            console.log(result);
            if (result.message === "Co Organiser request rejected successfully.") {
                alert("Co Organiser request rejected successfully.")
            }
        } catch (error) {
            console.error("Error Rejecting Request: ", error);
            alert("Error Rejecting Request");
        }
    }

    return(
        <div className="flex items-start gap-[10px] md:gap-4 bg-white border-[1px] border-[#F9F9F9] py-[10px] md:py-[15px] px-[20px] rounded-[5px] md:rounded-none " >
            <img src={props.userdp ? `https://palbucks-bucket.s3.amazonaws.com/${props.userdp}`: profilePlaceholder} alt="user profile" className=" w-12 md:w-[56px] rounded-full" />
            <div className="" >
                <h4 className="font-black text-base md:text-lg mb-1 md:mb-[6px]" >
                    {props.username}
                </h4>
                <p className="mb-[10px] md:mb-[15px] text-[13px] md:text-base  " >
                    {props.time}
                </p>
                <p className="text-sm md:text-lg mb-[10px] md:mb-[15px] " >
                    is requesting you to <span className="font-black" >join</span> her crowdfunding campaign
                 </p>
                 <div className="flex gap-[15px] ">
                    <button className="py-[6px] px-[13px] md:px-[15px] rounded-[5px] md:rounded-[10px] bg-[#37BCF7] text-white text-xs md:text-base font-black "
                    onClick={acceptRequest}>
                        Accept
                     </button>
                    <button className=" border-2 border-[#37BCF7] py-[6px] px-[13px] md:px-[15px] rounded-[5px] md:rounded-[10px] bg-white text-[#37BCF7] text-xs md:text-base font-black "
                    onClick={rejectRequest}>
                        Decline
                     </button>
                 </div>

            </div>
        </div>
    )
}

export default Requestnotification