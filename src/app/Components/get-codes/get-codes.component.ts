import { Component } from '@angular/core';
import { DatabaseService } from '../../Services/database.service';
import { CurrCodeService } from '../../Services/curr-code.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-get-codes',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './get-codes.component.html',
  styleUrl: './get-codes.component.css',
  host: {ngSkipHydration: 'true'}
})
export class GetCodesComponent {

  
  constructor(private databaseService:DatabaseService,private currCodeService:CurrCodeService,private router:Router){}
  allCodes:any[] = []

  getPlatformNow = ""
  ngOnInit(){
    this.getPlatformNow = this.currCodeService.getPlatform()
    if(this.getPlatformNow == "leetcode"){
      this.databaseService.getCodesLeetcode().then((data:any)=>{
        this.allCodes = data;
      });
    }
    else if(this.getPlatformNow == "gfg"){
      this.databaseService.getCodesGFG().then((data:any)=>{
        this.allCodes = data;
      });
    }
    else if(this.getPlatformNow == "codechef"){
      this.databaseService.getCodesCodechef().then((data:any)=>{
        this.allCodes = data;
      });
    }
  }

  deletecode(itemId:any){
    if(this.getPlatformNow == "leetcode"){
      this.databaseService.deleteDocLeetcode(itemId)
    }
    else if(this.getPlatformNow == "gfg"){
      this.databaseService.deleteDocGFG(itemId)
    }
    if(this.getPlatformNow == "codechef"){
      this.databaseService.deleteDocCodeChef(itemId)
    }
    this.router.navigate(["/code"])
  }
}
