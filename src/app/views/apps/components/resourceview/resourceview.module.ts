import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    AccordionModule,
    AvatarModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule, SharedModule, SidebarModule, SpinnerModule,
    TableModule,
    TabsModule, TooltipModule, UtilitiesModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import {ResourceviewComponent} from "./resourceview.component";
import {AgGridModule} from "ag-grid-angular";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    imports: [
        CardModule,
        NavModule,
        IconModule,
        TabsModule,
        CommonModule,
        GridModule,
        SharedModule,
        SpinnerModule,
        AgGridModule,
        TableModule,
        FormModule,
        SidebarModule,
        FontAwesomeModule,
        AccordionModule,
    ],
    exports: [
        ResourceviewComponent
    ],
    declarations: [ResourceviewComponent]
})
export class ResourceViewModule {
}
