Ext.define('Effortel.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<h2>Dear Effortel &#128153</h2>
  		<h3>First of all thank you for giving me another chance 2yrs later.
		  My first interview was at Effortel and I really wanted to work there and become a better developer. &#128080 <br>
		<h3>I tried to Impress you with learning new framework and make the task with it.<br>
		<h3>Thins I've done:</h3>
		Getting users and displaying them &#9989 , Open dialog user info &#9989, Sorting,Filtering &#9989
		Getting images from api &#9989, on click event &#9989, responsive gallery &#9989
		<h3>Thins I haven't done:</h3>
		Closing carousel functionality you have to refresh to close  &#10060;, you can change images by swiping not clicking button &#10060;
		Bugs: images overlap one another when clicked &#10060; , Resolution of images is too low &#10060;
		
		<h4> P.S. I didn't have the time to research and learn more about the framework,
		I really wanted to try something new and Impress you, because I really wanted to work with you,
		Just like the first time I came for my first interview &#10024 </h4>
		
		Still enjoyed the experience even if I don't get the job.&#127937;`
});