import {
  DynConfig,
  DynControlMode,
  DynControlType,
  DynPartialControlConfig,
  DynPartialGroupConfig,
} from '@myndpm/dyn-forms/core';
import {
  DynMatArrayComponent,
  DynMatArrayParams,
  DynMatCardComponent,
  DynMatCardParams,
  DynMatCheckboxComponent,
  DynMatCheckboxParams,
  DynMatDatepickerComponent,
  DynMatDatepickerParams,
  DynMatDividerComponent,
  DynMatDividerParams,
  DynMatInputComponent,
  DynMatInputParams,
  DynMatMulticheckboxComponent,
  DynMatMulticheckboxParams,
  DynMatRadioComponent,
  DynMatRadioParams,
  DynMatSelectComponent,
  DynMatSelectParams,
} from './components';

// type overloads
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatArrayComponent.dynControl,
  partial: DynPartialControlConfig<M, Partial<DynMatArrayParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatCardComponent.dynControl,
  partial: DynPartialGroupConfig<M, Partial<DynMatCardParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatCheckboxComponent.dynControl,
  partial: DynPartialGroupConfig<M, Partial<DynMatCheckboxParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatDatepickerComponent.dynControl,
  partial: DynPartialGroupConfig<M, Partial<DynMatDatepickerParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatDividerComponent.dynControl,
  partial: DynPartialGroupConfig<M, Partial<DynMatDividerParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatInputComponent.dynControl,
  partial: DynPartialControlConfig<M, Partial<DynMatInputParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatMulticheckboxComponent.dynControl,
  partial: DynPartialControlConfig<M, Partial<DynMatMulticheckboxParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatRadioComponent.dynControl,
  partial: DynPartialControlConfig<M, Partial<DynMatRadioParams>>
): DynConfig<M>;
export function createMatConfig<M extends DynControlMode>(
  type: typeof DynMatSelectComponent.dynControl,
  partial: DynPartialControlConfig<M, Partial<DynMatSelectParams>>
): DynConfig<M>;

// factory
export function createMatConfig<M extends DynControlMode>(
  type: DynControlType,
  partial: any,
): DynConfig<M> {
  switch (type) {
    // containers
    case DynMatArrayComponent.dynControl:
      return DynMatArrayComponent.createConfig(partial);

    case DynMatCardComponent.dynControl:
      return DynMatCardComponent.createConfig(partial);

    case DynMatDividerComponent.dynControl:
      return DynMatDividerComponent.createConfig(partial);

    // controls
    case DynMatCheckboxComponent.dynControl:
      return DynMatCheckboxComponent.createConfig(partial);

    case DynMatDatepickerComponent.dynControl:
      return DynMatDatepickerComponent.createConfig(partial);

    case DynMatMulticheckboxComponent.dynControl:
      return DynMatMulticheckboxComponent.createConfig(partial);

    case DynMatSelectComponent.dynControl:
      return DynMatSelectComponent.createConfig(partial);

    case DynMatRadioComponent.dynControl:
      return DynMatRadioComponent.createConfig(partial);

    case DynMatInputComponent.dynControl:
    default:
      return DynMatInputComponent.createConfig(partial);
  }
}
