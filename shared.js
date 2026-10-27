

document.addEventListener("DOMContentLoaded", function () {

    
    const searchInput = document.getElementById("searchInput");
    const grid = document.querySelector(".grid-container");
    const noResults = document.getElementById("noResults");

    if (searchInput && grid) {
        searchInput.addEventListener("keyup", function () {
            const term = this.value.toLowerCase().trim();
            const cards = grid.querySelectorAll(".box");
            let visible = 0;

            cards.forEach(function (card) {
                if (card.textContent.toLowerCase().includes(term)) {
                    card.style.display = "";
                    visible++;
                } else {
                    card.style.display = "none";
                }
            });

            if (noResults) {
                noResults.style.display = visible === 0 ? "block" : "none";
            }
        });
    }

   
    document.querySelectorAll(".qty-box").forEach(function (box) {
        const minus = box.querySelector(".qty-minus");
        const plus = box.querySelector(".qty-plus");
        const value = box.querySelector(".qty-value");

        minus.addEventListener("click", function () {
            let n = parseInt(value.textContent, 10);
            if (n > 1) value.textContent = n - 1;
        });

        plus.addEventListener("click", function () {
            let n = parseInt(value.textContent, 10);
            value.textContent = n + 1;
        });
    });

});
