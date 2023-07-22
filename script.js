const music = document.querySelector( "audio" );
	const img = document.querySelector("img");
	const play = document.getElementById("play");
	const artist = document.getElementById("artist");
	const title = document.getElementById("title");
	const prev = document.getElementById("prev");
	const next = document.getElementById("next");

	const songs = [
	{
		name:"m1",
		title: "MY HEART",
		artist:"Small Tall Order"
	},
	{
		name:"m2",
		title: "A Little Faith",
		artist:"Kevin MacLeod"
	},
	{
		name:"m3",
		title: "Old Souls",
		artist:"Beat Mekanik"
	},
	];

	let isPlaying = false;
	//for play function
	const playMusic = ()=> { 
		isPlaying = true;
		music.play();
		play.classList.replace("fa-play", "fa-pause"); //for pause the music
		img.classList.add("anime"); //rotate the img
	};

	//for pause function
	const pauseMusic = ()=> { 
		isPlaying = false;
		music.pause();
		play.classList.replace("fa-pause", "fa-play"); //for play the music
		img.classList.remove("anime"); // stop rotate the img
	};

		play.addEventListener("click", ()=> {
			/*if(isPlaying){
				pauseMusic();
			}else{
				playMusic();
			}*/

			isPlaying ? pauseMusic() : playMusic(); /*using ternary operator*/
		});

		//changing into next music
		const loadSong = (songs) => {
			title.textContent = songs.title;
			artist.textContent = songs.artist;
			music.src = "music/" + songs.name + ".mp3";
			img.src = "images/"+ songs.name + ".jpg";
		};

		songIndex = 0;

		const nextSong = () => {
			songIndex = (songIndex + 1) % songs.length; //songIndex=>(0+1 % 3=1),(1+1 % 3=2),(2+1 % 3=0),
			loadSong(songs[songIndex]);
			playMusic();
		};

		const prevSong = () => {
			songIndex = (songIndex - 1 + songs.length) % songs.length; //songIndex=>(0-1+3 % 3=2),(1-1+3 % 3=0),(2-1+3 % 3=1),
			loadSong(songs[songIndex]);
			playMusic();
		};

		next.addEventListener("click", nextSong);
		prev.addEventListener("click", prevSong);

