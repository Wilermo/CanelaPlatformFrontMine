import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PermisosUsuarioComponent } from './components/permisos-usuario/permisos-usuario.component';
import { GestionPlanesComponent } from './components/gestion-planes/gestion-planes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { PerfilPersonalComponent } from './components/perfil-personal/perfil-personal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SuscripcionesComponent } from './components/suscripciones/suscripciones.component';
import { PlanCrearComponent } from './components/plan-crear/plan-crear.component';
import { PlanEditarComponent } from './components/plan-editar/plan-editar.component';
import { CrearEmpresaComponent } from './components/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './components/editar-empresa/editar-empresa.component';
import { PerfilEditarComponent } from './components/perfil-editar/perfil-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PermisosUsuarioComponent,
    GestionPlanesComponent,
    UsuariosComponent,
    SlidebarComponent,
    PerfilPersonalComponent,
    MarketingComponent,
    SuscripcionesComponent,
    PlanCrearComponent,
    PlanEditarComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    PerfilEditarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
