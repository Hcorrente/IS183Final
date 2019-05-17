import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Array<Object>;

  constructor(
    private bookService: UserService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.users = [];
    await this.getUsers();
  }

  async getUsers() {
    this.users = await this.userService.getUser();
  }

  goToCreate() {
    this.router.navigate(['user-create']);
  }

  async deleteBook(id: string) {
    const resp = await this.userService.deleteUser(id);
    if (resp) {
      this.users = this.users.filter((user) => {
        return user['id'] !== id;
      });
    }
  }

}
