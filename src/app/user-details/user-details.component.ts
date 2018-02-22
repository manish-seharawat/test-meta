import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public details: any;
  public user_image: string = '';
  public user_name: string = '';
  public user_since: string = '';
  public user_status: string = '';
  public user_status_image: string = '';
  public user_total_spend: number = 0;
  public user_year_spend:number =0;
  public user_year_spend_per:any = "";
  public user_storage_spend: number = 0;
  public user_storage_spend_per: any = '';
  public user_server_spend: number = 0;
  public user_server_spend_per: any = '';
  constructor(public getService: GetDetailsService) {
    this.getService.detailsMessage.subscribe(message => this.details = message);
    console.log(this.details);
    if (this.details != "default") {
      this.user_image = this.details.userDetails.user_logo;
      this.user_name = this.details.userName;
      this.user_since = this.details.userDetails.partner_since;
      this.user_status = this.details.userDetails.status_now;
      this.user_year_spend = this.details.userDetails.year_wise_usage ;
      if(this.user_status=="bronze")
      this.user_status_image = "../assets/LevelBronze.svg";
      if(this.user_status=="gold")
      this.user_status_image = "../assets/LevelGold.svg";
      if(this.user_status=="silver")
      this.user_status_image = "../assets/LevelSilver.svg";
      if(this.user_status=="diamond")
      this.user_status_image = "../assets/LevelDiamond.svg";
      if(this.user_status=="platinum")
      this.user_status_image = "../assets/LevelPlatinum.svg";

      this.user_total_spend = this.details.userDetails.total;
      this.user_storage_spend = this.details.userDetails.storage_wise_usage;
      this.user_server_spend = this.details.userDetails.server_wise_usage;
      this.user_year_spend_per=((this.user_year_spend/this.user_total_spend)*100)+"%";
      console.log(this.user_year_spend_per);
      this.user_storage_spend_per=((this.user_storage_spend/150000)*100)+"%";
      console.log(this.user_storage_spend_per);
      this.user_server_spend_per=((this.user_server_spend/150000)*100)+"%";
      console.log(this.user_server_spend_per);
    }
  }

  ngOnInit() {
    console.log(this.details);
  }

}
