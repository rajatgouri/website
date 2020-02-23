import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar', {static: true}) navbar : ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.navbarFixedTop()
  }

  
  navbarFixedTop() {
    window.onscroll = function() {myFunction()};

    var navbar = this.navbar.nativeElement;
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }
}
