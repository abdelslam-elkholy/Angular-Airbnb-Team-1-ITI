import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(
    private categoryService: CategoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  addCategory() {
    this.router.navigate(['add-category', 'new']);
  }

  editCategory(id: string) {
    this.router.navigate(['add-category', id]);
  }

  deleteCategory(id: string) {
    if (confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe((category) => {
        this.categoryService.getAllCategories().subscribe((categories) => {
          this.categories = categories;
        });
      });
    }
  }
}
