import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular';

@Component({
  selector: 'app-master-view',
  imports: [IgxRadioGroupDirective, IgxRadioComponent, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public radioGroupVar?: number = 1;
  public value: any = 1;
  public value1: any = 2;
  public value2: any = 3;
  public value3: any = 1;
  public value4: any = 2;
  public value5: any = 3;
}
