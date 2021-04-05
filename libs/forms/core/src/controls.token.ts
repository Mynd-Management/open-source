import { InjectionToken } from '@angular/core';
import { DynControlConfig } from './control-config.interface';
import { ControlProvider } from './control-provider.interfaces';

export const DYN_CONTROLS_TOKEN = new InjectionToken<ControlProvider[]>(
  '@myndpm/dyn-forms/dyn-controls'
);

export const DYN_CONTEXT_DEFAULTS = new InjectionToken<Map<string, DynControlConfig>>(
  '@myndpm/dyn-forms/context-defaults'
);
