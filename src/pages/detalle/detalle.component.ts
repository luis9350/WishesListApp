import { Component, OnInit } from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {Lista} from '../../app/clases/listas';
import {ListaItem} from '../../app/clases/lista-item';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx:number;
  lista:any;

  constructor(
      public navCtrl:NavController,
      public navParams:NavParams,
      public alertCtrl:AlertController,
      public _listaDeseos:ListaDeseosService
  ) {
    //console.log(this.navParams);
    this.idx=this.navParams.get("idx");
    this.lista=this.navParams.get("lista");
   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado=!item.completado;

    let todosMarcados=true;
    for( let item of this.lista.items ){
      if(!item.completado){
        todosMarcados=false;
        break;
      }
    }

    this.lista.terminada=todosMarcados;

    this._listaDeseos.actualizarData();
  }

  borrarItem(){

    let confirm = this.alertCtrl.create({
      title:this.lista.nombre,
      message: '¿Esta seguro de borrar la lista?',
      buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler:()=>{
            this._listaDeseos.eliminarLista(this.idx);
            //para regresar a la pagian anterior
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();

  }
}
