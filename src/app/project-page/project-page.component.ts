import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterLink],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {

  portfolioItems = [
    { title: 'Tulips', category: 'Image', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img13.jpg' },
    { title: 'Instrument', category: 'Image', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img16.jpg' },
    { title: 'Plants', category: 'Vimeo', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img9.jpg', videoLink: 'https://vimeo.com/337293658' },
    { title: 'Strawberry', category: 'Youtube', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img8.jpg' },
    { title: 'Plant', category: 'Slider', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img10.jpg' },
    { title: 'Cosmetics', category: 'Video', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img11.jpg' },
    { title: 'Cactus', category: 'Soundcloud', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img12.jpg' },
    { title: 'Clock', category: 'Image', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img14.jpg' },
    { title: 'Mockup', category: 'Image', imageUrl: 'https://marketifythemes.net/wp/istanbul/1/wp-content/uploads/2024/05/img15.jpg' }
  ];

  selectedProject: any = null;

  openProject(item: any) {
    this.selectedProject = item;  // Set the selected item for display
  }

  closeProject() {
    this.selectedProject = null;  // Close the side panel
  }
}
