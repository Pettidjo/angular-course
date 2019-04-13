import { Component, OnInit } from '@angular/core';
import { CribsService } from './../services/cribs.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  propertyTypes: Array<string> = ['House', 'Condo', 'Duplex'];
  constructor(public CribsService: CribsService) { }

  ngOnInit() {
  }

  onCribSubmit(data): void {
    this.CribsService.addCrib(data);
  }

}
