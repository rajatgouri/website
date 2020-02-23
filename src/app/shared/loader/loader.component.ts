import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @ViewChild('loader', {static: true}) loader: ElementRef;
  constructor() { }

  ngOnInit(): void {

  }

  

}
