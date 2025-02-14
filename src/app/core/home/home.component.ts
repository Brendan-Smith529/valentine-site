import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const phrases = [
  "Please!!",
  "Pretty Please",
  "Try again !",
  "Naur",
  "No thank you :)"
]

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  moved: boolean = false;
  private lastNum: number = -1;

  ngAfterViewInit(): void {
    const button = document.getElementById("declineBtn");
    if (!button) return;

    // Set button as percentage to avoid conversion later
    const rect = button.getBoundingClientRect();
    button.style.left = `${(rect.left / window.innerWidth) * 100}%`;
    button.style.top = `${(rect.top / window.innerHeight) * 100}%`;

    button.addEventListener('mouseover', () => {
      if (!this.moved)
        this.moved = true;

      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });
  }

  declinePressed(): void {
    const button = document.getElementById('declineBtn');
    if (!button) return;

    let randNum: number = -1;
    do {
      randNum = Math.floor(Math.random() * phrases.length);
    } while(randNum === this.lastNum);
    this.lastNum = randNum;

    button.innerText = phrases[randNum];
  }
}
