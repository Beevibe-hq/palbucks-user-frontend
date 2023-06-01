import smalluploadicon from "../../images/smalluploadicon.svg"
import deleteicon from "../../images/deleteicon.svg"

function Draftcampaign(props){

    return(
        <div className="" >
            <div className="flex items-center gap-2 w-fit mb-[15px] " >
                <div className="w-3 h-3 bg-[#8E8E93]  rounded-full" ></div>
                <h4 className=" relative top-[1px] " >Draft</h4>
            </div>

            <div className={`flex h-[120px] items-center mb-12 bg-white pr-4`}>
                <div className="w-[5px] h-full bg-[#8E8E93] mr-5 shadow-[0px_0px_16px_rgba(0,0,0,0.04);] " >                
                </div>

                <div className="flex gap-[25px]" >
                    <img src={props.img ? props.img : smalluploadicon} alt="user crowdfund img" className="w-[80px] h-[70px] rounded " />
                    <div className="flex flex-col w-[85%]" >
                        <h5 className="text-[18px] font-black leading-5 mb-2 " >{props.title ? props.title : 'Campaign title has not being added yet ' }</h5>
                        <p className=" text-[#525252]  " >Pending</p>
                    </div>                    
                </div>
                
                <div className="ml-auto flex gap-9 max-h-[50px] " >
                <button className="flex gap-2 items-center py-[2px] px-3 xl:py-[5px] xl:px-[15px] min-w-[104px] border-2 border-[#E61B00] rounded-[10px] "> 
                        <img src={deleteicon} alt="delete img" className="w-[20px] h-[24px]" />
                        <span className="text-[#E61B00] font-black" >Delete</span>
                    </button>
                    <button className="bg-[#37BCF7] text-white  rounded-[10px] py-[5px] px-[15px] font-black" >
                        Continue Editing
                    </button>

                </div>
            </div>


        </div>
    )
}

export default Draftcampaign