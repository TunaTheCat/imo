import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({

    exports : [
        MatGridListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule
    ]

})
export class MaterialModule {}