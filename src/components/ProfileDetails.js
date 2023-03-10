import {TiStarHalf, TiStar} from 'react-icons/ti'
import '../css/ProfileDetails.css'
import Rating from "@mui/material/Rating";
import { ProfileData } from '../data/profileData';
export const ProfileInfo = ({presentProfile})=>{
    // let arr=[]
    // for(let i=1;i<=presentProfile.Stars;i++){
    //     arr.push(i)
    // }
    // if(presentProfile.Stars-Math.floor(presentProfile.Stars)!==0){
    //     arr.push(0.5);
    // }
    return(
        <div className="text-left p-10 ml-6" >
            <h1 className="text-5xl"  style={{
            color: "#4caf50",
          }}>{presentProfile.Stars}</h1>
            <br/>
            <Rating
          name="mentor-rating"
          value={presentProfile.Stars}
          precision={0.5}
          readOnly
          style={{
            color: "#4caf50",
          }}
        />
            <br/>
            <h1 className='text-4xl font-semibold' >{presentProfile.Name}</h1>
            <h1 className='text-3xl mt-2'>{presentProfile.Position}</h1>
            <br/>
            <p>{presentProfile.Details}</p>
            <br/>
            <button id='bookSession' className='text-white font-bold text-2xl py-6 px-8 rounded shadow-7xl '>Book a Session</button>
        </div>
    )
}