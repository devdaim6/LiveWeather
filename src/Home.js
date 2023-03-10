import React from "react";
function Home() {
  const align = {
    textAlign: "center",
    textDecoration: "none",
    color:"white"
  };
  async function parsing() {
    const apikey = "a41370e877ce7f6bc5b827bfba791b3f";
    const units = "metric";

    let query = document.getElementById("in").value;

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      query +
      "&units=" +
      units +
      "&appid=" +
      apikey;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.cod === "400") {
      alert("Enter The Valid City Name 🤨 ");
      return;
    }
    if (parsedData.message === "city not found") {
      alert("Unfortunately, Data about this city isn't available 😥");
      return;
    }
    const wind = parsedData.wind.speed;
    const windG = parsedData.wind.gust;
    const windD = parsedData.wind.deg;
    const country = parsedData.sys.country;
    const feel = parsedData.main.feels_like;
    const temp = parsedData.main.temp;
    const pressure= parsedData.main.pressure;
    const temp_min = parsedData.main.temp_min;
    const temp_max = parsedData.main.temp_max;
    const humidity = parsedData.main.humidity;
    const description = parsedData.weather[0].description;
    const cloud_percentage=parsedData.clouds.all;
    const _sunrise = parsedData.sys.sunrise;
    const sunrise = new Date(1000 * _sunrise).toLocaleTimeString();
    const _sunset = parsedData.sys.sunset;
    const sunset = new Date(1000 * _sunset).toLocaleTimeString();
    const localTime = new Date().toLocaleTimeString();
  

    const icon = parsedData.weather[0].icon;
    const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    const name = parsedData.name;
    document.getElementById(
      "res"
    ).innerHTML = `<h5><strong>${name},${country} </h5></strong>${localTime}<h2><img src= ${imgUrl}  /><strong>${temp} °C </h2></strong><em>${description}</em><br/><em>Feels like : </em>${feel}<br/><em>Temp_min </em>: ${temp_min} °C<br><em>Temp_max</em> : ${temp_max} °C<br><em>Wind Gusts : </em>${windG} m/s<br><em>Wind Direction : </em>${windD}°<br><em>Wind Speed : </em>${wind} m/s<br/>Cloud Spread : ${cloud_percentage}%<br/><em>Sunrise </em>: ${sunrise}<br/><em>Sunset </em>: ${sunset}<br><em>Pressure</em> : ${pressure} millibars<br/><em>Humidity</em> : ${humidity}%<br/> `;
  }
  async function Demos() {
    const apikey = "a41370e877ce7f6bc5b827bfba791b3f";
    const units = "metric";
    const q1 = "srinagar";
    const q2 = "pahalgam";
    const q3 = "gulmarg";

    const demo1 =
      `https://api.openweathermap.org/data/2.5/weather?q=${q1}&units=` +
      units +
      "&appid=" +
      apikey;
    const demo2 =
      `https://api.openweathermap.org/data/2.5/weather?q=${q2}&units=` +
      units +
      "&appid=" +
      apikey;
    const demo3 =
      `https://api.openweathermap.org/data/2.5/weather?q=${q3}&units=` +
      units +
      "&appid=" +
      apikey;

    //hardcodded cards data
    const demo1Data = await fetch(demo1);
    const parsed1Data = await demo1Data.json();
    const temp1 = parsed1Data.main.temp;
    const description1 = parsed1Data.weather[0].description;
    const icon1 = parsed1Data.weather[0].icon;
    const cloud_percentage1=parsed1Data.clouds.all;
    const wind1 = parsed1Data.wind.speed;
    const windG1 = parsed1Data.wind.gust;
    const windD1 = parsed1Data.wind.deg;
    const pressure1= parsed1Data.main.pressure;
    const country1 = parsed1Data.sys.country;
    const feel1 = parsed1Data.main.feels_like;
    const humidity1 = parsed1Data.main.humidity;
    const sunrise_1 = parsed1Data.sys.sunrise;
    const sunrise1 = new Date(1000 * sunrise_1).toLocaleTimeString();
    const sunset_1 = parsed1Data.sys.sunset;
    const sunset1 = new Date(1000 * sunset_1).toLocaleTimeString();
    const name1 = parsed1Data.name;
    const img1Url = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";

    const demo2Data = await fetch(demo2);
    const parsed2Data = await demo2Data.json();
    const temp2 = parsed2Data.main.temp;
    const description2 = parsed2Data.weather[0].description;
    const icon2 = parsed2Data.weather[0].icon;
    const cloud_percentage2=parsed2Data.clouds.all;
    const wind2 = parsed2Data.wind.speed;
    const windG2 = parsed2Data.wind.gust;
    const windD2= parsed2Data.wind.deg;
    const pressure2= parsed2Data.main.pressure;
    const country2 = parsed2Data.sys.country;
    const sunrise_2 = parsed2Data.sys.sunrise;
    const sunrise2 = new Date(1000 * sunrise_2).toLocaleTimeString();
    const sunset_2 = parsed2Data.sys.sunset;
    const sunset2 = new Date(1000 * sunset_2).toLocaleTimeString();
    const name2 = parsed2Data.name;
    const feel2 = parsed2Data.main.feels_like;
    const humidity2 = parsed2Data.main.humidity;
    const img2Url = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";

    const demo3Data = await fetch(demo3);
    const parsed3Data = await demo3Data.json();
    const temp3 = parsed3Data.main.temp;
    const description3 = parsed3Data.weather[0].description;
    const icon3 = parsed3Data.weather[0].icon;
    const cloud_percentage3=parsed3Data.clouds.all;
    const sunrise_3 = parsed3Data.sys.sunrise;
    const sunrise3 = new Date(1000 * sunrise_3).toLocaleTimeString();
    const sunset_3 = parsed3Data.sys.sunset;
    const sunset3 = new Date(1000 * sunset_3).toLocaleTimeString();
    const wind3 = parsed3Data.wind.speed;
    const windG3 = parsed3Data.wind.gust;
    const windD3 = parsed3Data.wind.deg;
    const pressure3= parsed3Data.main.pressure;
    const country3 = parsed3Data.sys.country;
    const name3 = parsed3Data.name;
    const feel3 = parsed3Data.main.feels_like;
    const humidity3 = parsed3Data.main.humidity;
    const img3Url = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

    document.getElementById(
      "demo1"
    ).innerHTML = `<h5><strong>${name1}, ${country1} </h5></strong><h2><img src= ${img1Url}  /><strong>${temp1} °C </h2></strong><em>${description1}</em><br/><em>Feels like : </em>${feel1} °C<br><em>Wind Gusts : </em>${windG1} m/s<br><em>Wind Direction : </em>${windD1}°<br/><em>Wind Speed : </em>${wind1} m/s<br/>Cloud Spread : ${cloud_percentage1}%<br/><em>Sunrise </em>: ${sunrise1}<br/><em>Sunset </em>: ${sunset1}<br><em>Humidity</em> : ${humidity1}%<br/><em>Pressure</em> : ${pressure1} millibars`;
    document.getElementById(
      "demo2"
    ).innerHTML = `<h5><strong>${name2}, ${country2} </h5></strong><h2><img src= ${img2Url}  /><strong>${temp2} °C </h2></strong><em>${description2}</em><br/><em>Feels like : </em>${feel2} °C<br><em>Wind Gusts : </em>${windG2} m/s<br><em>Wind Direction : </em>${windD2}°<br/><em>Wind Speed : </em>${wind2} m/s<br/>Cloud Spread : ${cloud_percentage2}%<br/><em>Sunrise </em>: ${sunrise2}<br/><em>Sunset </em>: ${sunset2}<br><em>Humidity</em> : ${humidity2}%<br/><em>Pressure</em> : ${pressure2} millibars`;
    document.getElementById(
      "demo3"
    ).innerHTML = `<h5><strong>${name3}, ${country3} </h5></strong><h2><img src= ${img3Url}  /><strong>${temp3} °C </h2></strong><em>${description3}</em><br/><em>Feels like : </em>${feel3} °C<br><em>Wind Gusts : </em>${windG3} m/s<br><em>Wind Direction : </em>${windD3}°<br/><em>Wind Speed : </em>${wind3} m/s<br/>Cloud Spread : ${cloud_percentage3}%<br/><em>Sunrise </em>: ${sunrise3}<br/><em>Sunset </em>: ${sunset3}<br><em>Humidity</em> : ${humidity3}%<br/><em>Pressure</em> : ${pressure3} millibars`;
  }
  setTimeout(Demos, 10);

  return (
    <>
      <div className="bg-dark">
        <div className="  d-flex justify-content-center">
          <div className=" col-md-6 my-3 col-lg-6 form-floating">
            <input
              type="text"
              className="form-control "
              placeholder=" "
              id="in"
              required
              aria-label="City"
            />
            <label htmlFor="in">Enter the Name of your City</label>
            <div className=" d-flex justify-content-center col-12 ">
              <button
                type="submit"
                className="btn my-3 text-white btn-outline-secondary"
                onClick={parsing}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="conatiner">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 ">
              <div className=" card mx-2 my-2 bg-black text-white text-center">
                <div className="card-body">
                  <p className="card-text" id="res"></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <div className="card mx-2 my-2 bg-black text-white">
                <div className="card-body">
                  <p className="card-text" id="demo1"></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card mx-2 my-2 bg-black text-white">
                <div className="card-body">
                  <p className="card-text" id="demo2"></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="card mx-2 my-2 bg-black text-white">
                <div className="card-body">
                  <p className="card-text" id="demo3"></p>
                </div>
              </div>
            </div>
            <span style={align}>
              {" "}
              &copy;{" "}
              <span style={align}>
                {" "}
                Copyright 2023 |
                <a href="https://devdaim.me" style={align}>
                  {" "}
                  DevDaim
                </a>{" "}
              </span>
            </span>
          </div>
        </div>
      
      </div>
     
    </>
  )
}

export default Home;
