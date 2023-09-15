import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  isNewCategory: boolean = true;
  successMessage: string | null = null;
  currentCategory: ICategory = {
    name: '',
  };
  constructor(
    private categoryService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoryId = this.activatedRoute.snapshot.paramMap.get('id');
    if (categoryId === 'new') {
      this.isNewCategory = true;
    } else {
      this.isNewCategory = false;
      this.categoryService
        .getCategoryById(categoryId!)
        .subscribe((category) => {
          this.currentCategory = category;
        });
    }
  }

  saveCategory(): void {
    if (this.isNewCategory) {
      this.categoryService.addCategory(this.currentCategory).subscribe(() => {
        this.successMessage = 'Category added successfully!';
        setTimeout(() => {
          this.router.navigate(['/categories']);
        }, 1500);
      });
    } else {
      this.categoryService
        .updateCategory(this.currentCategory)
        .subscribe(() => {
          this.successMessage = 'Changes saved successfully!';
          setTimeout(() => {
            this.router.navigate(['/categories']);
          }, 1500);
        });
    }
  }
}
