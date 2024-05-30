import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./core/components/header/header.component";
import { SidebarComponent } from "./core/components/sidebar/sidebar.component";
import { ContentComponent } from "./core/components/content/content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, ContentComponent]
})
export class AppComponent {
  title = 'client';
}
