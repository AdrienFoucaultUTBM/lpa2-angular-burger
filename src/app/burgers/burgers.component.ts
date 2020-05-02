import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  @Input() id:number;
  @Input() name:string;
  @Input() price:number;
  @Input() image:string;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}
