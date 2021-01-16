
var pictures = [
  ["wrench.png","tweezers.png", "top.png", "thermo.png","sieve.png","rasp.png"],
  ["opener.png", "pincer.png","mic.png", "lock.png", "hanger.png", "corkscrew.png"]
]

var target = ["wrench","tweezers", "top", "thermo","sieve","rasp","opener", "mic", "lock", "hanger", "corkscrew","pincer"]

function showCompObject(a,b) {
        document.getElementById("ob"+a).src=b;
    };

var comp = {

  pictures: pictures,
  target:target,
  data:[],

  comp: function() {

    if (comp.target.length == 0){
        showSlide("finished")
        turk.submit(comp)
        return
    };

    showSlide("comprehension");

    $("#text").text(target[0])

    showCompObject("1","images/"+comp.pictures[0][0])
    showCompObject("2","images/"+comp.pictures[0][1])
    showCompObject("3","images/"+comp.pictures[0][2])
    showCompObject("4","images/"+comp.pictures[0][3])
    showCompObject("5","images/"+comp.pictures[0][4])
    showCompObject("6","images/"+comp.pictures[0][5])

    $(".compItem").click(function() {

      var clickedItem = event.target;

      clickedItem.style.border = '5px solid blue';

      $(".compItem").unbind("click");

      var trial = 13 - comp.target.length

      var pick_src = event.target.src;

      var allPicks = pick_src.split('/');

      var pickItem = allPicks.slice(-1)[0];

      var pick = pickItem.replace('.png','');

      if (pick_src.indexOf(comp.target[0]) > -1) {
        var correct =1
        } else {
        var correct = 0
        };

        if (trial == 6){
            comp.pictures.shift();
        };

      data = {
        subid: experiment.subid,
        subage: experiment.subage,
        task: "comprehension",
        trial: trial,
        target: comp.target[0],
        pick: pick,
        correct: correct

      };

      comp.data.push(data);

      comp.target.shift();

      setTimeout(function() {
        clickedItem.style.border = '0px';
        comp.comp()
      }, 500)

    }
  );

  }

}
