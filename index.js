document.addEventListener("DOMContentLoaded", function() {

    const deleteElement1 = document.getElementById("btn_1");
    const deleteElement2 = document.getElementById("btn_2");
    const deleteElement3 = document.getElementById("btn_3");
    const plateau = document.getElementById("plateau");

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
            document.getElementById("h3").innerText = `Player ${currentPlayer + 1} win`;

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

    let currentPlayer = 0;

    document.querySelectorAll(".btn").forEach(function (btn) {
        btn.addEventListener("click", function() {
            currentPlayer = !currentPlayer;
            document.getElementById("name-player").innerText = `Player ${currentPlayer + 1}`;
        });
    })
});
