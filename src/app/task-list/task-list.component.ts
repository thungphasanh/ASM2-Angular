import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../itask';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  list_task:ITask[]=[]
  constructor(private route:ActivatedRoute , private router:Router, private d:DulieuService){}
  ngOnInit():void{
    this.layTask();
  }

  layTask():void{
    this.d.layTask().subscribe(data => {
      this.list_task = data as ITask[];
    })
  }
  themTask():void{
    this.router.navigate(['/task/them'])
  }
  suaTask(id:number):void{
    this.router.navigate([`/task/sua/${id}`]);
  }
  xoaTask(id: number): void {
    if (confirm('Ban co muon xoa khong?')) {
      this.d.xoaTask(id).subscribe(() => {
        this.layTask();
      });
  }
} 

}
