import { test, expect } from '@playwright/test';
import dotenv from "dotenv";
import ENV from '../environment/env';


test('has title', async ({ page }) => {

    console.log (ENV.FLAG);

 
});
