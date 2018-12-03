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

  parsed(line: string) {
    return line.replace(/%([A-Za-z])([^%]*)%/g, '<span class="hl-$1">$2</span>');
  }
}
