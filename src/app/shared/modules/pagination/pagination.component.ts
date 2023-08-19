import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() nextValue!: boolean;
  @Output() pageEvent: EventEmitter<number> = new EventEmitter();
  page: any;

  setDisableClass(value: any) {
    if (value) {
      return 'page-item disabled';
    } else {
      return 'page-item';
    }
  }

}
