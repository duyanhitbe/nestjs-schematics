import { Path } from '@angular-devkit/core';

export interface ResourceOptions {
  /**
   * The name of the resource.
   */
  name: string;
  /**
   * The path to create the resource.
   */
  path?: string | Path;
}
