import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {ngSkipHydration: 'true'}
})
export class NavbarComponent {
  constructor(public autheticationService:AuthenticationService){}
}
