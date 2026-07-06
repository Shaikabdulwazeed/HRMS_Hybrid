import {test} from '@playwright/test';

import { General } from '../lib/General';

test ('@P2_TC002 AddEmp', async({page}) =>{

    //Test - step...
    let object = new General(page);
    await object.OpenApp();
    await object.login();
    await object.Empadd();
    await object.logout();
    
})