function fetch_data()
{
    var cityName=document.getElementById('city').value
    console.log(cityName)
    if(cityName==="")
    {
        alert("Enter City Name")
    }
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=5d33a711acd6186f6b2e804001d99c4a&units=metric'
    //now make a git request with javascript
    fetch(url)
    .then(response => response.json())     //response from server will be converted to json format
    .then(data => {
        var resp_code = data['cod']  //cod is the code for the city. if city not found then cod will be error 404
        if(resp_code==='404')
        {
            alert('City Not Found')
        }
        else
        {
            var cityTemp = data['main']['temp']        //in the json file, the temp of given city is stored in main->temp
            console.log(cityTemp) 
            var icon = data['weather']['0']['icon']    //in the json file,the icon code is stored in weather->0->icon
            console.log(icon)
            var icon_url ='https://openweathermap.org/img/wn/'+icon+'@2x.png'
            var humidity = data['main']['humidity']
            document.getElementById('result').innerHTML=
            `<img src=`+icon_url+`>`+`<br>`+`<h3>Temperature is : `+cityTemp+`&deg;C</h3>`+`<br>`+`<h3>Humidity : `+humidity+`%</h3>`

        }
    })
} 