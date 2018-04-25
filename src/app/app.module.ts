import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { FooterComponent } from './footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewComponent } from './view/view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material';

import 'brace';
import 'brace/theme/pastel_on_dark';
import 'brace/mode/sh';
import 'brace/mode/c_cpp';
import 'brace/mode/csharp';
import 'brace/mode/golang';
import 'brace/mode/sql';
import 'brace/mode/php';
import 'brace/mode/javascript';
import 'brace/mode/typescript';
import 'brace/mode/python';
import 'brace/mode/html';
import 'brace/mode/css';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ShareComponent } from './share/share.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmptyCodeComponent } from './snack-bars/empty-code/empty-code.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LanguageComponent } from './language/language.component';
import { PasswordComponent } from './password/password.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ChatComponent } from './chat/chat.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  { path: '', component: EditorComponent },
  { path: '404', component: NotfoundComponent },
  { path: ':code', component: ViewComponent },
  { path: ':code/share', component: ShareComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    FooterComponent,
    NotfoundComponent,
    ViewComponent,
    ShareComponent,
    EmptyCodeComponent,
    LanguageComponent,
    PasswordComponent,
    ToolbarComponent,
    ChatComponent,
    SidebarComponent
  ],
  entryComponents: [EmptyCodeComponent, LanguageComponent, PasswordComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AceEditorModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatToolbarModule,
    MatButtonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
