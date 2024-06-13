import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { INhanVien } from '../inhan-vien';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DulieuService } from '../dulieu.service';

@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [CommonModule , FormsModule ],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent {
  list_nhan_vien:INhanVien[]=[]
  constructor(private route: ActivatedRoute, private d: DulieuService, private router: Router) {}

  ngOnInit(): void {
    this.layNhanVien();
  }

  layNhanVien(): void {
    this.d.layNhanVien().subscribe(data => {
      this.list_nhan_vien = data as INhanVien[];
    })
  }
  themNhanVien():void{
    this.router.navigate(['/nhan_vien/them'])
  }
  suaNhanVien(id:number):void{
    this.router.navigate([`/nhan_vien/sua/${id}`]);
  }
  xoaNhanVien(id: number): void {
    if (confirm('Bạn có chắc chắn muốn xóa NV này?')) {
      this.d.xoaNhanVien(id).subscribe(() => {
        this.layNhanVien();
      });
    }
  }
}
