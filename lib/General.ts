// To provide re-usable functions / methods related to whole application

import { Page } from "@playwright/test";
import { Global } from "./Global";

// user defined functions // methods..

export class General extends Global {

    async OpenApp () {
    await this.page.goto(this.url);
    console.log('Open Application');

    }

    async login () {
        await this.page.locator(this.textbox_username).fill(this.username);
        await this.page.locator(this.textbox_password).fill(this.password);
        await this.page.locator(this.login_button).click();
        console.log('Login completed successfully')
    }
    async logout () {
        await this.page.locator(this.link_logout).click();
        console.log('Logout Completed successfully')

    }
    async Empadd () {
        const Frame = this.page.frameLocator(this.frame_rightmenu);
        await Frame.locator(this.button_add).click();
        await Frame.locator(this.textbox_firstName).fill(this.firstname);
        await Frame.locator(this.textbox_Lastname).fill(this.lastname);
        await Frame.locator(this.save_button).click();
        console.log('New Employee added')

    }
    async Empedit () {

    const Frame = this.page.frameLocator(this.frame_rightmenu);

    await Frame.locator(this.dropdownvalue).selectOption({ value: "0" });

    await Frame.locator(this.textbox_number).fill(this.empnumber);

    await Frame.locator(this.search).click();


    await Frame.locator(this.checkbox).first().click();

    /* await Frame.locator(this.emplink).waitFor({ state: "visible" });

    await Frame.locator(this.emplink).click(); */

    await Frame.locator(this.emplink).waitFor();

    await Frame.locator(this.emplink).click();

    await Frame.locator(this.edit_button).waitFor({ state: "visible" });

    await Frame.locator(this.edit_button).click();

    await Frame.locator(this.dirthbd).fill(this.dob);

    await Frame.locator(this.save).click();

    console.log("Employee edited successfully");
    

    }
    async Empdelete () {

        const Frame = this.page.frameLocator(this.frame_rightmenu);

        await Frame.locator(this.dropdownvalue).selectOption({ value: "0" });

        await Frame.locator(this.textbox_number).fill(this.empnumber);

        await Frame.locator(this.search).click();
        await this.page.waitForTimeout(3000);
        await Frame.locator(this.checkbox).first().click();
        await this.page.waitForTimeout(3000);
        await Frame.locator(this.dlt_button).click();
        console.log("Employee deleted successfully");


    
    }
}