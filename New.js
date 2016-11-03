var WIDTH = 600;
var HEIGHT = 600;

var WINNING_LINE_WIDTH = 10;
var WINNING_LINE_COLOR = Color.red;

var newGrid = new Grid(3, 3);

var CanGoThere = false;
var WhosTurn = "4";
var someoneWon = false;
var CanPlace = false;

function start(){
    functionForLines();
    mouseClickMethod(MouseWasClicked);
}

function MouseWasClicked(e)
{
	if(someoneWon == false)
	{
		if(e.getX() <= WIDTH / 3) //First Row
		{
			if(e.getY() <= HEIGHT / 3) //First Box
			{
				if(WhosTurn == "4" && newGrid.get(0, 0) == null)
				{
					draw4(45,170);
					newGrid.set(0, 0, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(0, 0) == null)
				{
					draw4(45,170);
					newGrid.set(0, 0, 0);
					WhosTurn = "4";
				}
			}
			else if(e.getY() <= HEIGHT / 3 * 2) //Second Box
			{
				if(WhosTurn == "4" && newGrid.get(0, 1) == null)
				{
					draw4(45,370);
					newGrid.set(0, 1, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(0, 1) == null)
				{
					draw0(45,370);
					newGrid.set(0, 1, 0);
					WhosTurn = "4";
				}
			}
			else{ //Third Box
				if(WhosTurn == "4" && newGrid.get(0, 2) == null)
				{
					draw4(45,570);
					newGrid.set(0, 2, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(0, 2) == null)
				{
					draw0(45,570);
					newGrid.set(0, 2, 0);
					WhosTurn = "4";
				}
			}
		}
		else if(e.getX() <= WIDTH / 3 * 2 && e.getX() >= WIDTH / 3) //Second Row
		{
			if(e.getY() <= HEIGHT / 3) //First Box
			{
				if(WhosTurn == "4" && newGrid.get(1, 0) == null)
				{
					draw4(245,170);
					newGrid.set(1, 0, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(1, 0) == null)
				{
					draw0(245,170);
					newGrid.set(1, 0, 0);
					WhosTurn = "4";
				}
			}
			else if(e.getY() <= HEIGHT / 3 * 2) //Second Box
			{
				if(WhosTurn == "4" && newGrid.get(1, 1) == null)
				{
					draw4(245,370);
					newGrid.set(1, 1, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(1, 1) == null)
				{
					draw0(245,370);
					newGrid.set(1, 1, 0);
					WhosTurn = "4";
				}
			}
			else{ //Third Box
				if(WhosTurn == "4" && newGrid.get(1, 2) == null)
				{
					draw4(245,570);
					newGrid.set(1, 2, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(1, 2) == null)
				{
					draw0(245,570);
					newGrid.set(1, 2, 0);
					WhosTurn = "4";
				}
			}
		}
		else //Third Row
		{
			if(e.getY() <= HEIGHT / 3) //First Box
			{
				if(WhosTurn == "4" && newGrid.get(2, 0) == null)
				{
					draw4(445,170);
					newGrid.set(2, 0, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(2, 0) == null)
				{
					draw0(445,170);
					newGrid.set(2, 0, 0);
					WhosTurn = "4";
				}
			}
			else if(e.getY() <= HEIGHT / 3 * 2) //Second Box
			{
				if(WhosTurn == "4" && newGrid.get(2, 1) == null)
				{
					draw4(445,370);
					newGrid.set(2, 1, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(2, 1) == null)
				{
					draw0(445,370);
					newGrid.set(2, 1, 0);
					WhosTurn = "4";
				}
			}
			else{ //Third Box
				if(WhosTurn == "4" && newGrid.get(2, 2) == null)
				{
					draw4(445,570);
					newGrid.set(2, 2, 4);
					WhosTurn = "0";
				}
				else if(WhosTurn == "0" && newGrid.get(2, 2) == null)
				{
					draw0(445,570);
					newGrid.set(2, 2, 0);
					WhosTurn = "4";
				}
			}
		}
	}
	
	CheckIfSomeoneWon(0,0,0,1,0,2,0,HEIGHT / 6,WIDTH, HEIGHT / 6);
	CheckIfSomeoneWon(1,0,1,1,1,2,0,HEIGHT / 2,WIDTH, HEIGHT / 2);
	CheckIfSomeoneWon(2,0,2,1,2,2,0,HEIGHT - (HEIGHT / 6),WIDTH, HEIGHT - (HEIGHT / 6));
	CheckIfSomeoneWon(0,0,1,0,2,0,WIDTH / 6,HEIGHT, WIDTH / 6);
	CheckIfSomeoneWon(0,1,1,1,2,1,WIDTH / 2,HEIGHT, WIDTH / 2);
	CheckIfSomeoneWon(0,2,1,2,2,2,WIDTH - (WIDTH / 6),HEIGHT, WIDTH - (WIDTH / 6));
	CheckIfSomeoneWon(0,0,1,1,2,2,0,0,WIDTH, HEIGHT);
	CheckIfSomeoneWon(2,0,1,1,0,2,0,HEIGHT, WIDTH, 0);
}

function CheckIfSomeoneWon(A,B,C,D,E,F,X1,Y1,X2,Y2)
{
	if(newGrid.get(A, B) == newGrid.get(C, D) == newGrid.get(E, F) == "4" || newGrid.get(A, B) == newGrid.get(C, D) == newGrid.get(E, F) == "0")
	{
		var newLine = new Line(X1, Y1, X2, Y2);
                newLine.setColor(Color.red);
                add(newLine);
	}
}

function draw4(X, Y)
{
	var new4 = new Text("4", "150pt Arial");
	new4.setPosition(X, Y);
	new4.setColor(Color.WHITE);
	add(new4);
}

function draw0(X, Y)
{
	var new0 = new Text("0", "150pt Arial");
	new0.setPosition(X, Y);
	new0.setColor(Color.WHITE);
	add(new0);
}

function functionForLines(){
    drawLines(WIDTH / 3, 0, WIDTH / 3, HEIGHT);
    drawLines(WIDTH / 3 * 2, 0, WIDTH / 3 * 2, HEIGHT);
    drawLines(0, HEIGHT / 3, WIDTH, HEIGHT / 3);
    drawLines(0, HEIGHT / 3 * 2, WIDTH, HEIGHT / 3 * 2);
}

function drawLines(X1,Y1,X2,Y2){
    var line = new Line(X1, Y1, X2, Y2);
    line.setColor(Color.BLACK);
    add(line);
}