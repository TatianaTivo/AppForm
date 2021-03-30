import { cadastrar } from './shared/cadastrar';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Cadastrar: cadastrar

  constructor(public  navCtrl : NavController) {
    this.Cadastrar = new cadastrar();
  }

  ngOnInit() {


   }
   salvar(){
     console.log(this.Cadastrar)

     this.Cadastrar = new cadastrar();
   };
}
