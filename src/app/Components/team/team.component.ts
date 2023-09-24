import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  members = [
    {
      name: 'Abdelslam Elkholy',
      linkedin: 'https://www.linkedin.com/in/abdelslam-elkholy-1b1b1a1b1/',
      github: 'https://github.com/abdelslam-elkholy',
      img: 'abdelslam.jpeg',
    },

    {
      name: 'Kariman Abdellatif',
      linkedin: 'https://www.linkedin.com/in/kariman-abd-elatif-2371b61a3/',
      github: 'https://github.com/KarimanOmar',
      img: 'kariman.jpeg',
    },

    {
      name: 'Mariam Hesham',
      linkedin: 'https://www.linkedin.com/in/mariam-hesham-m2352/',
      github: 'https://github.com/mariamhesham414',
      img: 'mariam.jpeg',
    },

    {
      name: 'Mohamed Abdelrahman',
      linkedin: 'https://www.linkedin.com/in/mohammed-abdl-rahman-/',
      github: 'https://github.com/Mohammad-abdo',
      img: 'mohamed.jpeg',
    },
  ];
}
