import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-date-search-modal',
  templateUrl: './date-search-modal.component.html',
  styleUrls: ['./date-search-modal.component.scss']
})
export class DateSearchModalComponent implements OnInit {

  selected: Date | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate([''])
  }

  opened: boolean = false

  toggle(): void {
    this.opened? this.opened = false : this.opened = true;
  }

}
