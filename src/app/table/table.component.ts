import { Component, OnInit } from '@angular/core';
import {Bike} from "src/bike";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private http:HttpClient) { }
  url = "https://localhost:44308/api/bikes"
  bikes: Bike[] = [];

  ngOnInit(): void {
 this.http.get<Bike[]>(this.url).subscribe((data:Bike[]) => {
   this.bikes = data;
 });
 
  }
  

}
