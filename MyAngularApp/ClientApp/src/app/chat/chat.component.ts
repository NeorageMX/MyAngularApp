import { Component } from '@angular/core';

@Component(
  {
    selector: "app-chat",
    templateUrl:"./chat.component.html"
  }
)

export class ChatComponent {
  public nombre = "Neorage"

  public CambiarNombre() {
    if (this.nombre == "Neorage") {
      this.nombre = "Jair Miranda"
    }
    else {
      this.nombre = "Neorage"
    }
    
  }

}
