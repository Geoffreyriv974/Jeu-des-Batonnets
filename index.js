//supprimer 1 éléments
document.addEventListener("DOMContentLoaded", function() {
    var deleteElement = document.getElementById("btn_1");
    var plateau = document.getElementById("plateau");

    deleteElement.addEventListener("click", function() {

        var lastSVG = plateau.lastElementChild;

        if (lastSVG) {
            plateau.removeChild(lastSVG);
        } else {
            alert("Il n'y a plus d'élément SVG à supprimer !");
        }
    });
});

//supprimer 2 éléments
document.addEventListener("DOMContentLoaded", function() {
    var deleteElement = document.getElementById("btn_2");
    var plateau = document.getElementById("plateau");

    deleteElement.addEventListener("click", function() {

        for (let i = 0; i < 2; i++) {
            var lastSVG = plateau.lastElementChild;
            if (lastSVG) {
                plateau.removeChild(lastSVG)
            } else {
                break;
            }
        }
    });
});

//supprimer 3 éléments
document.addEventListener("DOMContentLoaded", function() {
    var deleteElement = document.getElementById("btn_3");
    var plateau = document.getElementById("plateau");

    deleteElement.addEventListener("click", function() {

        for (let i = 0; i < 3; i++) {
            var lastSVG = plateau.lastElementChild;
            if (lastSVG) {
                plateau.removeChild(lastSVG)
            } else {
                break;
            }
        }
    });

    var Player = document.getElementById("player")

    if (Player === "Joueur-1") {
        Player.textContent = "Joueur-2"
    }

});



