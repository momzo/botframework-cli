/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {expect, test} from '@oclif/test';

describe('orchestrator:add', () => {
  test
  .stdout()
  .command(['orchestrator:add'])
  .it('runs hello', (ctx: any) => {
    expect(ctx.stdout).to.contain('hello world');
  });

  test
  .stdout()
  .command(['orchestrator:add', '--name', 'jeff'])
  .it('runs hello --name jeff', (ctx: any) => {
    expect(ctx.stdout).to.contain('hello jeff');
  });
});
