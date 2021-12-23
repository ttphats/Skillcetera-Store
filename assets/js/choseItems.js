function choseItems(number) {
    if (number == 1) {
        document.getElementById("firstChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("secondChoseItem").style.backgroundColor = "white";
        document.getElementById("thirdChoseItem").style.backgroundColor = "white";
        document.getElementById("fourthChoseItem").style.backgroundColor = "white";
    }

    if (number == 2) {
        document.getElementById("firstChoseItem").style.backgroundColor = "white";
        document.getElementById("secondChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("thirdChoseItem").style.backgroundColor = "white";
        document.getElementById("fourthChoseItem").style.backgroundColor = "white";
    }

    if (number == 3) {
        document.getElementById("firstChoseItem").style.backgroundColor = "white";
        document.getElementById("secondChoseItem").style.backgroundColor = "white";
        document.getElementById("thirdChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("fourthChoseItem").style.backgroundColor = "white";
    }
    if (number == 4) {
        document.getElementById("firstChoseItem").style.backgroundColor = "white";
        document.getElementById("secondChoseItem").style.backgroundColor = "white";
        document.getElementById("thirdChoseItem").style.backgroundColor = "white";
        document.getElementById("fourthChoseItem").style.backgroundColor = "var(--primary-color)";
    }
}