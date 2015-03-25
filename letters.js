function checkCollision(playerX, playerZ){
    if(playerX > this.xBegin && playerX < this.xEnd && playerZ > this.zBegin && playerZ < this.zEnd){
        //alert("TEST");
    }
}

//TODO: take and store 4 openings
function letter(x, z, xEnd){
    return new function(){
        this.xBegin = x;
        this.zBegin = z;
        this.xEnd = xEnd;
        this.zEnd = z+9;
        this.checkCollision = checkCollision;
    };
}


function opening(xBegin, xEnd, zBegin, zEnd){
    return new function(){
        this.xBegin = xBegin;
        this.xEnd = xEnd;
        this.zBegin = zBegin;
        this.zEnd = zEnd;
    }
};

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
        createWall(scene, [x, z], [x+1, z+3]);
    }
    if (!open2) {
        createWall(scene, [x+3, z+9], [x+6, z+9]);
    }
    if (!open3) {
        createWall(scene, [x+8,z+3], [x+9, z]);
    }
    if (!open4) {
        createWall(scene, [x+6,z],[x+9,z]);
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
        createWall(scene, [x, z+6], [x, z+9]);
    }
    if (!open2) {
        createWall(scene, [x,z+9],[x+3,z+9]);
    }
    if (!open3) {
        createWall(scene, [x+3,z+4.5],[x+6,z+2.25]);       
    }
    if (!open4) {
        createWall(scene, [x,z],[x+3,z]);
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

    //TODO: Add openings to this
    return letter(x,z,x+6);
}

function createE(scene, x, z, open1, open2, open3, open4){
    //alert("FUNCTION NOT DEFINED");
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

    return letter(x, z, x+6);
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
    

    return letter(x,z,x+6);
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

    return letter(x,z,x+6);
}

function createN(scene, x, z, open1, open2, open3, open4) {

    createWall(scene, [x, z], [x, z + 3]);
    createWall(scene, [x, z + 6], [x, z + 9]);
    createWall(scene, [x + 9, z], [x + 9, z + 3]);
    createWall(scene, [x + 9, z + 6], [x + 9, z + 9]);
    createWall(scene, [x + 6, z + 4], [x + 6, z + 9]);
    createWall(scene, [x, z + 9], [x + 3, z + 9]);
    createWall(scene, [x + 3, z], [x + 3, z + 5]);
    createWall(scene, [x + 6, z], [x + 9, z]);
    createWall(scene, [x + 6, z + 9], [x + 9, z + 9]);
    createWall(scene, [x + 3, z + 5], [x + 6, z]);
    createWall(scene, [x + 3, z + 9], [x + 6, z + 4]);

    if (!open1) {
        createWall(scene, [x + 9, z + 9], [x + 9, z + 6]);
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

    return letter(x,z,x+6);
}

function createO(scene, x, z, open1, open2, open3, open4) {

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
    alert("FUNCTION NOT DEFINED");
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

    return letter(x, z, x+6);
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
    alert("FUNCTION NOT DEFINED");
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
    

    return letter(x,z,x+6);
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
    

    return letter(x,z,x+6);
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
        createWall(scene, [x, z + 6], [x, z + 3]);
    }
    if (!open3) {
        createWall(scene, [x + 3, z], [x + 6, z]);
    }
    if (!open4) {
        createWall(scene, [x + 9, z + 6], [x + 9, z + 3]);
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
    //alert("FUNCTION NOT DEFINED");
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
        createWall(scene, [x, z+6], [x,z+9]);
    }
    if(!open2){
        createWall(scene, [x+6, z+9], [x+9, z+9]);
    } 
    if(!open3){
        createWall(scene, [x+9,z+3], [x+9, z]);
    }
    if(!open4){
        createWall(scene, [x, z], [x+3, z]);
    }  

    return letter(x,z,x+9);
}

function vidSetup(scene){
//   VIDEO = new BABYLON.VideoTexture("video", ["Pointillism1A.mp4"], 256, scene, false);
}

function createWall(scene, begin, end){
    var height = 30;
    var scaling = .1;

    var midx = (begin[0]+end[0])/2.0;
    var midz = (begin[1]+end[1])/2.0;

    var box = new BABYLON.Mesh.CreateBox("crate", scaling, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    /*box.material.diffuseTexture = VIDEO;
    box.material.diffuseTexture.backFaceCulling = false;
    box.material.emissiveColor = new BABYLON.Color3(1,1,1);*/
    box.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
    box.position = new BABYLON.Vector3(midx, (height/2)*scaling, midz);
    box.checkCollisions = true;
    box.scaling.y = height;
    

    var xDist = begin[0]-end[0];
    var zDist = begin[1]-end[1];
    box.scaling.x = (Math.sqrt(xDist*xDist+zDist*zDist))*10;
    box.rotation.y = 0-(Math.atan(zDist/xDist));
} 
