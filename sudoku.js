
function hackPrintMatriz(maat){
	var ress="";
	for (var i=0;i<maat.length;i++){
		for (var j=0;j<maat.length;j++){
			ress=ress+maat[i][j]+" ";
		}
		// console.log(ress);
		ress=ress+"\n";
	}
	return ress;
}


function noConflicto(tablero,x,y,valor){
	//INDICES PARA MATRIZ DE SECTOR
	var xx=Math.floor(x/3);//saca los indices de los for para la el sector
	var yy=Math.floor(y/3);
	
	xx=xx*3;//saca los indices de los for para la el sector
	yy=yy*3;


	for (var i=0;i<9;i++){ //VERIFICANDO HORIZONTAL Y VERTICAL A LA VEZ 
		if (tablero[i][y]==valor && i!=x)
			return false;
		if (tablero[x][i]==valor && i!=y)
			return false;

	}

	for (xx;xx<xx+3;xx++){
		for (yy;yy<yy+3;yy++){
			if (tablero[xx][yy]==valor && (xx!=x || yy!=y))
				return false;
		}
	}
	return true;

}


function main(){
	var tablero=[
	[0,0,8,1,0,2,3,0,0],
	[0,0,3,0,8,7,5,0,0],
	[0,0,4,0,0,0,0,0,0],
	[0,0,0,2,0,0,0,0,0],
	[0,0,7,0,0,5,0,0,6],
	[2,0,0,7,0,6,9,4,0],
	[6,0,2,8,0,3,0,0,0],
	[0,0,0,5,6,0,8,0,2],
	[4,0,0,0,0,0,0,0,0]
	];
	console.log(hackPrintMatriz(tablero));
}

main();



function main(grin, x, y) {
	var disp=celdaDisponible(grid,x,y);
	var x=disp[0];
	var y=disp[1];
	if (x==-1 && y==-1) {
		//Listo
		return true
	}
	for(var i=)

		// TERMINAR !!!
}