const TYPE_CLOUD = "cloud";
const TYPE_BIRD = "bird";
const TYPE_FUEL = "fuel";
const TYPE_PLANE = "plane";
const TYPE_STAR = "star";

const TYPE_STAR_P = 50;
const TYPE_PLANE_P = 0;
const TYPE_BIRD_P = 70;
const TYPE_FUEL_P = 30;
const TYPE_CLOUD_P = 100;


let list =[TYPE_CLOUD,TYPE_BIRD,TYPE_FUEL,TYPE_PLANE,TYPE_STAR];
let list_p =[TYPE_CLOUD_P,TYPE_BIRD_P,TYPE_FUEL_P,TYPE_PLANE_P,TYPE_STAR_P];


function getrandom(min,max){
	let r = Math.floor(Math.random() * (max - min)) + min;
	return r;
}

const factoryA = (() => {

	getInstance = (className) => {
		let baseKoef = getrandom(0,100);
		let index = 0;

		for (let i = 0; i < list.lenght; i++){
			if(className === list[i])
				index = i;
		}

		if(baseKoef > list_p[index]){
			return false;
		}



		let isCorrect = false;

		list.forEach((element) => {
			if(element == className)
				isCorrect = true;
		});

		if(!isCorrect){
			className = TYPE_CLOUD;
		}


		let obj = document.createElement("div");
		//let text = document.createTextNode(className);

		obj.setAttribute("class",className);


		if (className === TYPE_CLOUD) {
			obj.setAttribute("style", "top: " + getrandom(0, 700) + "px; left: 1100px;");
		} if (className === TYPE_BIRD) {
			obj.setAttribute("style", "top: " + getrandom(0, 700) + "px; left: 1100px;");
		} if (className === TYPE_FUEL) {
			obj.setAttribute("style", "top: -200px; left: " + getrandom(50,1000) + "px;");
		} if (className === TYPE_STAR) {
			obj.setAttribute("style", "top: -200px; left: " + getrandom(50,1000) + "px;");
		} if( className == TYPE_PLANE) {
			return;
		}

		let root = document.getElementById("root");
		root.appendChild(obj);

		let objJs = {
			type: className,
			html: obj
		}

		return objJs;

	}

	return {
		getInstance
	}

})();


const lifecycle = (() => {

	startGame = () => {
		console.log("start")

		let idInterval = setInterval(() => {
			lifecycle.create();
		},500);
	}

	create = () => {
		console.log("create element");

		let value = getrandom(0, list.length);
		factoryA.getInstance(list[value]);
	}

	return {
		startGame,
		create
	}
})();

const factoryMovePlane = (() => {

	planeUp = () => {
		let offset = parseInt(plane.style.top);
		console.log(offset);
		if(offset >0){
			plane.style.top = (offset - 7) + 'px';
		}
		plane.style.transform = "rotate(-10deg)";
	}

	planeDown = () => {
		let offset = parseInt(plane.style.top);
		console.log(offset);
		if(offset => 0){
			if(offset < 700){
				plane.style.top = (offset + 7) + 'px';
			}
		}
		plane.style.transform = "rotate(10deg)";
	}

	planeLeft = () => {
		let offset = parseInt(plane.style.left)
		if(offset > 0){
			plane.style.left = (offset -7) +'px;'
		}
	}

	planeRight = () => {
		let offset = parseInt(plane.style.left)
		if(offset => 0){
			if(offset < 1000){
				plane.style.left = (offset +7) +'px;'
			}
		}
	}

	planeDefault = () => {
		plane.style.transform = "rotate(0deg)";
	}

	return {
		planeUp,
		planeDown,
		planeLeft,
		planeRight,
		planeDefault
	}

})();







