import { Button, Card, Col } from "react-bootstrap";
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy, WiDayThunderstorm,WiThunderstorm,WiRain,WiCelsius,WiSunrise } from 'react-icons/wi'
import {BsSnow,BsClouds} from 'react-icons/bs'
import {IoIosSnow} from 'react-icons/io'
import Form from 'react-bootstrap/Form'
import './style.css'
import { Stack } from "react-bootstrap";
import Container from 'react-bootstrap/Container'





function FirstCard(props) {
  // console.log(props);

  function PrintWeather(typeWeahter) {
    switch (typeWeahter) {
      case "Clear sky":
        return WiDaySunny();
        break;
      case "Few clouds":
        return WiDayCloudy();
        break;
      case "Scattered clouds":
        return BsClouds();
        break;
      case "Broken clouds":
        return WiCloudy();
        break;
      case "Shower rain":
        return WiRainMix();
        break;
      case "Rain":
        return WiRain();
        break;
      case "Thunderstorm":
        return WiThunderstorm();
        break;
      case "Snow":
        return IoIosSnow();
        break;
      case "Mist":
        return WiWindy();
        break;
      case "Clouds":
        return WiCloud();
        break;
      case "Clear":
        return WiSunrise();
        break;
    }
  }

  const hadleChangeMethod = (e) => {
    if (props.upload.unitUse !== "imperial") {
      props.upload.updateUnitUse("imperial");
    } else {
      props.upload.updateUnitUse("metric");
    }
  };
console.log(props.city)

function printCity(){

  const objCity = props.city.split('/')
console.log(objCity)
   return <p>{`${objCity[1]}`}</p>

}
  // console.log(props);
  return (
    <Col xl={3}>

    {
      props.infoDays? <Card
        className="p-1 mb-1 bg-white rounded-3 "
        style={{ width: "326px", height: "261px" }}
      >
        <Card.Body>

          <Card.Title>{props.city? <></>: <></>}</Card.Title>

          <p className="inform">THE CURRENT WEATHER</p>

          {/* icono y temperatura local */}

          <Stack direction="horizontal"className="meteo">
            <div className="iconActual text-center">{PrintWeather(props.infoDays?.[0]?.weather[0].main)}</div>
            <div className="temperatura">{`${parseInt(props.infoDays?.[0]?.temp.day)} º`}</div>
          </Stack>

          {/* estado del tiempo en texto */}
          <Container direction="horizontal" className="hola">

          <Stack><Card.Subtitle className="meteo2 mt-2"><a>{`${props.infoDays?.[0]?.weather[0].main}`}</a></Card.Subtitle> </Stack>
   
         
            <Button className="btn btn-outline-primary border-white bg-white text-dark" onClick={hadleChangeMethod}>
            <Stack direction="horizontal">
            <p className="cambiante" > C </p><p> / </p><p className="cambiante"> ºF</p>
            </Stack>
            </Button>
           
   
          </Container>

        </Card.Body>
      </Card> : <Card style={{ width: '326px', height: '251px'}} className='shadowCards p-2 d-flex justify-content-center'>
                            <div class="d-flex justify-content-center">
                            <div class="spinner-border text-primary"></div>
                            </div>
                            </Card>
    }
      
    </Col>
  );
}

export default FirstCard;