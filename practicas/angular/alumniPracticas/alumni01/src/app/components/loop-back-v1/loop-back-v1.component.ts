import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back-v1',
  templateUrl: './loop-back-v1.component.html',
  styleUrls: ['./loop-back-v1.component.css']
})
export class LoopBackV1Component implements OnInit {

  valor: string = 'valor desde el ts';

  constructor() { }

  ngOnInit() {
  }

}
