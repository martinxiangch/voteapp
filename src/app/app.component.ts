import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input('font-size') fontSize=300;
  @Input('font-weight') fontWeight='normal';
  title = 'app';
  public voteNumbers: string[] = ['1','2','3','5','8','13'];
  public sizeList = [100,150,200,300,500];
  public weightList = ['normal','bold','bolder','lighter'];
  selectedNumber:string="0"

  selected(number:string){
    this.selectedNumber=number;
  }
  selectsize(size:number){
    this.fontSize=size
  }
  selectweight(weight:string){
    this.fontWeight=weight
  }
}
