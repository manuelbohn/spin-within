// preload
var preObjects = [
"duck.png","car.png","bear.png","ball.png",
"t13.png",
"t14.png",
"t15.png",
"t16.png",
"t17.png",
"t18.png",
"t19.png",
"t20.png",
"t21.png",
"t22.png",
"t23.png",
"t24.png",
"t25.png",
"t26.png",
"t27.png",
"t28.png",
"t29.png",
"t30.png",
"t31.png",
"t32.png",
"t33.png",
"t34.png",
"t35.png",
"t36.png",
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
"novel/Cat_katoll.mp3",
"novel/Cat_kendo.mp3",
"novel/Cat_wisslo.mp3",
"novel/Frog_ennut.mp3",
"novel/Frog_oppil.mp3",
"novel/Frog_rifom.mp3",
"novel/Sheep_gepsar.mp3",
"novel/Sheep_hurtel.mp3",
"novel/Sheep_tolte.mp3",
"novel/Bear_frawoe.mp3",
"novel/Bear_metam.mp3"
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

var trial = [1,2,3,4,5,6,7,8,9,10,11,12]
// agent order for training

var hello = ["yes", "no", "no","yes", "no" ,"no", "yes", "no", "no","yes", "no", "no"]

var agents = ["Cat","Cat","Cat","Sheep","Sheep","Sheep","Frog","Frog","Frog","Bear","Bear","Bear"];

var leftObject = [
	"t13",
	"t15",
	"t17",
	"t19",
	"t21",
	"t23",
	"t25",
	"t27",
	"t29",
	"t31",
	"t33",
	"t35",
	]
	var rightObject = [
	"t14",
	"t16",
	"t18",
	"t20",
	"t22",
	"t24",
	"t26",
	"t28",
	"t30",
	"t32",
	"t34",
	"t36"
	]

// orientation of agent


var agentOrient = [
    ["straight", "point_l", "point_r", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
    ["straight", "point_l", "point_r", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
    ["straight", "point_l", "point_r", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
		["straight", "point_l", "point_r", "disappear","gone","down"],
    ["straight", "point_l", "point_r", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
    ["straight", "point_r", "point_l", "disappear","gone","down"],
		["straight", "point_l", "point_r", "disappear","gone","down"]];


var novel = ["right", "left", "left", "right", "left", "left", "right", "left", "right", "right", "left", "right","left", "right"]


var back = [7,7,7,8,8,8,9,9,9,1,1,1];

var words = ["katoll",
"kendo",
"wisslo",
"gepsar",
"hurtel",
"tolte",
"ennut",
"oppil",
"rifom",
"frawoe",
"metam",
"pemweck"]
// beginning of actual experiment

// Show the instructions slide .
showSlide("instructions");

// the actual experiment
var experiment = {
  // Parameters for this sequence.
  trial: trial,
words:words,
hello:hello,
	agents: agents,
  novel:novel,
  agentOrient: agentOrient,
  leftObject: leftObject,
  rightObject: rightObject,
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
        experiment.next()
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

    if (novel[0] == "left") {
        if (pick_src.indexOf(leftObject[0]) > -1) {
            var correct = 1
            var pick = leftObject[0]
        } else {
            var correct = 0
            var pick = rightObject[0]
        };
    } else {
        if (pick_src.indexOf(rightObject[0]) > -1) {
            var correct = 1
            var pick = rightObject[0]
        } else {
            var correct = 0
            var pick = leftObject[0]
        };
    };

    var subid = experiment.subid;
    var subage = experiment.subage;

    // data collected
      data = {
        subid: subid,
        subage: subage,
        task: "novelty",
        trial: trial[0],
				word: words[0],
        agent: agents[0],
        leftObject: leftObject[0],
        rightObject: rightObject[0],
				pick: pick,
        correct: correct
            };
      experiment.data.push(data);

  },

eat2: function() {

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
		experiment.words.shift();
		experiment.hello.shift();
    experiment.agentOrient.shift();
    experiment.agents.shift();
    experiment.rightObject.shift();
    experiment.leftObject.shift();
    experiment.back.shift();
    experiment.novel.shift();

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

      choiceLeftObject("images/"+leftObject[0]+".png");

      choiceRightObject("images/"+rightObject[0]+".png");

		//	$(".object_l").click(experiment.eat);

	//		$(".object_r").click(experiment.eat);

    // play choice sound
        setTimeout(function () {
            sourceSound("sound/novel/"+agents[0]+"_"+ words[0]+".mp3")
            playSound();
        }, 500);



        $(".object_l").click(experiment.eat);

        $(".object_r").click(experiment.eat);

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

		$("#next").show();

    background("images/back"+back[0]+".jpg")

    // show agent
    showAgent(agents[0],experiment.agentOrient[0][0]);



  // display obejcts on table depending on training and test condition


// after the animal has commented on both tables and leaves, the novel object appears
      if (experiment.agentOrient[0][0] == "gone") {
          $("#next").hide();
      };


      if (experiment.novel[0] == "left"){

            if (experiment.agentOrient[0][0] == "gone"){

                    sourceLeftObject("images/"+leftObject[0]+".png");
                    showLeftObject();

                    sourceRightObject("images/"+rightObject[0]+".png");
                    showRightObject();

                    $("#object_l").css("bottom", "600px");
                    $("#object_l").animate({bottom: "295px"},{duration: 1500});

                    setTimeout(function() {
                        $("#object_r").animate({width: "200px", opacity: '0.3'});
                        $("#object_l").animate({width: "200px",opacity: '0.3'});
                        $("#object_l").animate({width: "150px",opacity: '1'});
                        $("#object_r").animate({width: "150px",opacity: '1'})}, 2500)


												//experiment.agentOrient[0].shift();
												setTimeout(function() {experiment.next() }, 4500);

                } else {

                    sourceLeftObject("images/empty.png");
                    showLeftObject();

                    sourceRightObject("images/"+rightObject[0]+".png");
                    showRightObject();

                }


        } else {

            if (experiment.agentOrient[0][0] == "gone"){

                    sourceLeftObject("images/"+leftObject[0]+".png");
                    showLeftObject();

                    sourceRightObject("images/"+rightObject[0]+".png");
                    showRightObject();

                    $("#object_r").css("bottom", "600px");
                    $("#object_r").animate({bottom: "295px"},{duration: 1500});

                    setTimeout(function() {
                        $("#object_r").animate({width: "200px", opacity: '0.3'});
                        $("#object_l").animate({width: "200px",opacity: '0.3'});
                        $("#object_l").animate({width: "150px",opacity: '1'});
                        $("#object_r").animate({width: "150px",opacity: '1'})}, 2500)

												//experiment.agentOrient[0].shift();
												setTimeout(function() {experiment.next() }, 4500);

                } else {

                    sourceLeftObject("images/"+leftObject[0]+".png");
                    showLeftObject();

                    sourceRightObject("images/empty.png");
                    showRightObject();

                }

    };


      if (experiment.agentOrient[0][0] == "straight" && experiment.hello[0] == "yes") {
          pause("next", 1000);

          sourceSound("sound/" + agents[0] + "_hello.mp3");
          playSound();

				//	sound = document.getElementById("sound");

				//	sound.onended = function () {
					//	experiment.agentOrient[0].shift();
						//setTimeout(function() {experiment.next() }, 0);
					//}

      } //else if (experiment.agentOrient[0][0] == "straight" && experiment.hello[0] == "no") {
			//	experiment.agentOrient[0].shift();
				//setTimeout(function() {experiment.next() }, 1000);
		//	}


      if (experiment.agentOrient[0][0] == "point_l") {

          //pause("next", 10000);
$("#next").hide();
          if (experiment.novel[0] == "left") {

              sourceSound("sound/" + agents[0] + "_point_nothing.mp3");
              playSound();




								//experiment.agentOrient[0].shift();
								setTimeout(function() {experiment.next() }, 3000);


          } else {

              sourceSound("sound/" + agents[0] + "_point_old.mp3");
              playSound();

							$("#next").hide();


							//	experiment.agentOrient[0].shift();
								setTimeout(function() {experiment.next() }, 3000);


          }
      }

       if (experiment.agentOrient[0][0] == "point_r") {

           //pause("next", 10000);
$("#next").hide();
           if (experiment.novel[0] == "right") {

               sourceSound("sound/" + agents[0] + "_point_nothing.mp3");
               playSound();


								 //experiment.agentOrient[0].shift();
								 setTimeout(function() {experiment.next() }, 3000);


           } else {

               sourceSound("sound/" + agents[0] + "_point_old.mp3");
               playSound();
							 $("#next").hide();


								 //experiment.agentOrient[0].shift();
								 setTimeout(function() {experiment.next() }, 3000);


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
						//pause("next", 10000);
            setTimeout(function () {
                hideAgent()
            }, 2000);

						//experiment.agentOrient[0].shift();
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
