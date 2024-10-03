import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrCodeService } from '../../Services/curr-code.service';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
  host: {ngSkipHydration: 'true'}
})
export class CodeComponent {

  constructor(private currCodeService:CurrCodeService){}
  
  leetcodePlatform(){
    this.currCodeService.updatePlatform("leetcode")
  }

  gfgPlatform(){
    this.currCodeService.updatePlatform("gfg")
  }

  codechefPlatform(){
    this.currCodeService.updatePlatform("codechef")
  }
}
