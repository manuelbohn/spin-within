// preload
var preObjects = [
"hanger.png",
"pincer.png",
"thermo.png",
"sieve.png",
"wrench.png",
"lock.png",
"tweezers.png",
"mic.png",
"top.png",
"corkscrew.png",
"rasp.png",
"opener.png",
"bread.png",
"carrot.png",
"apple.png",
"duck.png","car.png","bear.png","ball.png","t01.png", "t02.png", "t03.png", "t04.png", "t05.png", "t06.png", "t07.png", "t08.png", "t09.png", "t10.png", "t11.png","t57.png",
"t58.png",
"t59.png",
"t60.png", "t12.png","back1.jpg","back2.jpg","back3.jpg","back4.jpg","back5.jpg","back6.jpg","back7.jpg","back8.jpg","back9.jpg","back10.jpg","empty.png"];
//for critical trials and fillers
var images = new Array();
for (i = 0; i < preObjects.length; i++) {
	images[i] = new Image();
	images[i].src = "images/" + preObjects[i];
    images[i].id = preObjects[i];
}

var preSounds = [
"end.mp3",
"Dog_train.mp3",
"Monkey_train.mp3",
"Dog_hello.mp3",
"Monkey_hello.mp3",
"me/Bear_bokas.mp3",
"me/Bear_hoefas.mp3",
"me/Bear_trelom.mp3",
"me/Cat_plosse.mp3",
"me/Cat_pilunt.mp3",
"me/Cat_raschlau.mp3",
"me/Frog_kattel.mp3",
"me/Frog_munki.mp3",
"me/Frog_ukam.mp3",
"me/Sheep_palvi.mp3",
"me/Sheep_tikon.mp3",
"me/Sheep_zubi.mp3",
"me/Bear_tomen.mp3",
"me/Cat_wondie.mp3",
"me/Frog_towak.mp3",
"me/Sheep_wittu.mp3"

];
//for critical trials and fillers
var sound = new Array();
for (i = 0; i < preSounds.length; i++) {
	sound[i] = new Audio();
	sound[i].src = "sound/" + preSounds[i];
}

// ## Helper functions
function showSlide(id) {
  // Hide all slides
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showText(id) {
  // Hide all slides
	$(".text").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}


function showAgent(id, orient) {
	$(".agent").hide();
    $(".point_agent_l").hide();
    $(".point_agent_r").hide();
	$("#"+id+"_"+orient).show();
}

function hideAgent() {
  // Hide all slides
	$(".agent").hide();
}

function choiceAgent(id) {
  // Hide all slides
	$(".agent").hide();
	// Show just the agent we want to show
	$("#"+id+"_straight").show();
}

function sourceRightObject(a) {
        document.getElementById("object_r").src=a;
    };

function sourceLeftObject(b) {
        document.getElementById("object_l").src=b;
    };


function showRightObject() {
    document.getElementById('object_r').style.visibility='visible';
      };

function hideRightObject() {
    document.getElementById('object_r').style.visibility='hidden';
      };

function showLeftObject() {
    document.getElementById('object_l').style.visibility='visible';
      };


function hideLeftObject() {
    document.getElementById('object_l').style.visibility='hidden';
      };

function showEat(id) {
	$(".agent_eat").hide();
	$("#"+id+"_eat").show();
};

function choiceLeftObject(a) {
        document.getElementById("choiceObject_l").src=a;
    };


function choiceRightObject(a) {
        document.getElementById("choiceObject_r").src=a;
    };


function background(x) {
        document.getElementById("background").src=x;
    };

function background2(x) {
        document.getElementById("background2").src=x;
    };

function getTime1() {
    return startTime = (new Date()).getTime();
};

// Get a random integer less than n.
function randomInteger(n) {
	return Math.floor(Math.random()*n);
};

function randomElement(array) {
  return array[randomInteger(array.length)];
};

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function sourceSound(c) {
        document.getElementById("sound").src=c;
    };
function playSound() {
    document.getElementById("sound").play();
      };



  function pause(id,time){
      $("#"+id).hide();
      setTimeout(function() {
           $("#"+id).show();
       }, time);
    };



// Variables and randomization for the experiment

var trial = ["train1","train2",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// agent order for training
var agents = ["Monkey","Dog","Bear","Bear","Bear","Bear","Cat","Cat","Cat","Cat","Frog","Frog","Frog","Frog","Sheep","Sheep","Sheep","Sheep"];

var novels = ["car","ball","t01","t02","t03","t04","t05","t06","t07","t08","t09","t11","t10","t12","t60","t59","t58","t57"]

var familiars = ["duck","bear", "hanger", "pincer","apple","thermo", "sieve","duck", "wrench", "lock","bread", "tweezers", "mic", "top", "corkscrew","carrot", "rasp", "opener",];

var words = ["train","train","trelom", "hoefas","tomen", "bokas","pilunt","wondie", "plosse" ,"raschlau", "ukam", "munki",  "kattel","towak","zubi", "tikon", "palvi","wittu"]

var hello = ["yes","yes","yes", "no", "no", "no","yes", "no" ,"no", "no", "yes", "no", "no", "no","yes", "no", "no", "no"]

// orientation of agent
var agentOrient = [
    ["straight", "down"],
    ["straight", "down"],
    ["straight", "down"],
    ["straight","down"],
    ["straight", "down"],
    ["straight", "down"],
    ["straight","down"],
    ["straight","down"],
    ["straight", "down"],
    [ "straight","down"],
    [ "straight","down"],
    ["straight", "down"],
    [ "straight","down"],
		    [ "straight","down"],
				    [ "straight","down"],
						    [ "straight","down"],
								    [ "straight","down"],
    ["straight","down"]];

var novelPos = ["right", "left", "left", "right", "left", "left", "right", "right", "left", "right", "left", "right", "right", "left","right","left", "left","right"]

var back = [1,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6];


// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
	hello: hello,
	words: words,
  agents: agents,
  agentOrient: agentOrient,
  novels: novels,
  familiars: familiars,
  back: back,
  novelPos: novelPos,
  data: [],

  checkInput: function() {
		//subject ID
		if (document.getElementById("subjectID").value.length < 1) {
			$("#checkMessage").html('<font color="red">Bitte Kind ID eintragen</font>');
			return;
		}
        if (document.getElementById("subjectAge").value.length < 1) {
			$("#checkMessage").html('<font color="red">Bitte Kind Alter eintragen</font>');
			return;
		}
		experiment.subid = document.getElementById("subjectID").value
        experiment.subage = document.getElementById("subjectAge").value
        experiment.trainingDot()
      },

// end of the experiment
  end: function() {
    // Show the finish slide.
    showSlide("finished");
    setTimeout(function() { turk.submit(experiment) }, 1000);
  },

   endTraining: function() {
    showSlide("training2");
  },

// what happens between trials - display agent from previous trial and click on it to move on to the next trial
   eat: function(event) {

    setTimeout(function() {experiment.eat2() }, 1500);

    showSlide("choice");

    event.target.style.border = '5px solid blue';

    sourceSound("sound/end.mp3");
    playSound();


    $(".object_r").unbind("click");
    $(".object_l").unbind("click");

      var pick_src = event.target.src;
    // get time for reaction time
    // select correct object


    // Code correct: does name of chosen object contain the name of the correct object
    if (pick_src.indexOf(novels[0]) > -1) {
        var correct =1
        var pick = novels[0]
        } else {
        var correct = 0
        var pick = familiars[0]
        };


				if (experiment.novelPos[0] == "left"){
		        var leftObject = novels[0]
						var rightObject = familiars[0]

		    } else  {
					var leftObject = familiars[0]
					var rightObject = novels[0]
		    }

    var subid = experiment.subid;
    var subage = experiment.subage;

    // data collected
      data = {
        subid: subid,
        subage: subage,
        task: "mutual_exclusivity",
        trial: trial[0],
				word: words[0],
        agent: agents[0],
        unfamiliar: novels[0],
        familiar: familiars[0],
				leftObject: leftObject,
				rightObject: rightObject,
				pick: pick,
        correct: correct
            };
      experiment.data.push(data);

  },

eat2: function() {

    showSlide("eat");

		setTimeout(function() {experiment.newtrial()}, 1000);

		sourceSound("sound/end.mp3");

		playSound();

    showEat(agents[0])



},

// unbind and shift variables between trials
 newtrial: function() {

    $(".object_l").css("border","none")

    $(".object_r").css("border","none")


    $(".agent_eat").unbind("click");


    sourceLeftObject("images/empty.png");
            showLeftObject();
    sourceRightObject("images/empty.png");
            showRightObject();



    experiment.trial.shift();
		experiment.hello.shift();
		experiment.words.shift();
    experiment.agentOrient.shift();
    experiment.agents.shift();
    experiment.novelPos.shift();
    experiment.novels.shift();
    experiment.familiars.shift();
    experiment.back.shift();




   experiment.next();
  },


// recording the choice
  choice: function(event) {

    showSlide("choice");

    background2("images/back"+back[0]+".jpg");

      showAgent(agents[0],"choice");

    // specify what is shown on the tables depending on training and test condition
    if (experiment.novelPos[0] == "left"){

        choiceLeftObject("images/"+novels[0]+".png");

        choiceRightObject("images/"+familiars[0]+".png");

        } else {

        choiceLeftObject("images/"+familiars[0]+".png");

        choiceRightObject("images/"+novels[0]+".png");

        }


    // play choice sound
    if (experiment.trial[0] == "train1" || experiment.trial[0] == "train2"){
        sourceSound("sound/me/"+agents[0]+"_"+words[0]+".mp3");
        playSound();
    } else {
        sourceSound("sound/me/"+agents[0]+"_"+words[0]+".mp3");
        playSound();
        };

    // choice can be made by clicking the objects after - possible after 5s
    setTimeout(function() {
        $(".object_l").click(experiment.eat);

        $(".object_r").click(experiment.eat);

    }, 000);
  },

// moving on within a trial

  next: function() {
  // when training is over show sinished training slide
    if (experiment.trial[0] == "finTrain"){
        experiment.endTraining();
        experiment.trial.shift();
        return;
    };
   // when no more trials are left, end experiment
    if (experiment.trial.length == 0){
        setTimeout(function() {experiment.end() }, 0);
      return;
    };

  // after exposure is finished, switch to choice
    if (experiment.agentOrient[0][0] == "down") {
      setTimeout(function() {experiment.choice() }, 0);
      return;
    };

    showSlide("stage");

    background("images/back"+back[0]+".jpg")



    // show agent
    showAgent(agents[0],experiment.agentOrient[0][0]);

    // play hello sound and write name of agent


	 if (experiment.hello[0] == "yes") {
		 		pause("next", 1500);
        sourceSound("sound/"+agents[0]+"_hello.mp3");
        playSound();
    };

    // display obejcts on table depending on training and test condition

    if (experiment.novelPos[0] == "left"){
        sourceLeftObject("images/"+novels[0]+".png");
        showLeftObject();

        sourceRightObject("images/"+familiars[0]+".png");
        showRightObject();

    } else  {
        sourceLeftObject("images/"+familiars[0]+".png");
        showLeftObject();

        sourceRightObject("images/"+novels[0]+".png");
        showRightObject();
    }


    // move on to next phase of exposure
    experiment.agentOrient[0].shift();
		//setTimeout(function() {experiment.next() }, 2500);
  },

trainingDot: function() {

    function createDot(dotx, doty, i) {
	   var dots = [1, 2, 3, 4, 5];

	   var dot = document.createElement("img");
	   dot.setAttribute("class", "dot");
	   dot.id = "dot_" + dots[i];
	   dot.src = "dots/dot_" + dots[i] + ".jpg";

	   var x = Math.floor(Math.random() * 850);
	   var y = Math.floor(Math.random() * 550);

	   var invalid = "true";
	//make sure dots do not overlap
	   while (true) {
		invalid = "true";
		for (j = 0; j < dotx.length; j++) {
			if (Math.abs(dotx[j] - x) + Math.abs(doty[j] - y) < 200) {
				var invalid = "false";
				break;
			}
		}
		if (invalid === "true") {
			dotx.push(x);
			doty.push(y);
			break;
		}
		x = Math.floor(Math.random() * 400);
		y = Math.floor(Math.random() * 400);
	}

	dot.setAttribute("style", "position:absolute;left:" + x + "px;top:" + y + "px;");

	trainingDot.appendChild(dot);
};


        var allDots = ["dot_1", "dot_2", "dot_3", "dot_4", "dot_5"];

		var xcounter = 0;
		var dotCount = 5;

		var dotx = [];
		var doty = [];

		for (i = 0; i < dotCount; i++) {
			createDot(dotx, doty, i, "");
		}

		showSlide("trainingDot");
		$('.dot').bind('click touchstart', function(event) {

			var dotID = $(event.currentTarget).attr('id');

			//only count towards completion clicks on dots that have not yet been clicked
			if (allDots.indexOf(dotID) === -1) {
				return;
			}
			allDots.splice(allDots.indexOf(dotID), 1);
			document.getElementById(dotID).src = "dots/x.jpg";
			xcounter++
			if (xcounter === dotCount) {
				trainingDot.removeChild(dot_1);
				trainingDot.removeChild(dot_2);
				trainingDot.removeChild(dot_3);
				trainingDot.removeChild(dot_4);
				trainingDot.removeChild(dot_5);

				setTimeout(function() {
					$("#trainingDot").hide();
					setTimeout(function() {
						showSlide("dotGame");
					}, 500);
				}, 500);
			}
		});
	}
};
