import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../typescript-angular-client-generated/api/burgers.service';

@Component({
  selector: 'app-burgers-view',
  templateUrl: './burgers-view.component.html',
  styleUrls: ['./burgers-view.component.css']
})
export class BurgersViewComponent implements OnInit {
  
  burgers: any[];
  
  constructor(private burgerService: BurgersService) { }



  ngOnInit() {
    let burgers = this.burgerService.listBurgers().subscribe( (value) => {this.burgers=value});
  }

}
