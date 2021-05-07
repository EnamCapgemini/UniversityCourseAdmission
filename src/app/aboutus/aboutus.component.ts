import { Component, OnInit } from '@angular/core';
import { aboutus } from 'src/model/aboutus';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aboutUs:aboutus[]=[
    {name:'Md Enam',role:'Team Leader',description:'Capgemini ID: 46059502',mailId:'enam@gmail.com'},
    {name:'Supratim',role:'Colleagues1',description:'Capgemini ID: 46060201',mailId:'supratim.sarkar@capgemini.com'},
    {name:'Pritam',role:'Colleagues2',description:'Capgemini ID: 46060215',mailId:'pritam@gmail.com'},
    {name:'Milan',role:'Colleagues3',description:'Capgemini ID: 46059162',mailId:'milan@gmail.com'},
    {name:'Ayush',role:'Colleagues4',description:'Capgemini ID: 46060216',mailId:'ayush@gmail.com'},
    {name:'Anirban',role:'Colleagues5',description:'Capgemini ID: 46060210',mailId:'anirban@gmail.com'}
  ]

}
