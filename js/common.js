//функция callback вызываемая после запроса на api
function weatherCall(data) {
	var article = document.createElement('article');
	var par = document.querySelector('.weather');

	article.className = "weatheContainer";
	//шаблон
	article.innerHTML = 
		'<h4 class="cityName">'+data.city.name+'</h4>'+
		'<span>lon: '+data.city.coord.lon+' lat: '+data.city.coord.lat+'</span>'+ulWeatherRender(data);
	
	par.appendChild(article);
}

function ulWeatherRender(data) {
	var templateString ='',
	    dt =[];

	data.list.forEach(function(e, i){
		dt.push(data.list[i].dt.toString()+"000");		
		var imgsrc = 'http://openweathermap.org/img/w/'+data.list[i].weather[0].icon+'.png'
		
		templateString = templateString+
						'<ul class="list">'+
		 					'<li>Data: '+new Date (+dt[i]).toDateString()+'<br>'+
		 					'<img src="'+imgsrc+'" alt="icon"></li>'+
		 					'<li>Day: '+data.list[i].temp.day+'&degС</li>'+
		 					'<li>Min: '+data.list[i].temp.min+'&degС</li>'+
		 					'<li>Max: '+data.list[i].temp.max+'&degС</li>'+
		 					'<li>Night: '+data.list[i].temp.night+'&degС</li>'+
		 					'<li>Eve: '+data.list[i].temp.eve+'&degС</li>'+
		 					'<li>Morn: '+data.list[i].temp.morn+'&degС</li>'+
		 					'<li>Plessure: '+data.list[i].pressure+'</li>'+
		 					'<li>Main : '+data.list[i].weather[0].main+'</li>'+
		 					'<li>Wind Speed : '+data.list[i].speed+'m/s</li>'+
		 				'</ul>'
		 			});
		return templateString
}
   	
//node script с ссылкой на api openweathermap
var script = document.createElement('script');
script.src = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=ruzayevka,ru&cnt=2&callback=weatherCall&units=metric&APPID=4c3dc92aab76270ddff54a9fa128abe4'

var body = document.body;

body.appendChild(script);