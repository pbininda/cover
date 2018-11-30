import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SnippetComponent } from './snippet/snippet.component';
import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { LineComponent } from './line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    SnippetComponent,
    SnippetListComponent,
    LineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
