import '../css/MainProfile.css'
import {profile} from '../data/profileData'
export const ProfileCircle = ()=>{
    return(
        <div id='mainCircle' className='transition-all' >
            <div id='icon0' className='' >
                <img id='image0' src={profile[0]} alt=''></img>
            </div>
            <div id='icon1' className='' >
            <img id='image1' src={profile[1]} alt=''></img>
            </div>
            <div id='icon2' className='' >
            <img id='image2' src={profile[2]} alt=''></img>
            </div>
            <div id='icon3' className='' >
            <img id='image3' src={profile[3]} alt=''></img>
            </div>
            <div id='icon4' className='' >
            <img id='image4' src={profile[4]} alt=''></img>
            </div>
            <div id='icon5' className='' >
            <img id='image5' src={profile[0]} alt=''></img>
            </div>
            <div id='icon6' className='' >
            <img id='image6' src='' alt=''></img>
            </div>
            <div id='icon7' className='' >
            <img id='image7' src={profile[4]} alt=''></img>
            </div>
            
        </div>
    )
}