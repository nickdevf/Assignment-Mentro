import { useState } from 'react'
import { ProfileCircle } from '../components/MainProfile'
import { ProfileInfo } from '../components/ProfileDetails'
import '../css/style.css'
import {HiOutlineArrowNarrowDown} from 'react-icons/hi'
import {ProfileData} from '../data/profileData'
let index=2;
let rotateCount=0;
let present=2;

export const Main = ()=>{

    const [profile,setProfile] = useState(ProfileData[2]);
    const slideAnimation = () => {
        const nameBox = document.querySelector(".NameBox");
        nameBox.style.transition = "all 0.5s ease-in-out";
        nameBox.style.transform = "translate(-12%, 50px) translateX(100%)";
        nameBox.classList.add("fade");
        setTimeout(() => {
          nameBox.style.transform = "translate(-12%,50px) translateX(0%)";
          nameBox.classList.remove("fade");
        }, 500);
      };
      const downimgAnimation = () => {
        const mainImage = document.querySelector("#mainImage");
        mainImage.style.transition = "all 0.5s ease-in-out";
        mainImage.style.transform =
          "translate(-12%, 40px) rotate(-50deg) scale(0.7)";
        mainImage.classList.add("fade");
        setTimeout(() => {
          mainImage.style.transform = "translate(-12%, 40px) rotate(0deg) scale(1)";
          mainImage.classList.remove("fade");
        }, 500);
      };
      const nextImgAnimation = () => {
        const mainImage = document.querySelector("#mainImage");
        mainImage.style.transition = "all 0.5s ease-in-out";
        mainImage.style.transform = "translate(-12%,40px) rotate(50deg) scale(0.7)";
        mainImage.classList.add("fade");
        setTimeout(() => {
          mainImage.style.transform = "translate(-12%, 40px) rotate(0deg) scale(1)";
          mainImage.classList.remove("fade");
        }, 500);
      };
    function moveProfileCircle(type){
        if(type==='left'){
            index=index+1;
            index=index%8;
            present+=1;
            if(present>4){
                present=0;
            }
            rotateCount-=1;
            slideAnimation();
            nextImgAnimation();
        }
        else{
            index=index-1;
            present=present-1;
            if(index<0){
                index=8+index;
            }
            if(present<0){
                present=4;
            }
            rotateCount+=1;
            slideAnimation();
            downimgAnimation();
        }
        document.getElementById('mainCircle').style.transform = `rotate(${45*rotateCount}deg)`
        for(let i=0;i<=7;i++){
            document.getElementById('image'+i).style.transform=`rotate(${45*rotateCount*-1}deg)`
        }
        document.getElementById('image'+(index+3)%8).src=document.getElementById('image'+(index-2<0?8+(index-2):index-2)%8).src;
        document.getElementById('image'+(index-3<0?8+(index-3):index-3)%8).src=document.getElementById('image'+(index+2)%8).src;
        setProfile(ProfileData[present])

    }

    return(
        <div style={{'height':'100%','width':'100%','overflow':'hidden'}} >
            <div style={{'height':'60%','width':'40%','position':'absolute','top':'25%'}} >
                <ProfileInfo presentProfile={profile} />
            </div>
            {/* <div id='cutArc' style={{'backgroundColor':`${present%2===0?'#7ABD87':'#C5F8C7'}`}} >
                <ProfileCircle />
            </div> */}
            <div id='cutArc' style={{'backgroundColor':`${profile.BG}`}} >
                <ProfileCircle />
            </div>
            <div id='mainImage' >
                <img className='img' src={profile.Source} alt=''/>
            </div>
            <button id='btn1' className='btn rounded-full' onClick={()=>moveProfileCircle('left')} >
                <HiOutlineArrowNarrowDown className='invert' style={{'scale':'200%','marginLeft':'40%'}} />
            </button>
            <button id='btn2' className='btn rounded-full' onClick={()=>moveProfileCircle('right')} >
                <HiOutlineArrowNarrowDown className='invert' style={{'scale':'200%','marginLeft':'40%'}} />
            </button>
            <div id='nameDiv' className='NameBox place-content-center ' >
                <h1 className='Name text-3xl font-semibold' >{profile.Name}</h1>
            </div>
    
            
            
        </div>
    )
}