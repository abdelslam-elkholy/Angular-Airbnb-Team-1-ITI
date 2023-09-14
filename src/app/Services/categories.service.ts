import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../Models/ICategory';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/category`)
      .pipe((res: any) => res.data.categories);
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/category/${id}`)
      .pipe((res: any) => res.data.category);
  }

  addCategory(category: ICategory) {
    return this.httpClient.post(`${environment.BaseApiURL}/category`, category);
  }

  deleteCategory(id: string) {
    return this.httpClient.delete(`${environment.BaseApiURL}/category/${id}`);
  }

  updateCategory(category: ICategory) {
    return this.httpClient.patch(
      `${environment.BaseApiURL}/category${category._id}`,
      category
    );
  }
}
