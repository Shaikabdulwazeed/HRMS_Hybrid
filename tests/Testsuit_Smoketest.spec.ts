import {test} from '@playwright/test'
import { General } from '../lib/General'

// test suite of smoke test..

test.describe ('Smoketest', () =>{

// group pf test methods / test. case 

test('TC001', async({page})=>{

// TEST STEP......

let object = new General(page);
await object.OpenApp();
await object.login();
await object.logout();

});
  
  test ('TC002 AddEmp', async({page}) =>{

    //Test - step...
    let object = new General(page);
    await object.OpenApp();
    await object.login();
    await object.Empadd();
    await object.logout();
    

})    

});



