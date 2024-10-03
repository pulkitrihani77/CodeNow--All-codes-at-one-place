import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatabaseService } from '../../Services/database.service';
import { ProgramFormat } from '../../../model/codeSyntax';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-add-codes',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,RouterLinkActive],
  templateUrl: './add-codes.component.html',
  styleUrl: './add-codes.component.css',
  host: {ngSkipHydration: 'true'}
})
export class AddCodesComponent {
  constructor(private databaseService:DatabaseService,private router:Router){}
  topic = new FormControl("",[
    Validators.required
  ]);

  codecode = new FormControl("",[
    Validators.required
  ]);

  link = new FormControl("",[
    Validators.required
  ]);

  notes = new FormControl("",[
  ]);

  platform = new FormControl("",[
      Validators.required
  ]);

  codeForm = new FormGroup({
    topic : this.topic,
    codecode : this.codecode,
    link : this.link,
    notes : this.notes,
    platform:this.platform
  });

  createCode(){
    if(this.codeForm.value.platform == "leetcode"){
      this.databaseService.createCodeLeetcode(this.codeForm.value as ProgramFormat)

    }
    else if(this.codeForm.value.platform == "gfg"){
      this.databaseService.createCodeGFG(this.codeForm.value as ProgramFormat)
    }
    else if(this.codeForm.value.platform == "codechef"){
      this.databaseService.createCodeCodechef(this.codeForm.value as ProgramFormat)
    }
    this.codeForm.reset();
    console.log(this.codeForm.value)
  }
}
