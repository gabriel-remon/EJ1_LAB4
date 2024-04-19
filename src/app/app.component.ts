import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  edad1 = "";
  edad2 = "";
  suma=0;
  promedio=0;

  calcular(){
    this.suma = parseInt(this.edad1) + parseInt(this.edad2);
    this.promedio= this.suma/2;
   
  }
  limpiar(){
 this.suma = 0;
 this.promedio=0
 this.edad1= ""
 this.edad2=""
  }

}
