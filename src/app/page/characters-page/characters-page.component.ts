
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/character.service';



@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  characters:any = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
   this.change(1)
  }

  change(page:number){
    this.charactersService.getCharacters(page).subscribe((res:any) => {
    this.characters = res.results
  })
}}
