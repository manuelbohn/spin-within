
var pictures = [
[  "rasp", "lock", "apple", "hydrant", "hanger", "dogtoy"],
[  "globe", "pincer", "sieve", "carrot", "pushpin", "mic"],
[  "opener", "funnel", "spyglass", "thermo", "bread", "top"],
[  "tweezers", "duck", "microscope", "yardstick", "corkscrew", "wrench"]
]

var target = [
  "lock","rasp", "apple", "hanger",
  "carrot","sieve","pincer", "mic",
  "top", "opener", "thermo","bread",
  "wrench","duck","corkscrew","tweezers"
]

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

    showCompObject("1","images/"+comp.pictures[0][0]+".png")
    showCompObject("2","images/"+comp.pictures[0][1]+".png")
    showCompObject("3","images/"+comp.pictures[0][2]+".png")
    showCompObject("4","images/"+comp.pictures[0][3]+".png")
    showCompObject("5","images/"+comp.pictures[0][4]+".png")
    showCompObject("6","images/"+comp.pictures[0][5]+".png")

    $(".compItem").click(function() {

      var clickedItem = event.target;

      clickedItem.style.border = '5px solid blue';

      $(".compItem").unbind("click");

      var trial = 17 - comp.target.length

      var pick_src = event.target.src;

      var allPicks = pick_src.split('/');

      var pickItem = allPicks.slice(-1)[0];

      var pick = pickItem.replace('.png','');

      if (pick_src.indexOf(comp.target[0]) > -1) {
        var correct =1
        } else {
        var correct = 0
        };

        if (trial == 4 | trial == 8 | trial == 12){
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
