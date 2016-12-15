function buildMap(ID)
{
    var Container = document.getElementById(ID);

    var NewUL = document.createElement("UL");
    Container.appendChild(NewUL);
    NewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/index.html", "Home"));
    NewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/Bio/bio.html", "Biography"));

    var NewLI = document.createElement("LI");
    NewLI.textContent = "School Projects:";
    NewUL.appendChild(NewLI);

    var NewNewUL = document.createElement("UL");
    NewLI.appendChild(NewNewUL);

    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/Breakout.html", "Breakout!"));
    //NewNewUL.appendChild(makeList(".html", "JavaScript Events!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/popup.html", "Pop-Up!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/todolist.html", "To Do List!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/chalkbored.html", "Chalkbored!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/tictactoe/tictactoe.html", "Tic-Tac-Toe!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/FirstMultiplicationTable.html", "Multiplication!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/BetterMutiTable.html", "More Multiplication!"));
    NewNewUL.appendChild(makeList("https://perryma.tk/ChrisWalters0987/Calculator/Calculator.html", "Midpoint Calculation!"));
}

function makeList(Link, Text)
{
    var NewA = document.createElement("a");
    var NewLI = document.createElement("LI");
    NewLI.appendChild(NewA);
    NewA.textContent = Text;
    NewA.href = Link;
    return NewLI;
}
