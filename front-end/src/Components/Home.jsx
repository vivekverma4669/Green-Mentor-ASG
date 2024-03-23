import React from 'react';
import { useState , useEffect} from 'react';
import TaskList from "../Components/TaskList"

const Home = () => {
    let arr=["https://media.licdn.com/dms/image/C5612AQHxHaEuphzijA/article-cover_image-shrink_720_1280/0/1588226458226?e=2147483647&v=beta&t=fUHEo5NxNRZ21u6stC4DX2bXS6rKdRk5z0EPCasvD20",

    "https://quotefancy.com/media/wallpaper/3840x2160/5241162-Don-Marquis-Quote-Punctuality-is-one-of-the-cardinal-business.jpg",
    
    "https://quotefancy.com/media/wallpaper/3840x2160/4674533-Urijah-Faber-Quote-Dream-big-stay-positive-work-hard-and-enjoy-the.jpg"
  ,
 
"https://quotefancy.com/media/wallpaper/3840x2160/4324962-James-Dobson-Quote-Great-beginnings-are-not-as-important-as-the.jpg",

"https://i.pinimg.com/736x/a8/c7/88/a8c78864fd2b6fd74d22c5592b3f1d9c.jpg"
,
"https://quotefancy.com/media/wallpaper/3840x2160/8046287-STAY-FOCUSED-Wallpaper.jpg"]
     
  const [image,setImage]=useState("https://quotefancy.com/media/wallpaper/3840x2160/8046287-STAY-FOCUSED-Wallpaper.jpg");
  const [i,setI]= useState(0);

    
    useEffect(() => {
    
      const interval = setInterval(() => {
        setI((i + 1) % arr.length);
          setImage(arr[i]);
          // i = (i + 1) % arr.length;
      },3000);
     
      return () => clearInterval(interval);
  }, [arr]);

    

  return (
    <>
    <div style={{width :"100%" , height :"500px"}}>

  <img style={{ height :"500px"}} src={image} />
      
    
    </div>
    <TaskList/>
    </>
  );

    

}

export default Home;
