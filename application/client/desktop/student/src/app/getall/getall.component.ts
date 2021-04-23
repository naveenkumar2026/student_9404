import { Component, OnInit } from '@angular/core';
import { GetallService } from './getall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.scss'],
})

export class GetallComponent implements OnInit {
    columnDefs: any = [];
    public students = {
        Student_Name: '',
        Student_DOB: '',
        Student_Address: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallService: GetallService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./create'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}