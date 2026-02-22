import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Menu } from "../menu/menu";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatSidenavContainer, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('healthconnect_front');
}
