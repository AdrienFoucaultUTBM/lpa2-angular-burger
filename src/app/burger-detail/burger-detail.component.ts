import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BurgersService } from '../typescript-angular-client-generated/api/burgers.service';
import { Location } from '@angular/common';
import { BurgerDetail } from '../typescript-angular-client-generated';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {
  burger;
  constructor(
    private route: ActivatedRoute,
    private burgerService: BurgersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBurger();
  }

  getBurger(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgerService.burgerDetail(id)
      .subscribe(burger => this.burger = burger)
  }

  goBack(): void {
    this.location.back();
  }

}
