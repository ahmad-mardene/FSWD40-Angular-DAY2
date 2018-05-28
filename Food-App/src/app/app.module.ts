import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig ={
 apiKey: "AIzaSyB4cwGo8CmC6HGTfcPpJoRWzFkchl3saVE",
    authDomain: "fruits-and-vegetables-55985.firebaseapp.com",
    databaseURL: "https://fruits-and-vegetables-55985.firebaseio.com",
    projectId: "fruits-and-vegetables-55985",
    storageBucket: "fruits-and-vegetables-55985.appspot.com",
    messagingSenderId: "889826758945"
};

@NgModule({
 declarations: [
   AppComponent
 ],
 imports: [
   BrowserModule,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireAuthModule,
   AngularFireDatabaseModule 
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
