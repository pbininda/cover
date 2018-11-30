import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cover-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss'],
  preserveWhitespaces: true
})
export class LineComponent implements OnInit {

  @Input()
  line: string;

  constructor() { }

  ngOnInit() {
  }

}
