document.addEventListener("DOMContentLoaded", function() {

    const deleteElement1 = document.getElementById("btn_1");
    const deleteElement2 = document.getElementById("btn_2");
    const deleteElement3 = document.getElementById("btn_3");
    const plateau = document.getElementById("plateau");

    // Fonction pour supprimer les bâtonnets
    function remove(numberBaton) {
        for(let i = 0; i < numberBaton; i++) {
            const lastSVG = plateau.lastElementChild;

            if (lastSVG) {
                plateau.removeChild(lastSVG);
            } else {
                break;
            }
        }
        if (plateau.childElementCount === 1 && plateau.childElementCount === 0) {

            const playerWin = document.getElementById("h3")

            playerWin.innerText = "Le " + playerContainer + " a gagner !"

            deleteElement1.disabled = true;
            deleteElement2.disabled = true;
            deleteElement3.disabled = true;
        }
    }

    deleteElement1.addEventListener("click", function () {
        remove(1);
    })
    deleteElement2.addEventListener("click", function () {
        remove(2);
    })
    deleteElement3.addEventListener("click", function () {
        remove(3);
    })

    const btn = document.getElementsByClassName("btn");
    const tabPlayer = ["Player-1" ,"Player-2"];
    const playerContainer = document.getElementById("name-player").innerText;

    // Affichage du joueur
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            const namePlayer = playerContainer.innerText;
            let indexOfPlayer = tabPlayer.indexOf(namePlayer);

            if (indexOfPlayer === 0) {
                playerContainer.innerText = tabPlayer[tabPlayer.length - 1];
            } else {
                playerContainer.innerText = tabPlayer[indexOfPlayer - 1];
            }
        });
    }
});
