# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC003_Empedit.spec.ts >> TC003_Empedit
- Location: tests/TC003_Empedit.spec.ts:5:5

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('//iframe[@id=\'rightMenu\']').contentFrame().locator('//a[contains(normalize-space(),\'Hibban\')]') to be visible

```

# Test source

```ts
  1  | // To provide re-usable functions / methods related to whole application
  2  | 
  3  | import { Page } from "@playwright/test";
  4  | import { Global } from "./Global";
  5  | 
  6  | // user defined functions // methods..
  7  | 
  8  | export class General extends Global {
  9  | 
  10 |     async OpenApp () {
  11 |     await this.page.goto(this.url);
  12 |     console.log('Open Application');
  13 | 
  14 |     }
  15 | 
  16 |     async login () {
  17 |         await this.page.locator(this.textbox_username).fill(this.username);
  18 |         await this.page.locator(this.textbox_password).fill(this.password);
  19 |         await this.page.locator(this.login_button).click();
  20 |         console.log('Login completed successfully')
  21 |     }
  22 |     async logout () {
  23 |         await this.page.locator(this.link_logout).click();
  24 |         console.log('Logout Completed successfully')
  25 | 
  26 |     }
  27 |     async Empadd () {
  28 |         const Frame = this.page.frameLocator(this.frame_rightmenu);
  29 |         await Frame.locator(this.button_add).click();
  30 |         await Frame.locator(this.textbox_firstName).fill(this.firstname);
  31 |         await Frame.locator(this.textbox_Lastname).fill(this.lastname);
  32 |         await Frame.locator(this.save_button).click();
  33 |         console.log('New Employee added')
  34 | 
  35 |     }
  36 |     async Empedit () {
  37 | 
  38 |     const Frame = this.page.frameLocator(this.frame_rightmenu);
  39 | 
  40 |     await Frame.locator(this.dropdownvalue).selectOption({ value: "0" });
  41 | 
  42 |     await Frame.locator(this.textbox_number).fill(this.empnumber);
  43 | 
  44 |     await Frame.locator(this.search).click();
  45 | 
  46 | 
  47 |     await Frame.locator(this.checkbox).first().click();
  48 | 
  49 |     /* await Frame.locator(this.emplink).waitFor({ state: "visible" });
  50 | 
  51 |     await Frame.locator(this.emplink).click(); */
  52 | 
> 53 |     await Frame.locator(this.emplink).waitFor();
     |                                       ^ Error: locator.waitFor: Test ended.
  54 | 
  55 |     await Frame.locator(this.emplink).click();
  56 | 
  57 |     await Frame.locator(this.edit_button).waitFor({ state: "visible" });
  58 | 
  59 |     await Frame.locator(this.edit_button).click();
  60 | 
  61 |     await Frame.locator(this.dirthbd).fill(this.dob);
  62 | 
  63 |     await Frame.locator(this.save).click();
  64 | 
  65 |     console.log("Employee edited successfully");
  66 |     
  67 | 
  68 |     }
  69 |     async Empdelete () {
  70 | 
  71 |         const Frame = this.page.frameLocator(this.frame_rightmenu);
  72 | 
  73 |         await Frame.locator(this.dropdownvalue).selectOption({ value: "0" });
  74 | 
  75 |         await Frame.locator(this.textbox_number).fill(this.empnumber);
  76 | 
  77 |         await Frame.locator(this.search).click();
  78 |         await this.page.waitForTimeout(3000);
  79 |         await Frame.locator(this.checkbox).first().click();
  80 |         await this.page.waitForTimeout(3000);
  81 |         await Frame.locator(this.dlt_button).click();
  82 |         console.log("Employee deleted successfully");
  83 | 
  84 | 
  85 |     
  86 |     }
  87 | }
```