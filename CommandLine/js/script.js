// Define the messages used in the game.
var messages = {
	"SampleScript":{
        "Title": "A sample Shell Script",
        "Subtitle": "",
        "Message":"<pre>\n<code>\n#!/bin/bash\necho \"Hey, it's actually pretty easy\"\nmkdir ScriptDirectory\ntouch SampleFile\necho \"This file was created using a Shell Script\" &gt;&gt; SampleFile</code></pre>"
    }
}

// Define the notifications used in the game
var notifications = {
	"Initiate": {
		title: "Command Line Initiate",
		body: "You now know the basic commands",
		icon: "img/icon.png"
	},
	"Writer": {
		title: "Command Line Writer",
		body: "You can now write documents!",
		icon: "img/icon.png"
	},
	"Scripter": {
		title: "Command Line Programmer",
		body: "You now know how to create an script.",
		icon: "img/icon.png"
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
	"windows": "windows.svg",
	"mac": "mac.svg",
	"linux": "linux.svg",
	"duck": "duck.png",
	"canonical": "canonical.png",
	"ubuntu": "ubuntu.svg",
	"mine": "mine.png",
	"root": "root.png"
}

// Define the backgrounds for each scene.
var scenes = {
	"nagato": "nagato.gif",
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
	"29": "29.png"

}

// Define the Characters
var characters = {

}

var script = {
	// The game starts here.
	"Start": [
		"The command line is an essential part for every system and for programmers as well.",
		"show linux center with fadeIn",
		"show mac right with fadeInRight",
		"show windows left with fadeInLeft",
		"Every O.S. has a command line for default",
		"On UNIX based systems like Linux, BSD and macOS, <a href='https://en.wikipedia.org/wiki/Bash_(Unix_shell)' target='_blank'>bash</a> is the default",
		"hide mac with fadeOut",
		"hide linux with fadeOut",

		"However, Windows is a whole different story",
		"show duck right with rubberBand",
		"Windows has CMD, a very DOS like command line, which is... well, the rubber duck says it all.",
		"Luckily, thanks to a new partnership with <a href='http://www.canonical.com/' target='_blank'>Canonical</a> this has changed",
		"hide duck with slideOutRight",
		"show canonical right with slideInRight",
		"show ubuntu center with fadeIn",
		"Bash is now <a href='http://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/' target='_blank'>available on Windows 10</a> thanks to the new Linux (<a href='http://www.ubuntu.com/' target='_blank'>Ubuntu</a>) subsystem they implemented.",
		"hide windows",
		"hide ubuntu",
		"hide canonical",
		"centered Some things you should know about the command line:",
		"centered It does not eat children",
		"centered It will not kill you on your sleep",
		"centered It can kill your computer",
		"centered It will only do so if you order it to",
		"centered The only way to truly learn it is by living it",
		"Yes, you have to use the command line in order to truly understand how it works and to be confortable with it",
		"scene nagato",
		"And by using it, you'll figure out many things, like how the 'Hollywood' version is always not accurate at all",
		"But let's face it, accurate or not it sure makes it look like you are boss",
		"jump Commands"
	],

	"Commands":[
		"scene black",
		"centered Basic Commands",
		"scene 1",
		"When opening the command line, you'll see a single line of text, something like <code>user@computer-name:~$</code>",
		"The [user] part will be your username, the [comput-name] part will ,as the name says, be your comuter's name or hostname",
		"The part between the : and the $ is the directory where you currently are, ~ means you are in the Home directory",
		"Normally, when reading code or tutorials, the sign $ the following part is a command",
		"centered pwd",
		"scene 2",
		"The <code>pwd</code> command shows us the Print Working Directory, which means it'll show us the route of the directory we are currently in",
		"centered ls",
		"scene 3",
		"The <code>ls</code> command shows us a list of all the directories and files we have in a directory",
		"centered cd",
		"scene 4",
		"<code>cd</code> comes from Change Directory, it will change our current working directory to the one specified",
		"This is pretty much the same as entering a directory on a GUI",
		"centered mkdir",
		"scene 5",
		"<code>mkdir</code> comes from Make Directory, it will create a new directory with the name we specify, <code>$ mkdir [name]</code>",
		"centered touch",
		"scene 7",
		"While <code>touch</code> is not an intuitive name, it creates a file, it is pretty much the same as mkdir but for files",
		"To create a file, we would use <code>$ touch [file-name]</code>, in the file name you should also include the file's extension if needed",
		"centered cp",
		"scene 8",
		"<code>cp</code> is the Copy command, it allows us to copy a file from one place to another, and it will take two arguments",
		"<code>$ cp [original-file] [copy-of-file]</code>, the [original-file] should be the file's name or the path to the file that wants to be copied",
		"<code>$ cp [original-file] [copy-of-file]</code>, the [copy-of-file] should be the new file's name or the path to create the new file",
		"centered history",
		"scene 9",
		"<code>history</code> Shows a numbered list of commands we have previously entered, this is useful to remember a command we need or to use one again",
		"scene 10",
		"To use a command again, we only need it's number and then do <code>$ ![number]</code>",
		"centered man",
		"scene 11",
		"We sometimes may need to learn more about a program, what it does, what parameter it needs, what flags are available etc.",
		"<code>man</code> is the command that will display the Manual of a program, by using <code>$ man [program-name]</code>  we'll be displayed the whole manual",
		"To quit, we just need to press the key q",
		"centered chown",
		"scene 13",
		"<code>chown</code> allows us to Change the Ownership of a file or directory, ownership means what user in the computer owns what files",
		"It takes 3 parameters: <code>$ chown [group]:[user] [file]</code>",
		"In UNIX systems, there is a root user which we could say that has the role of being an administrator user",
		"If we tried to change the ownership of a file, we probably would be responded with an Operation Not Permited error which means that we don't have the permissions to do that action",
		"Once in sudo, we'll be granted the permissions for a while, not only for the command prebiously run but for others as well which means running sudo won't ask for your password",
		"After a few minutes the permissions are revocated automatically and you'll have to enter your password again",
		"scene 14",
		"The <code>sudo</code> command allows us to run something in a root user mode who has extended priviledges. Using sudo will ask for your password and once given, it will run the command",
		"<code>sudo</code> is something you should use carefully, since it gives you root priviledges, you can potentially harm your system if you do something wrong",
		"show mine left with fadeIn",
		"show root right with fadeIn",
		"Once the ownership has changed, you can see how our loses all permissions to change the file",
		"hide mine",
		"hide root",
		"centered chmod",
		"scene 15",
		"show mine center with fadeIn",
		"To understand <code>chmod</code>, let's look again the permissions a file has, as you can see there are permissions for reading, writing and executing",
		"There are also 3 groups, Owner, Group and World, owner means the owner of the file, group means the group where the owner belongs to and finally, World means everyone else",
		"There are groups so you can assign different permissions to each of them",
		"Each permission has been granted a value, Read = 4, Write = 2, Execute = 1.",
		"You can actually see the image shows the number 664, this number represents the permissions granted to the file for each group",
		"6 For the owner, which means (Read + Write)",
		"6 For the group, which is also (Read + Write)",
		"4 For the world, which means everyone else is just allowed to Read the file",
		"Permissions as you can see are added up and as such, chmod receives 2 parameters: <code>$ chmod [permissions] [file/directory]</code>",
		"hide mine",
		"centered rm",
		"scene 16",
		"You can also delete files with the <code>rm</code> command, which accepts 1 parameter, being the thing to delete: <code>$ rm [file/directory]</code>",
		"You should be specially careful while using this command, it does not send anything to the trash, it is deleted permanently",
		"If you are on the root user or running it as sudo, it can potentially destroy all your data if you are not careful",
		"Remember the priviledged sudo access also stays for a while after running it so be careful",
		"The command <code>$ sudo rm -rf /</code> will literally erase everything there is in your system, don't ever run it, many internet sources try to trick you to it",
		"centered echo",
		"scene 17",
		"Finally <code>echo</code> is like a 'print' function, it will print the given string in the command line",
		"scene 18",
		"There is however another use to it, you can also print the string into a file instead of the command line",
		"As you can see by the image, we previously had changed the owner of that file, so in order to use the echo command we had to regain it's ownership",
		"notify Initiate 2000",
		"centered You just finished the basic commands!",
		"jump Editing"
	],

	"Editing":[
		"centered Editing",
		"You can also edit your files in the command line, there are several programs to do so but most of the time you'll find systems with Vi or Nano",
		"centered Vi / Vim",
		"scene 20",
		"Vim is a derivative of Vi, it's pretty sure that you already have one of them installed, to edit a file just type <code>$ vi [file]</code> or <code>$ vim [file]</code>",
		"scene 21",
		"Vi may be scary at first, but if you learn to use it is actually pretty simple, when it first opens up, you'll see the given file displayed",
		"scene 22",
		"You won't be able to edit it, to do so you have to enter the insertion mode by pressing the key 'I'",
		"scene 23",
		"You'll notice the mode changed in the bottom left corner and you'll be able to edit",
		"To close the file or save it, you'll need to exit the current mode by pressing 'esc', then just press the key ':' followed by the letter 'w' which means write and the letter 'q' which means quit",
		"':wq' will then save the file and quit, you can also do first ':w' and press return, then ':q' and press return again to quit",
		"Vi is of course a lot more extense, and is based on a lot of keyboard shortcuts, after some practice you can become a real master",
		"centered Nano",
		"scene 25",
		"Nano is a more user-friendly editor, to open a file just type <code>$ nano [file]</code>",
		"scene 26",
		"With nano you are able to edit right away, and it displays the only keyboard shortcuts you need right in the bottom",
		"scene 27",
		"To save the file just press [ctrl + O], it will ask you where to save it, by default the file's name is there, just press return and it will be saved",
		"To close the file you need to press [ctrl + X] and that's it, as you can see nano is a lot more simple than vi, which one to use is up to you",
		"notify Writer 2000",
		"jump Scripting"
	],

	"Scripting":[
		"centered Scripting",
		"You can also create Shell Scripts to automate things, let's see an example",
		"display message SampleScript",
		"The first line of the code tells the computer which interpreter should be used to run the code, since we are using bash, the line must read <code>#!/bin/bash</code>",
		"This scripts are saved into a .sh file which can be run like: <code>$ ./[name].sh</code> remember however that permissions to execute should be given first",
		"Executing the file will be the same as if you ran all those commands one by one but of course, a lot faster",
		"Now that you've seen different appliances for the command line, you should start using it, because that's truly the way to get to be a pro using it.",
		"notify Scripter 2000",
		"This presentation was released under the <a href='https://github.com/HyuchiaDiego/Slides/blob/master/LICENSE' target='_blank'>GPLv3 License</a> and it's code is available on <a href='https://github.com/HyuchiaDiego/Slides/tree/master/CommandLine' target='_blank'>GitHub</a>.",
		"end"
	]
}
