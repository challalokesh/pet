import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PetService } from "../../services/pet.service";
import { AppSettings } from "../../shared/app.settings";
import { SavePetPage } from "../save-pet/save-pet";

@IonicPage()
@Component({
  selector: 'page-pets-list',
  templateUrl: 'pets-list.html',
})
export class PetsListPage {
  pets: any;
  shouldShowCancel: boolean = true;
  searchName: string;
  searchStart: string;
  searchEnd: string;
  searchPet: any;
  pageTitle: string = AppSettings.PAGETITLE_PETSLIST;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private _petService: PetService,
    private alertCtrl: AlertController) {
  }


  edit(id) {
    this.navCtrl.push(SavePetPage, { id: id });
  }

  add() {
    this.navCtrl.push(SavePetPage);
  }

  searchPets() {
    this.searchPet = {
      "queryMap": {
        "name": this.searchName ? this.searchName : "",
        "startDate": new Date(this.searchStart),
        "endDate": new Date(this.searchEnd)
      },
      "pageNumber": AppSettings.CURRENT_PAGE,
      "pageSize": AppSettings.ITEMS_PER_PAGE,
      "sortOrder": [
        {
          "property": "id",
          "level": 1,
          "direction": "ASC"
        }
      ]
    };
    this.searchCall();
  }
  searchCall() {
    console.log("page:" + this.searchPet.pageNumber);
    this._petService.searchPets(this.searchPet).subscribe(petss => {
      this.pets = petss.content;
      if (this.pets.length == 0) {
        this.alertCtrl.create({
          title: 'No pets found!',
          subTitle: 'There are no pets with this search, Please try again with different search',
          buttons: ['OK']
        }).present();
      }
    });
  }

  doInfinite(infiniteScroll: any) {
    setTimeout(() => {
      this.searchPet.pageNumber += 1;
      console.log("page:" + this.searchPet.pageNumber);
      this._petService.searchPets(this.searchPet).subscribe(petss => {
        for (let entry of petss.content) {
          this.pets.push(entry);
        }
        infiniteScroll.complete();
      });
    }, 500);
  }


}
