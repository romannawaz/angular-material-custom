import { Component } from '@angular/core';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss'],
})
export class AssetComponent {
  typies: Type[] = [
    { value: 'market', viewValue: 'Market' },
    { value: 'limit', viewValue: 'Limit' },
    { value: 'stop', viewValue: 'Stop' },
    { value: 'stoplimit', viewValue: 'Stop/Limit' },
  ];

  defaultType = this.typies[0].value;

  takeProfit = false;
  stopLoss = false;
}
