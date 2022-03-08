import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {
  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async guardar() {
    // Aquí deberíamos de recoger los datos del formulario y hacer una petición POST
    const loader: HTMLIonLoadingElement = await this.mostrarLoading()
    await loader.present()

    setTimeout(async () => {
      await loader.dismiss()

      // Navegar a la página con la info del usuario
      this.router.navigate(['/usuario', 'ángel'], { replaceUrl: true })
      // this.router.navigateByUrl('/usuario/ángel', { replaceUrl: true })
    }, 2000)
  }

  // guardar() {
  //   // Aquí deberíamos de recoger los datos del formulario y hacer una petición POST
  //   this.mostrarLoading()
  //     .then((loader: HTMLIonLoadingElement) => {
  //       loader.present()

  //       setTimeout(() => {
  //         loader.dismiss()

  //         // Navegar a la página con la info del usuario
  //         this.router.navigate(['/usuario', 'ángel'], { replaceUrl: true })
  //         // this.router.navigateByUrl('/usuario/ángel', { replaceUrl: true })
  //       }, 2000)

  //     })
  // }

  mostrarLoading() {
    return this.loadingCtrl.create({
      message: 'Guardando el usuario...',
      spinner: 'dots'
    })
  }

}
