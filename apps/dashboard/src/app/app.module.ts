import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '@mfe-netlify/shared/auth';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          children: [
            {
              path: '',
              redirectTo: '/todo',
              pathMatch: 'full',
            },
            {
              path: 'todo',
              loadChildren: () =>
                import('todo/Module').then((m) => m.RemoteEntryModule),
              canActivate: [AuthGuard],
            },
            {
              path: 'login',
              loadChildren: () =>
                import('login/Module').then((m) => m.RemoteEntryModule),
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
