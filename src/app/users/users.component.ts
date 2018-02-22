import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ExtraOptions, RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public allData:any;
  public details:any;
  constructor(private allDetails: GetDetailsService, private _http: Http,public router:Router) { 
    this.allDetails.detailsMessage.subscribe(message => this.details = message);
    if (this.details != "default") {
      this.allData=this.details;
    }
  }

  ngOnInit() {
    var allData = [];
    this.allDetails.getAllDetails().subscribe(
      response => {
        //console.log(response.data.bst_users[0]);
        Object.keys(response.data.bst_users[0]).forEach(key => {
          // console.log(key);
          // console.log(response.data.bst_users[0][key]);
          allData.push({userName:key,userDetails:response.data.bst_users[0][key]});
      });
      },
      err => {
        console.error("Error : " + err);
      });
      this.allData=allData;
      // console.log(this.allData);
  }
  showDetails(key) {
    this.allDetails.changeDetails(this.allData[key]);
    this.router.navigate(['/details', this.allData[key].userName]);
  }

}
