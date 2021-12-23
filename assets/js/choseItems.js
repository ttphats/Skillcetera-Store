function choseItems(number) {
    if (number == 1) {
        document.getElementById("firstChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("secondChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("thirdChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("fourthChoseItem").style.backgroundColor = "#f3f3f3";
    }

    if (number == 2) {
        document.getElementById("firstChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("secondChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("thirdChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("fourthChoseItem").style.backgroundColor = "#f3f3f3";
    }

    if (number == 3) {
        document.getElementById("firstChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("secondChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("thirdChoseItem").style.backgroundColor = "var(--primary-color)";
        document.getElementById("fourthChoseItem").style.backgroundColor = "#f3f3f3";
    }
    if (number == 4) {
        document.getElementById("firstChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("secondChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("thirdChoseItem").style.backgroundColor = "#f3f3f3";
        document.getElementById("fourthChoseItem").style.backgroundColor = "var(--primary-color)";
    }
}