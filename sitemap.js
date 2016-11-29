function buildMap(ID)
{
    var Container = document.getElementById(ID);

    var NewUL = document.createElement("UL");
    Container.appendChild(NewUL);

    NewUL.appendChild(makeList("index.html", "Home"));
    NewUL.appendChild(makeList("bio.html", "Biography"));

    var NewLI = document.createElement("LI");
    NewLI.textContent = "School Projects:";
    NewUL.appendChild(NewLI);

    NewUL.appendChild(makeList("Breakout.html", "Breakout"));
    NewUL.appendChild(makeList("Breakout.html", "JavaScript Events"));
    NewUL.appendChild(makeList("Breakout.html", "Breakout"));
    NewUL.appendChild(makeList("Breakout.html", "Breakout"));
    NewUL.appendChild(makeList("Breakout.html", "Breakout"));
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