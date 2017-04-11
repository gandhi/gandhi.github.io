window.onload = function() {
    $("#cmsc389k").trigger("click");
};
$("#terrapinhackers").on("click", function() {
    document.getElementById("title").innerHTML = "Terrapin Hackers";
    document.getElementById("title").style.color = "#C61C1C";
    document.getElementById("date").innerHTML = "PRESIDENT 2015 - 2016";
    document.getElementById("punchline").innerHTML = "Making UMD the hacker school it was always meant to be";
    document.getElementById("description").innerHTML = "The hacker community at UMD is something I would never have expected. It's a huge community that only wants to keep growing. Specifically, I was the president and worked to expand the club so all new hackers have access.";
});
$("#shell").on("click", function() {
    document.getElementById("title").innerHTML = "Startup Shell";
    document.getElementById("title").style.color = "#BA3523";
    document.getElementById("date").innerHTML = "ETA Sheller 2015 - present";
    document.getElementById("punchline").innerHTML = "Fostering tech and general awesomeness";
    document.getElementById("description").innerHTML = "Startup Shell is a student-run incubator at the University of Maryland. I applied with the startup idea 'tutorme', and was accepted into the Eta Batch. The people I work with everyday at the shell provide the perfect environemnt for creativity and a ton of fun."
});
$("#shh").on("click", function() {
    document.getElementById("title").innerHTML = "Students Helping Honduras";
    document.getElementById("title").style.color = "#25337C";
    document.getElementById("date").innerHTML = "Winter 2016";
    document.getElementById("punchline").innerHTML = "Responsible volunteerism.";
    document.getElementById("description").innerHTML = "I wanted to do a service trip to a third world country, and am so happy I picked SHH. The organization has not only provided me a valuable experience, but also insight on how proper volunteerism (vs. irresponsible volunteerism) is extremely important. I plan to go on these trips for the rest of my winter breaks."
});
$("#sb").on("click", function() {
    document.getElementById("title").innerHTML = "Sandbox Hackerspace";
    document.getElementById("title").style.color = "#00B572";
    document.getElementById("date").innerHTML = "Member/Manager 2015 - present";
    document.getElementById("punchline").innerHTML = "Hacking a hackerspace";
    document.getElementById("description").innerHTML = "Sandbox is a new makerspace in UMD's Computer Science Instructional Center. I am assisting in the development of the space."
});
$("#technicadrone").on("click", function() {
    document.getElementById("title").innerHTML = "#DronePollock";
    document.getElementById("title").style.color = "#FE7BAC";
    document.getElementById("date").innerHTML = "November 2015";
    document.getElementById("punchline").innerHTML = 'Painting with drones';
    document.getElementById("description").innerHTML = "For Technica (all-ladies hackathon), a team of me and four others built software to get a drone to automatically splatter paint on a canvas. This was basically like a mini-hackathon, we on midnight on Friday, and had 36 hours to get it done. We used nodejs for the automation.<br><br><a href = 'http://drone.gotechnica.org/'>video</a> and <a href = 'http://news.mlh.io/the-making-of-drone-pollock-03-10-2016'>article</a>"
});
$("#research").on("click", function() {
    document.getElementById("title").innerHTML = "UGrad Research";
    document.getElementById("title").style.color = "#A30101";
    document.getElementById("date").innerHTML = "Spring 2016";
    document.getElementById("punchline").innerHTML = 'Autonomy, Robotics, and Cognition Laboratory';
    document.getElementById("description").innerHTML = "Computer vision has many applications with household robots. One of the main problems associated with this kind of robot is the ability to recognize and segment arbitrary objects. This research introduces an approach that utilizes the moveable arm of the Baxter Research Robot to amass more data from different viewpoints and eventually distinguish objects.<br><br><a href = 'assets/files/baxter.pdf'>paper</a>"
});
$("#stupidtwitter").on("click", function() {
    document.getElementById("title").innerHTML = "Stupid Twitter";
    document.getElementById("title").style.color = "#91D2FA";
    document.getElementById("date").innerHTML = "July 2016";
    document.getElementById("punchline").innerHTML = 'Markov model for Twitter';
    document.getElementById("description").innerHTML = "A friend and I decided to make a Twitter bot that would tweet based on recent celebrity tweets. We use a probabalistic model with bigrams. Check out the <a href='http://tweeter.iparikh.co'>website</a> and <a href='https://twitter.com/tweetgnrtr'>twitter</a>."
});
$("#perfectpartner").on("click", function() {
    document.getElementById("title").innerHTML = "Perfect Partner";
    document.getElementById("title").style.color = "#FFAF40";
    document.getElementById("date").innerHTML = "April 2016";
    document.getElementById("punchline").innerHTML = 'Beer pong playing robot';
    document.getElementById("description").innerHTML = "Watch the <a href='https://www.youtube.com/watch?v=kLliPQ02tAI'>video</a>."
});
$("#vroomvroom").on("click", function() {
    document.getElementById("title").innerHTML = "Vroom-Vroom";
    document.getElementById("title").style.color = "#601681";
    document.getElementById("date").innerHTML = "January 2016";
    document.getElementById("punchline").innerHTML = 'Navigating a maze with VR';
    document.getElementById("description").innerHTML = "My team built a Jenga car powered by servos and a Spark Core (basically a wireless arduino). By attaching an iPhone to stream video, we could create a 3D environment for a user on a computer using Oculus VR and Virtual Desktop. This user could remotely control the car using basic WASD controls. In addition, we added controllability via Myo Armband; different gestures signalled different movements. Recieved 'Best Hardware Hack' at HoyaHacks 2016. Check out the video <a href = 'http://vroomvroom.space/'>here</a>."
});
$("#omni").on("click", function() {
    document.getElementById("title").innerHTML = "OmniTestr";
    document.getElementById("title").style.color = "#565656";
    document.getElementById("date").innerHTML = "January 2016";
    document.getElementById("punchline").innerHTML = 'Load testing websites';
    document.getElementById("description").innerHTML = "For PennApps, Sean Bae, Colin King, and I created a web app to load test any website (that you have permission to). Specifically, I worked on the master/slave interaction for the actual load testing, and data visualization with d3.js. While working on this, we also managed to win Hackenger, the hackathon's huge puzzle. <br><br><a href = 'https://github.com/OmniTestr'>repo</a>"
});
$("#poshmark").on("click", function() {
    document.getElementById("title").innerHTML = "Poshmark Bot";
    document.getElementById("title").style.color = "#B72D2D";
    document.getElementById("date").innerHTML = "March 2016";
    document.getElementById("punchline").innerHTML = 'Easiest way to follow on Poshmark';
    document.getElementById("description").innerHTML = "A friend of mine has a small business selling used clothes, and he recently turned to Poshmark to speed up the process. He wants to gain a large presence quickly, but does not have the time to manually follow a ton of people. So, I wrote him this (if you happen to have a poshmark, try it out <a href = 'http://104.131.1.56/start/'>here</a>).<br><br><a href = 'https://github.com/gandhi/poshmarkBot'>repo</a>"
});
$("#cartly").on("click", function() {
    document.getElementById("title").innerHTML = "Cartly";
    document.getElementById("title").style.color = "#446CFB";
    document.getElementById("date").innerHTML = "December 2015";
    document.getElementById("punchline").innerHTML = 'Stop shopping and get back on task!';
    document.getElementById("description").innerHTML = "What started as a complete joke ended up as an actual chrome extension on the store. It uses Google Chrome's API and basic JavaScript to look for phrases that flag the page as a shopping page, and the program closes them.<br><br><a href = 'https://chrome.google.com/webstore/detail/cartly/acmjoaimcekbaifheokfjpkedfhjaeeo'>extension</a>"
});
$("#cmsc389k").on("click", function() {
    document.getElementById("title").innerHTML = "CMSC389K";
    document.getElementById("title").style.color = "#BA3523";
    document.getElementById("date").innerHTML = "Spring 2017";
    document.getElementById("punchline").innerHTML = 'Full-stack Web Development with Node.js';
    document.getElementById("description").innerHTML = "My friend and I designed and are teaching a course to 30 students. This is the first fully student-initiated, for-credit course in the CS department.<br><a href='https://github.com/CMSC389K/spring17/'>Repository</a><br><a href='https://cmsc389k.github.io'>Course website</a>"
});
$("#kpcb").on("click", function() {
    document.getElementById("title").innerHTML = "KPCB Engineering Fellow";
    document.getElementById("title").style.color = "#00BE86";
    document.getElementById("date").innerHTML = "Summer 2017";
    document.getElementById("punchline").innerHTML = '"Jumpstart your career in Silicon Valley"';
    document.getElementById("description").innerHTML = "Check out the website for the internship program <a href = 'http://kpcbfellows.com/'>here</a>."
});
$("#csnotifs").on("click", function() {
    document.getElementById("title").innerHTML = "CS Grade Notifier";
    document.getElementById("title").style.color = "#BA3523";
    document.getElementById("date").innerHTML = "Winter 2017";
    document.getElementById("punchline").innerHTML = 'Get notified when your CS grades change!';
    document.getElementById("description").innerHTML = "A few friends and I are building an application to automatically notify you when your grades change in the UMD CS Grade Server. Currently in progress.<br><a href='https://mycs.courses'>Website</a><br><a href='https://github.com/gandhi/cs_checker'>Repo</a>"
});

$("#gnop").on("click", function() {
    document.getElementById("title").innerHTML = "gnoP: AR Human-Scale Pong";
    document.getElementById("title").style.color = "#CE0A0A";
    document.getElementById("date").innerHTML = "April 2017";
    document.getElementById("punchline").innerHTML = "Pong using projection mapping and computer vision";
    document.getElementById("description").innerHTML = "For Bitcamp 2017, my team decided to build off last year's idea of <a href=\"https://www.youtube.com/watch?v=kLliPQ02tAI\">beer pong</a> by building regular pong. However, we did it by projecting a game of pong on the ground, and the paddles were moved by the gamers' bodies. We tracked people by making them wear a neon green vest and using OpenCV. <br> Video coming soon!<br><a href = \"https://github.com/helloworld/human-pong\">Repo</a>";
});
