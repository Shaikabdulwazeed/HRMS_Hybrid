// To provide the Test Data & obeject elements to whole Application

import { Page } from '@playwright/test';

export class Global {
    constructor(public page: Page) {
        this.page = page;

    }
    //****** Test Data **** */

    public url:string = "https://ctcorphyd.com/SureshIT/index.php";
    public username:string = "sureshit";
    public password:string = "sureshit";
    public firstname:string = "Hibban";
    public lastname:string = "Shaik IT";
    public empnumber:string = "9422";
    public dob:string = "1993-06-17";
    

    // ***** Object Elements ****

    public textbox_username:string = "//input[@name='txtUserName']";
    public textbox_password:string = "//input[@name='txtPassword']";
    public login_button:string ="//input[@value='Login']";
    public link_logout:string ="//a[text()='Logout']";
    

    //**** Frames id */
    public  frame_rightmenu:string = "//iframe[@id='rightMenu']";

    //*** Frame elements */

    public button_add:string = "//input[@value='Add']";
    public textbox_firstName:string = "//input[@name='txtEmpFirstName']";
    public textbox_Lastname:string = "//input[@name='txtEmpLastName']";
    public save_button:string = "//input[@id='btnEdit']";
    public dropdownvalue:string ="//select[@id='loc_code']";
    public textbox_number:string = "//input[@name='loc_name']";
    public search:string = "//input[@value='Search']";
    public checkbox:string = "//input[@name='chkLocID[]']";
    public emplink: string = "//a[contains(normalize-space(),'Hibban')]";
    public edit_button: string = "//input[@id='btnEditPers']";
    public dirthbd: string = "//input[@name='DOB']";
    public save:string = "//input[@id='btnEditPers']";
    public dlt_button:string = "//input[@value='Delete']";


}