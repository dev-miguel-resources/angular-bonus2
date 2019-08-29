import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit() {
    console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe( perfil => { //el signo peso hace alusión que es un obsersable
      console.log(perfil); //imprimo el perfil
    });
  }

}
