import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseNavigationModule, FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';

import { FuseContentModule } from 'app/main/content/content.module';
import { FuseNavbarModule } from 'app/main/navbar/navbar.module';
import { FuseToolbarModule } from 'app/main/toolbar/toolbar.module';

import { FuseMainComponent } from './main.component';


@NgModule({
    declarations: [
        FuseMainComponent,
    ],
    imports     : [
        RouterModule,

        MatSidenavModule,

        FuseSharedModule,

        FuseNavigationModule,
        FuseSearchBarModule,
        FuseShortcutsModule,

        FuseContentModule,
        FuseNavbarModule,
        FuseToolbarModule,
    ],
    exports     : [
        FuseMainComponent
    ]
})
export class FuseMainModule
{
}
