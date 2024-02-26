import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  // serverId: number = 10;
  // serverName: string = 'new name';
  @Input('userName') userName: string = '';
  secret: string = 'Luna';
  showSecret: boolean = false;
  log = [];

  resetBtn() {
    this.userName = '';
  }

  showSecretPass() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date(Date.now()));
  }
}
