// angular
import { Component } from '@angular/core';

// app
import profileSummary from '../../../../../assets/data/profile/summery';
import profileSkills from '../../../../../assets/data/profile/skills';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {
  public profileSummary = profileSummary;
  public profileSkills = profileSkills;
}
