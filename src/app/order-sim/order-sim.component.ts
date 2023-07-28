import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-sim',
  templateUrl: './order-sim.component.html',
  styleUrls: ['./order-sim.component.scss']
})
export class OrderSimComponent implements OnInit {

  count = 0;
  gigObj:any;

  gigsPrices: any [] = [
    {img: "8-pound.svg" ,gig: "6 GB", limit: "Unlimited calls and texts", months: "This 18 month contract gives you the most data for your money and auto-renews each month. EU roaming included up to 5 GB."},
    {img: "10-pound.svg" ,gig: "25 GB", limit: "Unlimited calls and texts", months:"This 18 month contract gives you the most data for your money and auto-renews each month. EU roaming included up to 5 GB."},
    {img: "15-pound.svg" ,gig: "40 GB", limit: "Unlimited calls and texts", months:"This 18 month contract gives you the most data for your money and auto-renews each month. EU roaming included up to 5 GB."},
    {img: "20-pound.svg" ,gig: "120 GB", limit: "Unlimited calls and texts", months:"  This 18 month contract gives you the most data for your money and auto-renews each month. EU roaming included up to 5 GB."},
    {img: "25-pound.svg" ,gig: "120 GB Alwayson*", limit: "Unlimited calls and texts", months:"This 18 month contract gives you the most data for your money and auto-renews each month. *After 120 GB of data used you'll experience a reduced data speed of 384kbps kbps from 8am to Midnight. You may notice that activities which require high amounts of data, like HD video streaming, will be slower. Traffic Flow applies. EU roaming included up to 5 GB."},
    {img: "35-pound.svg" ,gig: "Unlimited data", limit: "Unlimited calls and texts", months:" This 18 month contract gives you the most data for your money and auto-renews each month."}
  ]
  constructor(){
  }

  ngOnInit(): void {
    this.gigObj = this.gigsPrices[this.count]
  }

  next(){
    this.count++;
    if(this.gigsPrices.length - 1 == this.count) this.count = 0;
    this.gigObj = this.gigsPrices[this.count];
  }
  previous(){
    this.count--;
    if(this.count <= 0) this.count = this.gigsPrices.length - 1; 
    console.log(this.count, this.gigsPrices.length - 1);
    this.gigObj = this.gigsPrices[this.count];
    console.log(this.gigObj);
  }

}
