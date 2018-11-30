import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { listeners } from 'cluster';

@Component({
  selector: 'cover-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss'],
  preserveWhitespaces: true
})
export class SnippetComponent implements OnInit {

  constructor() { }

  @Input()
  get lang(): string {
    return this.lines.lang;
  }

  @Input()
  get retro(): string {
    return this.lines.retro;
  }

  @Input()
  lines: any;

  get brokenLines(): Array<string> {
    if (this.lines && this.lines.lines) {
      const res = this.lines.lines.split('\n');
      return res.slice(1, res.length - 1);
    }
    return [];
  }

  ngOnInit() {
  }

}
