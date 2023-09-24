import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../Models/ICategory';
import { environment } from '../../environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/categories`)
      .pipe(map((res: any) => res.data.categories));
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.httpClient
      .get<any>(`${environment.BaseApiURL}/categories/${id}`)
      .pipe(map((res: any) => res.data.category));
  }

  addCategory(category: ICategory) {
    return this.httpClient.post(
      `${environment.BaseApiURL}/categories`,
      category
    );
  }

  deleteCategory(id: string) {
    return this.httpClient.delete(`${environment.BaseApiURL}/categories/${id}`);
  }

  updateCategory(category: ICategory) {
    return this.httpClient.patch(
      `${environment.BaseApiURL}/categories${category._id}`,
      category
    );
  }
}
