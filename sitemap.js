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

	var NewNewUL = document.createElement("UL");
	NewUL.appendChild(NewNewUL);
	
	NewNewUL.appendChild(makeList("Breakout.html", "Breakout!"));
	NewNewUL.appendChild(makeList(".html", "JavaScript Events!"));
	NewNewUL.appendChild(makeList("popup.html", "Pop-Up!"));
	NewNewUL.appendChild(makeList("todolist.html", "To Do List!"));
	NewNewUL.appendChild(makeList("chalkbored.html", "Chalkbored!"));
	NewNewUL.appendChild(makeList("tictactoe.html", "Tic-Tac-Toe!"));
	NewNewUL.appendChild(makeList("FirstMultiplicationTable.html", "Multiplication!"));
	NewNewUL.appendChild(makeList("BetterMutiTable.html", "More Multiplication!"));
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
