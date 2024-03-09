import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './Hero/hero.component';
import { ListComponent } from './List/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
