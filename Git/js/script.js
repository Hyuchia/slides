// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {
	"octocat": "octocat.png",
	"gitlab": "gitlab.svg",
	"git": "git.svg",
	"versions": "versions.png",
	"bitkeeper": "bitkeeper.png",
	"linus": "linus.png",
	"who-git": "who-git.png"
}

// Define the backgrounds for each scene.
var scenes = {
	"semver": "semver.png",
	"1": "1.png",
	"2": "2.png",
	"3": "3.png",
	"4": "4.png",
	"5": "5.png",
	"6": "6.png",
	"7": "7.png",
	"8": "8.png",
	"9": "9.png",
	"10": "10.png",
	"11": "11.png",
	"12": "12.png",
	"13": "13.png",
	"14": "14.png",
	"15": "15.png",
	"16": "16.png",
	"17": "17.png",
	"18": "18.png",
	"19": "19.png",
	"20": "20.png",
	"21": "21.png",
	"22": "22.png",
	"23": "23.png",
	"24": "24.png",
	"25": "25.png",
	"26": "26.png",
	"27": "27.png",
	"28": "28.png",
	"29": "29.png",
	"30": "30.png",
	"31": "31.png",
	"32": "32.png",
	"33": "33.png",
	"34": "34.png"
}

// Define the Characters
var characters = {

}

var script = {
	// The game starts here.
	"Start": [
		"show git with fadeInUp",
		"You've probably heard about git before, you may just don't realize.",
		"show octocat left with rotateInDownLeft",
		"show gitlab right with rotateInDownRight",

		"If you are thinking about GitHub or GitLab, you have it half right, they both use git in the back but they are mere interfaces for it.",
		"hide octocat",
		"hide git",
		"hide github",
		"scene black",
		"centered So what the f* is git anyways?",
		"scene white",
		"show versions with fadeInDown",
		"Git is a VCS, which stands for Version Control System, which well... controls versions duh",
		"Versions of your code so that every time you make a change, you can always go back in case anything goes wrong because let's face it, we all make mistakes.",
		"Remember all those times you had directories called Project1, Project1_Corrected, Project1_Final, Project1_Final_Complete? Well, git is here for you because that is exactly what it does, it just does it in a fancier way.",
		"hide versions",

		"Now, what do you want know next?",
		"jump Menu"
	],

	"Menu":[
		"scene #ffffff",
		{"Choice":{
			"History":{
				 "Text": "Where did git came from?",
       			 "Do": "jump History"
			},

			"Setup": {
				 "Text": "How can I get git?",
       			 "Do": "jump Setup"
			},

			"Practice":{
				 "Text": "Enough talk, let's do this.",
       			 "Do": "jump Practice"
			}
		}}
	],

	"History": [
		"It all goes back to the year 2002, when the guys developing the Linux Kernel realized that the project was getting too big to keep sharing changes via patches and archived files.",
		"show bitkeeper with fadeIn",
		"They began using BitKeeper, a paid VCS who was nice enough to let them use it free of charge",
		"However, that niceness only lasted until 2005, when the community and BitKeeper broke relations and thus the free of charge treatment",
		"show linus left with fadeIn",
		"But... come on people, it's Linus Torvalds we are talking about here",
		"hide bitkeeper with rollOut",
		"show git center with slideInRight",
		"He made up his mind and in just about two weeks, git was ready",
		"hide linus",
		"hide git",
		"show who-git with fadeIn",
		"Git is now used in well, pretty anywhere",

		"jump Menu"
	],

	"Setup": [
		"Getting git is really simple, but it depends on your OS",
		"For macOS, you just need to install Xcode from the App Store or if you don't want to download the whole thing, you can just install the developer tools.",
		"For Windows, you should get it from the <a href='https://git-scm.com/' target='_blank'>website</a>",
		"If you are using Linux, you can install it via your package manager, some distributions like Fedora already have it installed.",
		"Once you've installed it, there are two important commands you must run, these commands will let git know who you are",
		"The first one, will tell git your name: <code>$ git config --global user.name \"John Doe\"</code>",
		"The second one your email: <code>git config --global user.email johndoe@example.com</code>",
		"Once you've done this configurations, you are ready to take over the world.",
		"jump Menu"
	],

	"Practice": [
		"scene 1",
		"",
		"scene 2",
		"",
		"scene 3",
		"",
		"scene 4",
		"",
		"scene 5",
		"",
		"scene 6",
		"",
		"scene 7",
		"",
		"scene 8",
		"",
		"scene 9",
		"",
		"scene 10",
		"",
		"scene 11",
		"",
		"scene 12",
		"",
		"scene 13",
		"",
		"scene 14",
		"",
		"scene 15",
		"",
		"scene 16",
		"",
		"scene 17",
		"",
		"scene 18",
		"",
		"scene 19",
		"",
		"scene 20",
		"",
		"scene 21",
		"",
		"scene 22",
		"",
		"scene 23",
		"",
		"scene 24",
		"",
		"scene 25",
		"",
		"scene 26",
		"",
		"scene 27",
		"",
		"scene 28",
		"",
		"scene 29",
		"",
		"scene 30",
		"",
		"scene 31",
		"",
		"scene 32",
		"",
		"scene 33",
		"",
		"scene 34",
		"First, create a directory to store all your project's files, what you name that directory is completely irrelevant",
		"jump Menu"
	],

	"Final": [

	]
}
