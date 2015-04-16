function renderLetterGrid(scene, stringGrid, xPos, zPos, north_south, east_west){

    var max_x_x = 0;
    var max_x_z = 0;
    var min_x_x = stringGrid.length;
    var min_x_z = stringGrid.length;
    var max_z_x = 0;
    var max_z_z = 0;
    var min_z_x = stringGrid[0].length;
    var min_z_z = stringGrid[0].length;
    var letterGrid = [];
    for(var i=0; i<stringGrid.length; i++){
        letterGrid[i] = [];
        for(var j=0; j<stringGrid[i].length; j++){
            if(stringGrid[i][j]!=null){
                if(i>max_x_x){
                    max_x_x = i;
                    max_x_z = j;
                }
                if(i<min_x_x){
                    min_x_x = i;
                    min_x_z = j;
                }
                if(j>max_z_z){
                    max_z_x = i;
                    max_z_z = j;
                }
                if(j<min_z_z){
                    min_z_x = i;
                    min_z_z = j;
                }
            }
        }
    }
    for(var i=0; i<stringGrid.length; i++){
        for(var j=0; j<stringGrid[i].length; j++){
            if(stringGrid[i][j]!=null){
                letterGrid[i][j] = smartCreateLetter(scene, stringGrid, i, j, xPos, zPos, (east_west && i==max_x_x && j==max_x_z), (east_west && i==min_x_x && j==min_x_z), (north_south && i==max_z_x && j==max_z_z), (north_south && i==min_z_x && j==min_z_z));
            }else{
                letterGrid[i][j] = null;
            }
        }
    }

    return new function(){
        this.letterGrid = letterGrid;
        this.northSouth = north_south;
        this.eastWest = east_west;
        this.westPoint = [max_x_x, max_x_z];
        this.eastPoint = [min_x_x, min_x_z];
        this.northPoint = [max_z_x, max_z_z];
        this.southPoint = [min_z_x, min_z_z];
    }

}

function smartCreateLetter(scene, grid, xpos, ypos, xoffset, yoffset, e_ov, w_ov, s_ov, n_ov){
    //the size of one 'square' in the grid
    var gU = 12.4;
    var objletter = grid[xpos][ypos];

    var flippedy = grid[xpos].length-ypos;
    var ourChar = grid[xpos][ypos].char;

    var south = (ypos+1<grid[xpos].length && grid[xpos][ypos+1]!=null);
    var east = (xpos+1<grid.length && grid[xpos+1][ypos]!=null);
    var north = (ypos-1>=0 && grid[xpos][ypos-1]!=null);
    var west = (xpos-1>=0 && grid[xpos-1][ypos]!=null);

    if(e_ov) east = true;
    if(w_ov) west = true;
    if(s_ov) south = true;
    if(n_ov) north = true;

    //The rest of the stuff that uses xpos and ypos are for positioning, so we can go ahead and change them.
    ypos = flippedy;
    ypos += yoffset/12.4;
    xpos += xoffset/12.4;


    //The if not case creates a 9 length wall on that side.
    //The elses create 3 length  wall attachements to connect the next letters walls
    if(!north){
        createWall(scene, [xpos*gU, ypos*gU+9.4], [xpos*gU+9.4, ypos*gU+9.4]);
    }else{
        createWall(scene, [xpos*gU, ypos*gU+9.4], [xpos*gU, ypos*gU+12.4]);
        createWall(scene, [xpos*gU+9.4, ypos*gU+9.4], [xpos*gU+9.2, ypos*gU+12.4]);
    }
    if(!east){
        createWall(scene, [xpos*gU+9.4, ypos*gU], [xpos*gU+9.4, ypos*gU+9.4]);
    }else{
        createWall(scene, [xpos*gU+9.4, ypos*gU], [xpos*gU+12.4, ypos*gU]);
        createWall(scene, [xpos*gU+9.4, ypos*gU+9.4], [xpos*gU+12.4, ypos*gU+9.4]);
    }
    if(!south){
        createWall(scene, [xpos*gU, ypos*gU], [xpos*gU+9.4, ypos*gU]);
    }
    if(!west){
        createWall(scene, [xpos*gU, ypos*gU], [xpos*gU, ypos*gU+9.4]);
    }

    var fn = createLetter(scene, ourChar, xpos*gU+.2, ypos*gU+.2, north, east, south, west);
    fn.objletter = objletter;
    return fn;
}

function createLetter(scene,letter, x, z, open1, open2, open3, open4){
    switch(letter){
        case "A":
           return createA(scene, x, z, open1, open2, open3, open4);
        case "B":
           return createB(scene, x, z, open1, open2, open3, open4);
        case "C":
           return createC(scene, x, z, open1, open2, open3, open4);
        case "D":
           return createD(scene, x, z, open1, open2, open3, open4);
        case "E":
           return createE(scene, x, z, open1, open2, open3, open4);
        case "F":
           return createF(scene, x, z, open1, open2, open3, open4);
        case "G":
           return createG(scene, x, z, open1, open2, open3, open4);
        case "H":
           return createH(scene, x, z, open1, open2, open3, open4);
        case "I":
           return createI(scene, x, z, open1, open2, open3, open4);
        case "J":
           return createJ(scene, x, z, open1, open2, open3, open4);
        case "K":
           return createK(scene, x, z, open1, open2, open3, open4);
        case "L":
           return createL(scene, x, z, open1, open2, open3, open4);
        case "M":
           return createM(scene, x, z, open1, open2, open3, open4);
        case "N":
           return createN(scene, x, z, open1, open2, open3, open4);
        case "O":
           return createO(scene, x, z, open1, open2, open3, open4);
        case "P":
           return createP(scene, x, z, open1, open2, open3, open4);
        case "Q":
           return createQ(scene, x, z, open1, open2, open3, open4);
        case "R":
           return createR(scene, x, z, open1, open2, open3, open4);
        case "S":
           return createS(scene, x, z, open1, open2, open3, open4);
        case "T":
           return createT(scene, x, z, open1, open2, open3, open4);
        case "U":
           return createU(scene, x, z, open1, open2, open3, open4);
        case "V":
           return createV(scene, x, z, open1, open2, open3, open4);
        case "W":
           return createW(scene, x, z, open1, open2, open3, open4);
        case "X":
           return createX(scene, x, z, open1, open2, open3, open4);
        case "Y":
           return createY(scene, x, z, open1, open2, open3, open4);
        case "Z":
           return createZ(scene, x, z, open1, open2, open3, open4);
        case " ":
           return createSp(scene, x, z, open1, open2, open3, open4);
        default:
            alert("CODE SHOULD NEVER REACH HERE");
    }
}


function checkCollision(playerX, playerZ){
    if(playerX > this.xBegin && playerX < this.xEnd && playerZ > this.zBegin && playerZ < this.zEnd){
        //alert("TEST");
    }
}

function letter(x, z, xEnd){
    return new function(){
        this.xBegin = x;
        this.zBegin = z;
        this.xEnd = xEnd;
        this.zEnd = z+9;
        this.checkCollision = checkCollision;
    };
}


//Openings:
//open1 = north
//open2 = east
//open3 = south
//open4 = west

function createSp(scene, x, z, open1, open2, open3, open4){
    if(!open1){
        createWall(scene, [x,z+9], [x+9, z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z], [x+9, z+9]);
    }
    if(!open3){
        createWall(scene, [x+9,z], [x, z]);

    }
    if(!open4){
        createWall(scene, [x,z+9], [x, z]);
    }

    return letter(x, z, x+9);
}

function createA(scene, x, z, open1, open2, open3, open4){
    // Outer A wall
    createWall(scene, [x+1,z+3], [x+3, z+9]);
    createWall(scene, [x+6,z+9], [x+8, z+3]);
    createWall(scene, [x,z],[x+3,z]);

    //Inner Wall
    createWall(scene, [x+3,z], [x+4, z+3]);
    createWall(scene, [x+4,z+3], [x+5,z+3]);
    createWall(scene, [x + 5, z + 3], [x + 6, z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'A');

    if (!open1) {
        createWall(scene, [x+3, z+9], [x+6, z+9]);
    }
    if (!open2) {
        createWall(scene, [x+8,z+3], [x+9, z]);
    }
    if (!open3) {
        createWall(scene, [x+6,z],[x+9,z]);
    }
    if (!open4) {
        createWall(scene, [x, z], [x+1, z+3]);
    }
    // Return Function
    return letter(x,z, x+9);
}
function createB(scene, x, z, open1, open2, open3, open4){
    // Outer Wall
    createWall(scene, [x,z],[x,z+6]);
    createWall(scene, [x+3,z+9],[x+6,z+6.75]);
    createWall(scene, [x+6,z+6.75], [x+3,z+4.5]);
    createWall(scene, [x+6,z+2.25], [x+3,z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'B');

    if (!open1) {
        createWall(scene, [x,z+9],[x+3,z+9]);
    }
    if (!open2) {
        createWall(scene, [x+3,z+4.5],[x+6,z+2.25]);       
    }
    if (!open3) {
        createWall(scene, [x,z],[x+3,z]);
    }
    if (!open4) {
        createWall(scene, [x, z+6], [x, z+9]);
    }
    //Return Function
    return letter(x,z, x+6);
}
function createC(scene, x, z, open1, open2, open3, open4) {

    //Outer left wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer right wall
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);
    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //Inner C
    createWall(scene, [x + 3, z + 3], [x + 9, z + 3]);
    createWall(scene, [x + 3, z + 6], [x + 9, z + 6]);
    createWall(scene, [x + 3, z + 3], [x + 3, z + 6]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'C');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z], [x + 9, z + 3]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x, z, x+9);
}

function createD(scene, x, z, open1, open2, open3, open4) {

    //Outer right wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer left wall
    createWall(scene, [x + 9, z + 2], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 7]);

   //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 7, z]);
    createWall(scene, [x + 7, z], [x + 9, z + 2]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 7, z + 9]);
    createWall(scene, [x + 7, z + 9], [x + 9, z + 7]);

    //Inner D
    createWall(scene, [x + 3, z + 3], [x + 5, z + 3]);
    createWall(scene, [x + 3, z + 6], [x + 5, z + 6]);
    createWall(scene, [x + 5, z + 3], [x + 6, z + 4]);
    createWall(scene, [x + 5, z + 6], [x + 6, z + 5]);
    createWall(scene, [x + 6, z + 4], [x + 6, z + 5]);
    createWall(scene, [x + 3, z + 3], [x + 3, z + 6]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'D');

    //TODO: Set up openings, and when wall is there, set to null
    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x,z,x+9);
}

function createE(scene, x, z, open1, open2, open3, open4){
    //left wall
    createWall(scene, [x, z], [x, z+3]);
    createWall(scene, [x, z+6], [x, z+9]);

    //top wall
    createWall(scene, [x+3,z+9], [x+6, z+9]);

    //right side, first point
    createWall(scene, [x+6, z+9], [x+6, z+6]);
    createWall(scene, [x+6, z+6], [x+3, z+6]);

    //right side, second point
    createWall(scene, [x+3, z+3], [x+6,z+3]);
   //right side, third point
    createWall(scene, [x+6, z], [x+6, z+3]);

    //right side, final
    createWall(scene, [x + 3, z], [x + 6, z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'E');


    if(!open1){
        createWall(scene, [x, z+9], [x+3, z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+6], [x+6, z+3]);
    }
    if(!open3){
        createWall(scene, [x+3, z], [x, z]);
    }
    if(!open4){
        createWall(scene, [x, z+3], [x, z+6]); 
    }
    
    return letter(x,z,x+6);
}

function createF(scene, x, z, open1, open2, open3, open4){
    //left wall
    createWall(scene, [x, z], [x, z+3]);
    createWall(scene, [x, z+6], [x, z+9]);

    //top wall
    createWall(scene, [x+3,z+9], [x+6, z+9]);

    //right side, first point
    createWall(scene, [x+6, z+9], [x+6, z+6]);
    createWall(scene, [x+6, z+6], [x+3, z+6]);

    //right side, second point
    createWall(scene, [x+6, z+3], [x+3, z+3]);

    //right side, final
    createWall(scene, [x + 3, z + 3], [x + 3, z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'F');


    if(!open1){
        createWall(scene, [x, z+9], [x+3, z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+6], [x+6, z+3]);
    }
    if(!open3){
        createWall(scene, [x+3, z], [x, z]);
    }
    if(!open4){
        createWall(scene, [x, z+3], [x, z+6]); 
    }
    
    return letter(x,z,x+6);

}

function createG(scene, x, z, open1, open2, open3, open4) {

    //Outer right wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer left wall
    createWall(scene, [x + 9, z + 3], [x + 9, z + 4.5]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);

    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]); 

    //Inner G
    createWall(scene, [x + 3, z + 3], [x + 6, z + 3]);
    createWall(scene, [x + 3, z + 6], [x + 9, z + 6]);
    //createWall(scene, [x + 6, z + 3], [x + 6, z + 4.5]);
    createWall(scene, [x + 3, z + 3], [x + 3, z + 6]);
    createWall(scene, [x + 9, z + 4.5], [x + 4.5, z + 4.5]);
    createWall(scene, [x + 4.5, z + 4.5], [x + 4.5, z + 3.75]);
    createWall(scene, [x + 4.5, z + 3.75], [x + 6, z + 3.75]);
    createWall(scene, [x + 6, z + 3.75], [x + 6, z + 3]);
    createWall(scene, [x + 6, z + 3], [x + 3, z + 3]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'G');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z], [x + 9, z + 3]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x, z, x+9);
}

function createH(scene, x, z, open1, open2, open3, open4){
    //Outer left wall
    createWall(scene, [x,z], [x,z+3]);
    createWall(scene, [x,z+6], [x,z+9]);

    //Outer right wall
    createWall(scene, [x+9,z], [x+9,z+3]);
    createWall(scene, [x+9,z+6], [x+9,z+9]);

    //Middle bottom part
    createWall(scene, [x+3,z], [x+3,z+3]);
    createWall(scene, [x+3,z+3], [x+6, z+3]);
    createWall(scene, [x+6, z+3], [x+6, z]);
    createWall(scene, [x+6, z], [x+9, z]);

    //Middle top part
    createWall(scene, [x+3,z+9], [x+3,z+6]);
    createWall(scene, [x+3,z+6], [x+6, z+6]);
    createWall(scene, [x+6, z+6], [x+6, z+9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'H');

    if(!open1){
        createWall(scene, [x,z+9], [x+3,z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+3], [x+9,z+6]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3,z]);
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
    }

    return letter(x,z,x+9);
}

function createI(scene, x, z, open1, open2, open3, open4){

    //Outer bottom wall      
    //Outer right wall
    createWall(scene, [x+6,z], [x+6,z+3]);
    createWall(scene, [x+6,z + 6], [x+6,z+9]);
    //Outer top wall      
    //Outer left wall
    createWall(scene, [x+3,z], [x+3,z+3]);
    createWall(scene, [x+3, z + 6], [x+3, z + 9]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'I');
    
     if(!open1) {
        createWall(scene, [x+3,z+9], [x+6,z+9]);
    }
    if(!open2){
        createWall(scene, [x+6,z+3], [x+6,z+6]);
    }
    if(!open3){
        createWall(scene, [x+3,z], [x+6,z]);        
    }
    if(!open4){
        createWall(scene, [x+3,z+3], [x+3,z+6]);
    }       
    

    return letter(x,z,x+3);
}

function createJ(scene, x, z, open1, open2, open3, open4){

    //Outer bottom wall
	createWall(scene, [x,z], [x+3,z]);
	createWall(scene, [x+6,z], [x+9,z]);       
    //Outer right wall
    createWall(scene, [x+9,z], [x+9,z+3]);
    createWall(scene, [x+9,z + 6], [x+9,z+9]);
    //Outer top wall      
    //Outer left wall
    createWall(scene, [x,z], [x,z+3]);
	//inner top wall
    createWall(scene, [x,z+6], [x+3,z+6]);
	//inner left wall
	createWall(scene, [x+3, z+3], [x+3, z+6]);
	//inner bottom wall
	createWall(scene, [x+3, z+3], [x+6, z+3]);
	//inner right wall
	createWall(scene, [x + 6, z + 3], [x + 6, z + 9]);

	//CREATE FLOOR
	createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'J');
    
     if(!open1) {
        createWall(scene, [x+6,z+9], [x+9,z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+3], [x+9,z+6]);
    }
    if(!open3){
        createWall(scene, [x+3,z], [x+6,z]);        
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
    }       
    

    return letter(x,z,x+9);
}

function createK(scene, x, z, open1, open2, open3, open4){
    //Left wall
    createWall(scene, [x,z], [x,z+3]);
    createWall(scene, [x,z+6], [x,z+9]);

    //Inner walls
    createWall(scene, [x+3,z+9], [x+3,z+6]);
    createWall(scene, [x+3,z], [x+3, z+3]);

    //Upper point
    createWall(scene, [x+3,z+6], [x+9,z+9]);
    createWall(scene, [x+6, z+4.5], [x+9, z+6]);


    //Lower point
    createWall(scene, [x+3,z+3], [x+9, z]);
    createWall(scene, [x+6, z+4.5], [x+9, z+3]);
    createWall(scene, [x + 9, z], [x + 9, z + 3]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'K');


    if(!open1){
        createWall(scene, [x,z+9], [x+3,z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+6], [x+9,z+9]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3, z]);
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
    }

    return letter(x, z, x+9);
}

function createL(scene, x, z, open1, open2, open3, open4){

    //Outer right wall
    createWall(scene, [x,z], [x,z+3]);        
    createWall(scene, [x,z+6], [x,z+9]);        

    createWall(scene, [x+3,z+3], [x+3,z+9]);

    //Outer bottom wall
    createWall(scene, [x+3,z], [x+6,z]);

    createWall(scene, [x + 3, z + 3], [x + 6, z + 3]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'L');        

    if(!open1) {
        createWall(scene, [x,z+9], [x+3,z+9]);
    }
    if(!open2){
        createWall(scene, [x+6,z], [x+6,z+3]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3,z]);        
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
    }

    return letter(x,z,x+6);
}

function createM(scene, x, z, open1, open2, open3, open4) {

    //Outer right wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer left wall
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);

    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 9, z + 9], [x + 6, z + 9]);

    //Inner M
    createWall(scene, [x + 3, z], [x + 3, z + 6]);
    createWall(scene, [x + 6, z], [x + 6, z + 6]);
    createWall(scene, [x + 3, z + 6], [x + 4.5, z + 4.5]);
    createWall(scene, [x + 6, z + 6], [x + 4.5, z + 4.5]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'M');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x + 9, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x,z,x+9);
}

function createN(scene, x, z, open1, open2, open3, open4) {

    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);
    createWall(scene, [x + 6, z + 4], [x + 6, z + 9]);
    createWall(scene, [x + 3, z], [x + 3, z + 5]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);
    createWall(scene, [x + 3, z + 5], [x + 6, z]);
    createWall(scene, [x + 3, z + 9], [x + 6, z + 4]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'N');

    if (!open1) {
        createWall(scene, [x, z+ 9], [x +3, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x, z], [x + 3, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x,z,x+9);
}

function createO(scene, x, z, open1, open2, open3, open4) {

    //Outer right wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer left wall
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);

    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //Inner O
    createWall(scene, [x + 3, z + 3], [x + 6, z + 3]);
    createWall(scene, [x + 3, z + 6], [x + 6, z + 6]);
    createWall(scene, [x + 6, z + 3], [x + 6, z + 6]);
    createWall(scene, [x + 3, z + 3], [x + 3, z + 6]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'O');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x,z,x+9);
}

function createP(scene, x, z, open1, open2, open3, open4){


    //Upper wall
    createWall(scene, [x, z+9], [x+3, z+9]);

    //Right wall
    createWall(scene, [x+6,z+9], [x+6,z+7.5]);
    createWall(scene, [x+3, z], [x+3, z+4.5]);
    
    //left wall
    createWall(scene, [x,z+9], [x,z+6]);
    createWall(scene, [x,z+3], [x,z]);

    //bottom of upper part
    createWall(scene, [x+6, z+4.5], [x+3, z+4.5]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'P');

    if(!open1){
        createWall(scene, [x+3, z+9],[x+6,z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+7.5], [x+6,z+4.5]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3,z]);
    }
    if(!open4){
        createWall(scene, [x,z+3],[x,z+6]);
    }
    
    return letter(x,z,x+6);
}

function createQ(scene, x, z, open1, open2, open3, open4) {

    //Outer right wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer left wall
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);

    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //Inner Q
    createWall(scene, [x + 3, z + 3], [x + 4.5, z + 3]);
    createWall(scene, [x + 4.5, z + 3], [x + 4.5, z + 4.5]);
    createWall(scene, [x + 4.5, z + 4.5], [x + 6, z + 4.5]);
    createWall(scene, [x + 3, z + 6], [x + 6, z + 6]);
    createWall(scene, [x + 6, z + 4.5], [x + 6, z + 6]);
    createWall(scene, [x + 3, z + 3], [x + 3, z + 6]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'Q');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x, z, x+9);
}

function createR(scene, x, z, open1, open2, open3, open4){
    //Upper wall
    createWall(scene, [x, z+9], [x+3, z+9]);

    //Right wall
    createWall(scene, [x+6,z+9], [x+6,z+7.5]);
    createWall(scene, [x+3, z], [x+3, z+1.5]);
    
    //left wall
    createWall(scene, [x,z+9], [x,z+6]);
    createWall(scene, [x,z+3], [x,z]);

    //bottom of upper part
    createWall(scene, [x+6, z+4.5], [x+3, z+4.5]);

    //point
    createWall(scene, [x+3, z+4.5], [x+9, z]);
    createWall(scene, [x+3, z+1.5], [x+5, z]);
    createWall(scene, [x + 5, z], [x + 9, z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'R');


    if(!open1){
        createWall(scene, [x+3, z+9],[x+6,z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+7.5], [x+6,z+4.5]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3,z]);
    }
    if(!open4){
        createWall(scene, [x,z+3],[x,z+6]);
    }
    
    return letter(x,z,x+9);
}

function createS(scene, x, z, open1, open2, open3, open4){
  //Outer left wall
    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    //Outer right wall
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);

    //Outer bottom wall
    createWall(scene, [x, z], [x + 3, z]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    //Outer top wall
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //Inner S
    createWall(scene, [x, z + 3], [x + 3, z + 3]);
    createWall(scene, [x + 3, z + 3], [x + 6, z + 3]);
    createWall(scene, [x + 3, z + 6], [x + 6, z + 6]);
    createWall(scene, [x + 6, z + 6], [x + 9, z + 6]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'S');

    if (!open1) {
        createWall(scene, [x + 3, z + 9], [x + 6, z + 9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 3], [x + 9, z + 6]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 3], [x, z + 6]);
    }

    return letter(x,z,x+9);
}

function createT(scene, x, z, open1, open2, open3, open4){

    //Outer bottom wall       
    //Outer right wall
    //Outer top wall 
	createWall(scene, [x,z+9], [x+3,z+9]);
	createWall(scene, [x+6,z+9], [x+9,z+9]);     
    //Outer left wall
	//inner top wall
    createWall(scene, [x,z+6], [x+3,z+6]);
	createWall(scene, [x+6,z+6], [x+9,z+6])
	//inner left wall
	createWall(scene, [x+3, z], [x+3, z+6]);
	//inner bottom wall
	//inner right wall
	createWall(scene, [x + 6, z], [x + 6, z + 6]);

	//CREATE FLOOR
	createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'T');
    
     if(!open1) {
        createWall(scene, [x+3,z+9], [x+6,z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+6], [x+9,z+9]);
    }
    if(!open3){
        createWall(scene, [x+3,z], [x+6,z]);        
    }
    if(!open4){
        createWall(scene, [x,z+6], [x,z+9]);
    }       
    

    return letter(x,z,x+9);
}
function createU(scene, x, z, open1, open2, open3, open4){

    //Outer bottom wall
	createWall(scene, [x,z], [x+3,z]);
	createWall(scene, [x+6,z], [x+9,z]);       
    //Outer right wall
    createWall(scene, [x+9,z], [x+9,z+3]);
    createWall(scene, [x+9,z + 6], [x+9,z+9]);
    //Outer top wall 
	createWall(scene, [x, z+9], [x+3, z+9]);     
    //Outer left wall
    createWall(scene, [x,z], [x,z+3]);
	createWall(scene, [x,z+6], [x,z+9]);
	//inner top wall
	//inner left wall
	createWall(scene, [x+3, z+3], [x+3, z+9]);
	//inner bottom wall
	createWall(scene, [x+3, z+3], [x+6, z+3]);
	//inner right wall
	createWall(scene, [x + 6, z + 3], [x + 6, z + 9]);

	//CREATE FLOOR
	createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'U');
    
     if(!open1) {
        createWall(scene, [x+6,z+9], [x+9,z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+3], [x+9,z+6]);
    }
    if(!open3){
        createWall(scene, [x+3,z], [x+6,z]);        
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
    }       
    

    return letter(x,z,x+9);
}

function createV(scene, x, z, open1, open2, open3, open4){
    //Left half
    createWall(scene, [x, z+9], [x+1,z+6]);
    createWall(scene, [x+2, z+3], [x+3,z]);
    createWall(scene, [x+3,z+9], [x+4.5,z+4.5]);

    //Right half
    createWall(scene, [x+9, z+9], [x+8,z+6]);
    createWall(scene, [x+7, z+3], [x+6,z]);
    createWall(scene, [x+6, z+9], [x+4.5,z+4.5])

    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'V');

    if(!open1){
        createWall(scene, [x, z+9], [x+3, z+9]);
    }
    if(!open2){
        createWall(scene, [x+8, z+6], [x+7, z+3]);
    }
    if(!open3){
        createWall(scene, [x+3,z], [x+6,z]);
    }
    if(!open4){
        createWall(scene, [x+1, z+6], [x+2, z+3]);
    }

    return letter(x, z, x+9);
}

function createW(scene, x, z, open1, open2, open3, open4){
    //Outer right wall
    createWall(scene, [x, z+9], [x, z + 6]);
    createWall(scene, [x, z + 3], [x, z]);
    //Outer left wall
    createWall(scene, [x + 9, z+9], [x + 9, z+6]);
    createWall(scene, [x + 9, z + 3], [x + 9, z]);

    //Outer bottom wall
    createWall(scene, [x, z+9], [x + 3, z+9]);
    
    //Outer top wall
    createWall(scene, [x, z ], [x + 3, z]);
    createWall(scene, [x + 9, z], [x + 6, z]);

    //Inner M
    createWall(scene, [x + 3, z+9], [x + 3, z + 3]);
    createWall(scene, [x + 6, z+9], [x + 6, z + 3]);
    createWall(scene, [x + 3, z + 3], [x + 4.5, z + 4.5]);
    createWall(scene, [x + 6, z + 3], [x + 4.5, z + 4.5]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'W');

    if (!open1) {
        createWall(scene, [x + 9, z+9], [x + 6, z+9]);
    }
    if (!open2) {
        createWall(scene, [x + 9, z + 6], [x + 9, z + 3]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x, z + 6], [x, z + 3]);
    }

    return letter(x,z,x+9);
}

function createX(scene, x, z, open1, open2, open3, open4){

    //left side
    createWall(scene, [x+3,z+4.5], [x,z+9]);
    createWall(scene, [x+1, z+1.5], [x, z]);

    //right side
    createWall(scene, [x+8,z+7.5], [x+9,z+9]);
    createWall(scene, [x+6, z+4.5], [x+9, z]);

    //bottom triangle
    createWall(scene, [x+3, z], [x+4.5, z+2]);
    createWall(scene, [x+6, z], [x+4.5, z+2]);
    
    //top triangle
    createWall(scene, [x+3, z+9], [x+4.5, z+7]);
    createWall(scene, [x+6, z+9], [x+4.5, z+7]);

    //extra bits
    createWall(scene, [x+6, z+9], [x+9, z+9]);
    createWall(scene, [x, z], [x + 3, z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'X');

    if(!open1){
        createWall(scene, [x, z+9], [x+3, z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+4.5], [x+8, z+7.5]);
    } 
    if(!open3){
        createWall(scene, [x+6, z], [x+9, z]);
    }
    if(!open4){
        createWall(scene, [x+1, z+1.5], [x+3, z+4.5]);
    }

    
    return letter(x,z,x+9);
}

function createY(scene, x, z, open1, open2, open3, open4){
    //bottom piece
    createWall(scene, [x+3,z], [x+3,z+4]);
    createWall(scene, [x+6,z], [x+6,z+4]);

    //left point
    createWall(scene, [x+3,z+4], [x+2,z+5.7]);
    createWall(scene, [x+4.5,z+6], [x+3,z+9]);

    //right point
    createWall(scene, [x+6, z+4], [x+7, z+5.7]);
    createWall(scene, [x+4.5,z+6], [x+6,z+9]);

    //top
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'Y');

    if(!open1){
        createWall(scene, [x+3, z+9], [x,z+9]);
    }
    if(!open2){
        createWall(scene, [x+7, z+5.7], [x+9, z+9]);
    } 
    if(!open3){
        createWall(scene, [x+3,z], [x+6, z]);
    }
    if(!open4){
        createWall(scene, [x+2, z+5.7], [x, z+9]);
    }

    
    return letter(x,z,x+9);
}

function createZ(scene, x, z, open1, open2, open3, open4){
    //Outer Wall
    createWall(scene, [x,z],[x,z+3]);
    createWall(scene, [x,z+3],[x+6,z+6]);
    createWall(scene, [x+6,z+6],[x,z+6]);
    createWall(scene, [x,z+9],[x+6,z+9]);
    createWall(scene, [x+9,z+9],[x+9,z+6]);
    createWall(scene, [x+9,z+6],[x+3,z+3]);
    createWall(scene, [x+3,z+3],[x+9,z+3]);
    createWall(scene, [x+3,z],[x+9,z]);

    //CREATE FLOOR
    createFloor(scene, [x, z], [x + 3, z], [x + 9, z + 9], [x + 6, z + 9], 'Z');

    if(!open1){
        createWall(scene, [x+6, z+9], [x+9, z+9]);
    }
    if(!open2){
        createWall(scene, [x+9,z+3], [x+9, z]);
    } 
    if(!open3){
        createWall(scene, [x, z], [x+3, z]);
    }
    if(!open4){
        createWall(scene, [x, z+6], [x,z+9]);
    }  

    return letter(x,z,x+9);
}

function vidSetup(scene){
    TEXTURES_ON = true; 
    if(TEXTURES_ON){
        BUMP_TEXTURE = new BABYLON.Texture("songsie29normal.jpg", scene);
        TEXTURE = new BABYLON.Texture("songsie29.jpg", scene);
        GROUND_BUMP_TEXTURE = new BABYLON.Texture("ground_bump2.jpg", scene);
    }
}

function createWall(scene, begin, end){
    var height = 30;
    var scaling = .1;

    var midx = (begin[0]+end[0])/2.0;
    var midz = (begin[1]+end[1])/2.0;

//    var box = new BABYLON.Mesh.CreateBox("crate", scaling, scene);
//    box.material = new BABYLON.StandardMaterial("Mat", scene);
	var box = new BABYLON.Mesh.CreateBox("crate", scaling, scene);
	var bumpMaterial = new BABYLON.StandardMaterial("texture1", scene);
	box.material = bumpMaterial;
	//box.material.bumpTexture.pictureTexture = new BABYLON.Texture("songstexture1.jpg", scene);
    if(TEXTURES_ON){
	    box.material.bumpTexture = BUMP_TEXTURE;
        box.material.emissiveColor = new BABYLON.Color3(.3, .15, 0);
        box.material.diffuseTexture = TEXTURE;
        box.material.diffuseTexture.backFaceCulling = false;
    }else{
       box.material.emissiveColor = new BABYLON.Color3(.7,.7,.7); 
    }
    box.position = new BABYLON.Vector3(midx, (height/2)*scaling, midz);
    box.checkCollisions = true;
    box.scaling.y = height;
    

    var xDist = begin[0]-end[0];
    var zDist = begin[1]-end[1];
    box.scaling.x = (Math.sqrt(xDist*xDist+zDist*zDist))*10;
    box.rotation.y = 0-(Math.atan(zDist/xDist));
} 

function createFloor(scene, p1, p2, p3, p4, Alphabet) {
    var midx = (p1[0] + p3[0]) / 2.0;
    var midz = (p1[1] + p3[1]) / 2.0;

    var xDist = p1[0] - p3[0];
    var zDist = p1[1] - p3[1];


    // Code for Creating Ground
    var floor = BABYLON.Mesh.CreateGround("ground1", xDist, zDist, 2, scene);
    floor.position = new BABYLON.Vector3(midx, .1, midz);
    floor.material = new BABYLON.StandardMaterial("Mat", scene);
    floor.material.specularColor = new BABYLON.Color3(.2, .2, .298);
    if(TEXTURES_ON){
        floor.material.bumpTexture = GROUND_BUMP_TEXTURE;
    }
    var color = null;
    if (Alphabet == 'A') {
        color = new BABYLON.Color3(0.03529411764705882, 0.14901960784313725, 0.26666666666666666);
    }
    else if (Alphabet == 'B') {
        color = new BABYLON.Color3(0.4745098039215686, 0.5529411764705883, 0.2823529411764706);
    }
    else if (Alphabet == 'C') {
        color = new BABYLON.Color3(0.4588235294117647, 0.20392156862745098, 0.11764705882352941);
    }
    else if (Alphabet == 'D') {
        color = new BABYLON.Color3(0.8666666666666667, 0.615686274509804, 0.12156862745098039);
    }
    else if (Alphabet == 'E') {
        color = new BABYLON.Color3(0.9529411764705882, 0.7843137254901961, 0.16862745098039217);
    }
    else if (Alphabet == 'F') {
        color = new BABYLON.Color3(0.8509803921568627, 0.6392156862745098, 0.49019607843137253);
    }
    else if (Alphabet == 'G') {
        color = new BABYLON.Color3(0.21176470588235294, 0.12156862745098039, 0.1450980392156863);
    }
    else if (Alphabet == 'H') {
        color = new BABYLON.Color3(0.6941176470588235, 0.34509803921568627, 0.01568627450980392);
    }
    else if (Alphabet == 'I') {
        color = new BABYLON.Color3(0.807843137254902, 0.7450980392156863, 0.2);
    }
    else if (Alphabet == 'J') {
        color = new BABYLON.Color3(0.9098039215686274, 0.3764705882352941, 0.3137254901960784);
    }
    else if (Alphabet == 'K') {
        color = new BABYLON.Color3(0.44313725490196076, 0.5372549019607843, 0.7176470588235294);
    }
    else if (Alphabet == 'L') {
        color = new BABYLON.Color3(0.9686274509803922, 0.9333333333333333, 0.5215686274509804);
    }
    else if (Alphabet == 'M') {
        color = new BABYLON.Color3(0.6823529411764706, 0.5450980392156862, 0.6627450980392157);
    }
    else if (Alphabet == 'N') {
        color = new BABYLON.Color3(0.6745098039215687, 0.611764705882353, 0.30980392156862746);
    }
    else if (Alphabet == 'O') {
        color = new BABYLON.Color3(0.8117647058823529, 0.8431372549019608, 0.6431372549019608);
    }
    else if (Alphabet == 'P') {
        color = new BABYLON.Color3(0.792156862745098, 0.7333333333333333, 0.27450980392156865);
    }
    else if (Alphabet == 'Q') {
        color = new BABYLON.Color3(0.6235294117647059, 0.1843137254901961, 0.13725490196078433);
    }
    else if (Alphabet == 'R') {
        color = new BABYLON.Color3(0.7686274509803922, 0.8313725490196079, 0.8313725490196079);
    }
    else if (Alphabet == 'S') {
        color = new BABYLON.Color3(0.3803921568627451, 0.40784313725490196, 0.20784313725490197);
    }
    else if (Alphabet == 'T') {
        color = new BABYLON.Color3(0.6235294117647059, 0.5607843137254902, 0.5019607843137255);
    }
    else if (Alphabet == 'U') {
        color = new BABYLON.Color3(0.3137254901960784, 0.08235294117647059, 0.0196078431372549);
    }
    else if (Alphabet == 'V') {
        color = new BABYLON.Color3(0.30980392156862746, 0.4235294117647059, 0.40784313725490196);
    }
    else if (Alphabet == 'W') {
        color = new BABYLON.Color3(0.7803921568627451, 0.5686274509803921, 0.4196078431372549);
    }
    else if (Alphabet == 'X') {
        color = new BABYLON.Color3(0.8156862745098039, 0.6352941176470588, 0.25882352941176473);
    }
    else if (Alphabet == 'Y') {
        color = new BABYLON.Color3(0.9294117647058824, 0.8588235294117647, 0.7725490196078432);
    }
    else if (Alphabet == 'Z') {
        color = new BABYLON.Color3(0.7607843137254902, 0.803921568627451, 0.8274509803921568);
    }

    floor.material.diffuseColor = color;

}  
