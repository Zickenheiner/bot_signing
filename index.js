import 'dotenv/config'
import puppeteer from 'puppeteer';
import chalk from 'chalk';

(async () => {
  const email = process.env.EMAIL
  const password = process.env.PASSWORD
  let retry = true

  console.log(chalk.yellow('Connexion au compte en cours\n'))

  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--disable-notifications'],
  });

  const page = await browser.newPage();

  while (retry) {
    try {
      await page.goto('https://odyssey.wildcodeschool.com/', { waitUntil: 'networkidle0' });

      await page.type('input[type=email]', email)
    
      await page.type('input[type=password]', password)
    
      await page.click('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorSecondary.MuiButton-disableElevation.MuiButton-fullWidth.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorSecondary.MuiButton-disableElevation.MuiButton-fullWidth.css-1n1ctis.css-1qcmvnq')
    
      console.log(chalk.green('Connexion au compte reussi\n'))

      retry = false
    } catch (error) {
      console.log(chalk.red('Erreur lors de la connexion\n'));
      
      console.log(chalk.yellow('Relance du navigateur\n'));
    }
  }

  console.log(chalk.yellow('En attente de la modal de signature\n'))
  
  retry = true

  while (retry) {
    try {
      await page.waitForSelector('canvas', { 
        visible: true,
        timeout: 1000 * 60 * 5,
      });

      console.log(chalk.yellow('Modal signature ouvert\n'))
    
      await sleep(100)

      await page.evaluate(() => {
        const canvas = document.querySelector('canvas');
        const context = canvas.getContext('2d');
        context.lineWidth = 2;
        //Coller le code de la signature ici

      });
    
      await page.click('canvas')
    
      await sleep(100)
    
      await page.click('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorSecondary.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorSecondary.MuiButton-disableElevation.mui-fayxfa-button')
      
      console.log(chalk.green('Signature envoyé'))

      retry = false
    } catch (error) {
    }
  }

  await sleep(500)
  
  await browser.close()
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}