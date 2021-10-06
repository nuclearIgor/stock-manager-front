import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {NameSearchModalComponent} from "./name-search-modal/name-search-modal.component";
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(public dialog: MatDialog,
              public router: Router,
              private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches){
        this.sidenav.mode = 'over'
        this.sidenav.close()
      }
      else {
        this.sidenav.mode = 'side'
        this.sidenav.open()
      }
    })
  };


  navigate(): void {
    this.router.navigate([''])
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(NameSearchModalComponent)

    dialogRef.afterClosed().subscribe( (res) => {

      let res2 = res.split(' ')
      let res3 = res2.join('-')

      let res4 = res3.split('-')
      let res5 = res4.join(' ')
      console.log(`res2: ${res2}, res3: ${res3}, res4: ${res4}, res5: ${res5}`)
      this.router.navigate([`/product/${res3}`])
      if(res !== "noaction"){
      };
    })
  };

}
