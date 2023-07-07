class arboles{
    constructor(){
        this.arbol1= [];
        this.arbol2= [];
        this.boleanos;
        this.y;
        this.x;
    }

    crearArbol(array){
        let y, x;
        //Iteramos de arriba hacia abajo y de izquierda a derecha
        for (y = 1; y <= 4; y++){
            for (x = 1; x <= Math.pow(2, y-1); x++){
              array.push({y, x});
            }
          }
    }

    funcionCompararArboles(arbol1, arbol2){
        for (let i = 0; i < arbol1.length; i++){
            if (arbol1[i].x === arbol2[i].x && arbol1[i].y === arbol2[i].y){ //Si el elemento no corresponde a la posición actual...
                this.boleanos = true;
            }else{
                this.boleanos = false;
                return this.boleanos;
            }
        }

        if(this.boleanos){
            console.log("Los arboles binarios son iguales");
        }
    }

    copiaArbol(arbolACopiar, Copia){
        let y;
        for (y = 0; y < arbolACopiar.length; y++){
              Copia[y] = ({y: arbolACopiar[y].y, x: arbolACopiar[y].x});
          }
         return Copia;
    }

    visualizarNodos(arbol, nodo){
        for(let i=0; i<arbol.length; i++){
            if(nodo.x === arbol[i].x && nodo.y === arbol[i].y){
                console.log("Rama padre: " + JSON.stringify(arbol[i]));
                console.log(`Ramas hijas: ${JSON.stringify(arbol[i+i+1])} y ${JSON.stringify(arbol[i+i+2])}`);
                break;
            }
        }
    }

    contarHojas(arbol){
        let hojas;
        if(arbol.length%2 != 0){
            hojas = arbol.length - 1;
            hojas /= 2;
            hojas++;
        return hojas;
        }else if(arbol.length%2 == 0){
            hojas =  arbol.length / 2;
            return hojas;
        }
    }

    pruebas(){
        return this.arbol1[2];
    }
}


const arregloArboles = new arboles();

//Ejercicio 1
arregloArboles.crearArbol(arregloArboles.arbol1);
arregloArboles.crearArbol(arregloArboles.arbol2);
arregloArboles.funcionCompararArboles(arregloArboles.arbol1, arregloArboles.arbol2)

//Ejercicio 2
let arbolParaCopiar = [];
console.log(arregloArboles.copiaArbol(arregloArboles.arbol1, arbolParaCopiar));

//Ejercicio 3
console.log(arregloArboles.visualizarNodos(arregloArboles.arbol1, ({y:1, x:1})));
console.log(arregloArboles.pruebas());

//Ejercicio 4 
console.log(`Este árbol tiene un total de: ${arregloArboles.contarHojas(arregloArboles.arbol1)} hojas`);