import { Component, OnInit } from '@angular/core';

interface Snippet {
  lang: string;
  retro: string;
  lines: string;
}

@Component({
  selector: 'cover-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.scss']
})
export class SnippetListComponent implements OnInit {

  snippets: Array<Snippet> = [
    {
      lang: 'asm',
      retro: '1980',
      lines: `
0000          jsr $POST
$POST:        jsr $RENT_OFFICE
              jsr $REGISTER_COMPANY
              ret
      `
    },
    {
      lang: 'c',
      retro: '1990',
      lines: `
startFun(struct Employees *employees) {
  while (1) {
    struct Employee *newEmployee = malloc(sizeof struct Employee);
    add(newEmployee, employees);
    train(newEmployee);
  }
}
`
    },
    {
      lang: 'atlas',
      retro: '1991',
      lines: `
LEARN "ATLAS" $
SELL "PAWS"   $
      `
    },
    {
      lang: 'java',
      retro: '2003',
      lines: `
catch(EvictedError e) {
      Munich.BaierbrunnerStr.moveTo(this);
}
      `
    },
    {
      lang: 'idl',
      retro: '2015',
      lines: `
module CompanyLeadership {
  %benum% prev {bunsen, fritzler, zeh};
  %benum% next (daxwanger, krenzke);
  %binterface% IMbo {
    %bvoid% transfer(%bout% prev owners1, %bin% next owners2);
  }
}
      `
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
