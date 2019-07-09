import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-back-v2',
  templateUrl: './loop-back-v2.component.html',
  styleUrls: ['./loop-back-v2.component.css']
})
export class LoopBackV2Component implements OnInit {

  saveValue: string = 'holaa';

  constructor() { }

  ngOnInit() {
  }

  saveText(e) {
    let textNew = e.target.value;
    console.log(textNew)
    this.saveValue = textNew;
  }

}
