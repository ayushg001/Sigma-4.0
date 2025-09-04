import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import SunnyIcon from '@mui/icons-material/Sunny';

import Typography from '@mui/joy/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){

    // const IMG_URL = "https://d2wqffb2bc8st5.cloudfront.net/images/Apr-2024/1712642313dust.jpg";
    const COLD_URL = "https://brightpunjabexpress.com/wp-content/uploads/2020/11/foggy-weather.png";
    const HOT_URL = "https://images.stockcake.com/public/3/9/3/3932cbab-e5d2-4e56-a312-396dc953f8a4_large/sunny-beach-day-stockcake.jpg";
    const RAINY_URL = "https://media.istockphoto.com/id/140453995/photo/road-with-cars-in-stormy-weather-people-running.jpg?s=612x612&w=0&k=20&c=V6MZ6LWxs6B7Yj5csCNXSTTdgiwZNckkfE3A-IH14Fk=";

    


    return(
        <div className='InfoBox'>
            <div className='cardContainer'>
  <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src= {info.humidity > 80 ? RAINY_URL: info.temp > 15 ? HOT_URL : COLD_URL }
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">{info.city} {
            info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
            
            }   </Typography> &nbsp;
        <Typography level="body-sm">Temperature  = {info.temp}&deg;C</Typography>
         <Typography level="body-sm">Humidity = {info.humidity}</Typography>
          <Typography level="body-sm">Min Temp = {info.tempMin}&deg;C</Typography>
           <Typography level="body-sm">Mx Temp = {info.tempMax}&deg;C </Typography>
             <Typography level="body-sm">The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C </Typography>
      </CardContent>
     
    </Card>
    </div>
         </div>
    )
}