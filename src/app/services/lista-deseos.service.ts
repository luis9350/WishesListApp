import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas:Lista[]=[];

  constructor() {
    /**
    let lista1=new Lista('Compras de Supermercados');
    let lista2=new Lista('Compras de Juegos');
    let lista3=new Lista('Cosas de la U');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);
    */
    this.cargarData();
    console.log("serivico nuevo");
  }

  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  cargarData(){
    if(localStorage.getItem("data")){
        this.listas=JSON.parse(localStorage.getItem("data"));
    }

  }

  agregarLista(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

}
