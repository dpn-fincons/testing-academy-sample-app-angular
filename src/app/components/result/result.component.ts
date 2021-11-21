import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user-service';

enum Status {
  UNQUALIFIED = 'Unqualified',
  QUALIFIED = 'Qualified',
  NEW = 'New',
  NEGOTIATION = 'Negotiation',
  RENEWAL = 'Renewal',
  PROPOSAL = 'Proposal',
}

class Result {
  description: string;
  value: number;
  status: Status;
  verified: boolean;

  constructor(description: string, value: number, status: Status, verified: boolean) {
    this.description = description;
    this.value = value;
    this.status = status;
    this.verified = verified;
  }
}

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  results: Result[] = [];

  statuses: any[] = [];

  private subscription?: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.statuses = [
      {label: 'Unqualified', value: Status.UNQUALIFIED},
      {label: 'Qualified', value: Status.QUALIFIED},
      {label: 'New', value: Status.NEW},
      {label: 'Negotiation', value: Status.NEGOTIATION},
      {label: 'Renewal', value: Status.RENEWAL},
      {label: 'Proposal', value: Status.PROPOSAL}
    ]

    this.subscription = this.userService.loggedUser.subscribe(user => {
      if (user) {
        if (user.username === 'cucumber') {
          this.results = [
            new Result('Course Testing', 12.34, Status.UNQUALIFIED, true),
            new Result('Course Java', 12.34, Status.UNQUALIFIED, true),
            new Result('Customers SBB', 24.65, Status.QUALIFIED, true),
            new Result('Customer Sky', 33.3, Status.PROPOSAL, false),
            new Result('Travel 1', 44.5, Status.NEW, false),
            new Result('Travel 2', 56.3, Status.NEGOTIATION, false),
            new Result('Travel 3 ', 52.34, Status.RENEWAL, false),
            new Result('Travel 4', 13.33, Status.PROPOSAL, false),
          ];
        } else {
          this.results = [];
          for (let i = 1; i <= user.username.length; i++) {
            this.results.push(new Result('Result ' + i, 1.1 * i, Status.NEW, true))
          }
        }
      } else {
        this.results = [];
      }
    });

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
