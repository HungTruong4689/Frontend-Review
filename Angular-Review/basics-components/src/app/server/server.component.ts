import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // serverId: number = 10;
  // serverName: string = 'new name';
  userName: string = '';
  secret: string = 'Luna';
  showSecret: boolean = false;

  resetBtn() {
    this.userName = '';
  }

  showSecretPass() {
    this.showSecret = !this.showSecret;
  }
}
