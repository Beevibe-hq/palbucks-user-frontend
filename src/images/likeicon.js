

function Likeicon(props){

    return(
        <svg width="16" height="16" viewBox="0 0 20 18" fill={props.liked ? 'red' : 'none'}   xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5141 16.3417C10.2307 16.4417 9.76406 16.4417 9.48073 16.3417C7.06406 15.5167 1.66406 12.075 1.66406 6.24167C1.66406 3.66667 3.73906 1.58334 6.2974 1.58334C7.81406 1.58334 9.15573 2.31667 9.9974 3.45C10.4255 2.87157 10.9832 2.40144 11.6257 2.07729C12.2682 1.75314 12.9777 1.58397 13.6974 1.58334C16.2557 1.58334 18.3307 3.66667 18.3307 6.24167C18.3307 12.075 12.9307 15.5167 10.5141 16.3417Z" 
            stroke="#525252" strokeWidth={props.liked ? "0" : "1.5" } strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Likeicon