  
  var zip=function getZipcode() {
    
    var zipcode=$(".zip_code").val();
   	if (zipcode=="") {
   		alert('Please, Type Your Zip Code')
   	}
   	return zipcode;
   };
  
  $(".search").on('click',function(button){	
	fetch(
      'http://api.openweathermap.org/data/2.5/weather?zip='+zip()+'&appid=d74695e179808f96917859dcea87adfb')
      .then(function(response) {
        return response.json();
      })
      .then(function (data){
        console.log(data);
       	var nameValue=data.name;
       	var country=data.sys.country;
       	var weather=data.weather[0].main;
    	var temp=data.main.temp;
    	var fahrenheit=(((temp-273.15)*1.8)+32);
    	fahrenheit=Math.floor(fahrenheit)+ " \xB0F";
    	var celcius=temp-273.15;
    	celcius=Math.floor(celcius)+ " \xB0C";
    	var timezone=data.timezone;
    	var time=moment().utcOffset(timezone/60).format("ddd, MM/D/YY , \n h:mm a");
    	console.log(time)
       	$('.city').text(nameValue +" , " +country);
       	$('.forecast').text(weather );	
       	$(".time").text(time+ "\n");
       	$(".degree").text(celcius +  ' / '+fahrenheit);
       	
      }); 
      $(".zip_code").val("");
  });

 
    
