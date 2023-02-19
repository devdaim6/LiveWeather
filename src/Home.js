import React from "react";
function Home() {
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
    console.log(parsedData);
    if (parsedData.cod === "400") {
      alert("Enter The Valid City Name 🤨 ");
      return;
    }
    if (parsedData.message === "city not found") {
      alert("Unfortunately, Data about this city isn't available 😥");
      return;
    }
    const wind = parsedData.wind.speed;
    const country = parsedData.sys.country;
    const feel = parsedData.main.feels_like;
    const temp = parsedData.main.temp;
    const description = parsedData.weather[0].description;
    const icon = parsedData.weather[0].icon;
    const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

    document.getElementById(
      "res"
    ).innerHTML = `<h5>Temperature in ${query},${country} is ${temp} °C   <img src= ${imgUrl}  /> </h5>Feels like : ${feel} °C<p> Wind Speed : ${wind}km/hr</p><p>Currently ${description}  in ${query}</p><span> </span>`;
  }
  async function Demos() {
    const apikey = "a41370e877ce7f6bc5b827bfba791b3f";
    const units = "metric";
    const demo1 =
      "https://api.openweathermap.org/data/2.5/weather?q=Srinagar&units=" +
      units +
      "&appid=" +
      apikey;
    const demo2 =
      "https://api.openweathermap.org/data/2.5/weather?q=pahalgam&units=" +
      units +
      "&appid=" +
      apikey;
    const demo3 =
      "https://api.openweathermap.org/data/2.5/weather?q=gulmarg&units=" +
      units +
      "&appid=" +
      apikey;

    //hardcodded cards data
    const demo1Data = await fetch(demo1);
    const parsed1Data = await demo1Data.json();
    const temp1 = parsed1Data.main.temp;
    const description1 = parsed1Data.weather[0].description;
    const icon1 = parsed1Data.weather[0].icon;
    const wind1 = parsed1Data.wind.speed;
    const country1 = parsed1Data.sys.country;
    const feel1 = parsed1Data.main.feels_like;
    const img1Url = "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";

    const demo2Data = await fetch(demo2);
    const parsed2Data = await demo2Data.json();
    const temp2 = parsed2Data.main.temp;
    const description2 = parsed2Data.weather[0].description;
    const icon2 = parsed2Data.weather[0].icon;
    const wind2 = parsed2Data.wind.speed;
    const country2 = parsed2Data.sys.country;
    const feel2 = parsed2Data.main.feels_like;
    const img2Url = "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";

    const demo3Data = await fetch(demo3);
    const parsed3Data = await demo3Data.json();
    const temp3 = parsed3Data.main.temp;
    const description3 = parsed3Data.weather[0].description;
    const icon3 = parsed3Data.weather[0].icon;
    const wind3 = parsed1Data.wind.speed;
    const country3 = parsed3Data.sys.country;
    const feel3 = parsed3Data.main.feels_like;
    const img3Url = "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

    document.getElementById(
      "demo1"
    ).innerHTML = `<h5>Temperature in Srinagar,${country1} is ${temp1} °C   <img src= ${img1Url}  /> </h5>Feels like : ${feel1} °C<p> Wind Speed : ${wind1}km/hr</p><p>Currently ${description1}  in  Srinagar</p><br>`;
    document.getElementById(
      "demo2"
    ).innerHTML = `<h5>Temperature in Pahalgam,${country2} is ${temp2} °C   <img src= ${img2Url}  /> </h5>Feels like : ${feel2} °C<p> Wind Speed : ${wind2}km/hr</p><p>Currently ${description2}  in Pahalgam</p><br>`;
    document.getElementById(
      "demo3"
    ).innerHTML = `<h5>Temperature in Gulmarg,${country3} is ${temp3} °C   <img src= ${img3Url}  /> </h5>Feels like : ${feel3} °C<p> Wind Speed : ${wind3}km/hr</p><p>Currently ${description3}  in Gulmarg</p><br>`;
  }
  setTimeout(Demos, 10);

  return (
    <>
      <body class="bg-dark">
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
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
