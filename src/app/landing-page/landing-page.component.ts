import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{
  
  links = [
    {linkName: "Why giffgaff",profileIcon: ''},
    {linkName: "Our offer", profileIcon: ''},
    {linkName: "Community", profileIcon: ''},
    {linkName: "Help", profileIcon: ''},
    {linkName: "My giffgaff", profileIcon: 'person-svgrepo-com.svg'}
  ];
  constructor(){}

  ngOnInit(): void {

  }

}
