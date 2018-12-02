import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'Contacts',
    component: ContactsComponent,
    data: { title: 'Contacts List' },
  },
  {
    path: 'Contacts-detail/:id',
    component: ContactsDetailComponent,
    data: { title: 'Contacts Details' },
  },
  {
    path: 'Contacts-create',
    component: ContactsCreateComponent,
    data: { title: 'Create Contacts' },
  
  },
  {
    path: 'Contacts-edit/:id',
    component: ContactsEditComponent,
    data: {title: 'Edit Boards' },
  },
  { path: '', redirectTo: '/Contacts', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactsCreateComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
