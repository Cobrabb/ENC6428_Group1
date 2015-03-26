function renderLetterGrid(scene, stringGrid){

    var letterGrid = [];
    for(var i=0; i<stringGrid.length; i++){
        letterGrid[i] = [];
        for(var j=0; j<stringGrid[i].length; j++){
            if(stringGrid[i][j]!="0"){
                letterGrid[i][j] = smartCreateLetter(scene, stringGrid, i, j);
            }else{
                letterGrid[i][j] = null;
            }
        }
    }

    return letterGrid;

}

function smartCreateLetter(scene, grid, xpos, ypos){
    //the size of one 'square' in the grid
    var gU = 12;

    var north = (ypos+1<grid[xpos].length && grid[xpos][ypos+1]!="0");
    var east = (xpos+1<grid.length && grid[xpos+1][ypos]!="0");
    var south = (ypos-1>0 && grid[xpos][ypos-1]!="0");
    var west = (xpos-1>0 && grid[xpos-1][ypos]!="0");

    //The if not case creates a 9 length wall on that side.
    //The elses create 3 length  wall attachements to connect the next letters walls
    if(!north){
        createWall(scene, [xpos*gU, ypos*gU+9], [xpos*gU+9, ypos*gU+9]);
    }else{
        createWall(scene, [xpos*gU, ypos*gU+9], [xpos*gU, ypos*gU+12]);
        createWall(scene, [xpos*gU+9, ypos*gU+9], [xpos*gU+9, ypos*gU+12]);
    }
    if(!east){
        createWall(scene, [xpos*gU+9, ypos*gU], [xpos*gU+9, ypos*gU+9]);
    }else{
        createWall(scene, [xpos*gU+9, ypos*gU], [xpos*gU+12, ypos*gU]);
        createWall(scene, [xpos*gU+9, ypos*gU+9], [xpos*gU+12, ypos*gU+9]);
    }
    if(!south){
        createWall(scene, [xpos*gU, ypos*gU], [xpos*gU+9, ypos*gU]);
    }
    if(!west){
        createWall(scene, [xpos*gU, ypos*gU], [xpos*gU, ypos*gU+9]);
    }

    return createLetter(scene, grid[xpos][ypos], xpos*gU, ypos*gU, north, east, south, west);
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

function createA(scene, x, z, open1, open2, open3, open4){
    // Outer A wall
    createWall(scene, [x+1,z+3], [x+3, z+9]);
    createWall(scene, [x+6,z+9], [x+8, z+3]);
    createWall(scene, [x,z],[x+3,z]);

    //Inner Wall
    createWall(scene, [x+3,z], [x+4, z+3]);
    createWall(scene, [x+4,z+3], [x+5,z+3]);
    createWall(scene, [x+5,z+3], [x+6,z]);

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
    createWall(scene, [x+3,z], [x+6, z]);


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
    createWall(scene, [x+3, z+3], [x+3, z]);


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
    createWall(scene, [x+6, z+9], [x+9, z+9]);

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
    createWall(scene, [x+3,z], [x+3,z+3]);
    createWall(scene, [x+3,z + 6], [x+3,z+9]);
    //Outer top wall      
    //Outer left wall
    createWall(scene, [x,z], [x,z+3]);
    createWall(scene, [x,z+6], [x,z+9]);  
    
     if(!open1) {
        createWall(scene, [x,z+9], [x+3,z+9]);
    }
    if(!open2){
        createWall(scene, [x+3,z+3], [x+3,z+6]);
    }
    if(!open3){
        createWall(scene, [x,z], [x+3,z]);        
    }
    if(!open4){
        createWall(scene, [x,z+3], [x,z+6]);
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
	createWall(scene, [x+6, z+3], [x+6, z+9]);
    
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
    createWall(scene, [x+9,z], [x+9,z+3]);


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

    createWall(scene, [x+3,z+3], [x+6,z+3]);        

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
    createWall(scene, [x+5, z], [x+9,z]);


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
	createWall(scene, [x+6, z], [x+6, z+6]);
    
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
	createWall(scene, [x+6, z+3], [x+6, z+9]);
    
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

    createWall(scene, [x+6, z+9], [x+9, z+9]);

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
    createWall(scene, [x, z], [x+3, z]);

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
    createWall(scene, [x+6, z+9], [x+9, z+9]);

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
    VIDEO_ON = false; 
    if(VIDEO_ON){
        VIDEO = new BABYLON.VideoTexture("video", ["Dots1B.mp4"], 256, scene, false);
    }
}

function createWall(scene, begin, end){
    var height = 30;
    var scaling = .1;

    var midx = (begin[0]+end[0])/2.0;
    var midz = (begin[1]+end[1])/2.0;

    var box = new BABYLON.Mesh.CreateBox("crate", scaling, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    if(VIDEO_ON){
        box.material.diffuseTexture = VIDEO;
        box.material.diffuseTexture.backFaceCulling = false;
    }
    box.material.emissiveColor = new BABYLON.Color3(.7,.7,.7); 
    box.position = new BABYLON.Vector3(midx, (height/2)*scaling, midz);
    box.checkCollisions = true;
    box.scaling.y = height;
    

    var xDist = begin[0]-end[0];
    var zDist = begin[1]-end[1];
    box.scaling.x = (Math.sqrt(xDist*xDist+zDist*zDist))*10;
    box.rotation.y = 0-(Math.atan(zDist/xDist));
} 

function createRoof(scene, p1, p2, p3, p4){
    var height = 30;
    var scaling = .1;

    var midx = (p1[0]+p3[0])/2.0;
    var midz = (p1[1]+p3[1])/2.0;

    var box = new BABYLON.Mesh.CreateBox("crate", scaling, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    box.material.emissiveColor = new BABYLON.Color3(.7,.7,.7); 
    box.position = new BABYLON.Vector3(midx, (height)*scaling, midz);
    box.checkCollisions = true;
    

    var xDist = p1[0]-p3[0];
    var zDist = p1[1]-p4[1];
    box.scaling.x = xDist*10;
    box.scaling.z = zDist*10;


    var xDist2 = p1[0]-p2[0];
    var zDist2 = p1[1]-p2[1];
    box.rotation.y = 0-(Math.atan(zDist2/xDist2));
} 
