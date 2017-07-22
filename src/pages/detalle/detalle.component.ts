import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
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
      public _listaDeseos:ListaDeseosService
  ) {
    //console.log(this.navParams);
    this.idx=this.navParams.get("idx");
    this.lista=this.navParams.get("lista");
   }

  ngOnInit() {}

  actualizar(item:ListaItem){
    item.completado=!item.completado;

    this._listaDeseos.actualizarData();
  }
}
