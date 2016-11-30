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

	NewUL.appendChild(makeList("Breakout.html", "Breakout!"));
	NewUL.appendChild(makeList(".html", "JavaScript Events!"));
	NewUL.appendChild(makeList("popup.html", "Pop-Up!"));
	NewUL.appendChild(makeList("todolist.html", "To Do List!"));
	NewUL.appendChild(makeList("chalkbored.html", "Chalkbored!"));
	NewUL.appendChild(makeList("tictactoe.html", "Tic-Tac-Toe!"));
	NewUL.appendChild(makeList("FirstMultiplicationTable.html", "Multiplication!"));
	NewUL.appendChild(makeList("BetterMutiTable.html", "More Multiplication!"));
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
