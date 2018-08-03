import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Localytics } from 'localytics-cordova';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    (Localytics as any).autoIntegrate(); // You can include your app key here if you don't want to use the Info.plist or AndroidManifst methods
    (Localytics as any).openSession(); // For Android, we might have missed the call to open a session by the time autoIntegrate is called. Don't worry, calling this will not open a second session.
    console.log('here');
    (Localytics as any).registerPush();
    (Localytics as any).upload();
    // document.addEventListener('deviceready', this.onDeviceReady, false);
  }

  // onDeviceReady() {
  //   (Localytics as any).autoIntegrate(); // You can include your app key here if you don't want to use the Info.plist or AndroidManifst methods
  //   (Localytics as any).openSession(); // For Android, we might have missed the call to open a session by the time autoIntegrate is called. Don't worry, calling this will not open a second session.
  //   console.log('here');
  //   (Localytics as any).registerPush();

  // }
}
