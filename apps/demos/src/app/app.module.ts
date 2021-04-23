import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomBreakPointsProvider } from './bootstrap-breakpoints';
import { LayoutModule } from './layout';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./docs/docs.module').then((m) => m.DocsModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
    LayoutModule,
    PagesModule,
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
