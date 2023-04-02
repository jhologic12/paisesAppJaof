import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [

    `
    li {

      cursor: pointer;

    }
    `
  ]
  
})
export class PorPaisComponent {

  termino: string = '';

  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  hayError: boolean = false;
  name: string = 'Por Pais';

  constructor(private paisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).
    subscribe((paises) => {
      
      console.log(this.termino);
      console.log(paises);
      this.paises= paises;

    } , (err)=>{
      this.hayError = true;
      this.paises = [];
    });
  }


  sugerencias( termino: string){

    this.hayError = false;
    
      this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,3));



  }



}



