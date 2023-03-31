import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap , tap} from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent  implements OnInit{
  
  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService : PaisService
    ){ }
  
  ngOnInit(): void {


    // this.activedRoute.params
    // .pipe(
    //   switchMap( ({id})  => this.paisService.getPaisPorAlpha( id)),
    //   tap (console.log)

    // )
    // .subscribe( pais => {
    //   return this.pais = pais;
    // } );




//Esta es una manera de realizar el obtener el id de la ruta y enviarlo a el metodo getPaisPorAlpha
    this.activedRoute.params
    .subscribe( ({id})=> {
      console.log(id);

      this.paisService.getPaisPorAlpha(id)
      .subscribe ( pais => {
        console.log( pais);
         this.pais = pais;

         console.log(this.pais);

         return this.pais;
      }
        )
    })





  }

}
