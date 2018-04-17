import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path        : 'chat',
        loadChildren: './chat/chat.module#FuseChatModule'
    },

];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: []
})
export class FuseAppsModule
{
}
