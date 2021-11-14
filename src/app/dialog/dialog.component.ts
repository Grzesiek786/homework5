import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @ViewChild('childComponentPlacement', {read: ViewContainerRef})
  public childComponentPlacement: ViewContainerRef;

  public onClose$: Subject<boolean> = new Subject<boolean>();

  public onOverlayClick(mouseEvent: MouseEvent): void {
    this.onClose$.next(true);
  }

  public onDialogClick(mouseEvent: MouseEvent): void {

  }

}
