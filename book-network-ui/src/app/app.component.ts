import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActivateAccountModule } from './pages/activate-account/activate-account.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ActivateAccountModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book-network-ui';
}
