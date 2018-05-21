import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesTestPipe } from './pipes/pipes-test.pipe';
import { HelpPipe } from './pipes/help.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PipesTestPipe, HelpPipe]
})
export class SharedModule {
  // 为了能在多次的引入调用时，仍然使用单例调用
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
