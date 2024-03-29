import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnChanges  {
@Input() stock: number;
@Input() productId: number;
@Output() stockValueChange  = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  stockValueChanged() {
    this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue });
    this.updatedstockvalue = null;
  }
  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'blue';
    } else {
      this.color = 'yellow';
    }
  }

}
