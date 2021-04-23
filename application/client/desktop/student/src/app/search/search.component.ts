import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent implements OnInit {
    public students = {
        Student_Name: '',
        Student_DOB: '',
        Student_Address: '',
    }

    constructor (
        private searchService: SearchService,
    ) { }

    ngOnInit() {
    }
}