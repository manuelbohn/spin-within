// preload
var preObjects = ["duck.png","car.png","bear.png","ball.png",
"t37.png",
"t38.png",
"t39.png",
"t40.png",
"t41.png",
"t42.png",
"t43.png",
"t44.png",
"t45.png",
"t46.png",
"t47.png",
"t48.png",
"t49.png",
"t50.png",
"t51.png",
"t52.png",
"t53.png",
"t54.png",
"t55.png",
"t56.png",
"t57.png",
"t58.png",
"t59.png",
"t60.png",
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
"back1.jpg","back2.jpg","back3.jpg","back4.jpg","back5.jpg","back6.jpg","back7.jpg","back8.jpg","back9.jpg","back10.jpg","empty.png"];
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
	"Bear_hello.mp3",
	"Bear_point_nothing.mp3",
	"Bear_point_old.mp3",
	"Cat_hello.mp3",
	"Cat_point_nothing.mp3",
	"Cat_point_old.mp3",
	"Frog_hello.mp3",
	"Frog_point_nothing.mp3",
"Frog_point_old.mp3",
"Sheep_hello.mp3",
"Sheep_point_nothing.mp3",
"Sheep_point_old.mp3",
"comb/Bear_halke.mp3",
"comb/Bear_knaupett.mp3",
"comb/Bear_kotte.mp3",
"comb/Bear_strillke.mp3",
"comb/Bear_tiela.mp3",
"comb/Bear_tomen.mp3",
"comb/Cat_krumpatt.mp3",
"comb/Cat_lentu.mp3",
"comb/Cat_liput.mp3",
"comb/Cat_prilin.mp3",
"comb/Cat_tumpfer.mp3",
"comb/Cat_wondie.mp3",
"comb/Frog_dessa.mp3",
"comb/Frog_nefu.mp3",
"comb/Frog_pemweck.mp3",
"comb/Frog_pretla.mp3",
"comb/Frog_soerel.mp3",
"comb/Frog_towak.mp3",
"comb/Sheep_bucku.mp3",
"comb/Sheep_miskeu.mp3",
"comb/Sheep_nupfor.mp3",
"comb/Sheep_quistla.mp3",
"comb/Sheep_wefla.mp3",
"comb/Sheep_wittu.mp3"
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

var trial = ["train1","train2",1,2,3,4,5,6,7,8,9,10,11,12,"pause",13,14,15,16,17,18,19,20,21,22,23,24];
// agent order for training

var agents = ["Monkey","Dog", "Bear","Bear","Bear","Cat","Cat","Cat","Frog","Frog","Frog","Sheep","Sheep","Sheep","Cat","Cat","Cat","Frog","Frog","Frog","Sheep","Sheep","Sheep","Bear","Bear","Bear"];

var novelObjects = ["car","ball","t37",
"t38",
"t39",
"t40",
"t41",
"t42",
"t43",
"t44",
"t45",
"t46",
"t47",
"t48",
"t49",
"t50",
"t51",
"t52",
"t53",
"t54",
"t55",
"t56",
"t57",
"t58",
"t59",
"t60"
];

var familiarObjects = ["duck","bear",
"top", "rasp", "lock", "hanger", "opener", "corkscrew", "thermo", "wrench", "mic", "tweezers", "pincer", "sieve",
"tweezers", "mic", "lock", "sieve", "rasp", "wrench", "hanger", "opener", "top", "pincer", "corkscrew", "thermo"];

// orientation of agent
var agentOrient = [
	["straight","down"],
	["straight","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_l", "point_r", "disappear","gone","down"],
	["straight", "point_r", "point_l", "disappear","gone","down"]];


var condition = [
    ["train","me_novel_left", "dis_novel_left"],
    ["train","me_novel_right", "dis_novel_right"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["incongruent", "me_novel_right", "dis_novel_left"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["incongruent", "me_novel_right", "dis_novel_left"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_right", "dis_novel_left"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["incongruent", "me_novel_right", "dis_novel_left"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["incongruent", "me_novel_right", "dis_novel_left"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_left", "dis_novel_left"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_left", "dis_novel_right"],
		["congruent", "me_novel_right", "dis_novel_right"],
		["incongruent", "me_novel_right", "dis_novel_left"]];


var words = [
	"train",
	"train",
"halke",
"knaupett",
"kotte",
"krumpatt",
"lentu",
"liput",
"dessa",
"nefu",
"pemweck",
"bucku",
"miskeu",
"nupfor",
"prilin",
"tumpfer",
"wondie",
"pretla",
"soerel",
"towak",
"quistla",
"wefla",
"wittu",
"strillke",
"tiela",
"tomen"];

var hello = ["yes","yes", "yes", "no", "no","yes", "no" ,"no", "yes", "no", "no","yes", "no", "no", "yes", "no", "no","yes", "no" ,"no", "yes", "no", "no","yes", "no", "no"];

var back = [1,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10];


// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
  agents: agents,
	hello: hello,
	words: words,
  agentOrient:agentOrient,
  condition:condition,
  novelObjects: novelObjects,
  familiarObjects: familiarObjects,
  back: back,
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
    showSlide("transition");
    setTimeout(function() { turk.submit(experiment) }, 500);
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

    if (pick_src.indexOf(novelObjects[0]) > -1) {
        var correct =1
        var pick = novelObjects[0]
        } else {
        var correct = 0
        var pick = familiarObjects[0]
        };


			if (experiment.condition[0][1] == "me_novel_left"){
		        var leftObject = novelObjects[0]
						var rightObject = familiarObjects[0]

		    } else  {
					var leftObject = familiarObjects[0]
					var rightObject = novelObjects[0]
		    }


    var subid = experiment.subid;
    var subage = experiment.subage;

    // data collected
      data = {
        subid: subid,
        subage: subage,
        task: "combination",
        trial: trial[0],
        agent: agents[0],
				word: words[0],
        condition:condition[0][0],
				leftObject: leftObject,
				rightObject: rightObject,
        unfamiliar: novelObjects[0],
        familiar: familiarObjects[0],
				pick: pick,
        correct: correct
            };
      experiment.data.push(data);

  },

eat2: function(event) {

    showSlide("eat");

   background("images/back"+back[0]+".jpg");

    sourceSound("sound/end.mp3");
    playSound();

    showEat(agents[0])

    setTimeout(function() {experiment.newtrial()}, 1000);

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
    experiment.condition.shift();
    experiment.novelObjects.shift();
    experiment.familiarObjects.shift();
    experiment.back.shift();

   experiment.next();
  },


pause: function () {

    showSlide("pause");

},

// recording the choice
  choice: function(event) {

    showSlide("choice");

    background2("images/back"+back[0]+".jpg");


      showAgent(agents[0],"choice");


    // specify what is shown on the tables depending on training and test condition
    if (experiment.condition[0][1] == "me_novel_left"){

        choiceLeftObject("images/"+novelObjects[0]+".png");

        choiceRightObject("images/"+familiarObjects[0]+".png");

        } else {

        choiceLeftObject("images/"+familiarObjects[0]+".png");

        choiceRightObject("images/"+novelObjects[0]+".png");

        }



    // play choice sound
		setTimeout(function () {
				sourceSound("sound/comb/"+agents[0]+"_"+ words[0]+".mp3")
				playSound();
		}, 500);


    // choice can be made by clicking the objects after - possible after 5s
    setTimeout(function() {
        $(".object_l").click(experiment.eat);

        $(".object_r").click(experiment.eat);

    }, 000);
  },

// moving on within a trial

  next: function() {
  // when training is over show sinished training slide

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

$("#next").show();

  // display obejcts on table depending on training and test condition


// after the animal has commented on both tables and leaves, the novel object appears
      if (experiment.agentOrient[0][0] == "gone") {
          $("#next").hide();
      };


      if (experiment.trial[0] == "train1") {

        sourceLeftObject("images/" +novelObjects[0] + ".png");
        showLeftObject();

        sourceRightObject("images/" + familiarObjects[0] + ".png");
        showRightObject();

      } else if (experiment.trial[0] == "train2") {

        sourceLeftObject("images/" + familiarObjects[0] + ".png");
        showLeftObject();

        sourceRightObject("images/" + novelObjects[0] + ".png");
        showRightObject();

      } else if (experiment.trial[0] == "pause") {
          experiment.pause();
          experiment.trial.shift();
          return;

    } else if (experiment.condition[0][2] == "dis_novel_left"){

            if (experiment.agentOrient[0][0] == "gone"){



                 if (experiment.condition[0][1] == "me_novel_left") {
                     sourceLeftObject("images/" + novelObjects[0] + ".png");
                     showLeftObject();

                     sourceRightObject("images/" + familiarObjects[0] + ".png");
                     showRightObject();

                 } else {
                     sourceLeftObject("images/" + familiarObjects[0] + ".png");
                     showLeftObject();

                     sourceRightObject("images/" + novelObjects[0] + ".png");
                     showRightObject();
                 }

                    $("#object_l").css("bottom", "600px");
                    $("#object_l").animate({bottom: "345px"},{duration: 1500});

                    setTimeout(function() {
                        $("#object_r").animate({width: "200px", opacity: '0.3'});
                        $("#object_l").animate({width: "200px",opacity: '0.3'});
                        $("#object_l").animate({width: "150px",opacity: '1'});
                        $("#object_r").animate({width: "150px",opacity: '1'})}, 2500)

												setTimeout(function() {experiment.next() }, 4500);

                } else {

                     if (experiment.condition[0][1] == "me_novel_left") {
                         sourceLeftObject("images/empty.png");
                         showLeftObject();

                         sourceRightObject("images/" + familiarObjects[0] + ".png");
                         showRightObject();

                     } else {
                         sourceLeftObject("images/empty.png");
                         showLeftObject();

                         sourceRightObject("images/" + novelObjects[0] + ".png");
                         showRightObject();
                     }

                }


        } else {

            if (experiment.agentOrient[0][0] == "gone"){




                if (experiment.condition[0][1] == "me_novel_left") {
                     sourceLeftObject("images/" + novelObjects[0] + ".png");
                     showLeftObject();

                     sourceRightObject("images/" + familiarObjects[0] + ".png");
                     showRightObject();

                 } else {
                     sourceLeftObject("images/" + familiarObjects[0] + ".png");
                     showLeftObject();

                     sourceRightObject("images/" + novelObjects[0] + ".png");
                     showRightObject();
                 }

                    $("#object_r").css("bottom", "600px");
                    $("#object_r").animate({bottom: "345px"},{duration: 1500});

                    setTimeout(function() {
                        $("#object_r").animate({width: "200px", opacity: '0.3'});
                        $("#object_l").animate({width: "200px",opacity: '0.3'});
                        $("#object_l").animate({width: "150px",opacity: '1'});
                        $("#object_r").animate({width: "150px",opacity: '1'})}, 2500)

												setTimeout(function() {experiment.next() }, 4500);

                } else {

                    if (experiment.condition[0][1] == "me_novel_left") {
                         sourceLeftObject("images/" + novelObjects[0] + ".png");
                         showLeftObject();

                         sourceRightObject("images/empty.png");
                         showRightObject();

                     } else {
                         sourceLeftObject("images/" + familiarObjects[0] + ".png");
                         showLeftObject();

                         sourceRightObject("images/empty.png");
                         showRightObject();
                     }

                }

    };


   // play hello sound and write name of agent
	 if (experiment.agentOrient[0][0] == "straight" && experiment.hello[0] == "yes") {
			 pause("next", 1500);

			 sourceSound("sound/" + agents[0] + "_hello.mp3");
			 playSound();

      }

      if (experiment.agentOrient[0][0] == "point_l") {

          $("#next").hide();
					setTimeout(function() {experiment.next() }, 3000);

          if (experiment.condition[0][2] == "dis_novel_left") {

              sourceSound("sound/" + agents[0] + "_point_nothing.mp3");
              playSound();

          } else {

              sourceSound("sound/" + agents[0] + "_point_old.mp3");
              playSound();

          }
      }

       if (experiment.agentOrient[0][0] == "point_r") {

           $("#next").hide();
					 setTimeout(function() {experiment.next() }, 3000);

           if (experiment.condition[0][2] == "dis_novel_right") {

               sourceSound("sound/" + agents[0] + "_point_nothing.mp3");
               playSound();

           } else {

               sourceSound("sound/" + agents[0] + "_point_old.mp3");
               playSound();

           }
       }


        if (experiment.agentOrient[0][0] == "disappear") {
            showAgent(agents[0], "straight")
            sourceSound("sound/ring.mp3")
            playSound();
            setTimeout(function () {
                showAgent(agents[0], "disappear")
            }, 1000);
            $("#next").hide();
            setTimeout(function () {
                hideAgent()
            }, 2000);
						setTimeout(function() {experiment.next() }, 2500);
        };


    // move on to next phase of exposure
    experiment.agentOrient[0].shift();
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
