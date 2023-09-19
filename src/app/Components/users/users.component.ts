import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/IUser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  deactivatedUsers: IUser[] = [];
  activeUsers: boolean = true;

  constructor(private userService: UserService, router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getDeactivatedUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  getDeactivatedUsers() {
    this.userService.getDeactivatedUsers().subscribe((users) => {
      this.deactivatedUsers = users;
      console.log(this.deactivatedUsers);
    });
  }

  activateUser(id: string) {
    this.userService.activatUser(id).subscribe((user) => {
      this.getAllUsers();
      this.getDeactivatedUsers();
    });
  }

  deactivateUser(id: string) {
    this.userService.deactivatUser(id).subscribe((user) => {
      this.getAllUsers();
      this.getDeactivatedUsers();
    });
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
      });
    }
  }
}
