import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  toggle: any = true;
  @ViewChild('sideMenu') sideMenu!: ElementRef;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

}
