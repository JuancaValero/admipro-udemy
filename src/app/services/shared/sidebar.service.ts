import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-guage',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graficas', url: '/grafica1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'RxJs', url: '/rxjs' }
      ]
    }
  ];

  constructor() { }

}
