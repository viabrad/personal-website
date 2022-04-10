function flipCard(id) {
    const cards = document.querySelectorAll(".thecard");
    let idNum = id
    console.log(cards);
    console.log(idNum);
    const card = document.getElementById(idNum)
    console.log(card);

    function flipTheCard() {
        card.classList.toggle("flipCard");
    };

    flipTheCard();   
};

