import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrCodeService } from '../../Services/curr-code.service';
import { DatabaseService } from '../../Services/database.service';

@Component({
  selector: 'app-display-code',
  standalone: true,
  imports: [],
  templateUrl: './display-code.component.html',
  styleUrl: './display-code.component.css',
  host: {ngSkipHydration: 'true'}
})
export class DisplayCodeComponent {

  itemId:any

  currPlatform:string = ""

  allCodes:any=[]
  constructor(private activatedRoute: ActivatedRoute,private currCode:CurrCodeService,private databaseService:DatabaseService,private router:Router) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.itemId = params.get('id');
      console.log('Item ID:', this.itemId);
    });
    this.currPlatform = this.currCode.getPlatform()
    if(this.currPlatform == "leetcode"){
      this.databaseService.getDocByIdLeetcode(this.itemId).then((data:any)=>{
        this.allCodes = data;
      });
    }
    else if(this.currPlatform == "gfg"){
      this.databaseService.getDocByIdGFG(this.itemId).then((data:any)=>{
        this.allCodes = data;
      });
    }
    if(this.currPlatform == "codechef"){
      this.databaseService.getDocByIdCodeChef(this.itemId).then((data:any)=>{
        this.allCodes = data;
      });
    }
    console.log(this.currPlatform)
    // console.log(this.allCodes)
  }


  textToCopy:string = "hi, this is text"
  copy(){
      navigator.clipboard.writeText(this.allCodes.codecode).then(() => {
        console.log('Text copied to clipboard');
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
  }

  deleteCode(){
    if(this.currPlatform == "leetcode"){
      this.databaseService.deleteDocLeetcode(this.itemId)
    }
    else if(this.currPlatform == "gfg"){
      this.databaseService.deleteDocGFG(this.itemId)
    }
    if(this.currPlatform == "codechef"){
      this.databaseService.deleteDocCodeChef(this.itemId)
    }
    this.router.navigate(["/code"])
  }
}
