var NumberChecked = 0;
var Players = "X";
var SomeoneWon = false;
function onClick(ID)
{
    var Cell = document.getElementById(ID);
    var Valid = Cell.textContent == "";
    if (Players == "X" && Valid && !SomeoneWon)
    {
        Cell.textContent = getLetter(Players);
        Players = "O";
        var GrabText = document.getElementById("PlayersTurn");
        var SetText = "Players Turn: O";
        GrabText.textContent = (SetText);

    }
    else if (Players == "O" && Valid && !SomeoneWon)
    {
        Cell.textContent = getLetter(Players);
        Players = "X";
        var GrabText = document.getElementById("PlayersTurn");
        var SetText = "Players Turn: X";
        GrabText.textContent = (SetText);
    }


    CheckIfWon("TopLeft", "TopMid", "TopRight");
    CheckIfWon("MidLeft", "MidMid", "MidRight");
    CheckIfWon("BottomLeft", "BottomMid", "BottomRight");
    CheckIfWon("TopLeft", "MidLeft", "BottomLeft");
    CheckIfWon("TopMid", "MidMid", "BottomMid");
    CheckIfWon("TopRight", "MidRight", "BottomRight");
    CheckIfWon("TopLeft", "MidMid", "BottomRight");
    CheckIfWon("TopRight", "MidMid", "BottomLeft");
    NumberChecked++;
    if (NumberChecked == 9)
    {
        var GrabText = document.getElementById("PlayersTurn");
        var SetText = "No One Won!";
        GrabText.textContent = (SetText);
    }
}

function CheckIfWon(ID1, ID2, ID3)
{
    var Cell1 = document.getElementById(ID1);
    var Cell1Data = Cell1.textContent;
    var Cell2 = document.getElementById(ID2);
    var Cell2Data = Cell2.textContent;
    var Cell3 = document.getElementById(ID3);
    var Cell3Data = Cell3.textContent;
    if ((Cell1Data == Cell2Data) && (Cell2Data == Cell3Data) && (Cell2Data != ""))
    {
        var who = Cell1Data;
        SomeoneWon = true;
        Cell1.style.color = "red";
        Cell2.style.color = "red";
        Cell3.style.color = "red";
        var GrabText = document.getElementById("PlayersTurn");
        var SetText = "Player " + who + " Wins";
        GrabText.textContent = (SetText);
    }
}

function getLetter(Letter)
{
    if (holiday() == "Thanksgiving") {
        if (Letter == "X") {
            return "n";
        } else {
            return "m";
        }
    }
    else if (holiday() == "Christmas") {
        if (Letter == "X") {
            return "p";
        } else {
            return "o";
        }
    }
    else if (holiday() == "Easter") {
        if (Letter == "X") {
            return "d";
        } else {
            return "e";
        }
    }
    else if (holiday() == "Valentines") {
        if (Letter == "X") {
            return "c";
        } else {
            return "a";
        }
    }
    else if (holiday() == "Halloween") {
        if (Letter == "X") {
            return "j";
        } else {
            return "i";
        }
    }
    else if (holiday() == "4th of July") {
        if (Letter == "X") {
            return "g";
        } else {
            return "h";
        }
    }
    else {
        return Letter
    }
}