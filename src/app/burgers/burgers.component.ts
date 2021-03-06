import { Component, OnInit, Input } from '@angular/core';
import { BurgersService } from '../typescript-angular-client-generated/api/burgers.service';
@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  burgers: any[];

  constructor(private burgerService: BurgersService) { }
  
  ngOnInit(): void {
    let burgers = this.burgerService.listBurgers().subscribe( (value) => {this.burgers=value});
  }

}
