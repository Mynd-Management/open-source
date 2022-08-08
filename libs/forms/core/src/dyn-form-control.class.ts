import { Directive, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DynConfig } from './types/config.types';
import { DynInstanceType } from './types/forms.types';
import { DynMode } from './types/mode.types';
import { DynParams } from './types/params.types';
import { DynControl } from './dyn-control.class';

@Directive()
export abstract class DynFormControl<
  TMode extends DynMode = DynMode,
  TParams extends DynParams = DynParams,
  TConfig extends DynConfig<TMode, TParams> = DynConfig<TMode, TParams>
>
extends DynControl<TMode, TParams, TConfig, FormControl>
implements OnInit {

  static dynInstance = DynInstanceType.Control;

  // auto-register in the form hierarchy
  ngOnInit(): void {
    if (!this.config.name && this.node.parent.instance !== DynInstanceType.Control) {
      throw new Error(`No config.name provided for ${this.config.control}`);
    }

    // initialize the node
    this.node.onInit(DynInstanceType.Control, this.config);

    // provide the parameters
    super.ngOnInit();

    // log the successful initialization
    this._logger.nodeLoaded('dyn-form-control', this.node);
  }
}
