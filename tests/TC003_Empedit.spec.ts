import {test} from '@playwright/test';

import { General } from '../lib/General';

test ('TC003_Empedit', async({page})=>{

    //Test -- steps...

    let object = new General (page);
    await object.OpenApp();
    await object.login();
    await object.Empedit();
    await object.logout();

});