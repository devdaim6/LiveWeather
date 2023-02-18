import React from 'react';
function Home() {
    
  async function parsing(){

      const apikey="a41370e877ce7f6bc5b827bfba791b3f";
      const units="metric";

      let  query=document.getElementById("in").value;
      
       const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+units+"&appid="+apikey;
    let data=await fetch(url);
    let parsedData=await data.json();
    if(parsedData.cod==="400"){
        alert("Enter The Valid City Name")
        return;
    }
    let temp=parsedData.main.temp;
    let description=parsedData.weather[0].description;
    let icon=parsedData.weather[0].icon;
    const imgUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png";


    document.getElementById("res").innerHTML=`<h2>Temperature in ${query} is ${temp} °C   <img src= ${imgUrl}  /> </h2><p>Currently ${description}  in ${query}</p><br>`
 
}
async function Demos(){
    const apikey="a41370e877ce7f6bc5b827bfba791b3f";
    const units="metric";
    const demo1="https://api.openweathermap.org/data/2.5/weather?q=Srinagar&units="+units+"&appid="+apikey;
    const demo2="https://api.openweathermap.org/data/2.5/weather?q=pahalgam&units="+units+"&appid="+apikey;
    const demo3="https://api.openweathermap.org/data/2.5/weather?q=gulmarg&units="+units+"&appid="+apikey;

    let demo1Data=await fetch(demo1);
    let parsed1Data=await demo1Data.json();
    let temp1=parsed1Data.main.temp;
    let description1=parsed1Data.weather[0].description;
    let icon1=parsed1Data.weather[0].icon;
    const img1Url="http://openweathermap.org/img/wn/"+icon1+"@2x.png";

    let demo2Data=await fetch(demo2);
    let parsed2Data=await demo2Data.json();

    let temp2=parsed2Data.main.temp;
    let description2=parsed2Data.weather[0].description;
    let icon2=parsed2Data.weather[0].icon;
    const img2Url="http://openweathermap.org/img/wn/"+icon2+"@2x.png";

    let demo3Data=await fetch(demo3);
    let parsed3Data=await demo3Data.json();

    let temp3=parsed3Data.main.temp;
    let description3=parsed3Data.weather[0].description;
    let icon3=parsed3Data.weather[0].icon;
    const img3Url="http://openweathermap.org/img/wn/"+icon3+"@2x.png";

  
   
    document.getElementById("demo1").innerHTML=`<h2>Temperature in Srinagar is ${temp1} °C   <img src= ${img1Url}  /> </h2><p>Currently ${description1}  in  Srinagar</p><br>`
    document.getElementById("demo2").innerHTML=`<h2>Temperature in Pahalgam is ${temp2} °C   <img src= ${img2Url}  /> </h2><p>Currently ${description2}  in Pahalgam</p><br>`
    document.getElementById("demo3").innerHTML=`<h2>Temperature in Gulmarg is ${temp3} °C   <img src= ${img3Url}  /> </h2><p>Currently ${description3}  in Gulmarg</p><br>`

}
setTimeout(Demos,10)

return (
    <>
        <body>
            
        <div className=" d-flex justify-content-center" >
    <div className=" col-sm-12 ">
    <input type="text" className="form-control my-4 " placeholder="City Name"  id="in" required autoFocus aria-label="City"/>
    <div className=" d-flex justify-content-center col-12">
    <button type="submit" className="btn btn-outline-dark" onClick={parsing}>Search</button>
  </div>
  </div>
  </div>
  <div className="container my-3 mx-10 d-flex justify-content-center ">
    <p id="res" className='text-center'></p>
 
  </div>
  <div className="conatiner">
     
  <div className="row">
    <div className="col-md-4" id='demo1'></div>
    <div className="col-md-4" id='demo2'></div>
    <div className="col-md-4" id='demo3'></div>

  </div>

{/* todo */}
  {/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
  
  </div>
  </body>
  </>
    
  )
}

export default Home