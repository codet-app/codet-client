import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [CodeService]
})
export class ViewComponent {
  public channel: any;
  public comment: any = false;
  public code: any;
  public lang: String;
  public needPassword = false;
  public wrongPassword = false;
  public password: any;
  public show = false;
  public newMessage = false;
  public chat = [];

  constructor(private router: ActivatedRoute, private codeService: CodeService, private route: Router) {
    this.router.params.subscribe(params => {
      this.channel = params['code'];

      this.codeService.get(params['code']).subscribe(
        res => {
          this.code = res.result.code;
          this.lang = res.result.lang;

          if (res.result.comment !== undefined) {
            this.comment = res.result.comment;
          }

          if (res.result.chat !== undefined) {
            this.chat = res.result.chat;
          }
        },
        error => {
          if (error.status === 401) {
            this.needPassword = true;
          } else if (error.status === 404) {
            this.route.navigate(['/404']);
          }
        }
      );
    });
  }

  public setPassword() {
    this.codeService.get(this.channel, this.password).subscribe(
      res => {
        this.code = res.result.code;
        this.lang = res.result.lang;

        this.needPassword = false;
        this.wrongPassword = false;
      },
      error => {
        if (error.status === 403) {
          this.wrongPassword = true;
        }
      }
    );
  }

  public showChat(event: any) {
    this.show = event;
  }

  public onMessage(event) {
    this.newMessage = !this.newMessage;
  }
}
