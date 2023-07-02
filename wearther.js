// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c44eec31emsh62b09dd4f126661p177b8ejsn7ac8d2591185',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather=(city)=>{

cityname.innerHTML=city
	 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
     .then(Response =>Response.json())
     .then(Response =>{console.log(Response)
	 cloud_pct.innerHTML=Response.cloud_pct
	 feels_like.innerHTML=Response.feels_like
	 humid2.innerHTML=Response.humidity
	 humid.innerHTML=Response.humidity
	 max_temp.innerHTML=Response.max_temp
	 min_temp.innerHTML=Response.min_temp
	 sunrise .innerHTML=Response.sunrise
	 sunset.innerHTML=Response.sunset
	 temp.innerHTML=Response.temp
	 temp2.innerHTML=Response.temp
	 wind_degrees.innerHTML=Response.wind_degrees
	 wind_speed.innerHTML=Response.wind_speed
	})

     .catch(err=>console.error(err));
}
	//  cloud_pct=Response.cloud_pct
	//  feels_like=Response.feels_like
	//  humidity=Response.humidity
	//  max_temp=Response.max_temp
	//  min_temp=Response.min_temp
	//  sunrise=Response.sunrise
	//  sunset=Response.sunset
	//  temp=Response.temp
	//  wind_degrees=Response.wind_degrees
	//  wind_spee =Response.wind_spee

	document.getElementById("ss").addEventListener("click",(e)=>{		
		e.preventDefault()
		getweather(cit.value)
	})
	getweather(" Pune")
	

	// const options = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': '6c44eec31emsh62b09dd4f126661p177b8ejsn7ac8d2591185',
	// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	// 	}
	// };
	
	// mumbai
		 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai' , options)
		 .then(Response =>Response.json())
		 .then(Response =>{console.log(Response)
		 cloud.innerHTML=Response.cloud_pct
		 feels.innerHTML=Response.feels_like
		 hum.innerHTML=Response.humidity
		//  humi.innerHTML=Response.humidity
		 max.innerHTML=Response.max_temp
		 min.innerHTML=Response.min_temp
		 sunr.innerHTML=Response.sunrise
		 suns.innerHTML=Response.sunset
		 tem.innerHTML=Response.temp
		//  te.innerHTML=Response.temp
		 wind_d.innerHTML=Response.wind_degrees
		 wind_s.innerHTML=Response.wind_speed
		})
	
		 .catch(err=>console.error(err));


		//  Bangalore
		 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore' , options)
		 .then(Response =>Response.json())
		 .then(Response =>{console.log(Response)
		 clou.innerHTML=Response.cloud_pct
		 feel.innerHTML=Response.feels_like
		 hu.innerHTML=Response.humidity
		//  humi.innerHTML=Response.humidity
		 ma.innerHTML=Response.max_temp
		 mi.innerHTML=Response.min_temp
		 sun.innerHTML=Response.sunrise
		 su.innerHTML=Response.sunset
		 te.innerHTML=Response.temp
		//  te.innerHTML=Response.temp
		 windd.innerHTML=Response.wind_degrees
		 winds.innerHTML=Response.wind_speed
		})
	
		 .catch(err=>console.error(err));


		// Kolkata
		 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata' , options)
		 .then(Response =>Response.json())
		 .then(Response =>{console.log(Response)
		 clouq.innerHTML=Response.cloud_pct
		 feelq.innerHTML=Response.feels_like
		 huq.innerHTML=Response.humidity
		 maq.innerHTML=Response.max_temp
		 miq.innerHTML=Response.min_temp
		 sunq.innerHTML=Response.sunrise
		 suq.innerHTML=Response.sunset
		 teq.innerHTML=Response.temp
		 winddq.innerHTML=Response.wind_degrees
		 windsq.innerHTML=Response.wind_speed
		})
	
		 .catch(err=>console.error(err));
	


// Chennai
		 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
		 .then(Response =>Response.json())
		 .then(Response =>{console.log(Response)
		 clouqq.innerHTML=Response.cloud_pct
		 feelqq.innerHTML=Response.feels_like
		 huqq.innerHTML=Response.humidity
		 maqq.innerHTML=Response.max_temp
		 miqq.innerHTML=Response.min_temp
		 sunqq.innerHTML=Response.sunrise
		 suqq.innerHTML=Response.sunset
		 teqq.innerHTML=Response.temp
		 winddqq.innerHTML=Response.wind_degrees
		 windsqq.innerHTML=Response.wind_speed
		})
	
		 .catch(err=>console.error(err));




	// Lucknow
		 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow' , options)
		 .then(Response =>Response.json())
		 .then(Response =>{console.log(Response)
		 clouqqq.innerHTML=Response.cloud_pct
		 feelqqq.innerHTML=Response.feels_like
		 huqqq.innerHTML=Response.humidity
		 maqqq.innerHTML=Response.max_temp
		 miqqq.innerHTML=Response.min_temp
		 sunqqq.innerHTML=Response.sunrise
		 suqqq.innerHTML=Response.sunset
		 teqqq.innerHTML=Response.temp
		 winddqqq.innerHTML=Response.wind_degrees
		 windsqqq.innerHTML=Response.wind_speed
		})
	
		 .catch(err=>console.error(err));
	


		 document.getElementById("mumb").addEventListener("click",(e)=>{		
			e.preventDefault()
			getweather("Hyderabad")
		})
		 document.getElementById("mum").addEventListener("click",(e)=>{		
			e.preventDefault()
			getweather("surat")
		})
		 document.getElementById("mu").addEventListener("click",(e)=>{		
			e.preventDefault()
			getweather("goa")
		})