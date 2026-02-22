import { Component } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from "@angular/router";
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-menu',
  imports: [RouterLink, MatSidenavContainer, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, RouterOutlet],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {

}
