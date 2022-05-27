// document.getElementById('output').style.visibility = 'hidden';
document.getElementById('yardsInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let yards = e.target.value;
	
	// yardage is calculated using the "max yardage" and rounding up to the whole ball/skein (because yarn is sold by the ball/skein and not fractions) https://www.interweave.com/article/knitting/how-much-yarn-do-i-need/
	
    document.getElementById('baby4SweaterOutput').innerHTML = Math.ceil(550 / yards);
    document.getElementById('toddler4SweaterOutput').innerHTML = Math.ceil(800 / yards);
    document.getElementById('child4SweaterOutput').innerHTML = Math.ceil(1200 / yards); 
	
		document.getElementById('adultW4SweaterOutput').innerHTML = Math.ceil(1400 / yards);  
    document.getElementById('adultM4SweaterOutput').innerHTML = Math.ceil(1700 / yards); 
    
});
