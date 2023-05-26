import {Component, OnInit} from '@angular/core';
import { get } from 'scriptjs';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {timer} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  currentRoute: string;
  title = 'GestionEvenementFront';
  constructor(private router: Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.getJavascript();
        window.scrollTo(0,0);
      }})
  }


  getJavascript() {
    get("assets/js/jquery.min.js", () => {
      get("assets/js/aos.js", () => {
        get("assets/js/bootstrap.min.js", () => {
          get("assets/js/bootstrap-datepicker.js", () => {
            get("assets/js/jquery.animateNumber.min.js", () => {
              get("assets/js/jquery.easing.1.3.js", () => {
                get("assets/js/jquery.magnific-popup.min.js", () => {
                  get("assets/js/owl.carousel.min.js", () => {
                    get("assets/js/popper.min.js", () => {
                      get("assets/js/jquery.stellar.min.js", () => {
                        get("assets/js/jquery.waypoints.min.js", () => {
                          get("assets/js/jquery-migrate-3.0.1.min.js", () => {
                            get("assets/js/scrollax.min.js", () => {
                              get("assets/js/main.js", () => {
                                get("assets/js/plugins/chartjs.min.js", () => {
                                  get("assets/js/github-buttons.js", () => {
                                    get("assets/js/dashboard-chart.js", () => {
                                      get("assets/js/argon-dashboard.min.js", () => {

                                      });
                                    });
                                  });
                                });  // All scripts have finished loading
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
}

