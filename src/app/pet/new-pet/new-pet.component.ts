import { Component, OnInit, ViewContainerRef } from '@angular/core';
 import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  breeds = [
    { value: 'Terrier', viewValue: 'Terrier' },
    { value: 'PittBull', viewValue: 'PittBull' }
  ];
  newPet: any = {};
  pets: any = [];
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
         this.toastr.setRootViewContainerRef(vcr);
      }

  ngOnInit() {
  }

  addPet() {
    if (this.newPet.Name) {
      this.pets.push(this.newPet);
    }
    this.newPet = {};
    this.toastr.success('You are awesome!', 'Success!');
  }
  cancel() {
    this.newPet = {};
  }

}
