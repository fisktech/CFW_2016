import {Page, NavParams, ViewController} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/modals/schedule/schedule-modal.html'
})
export class ScheduleModalPage {
  constructor(navParams: NavParams, viewCtrl: ViewController) {
    this.navParams = navParams;
    this.viewCtrl = viewCtrl;
  }

  dismiss(data) {
    //CLOSE MODAL WHEN USER CLICK DONE BUTTON
    this.viewCtrl.dismiss();
  }
}
