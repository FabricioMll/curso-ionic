import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.page.html',
  styleUrls: ['./teste.page.scss'],
})
export class TestePage implements OnInit {

  public nome_obj: string = "Fabrício Mateus";

  public valor: number = 5

  constructor() { }

  public mensagem():void{
    // alert("Executar mensagem")
  }

  ngOnInit() {
    this.mensagem()
  }

}
