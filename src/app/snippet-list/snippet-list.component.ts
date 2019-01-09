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
0000          JSR $POST
              JMP $BOOTSTRAP
$POST:        JSR $RENT_OFFICE
              JSR $REGISTER_COMPANY
              RET
      `
    },
    {
      lang: 'c',
      retro: '1990',
      lines: `
startFun(struct Employees *employees) {
  while (1) {
    struct Employee *newEmployee =
      malloc(sizeof struct Employee);
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
00200 APPLY, ATLAS-KNOW-HOW, CNX PARTNER=TYX $
00225 PERFORM, 'SELL-PAWS' $
00250 VERIFY, (TESTPROGRAM WORKSON MODERN-ATLAS) $
00300 IF, NOGO, THEN $
00350    PERFORM, 'SELL-TRANSFORMER' $ "
`
    },
    {
      lang: 'java',
      retro: '2003',
      lines: `
}
catch(EvictedError e) {
      Munich.BaierbrunnerStr.moveTo(this);
}
      `
    },
    {
      lang: 'idl',
      retro: '2015',
      lines: `
%bmodule% CompanyLeadership {
  %benum% prev {bunsen, fritzler, zeh};
  %benum% next {daxwanger, krenzke};
  %binterface% IMbo {
    %bvoid% transfer(%bout% prev owners1, %bin% next owners2);
  }
      `
    },
    {
      lang: 'html',
      retro: '2017',
      lines: `
&lt;%Bbutton% %O(%%Lclick%%O)%%W=%%O"focusOn($event, 'SPA')"%&gt;
  &lt;%Bimg% %Lsrc%%W=%%O"assets/SPA/fancyMarketingImage.png"%&gt;
&lt;/%Bbutton%&gt;
      `
    },
    {
      lang: 'rest',
      retro: '2018',
      lines: `
%bGeneral%
  %bRequest URL:% https://www.sekas.de/formula/for/success.html
  %bRequest Method:% GET
  %bStatus Code:% %I% 304 Not Modified
      `
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
