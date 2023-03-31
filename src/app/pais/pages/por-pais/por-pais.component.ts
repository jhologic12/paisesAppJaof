import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
  
})
export class PorPaisComponent {

  termino: string = '';

  paises: Country[] = [];

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
    //Crear sugerencias 
  }



}



