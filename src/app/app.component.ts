import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'admin';
  

  ngOnInit(): void {
    // initFlowbite();
  }
  isOpen = false;
  open = false;
  openNav() {
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = false;
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
