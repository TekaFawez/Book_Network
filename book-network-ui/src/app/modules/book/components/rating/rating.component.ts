import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Input() rating:number=0; 
  maxRating=5;
  public fullStars():number{
    return Math.floor(this.rating);
  }
  public hasHalfStar():Boolean{
    return this.rating % 1 == 0;
  }
public emptyStar():number{
  return this.maxRating -Math.ceil(this.rating);
}
}
