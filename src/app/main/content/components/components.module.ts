import { NgModule } from '@angular/core';

import { MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';


@NgModule({
    declarations: [ ],
    imports     : [
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        FuseSharedModule,
    ]
})
export class FuseComponentsModule
{
}
