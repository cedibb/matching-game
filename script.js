var numberOfFaces = 5;
var level = 1;
document.getElementById("level").innerHTML = level;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
function generateFaces () {
    for (var i = 0; i < numberOfFaces; i++) {
        var img = document.createElement("img");
        img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png"
        img.style.top = "" + Math.floor((Math.random() * 401)) + "px";  //Creates a random top margin between 0 and 400.
        img.style.left = "" + Math.floor((Math.random() * 401)) + "px"; //Creates a random left margin between 0 and 400.
        theLeftSide.appendChild(img);
    }
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);
    theLeftSide.lastChild.onclick = function nextLevel (event) {
        delete_all_children();
        event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();
        level++;
        document.getElementById("level").innerHTML = level;
    };
    theBody.onclick = function gameOver() {
        var tryAgain = confirm("Game Over! Want to try again?");
        if (tryAgain) {
            numberOfFaces = 5;
            delete_all_children();
            generateFaces();
            level = 1;
            document.getElementById("level").innerHTML = level;
        }
        else {
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
        }
    };
    function delete_all_children () {
        while (theLeftSide.lastChild)  //Removes the left faces.
            theLeftSide.removeChild(theLeftSide.lastChild);
        while (theRightSide.lastChild) //Removes the right faces.
            theRightSide.removeChild(theRightSide.lastChild);
    }
}