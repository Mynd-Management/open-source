import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DynControlHook } from './events.types';
import { DynInstanceType } from './forms.types';
import { DynControlParams } from './params.types';

// generic interface of DynFormTreeNode
export interface DynTreeNode<
  TParams extends DynControlParams = DynControlParams,
  TControl extends AbstractControl = AbstractControl
> {
  root: DynTreeNode;
  isRoot: boolean;
  name: string|undefined;
  path: string[];

  instance: DynInstanceType;
  control: TControl;
  params: TParams;

  loaded$: Observable<boolean>;
  ready$: Observable<boolean>;
  mode$: Observable<string>;

  visible(): void;
  invisible(): void;
  hidden(): void;

  whenReady(): Observable<boolean>;
  updateParams(params: Partial<TParams>): void;
  callHook(event: DynControlHook): void;

  reset(value?: any, options?: { onlySelf?: boolean; emitEvent?: boolean; }): void;
  patchValue(value: any, options?: { onlySelf?: boolean; emitEvent?: boolean; }): void;
  valueChanges(path: string): Observable<any>|undefined;

  track(defaultMode?: string): void;
  untrack(mode?: string): void;

  search(path: string): AbstractControl|null;
  searchUp(path: string, searchDown?: boolean): AbstractControl|null;
  searchDown(path: string): AbstractControl|null;
  /**
   * @deprecated use node.searchUp
   */
  query(path: string, searchNodes?: boolean): AbstractControl|null;
  /**
   * @deprecated use node.searchDown
   */
  select(path: string): AbstractControl|null;
}