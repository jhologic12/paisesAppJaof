import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
  
})
export class PorCapitalComponent {

  termino: string = '';
  
  

  paises: Country[] = [];

  hayError: boolean = false;

  name: string = 'Por Capital';
  constructor(private paisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).
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
