import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  public produits:any;

  constructor(private catService:CatalogueService) { }

  ngOnInit(): void {

  }

  onGetProducts(){
    this.catService.getProducts()
      .subscribe(data=>{
        this.produits=data;
      },err=>{
        console.log(err);
      });
  }

}
