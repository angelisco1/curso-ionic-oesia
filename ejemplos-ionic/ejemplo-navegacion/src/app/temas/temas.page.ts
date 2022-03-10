import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
})
export class TemasPage implements OnInit {
  temasDisponibles = ['normal', 'azul']
  temaSeleccionado = 'normal'

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  cambiarTema(event: any) {
    this.renderer.removeClass(this.document.body, this.temaSeleccionado)
    this.temaSeleccionado = event.detail.value
    this.renderer.addClass(this.document.body, this.temaSeleccionado)
  }

}
