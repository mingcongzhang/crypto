import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';

@Component({
  selector: 'anms-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
  animations: [routerTransition]
})
export class AnalysisComponent implements OnInit {
  examples = [
    { link: 'todos', label: 'Todos' },
    { link: 'stock-market', label: 'Stock Market' },
    { link: 'theming', label: 'Theming' },
    { link: 'dashboard', label: 'Dashboard'},
    { link: 'performance', label: 'Performance'}
  ];

  constructor() {}

  ngOnInit() {}
}
