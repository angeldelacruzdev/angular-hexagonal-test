import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'alert-message',
  templateUrl: 'dialog-alert-message.component.html',
  styleUrl: 'dialog-alert-message.component.scss',
})
export class DialogAlertMessageComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {}

  openDialog() {}
}
