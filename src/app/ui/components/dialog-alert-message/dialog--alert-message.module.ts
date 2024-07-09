import { MatButtonModule } from '@angular/material/button';
import { DialogAlertMessageComponent } from './dialog-alert-message.component';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  imports: [MatDialogModule, MatButtonModule],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
  declarations: [DialogAlertMessageComponent],
  exports: [DialogAlertMessageComponent],
})
export class DialogAlertMessageModule {}
