// actual automation test step;

import {test} from '@playwright/test';

import { General } from '../lib/General';

test('@P1_TC001', async ({page}) => {

    // TEST STEP......

let object = new General(page);
await object.OpenApp();
await object.login();
await object.logout();

})