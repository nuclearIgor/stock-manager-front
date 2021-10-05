import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NameSearchModalComponent} from "./name-search-modal/name-search-modal.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public router: Router
              ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
     let dialogRef = this.dialog.open(NameSearchModalComponent)

    dialogRef.afterClosed().subscribe( (res) => {

      let res2 = res.split(' ')
      let res3 = res2.join('-')

      let res4 = res3.split('-')
      let res5 = res4.join(' ')
      console.log(`res2: ${res2}, res3: ${res3}, res4: ${res4}, res5: ${res5}`)
      if(res !== "noaction"){
        this.router.navigate([`/relatorios/${res3}`])
      };
        })
  };

}
