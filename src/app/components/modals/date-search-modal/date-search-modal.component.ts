import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-search-modal',
  templateUrl: './date-search-modal.component.html',
  styleUrls: ['./date-search-modal.component.scss']
})
export class DateSearchModalComponent implements OnInit {

  selected: Date | null;

  constructor() { }

  ngOnInit(): void {
  }

  opened: boolean = false

  toggle(): void {
    this.opened? this.opened = false : this.opened = true;
  }

}
