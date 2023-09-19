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
  hosts: IUser[] = [];
  activeUsers: string = 'active';

  constructor(private userService: UserService, router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.getDeactivatedUsers();
    this.getHosts();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  getDeactivatedUsers() {
    this.userService.getDeactivatedUsers().subscribe((users) => {
      this.deactivatedUsers = users;
    });
  }

  getHosts() {
    this.userService.getHosts().subscribe((users) => {
      this.hosts = users;
      console.log(this.hosts);
    });
  }

  activateUser(id: string) {
    if (confirm('Are you sure you want to Activate this user?')) {
      this.userService.activatUser(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
        this.getHosts();
      });
    }
  }

  deactivateUser(id: string) {
    if (confirm('Are you sure you want to deactivate this user?')) {
      this.userService.deactivatUser(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
        this.getHosts();
      });
    }
  }

  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
        this.getHosts();
      });
    }
  }

  makeHost(id: string) {
    if (confirm('Are you sure you want to make this user a host?')) {
      this.userService.makeHost(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
        this.getHosts();
      });
    }
  }

  deleteHost(id: string) {
    if (confirm('Are you sure you want to delete this host?')) {
      this.userService.deleteHost(id).subscribe((user) => {
        this.getAllUsers();
        this.getDeactivatedUsers();
        this.getHosts();
      });
    }
  }
}
