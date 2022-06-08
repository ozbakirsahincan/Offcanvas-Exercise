import { UserService } from './../services/user.service';
import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})

export class PostComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private AlertifyService: AlertifyService,
    private postService: PostService,
    private userService: UserService,

  ) { }
  path: string = "https://jsonplaceholder.typicode.com/"
  posts: Post[];
  users: User[];
  filterText :string = ""
  today = new Date(2022,6,2);

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userId"])
    })

  }

  getPosts(userId: any) {
    this.postService.getPosts(userId).subscribe(res => this.posts = res)
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => this.users = res)
  }

  addToFavorites(post: Post) {
    this.AlertifyService.success(`Added to favs ${post.title}`);

  }

}
