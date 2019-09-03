let letnumberOfSmiles = 5;
let level = 1;
let theLeftSide = document.getElementById("leftSide");
let theRightSide = document.getElementById("rightSide");
let theBody = document.querySelector("body");

document.getElementById("level").innerHTML = level;

function delete_all_children () {
    while (theLeftSide.lastChild)  //Removes the left faces.
        theLeftSide.removeChild(theLeftSide.lastChild);
    while (theRightSide.lastChild) //Removes the right faces.
        theRightSide.removeChild(theRightSide.lastChild);
}

function generateFaces () {

    for (let i = 0; i < letnumberOfSmiles; i++) {
        let img = document.createElement("img");
        img.src = "smile.png"
        img.style.top = "" + Math.floor((Math.random() * 401)) + "px";  //Creates a random top margin between 0 and 400.
        img.style.left = "" + Math.floor((Math.random() * 401)) + "px"; //Creates a random left margin between 0 and 400.
        theLeftSide.appendChild(img);
    }
    
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener('click', (e) => {
        delete_all_children();
        e.stopPropagation();
        letnumberOfSmiles += 5;
        generateFaces();
        level++;
        document.getElementById("level").innerHTML = level;
    });

    theBody.onclick = function gameOver() {
        let tryAgain = confirm("Game Over! Want to try again?");
        if (tryAgain) {
            letnumberOfSmiles = 5;
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

}