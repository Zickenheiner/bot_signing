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
        const ctx = canvas.getContext('2d');
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(44, 58);
        ctx.lineTo(52, 58);
        ctx.lineTo(52, 62);
        ctx.lineTo(52, 65);
        ctx.lineTo(52, 68);
        ctx.lineTo(53, 72);
        ctx.lineTo(55, 76);
        ctx.lineTo(56, 79);
        ctx.lineTo(58, 82);
        ctx.lineTo(59, 84);
        ctx.lineTo(60, 85);
        ctx.lineTo(61, 87);
        ctx.lineTo(62, 89);
        ctx.lineTo(64, 91);
        ctx.lineTo(65, 93);
        ctx.lineTo(66, 95);
        ctx.lineTo(67, 98);
        ctx.lineTo(68, 99);
        ctx.lineTo(70, 102);
        ctx.lineTo(71, 105);
        ctx.lineTo(73, 108);
        ctx.lineTo(73, 110);
        ctx.lineTo(74, 111);
        ctx.lineTo(75, 112);
        ctx.lineTo(75, 113);
        ctx.lineTo(75, 114);
        ctx.lineTo(76, 114);
        ctx.lineTo(77, 116);
        ctx.lineTo(77, 118);
        ctx.lineTo(78, 119);
        ctx.lineTo(78, 121);
        ctx.lineTo(79, 124);
        ctx.lineTo(80, 125);
        ctx.lineTo(81, 127);
        ctx.lineTo(82, 129);
        ctx.lineTo(82, 129);
        ctx.lineTo(83, 130);
        ctx.lineTo(83, 130);
        ctx.lineTo(84, 130);
        ctx.lineTo(84, 131);
        ctx.lineTo(85, 131);
        ctx.lineTo(86, 131);
        ctx.lineTo(88, 131);
        ctx.lineTo(90, 129);
        ctx.lineTo(93, 126);
        ctx.lineTo(96, 122);
        ctx.lineTo(98, 117);
        ctx.lineTo(100, 111);
        ctx.lineTo(102, 98);
        ctx.lineTo(103, 90);
        ctx.lineTo(104, 84);
        ctx.lineTo(105, 81);
        ctx.lineTo(105, 78);
        ctx.lineTo(106, 72);
        ctx.lineTo(106, 65);
        ctx.lineTo(106, 59);
        ctx.lineTo(106, 53);
        ctx.lineTo(106, 50);
        ctx.lineTo(106, 48);
        ctx.lineTo(106, 44);
        ctx.lineTo(106, 42);
        ctx.lineTo(106, 41);
        ctx.lineTo(106, 40);
        ctx.lineTo(106, 38);
        ctx.lineTo(106, 37);
        ctx.lineTo(105, 36);
        ctx.lineTo(104, 34);
        ctx.lineTo(103, 31);
        ctx.lineTo(101, 28);
        ctx.lineTo(99, 25);
        ctx.lineTo(96, 23);
        ctx.lineTo(93, 21);
        ctx.lineTo(89, 19);
        ctx.lineTo(84, 19);
        ctx.lineTo(79, 19);
        ctx.lineTo(72, 19);
        ctx.lineTo(64, 19);
        ctx.lineTo(57, 20);
        ctx.lineTo(51, 21);
        ctx.lineTo(45, 24);
        ctx.lineTo(41, 26);
        ctx.lineTo(38, 28);
        ctx.lineTo(36, 30);
        ctx.lineTo(35, 32);
        ctx.lineTo(34, 35);
        ctx.lineTo(33, 36);
        ctx.lineTo(32, 38);
        ctx.lineTo(31, 40);
        ctx.lineTo(31, 43);
        ctx.lineTo(30, 45);
        ctx.lineTo(30, 46);
        ctx.lineTo(29, 49);
        ctx.lineTo(29, 50);
        ctx.lineTo(29, 51);
        ctx.lineTo(29, 52);
        ctx.lineTo(29, 54);
        ctx.lineTo(29, 55);
        ctx.lineTo(29, 56);
        ctx.lineTo(30, 58);
        ctx.lineTo(30, 60);
        ctx.lineTo(31, 62);
        ctx.lineTo(32, 64);
        ctx.lineTo(34, 66);
        ctx.lineTo(35, 69);
        ctx.lineTo(37, 72);
        ctx.lineTo(40, 75);
        ctx.lineTo(42, 78);
        ctx.lineTo(45, 81);
        ctx.lineTo(48, 83);
        ctx.lineTo(52, 86);
        ctx.lineTo(56, 88);
        ctx.lineTo(61, 90);
        ctx.lineTo(65, 92);
        ctx.lineTo(69, 93);
        ctx.lineTo(74, 94);
        ctx.lineTo(79, 96);
        ctx.lineTo(85, 97);
        ctx.lineTo(92, 98);
        ctx.lineTo(99, 100);
        ctx.lineTo(113, 101);
        ctx.lineTo(121, 102);
        ctx.lineTo(129, 102);
        ctx.lineTo(132, 102);
        ctx.lineTo(135, 102);
        ctx.lineTo(140, 102);
        ctx.lineTo(146, 102);
        ctx.lineTo(148, 102);
        ctx.lineTo(150, 102);
        ctx.lineTo(152, 102);
        ctx.lineTo(153, 102);
        ctx.lineTo(155, 102);
        ctx.lineTo(157, 102);
        ctx.lineTo(160, 102);
        ctx.lineTo(162, 102);
        ctx.lineTo(163, 102);
        ctx.lineTo(165, 102);
        ctx.lineTo(167, 102);
        ctx.lineTo(168, 102);
        ctx.lineTo(169, 102);
        ctx.lineTo(170, 102);
        ctx.lineTo(171, 102);
        ctx.lineTo(172, 102);
        ctx.lineTo(173, 102);
        ctx.lineTo(175, 102);
        ctx.lineTo(176, 102);
        ctx.lineTo(178, 102);
        ctx.lineTo(180, 102);
        ctx.lineTo(182, 102);
        ctx.lineTo(183, 102);
        ctx.lineTo(183, 102);
        ctx.lineTo(184, 102);
        ctx.lineTo(184, 102);
        ctx.lineTo(184, 102);
        ctx.lineTo(184, 102);
        ctx.moveTo(116, 83);
        ctx.lineTo(116, 83);
        ctx.lineTo(116, 83);
        ctx.lineTo(118, 83);
        ctx.lineTo(119, 83);
        ctx.lineTo(120, 83);
        ctx.lineTo(121, 83);
        ctx.lineTo(122, 83);
        ctx.lineTo(122, 81);
        ctx.lineTo(122, 80);
        ctx.lineTo(122, 79);
        ctx.lineTo(122, 78);
        ctx.lineTo(121, 77);
        ctx.lineTo(121, 77);
        ctx.lineTo(120, 76);
        ctx.lineTo(119, 76);
        ctx.lineTo(118, 75);
        ctx.lineTo(117, 75);
        ctx.lineTo(117, 75);
        ctx.lineTo(116, 75);
        ctx.lineTo(116, 76);
        ctx.lineTo(116, 76);
        ctx.lineTo(115, 77);
        ctx.lineTo(115, 79);
        ctx.lineTo(115, 83);
        ctx.lineTo(115, 87);
        ctx.lineTo(115, 89);
        ctx.lineTo(115, 91);
        ctx.lineTo(116, 93);
        ctx.lineTo(119, 94);
        ctx.lineTo(123, 95);
        ctx.lineTo(127, 95);
        ctx.lineTo(131, 94);
        ctx.lineTo(135, 91);
        ctx.lineTo(138, 89);
        ctx.lineTo(140, 86);
        ctx.lineTo(142, 84);
        ctx.lineTo(142, 83);
        ctx.lineTo(143, 81);
        ctx.lineTo(143, 81);
        ctx.lineTo(143, 80);
        ctx.lineTo(143, 80);
        ctx.lineTo(143, 80);
        ctx.lineTo(143, 81);
        ctx.lineTo(144, 83);
        ctx.lineTo(147, 87);
        ctx.lineTo(151, 90);
        ctx.lineTo(153, 91);
        ctx.lineTo(155, 92);
        ctx.lineTo(160, 93);
        ctx.lineTo(162, 93);
        ctx.lineTo(164, 93);
        ctx.lineTo(165, 90);
        ctx.lineTo(165, 88);
        ctx.lineTo(165, 84);
        ctx.lineTo(165, 81);
        ctx.lineTo(165, 79);
        ctx.lineTo(165, 79);
        ctx.lineTo(165, 79);
        ctx.lineTo(167, 80);
        ctx.lineTo(172, 81);
        ctx.lineTo(180, 82);
        ctx.lineTo(189, 84);
        ctx.lineTo(196, 85);
        ctx.lineTo(201, 86);
        ctx.lineTo(204, 86);
        ctx.lineTo(205, 87);
        ctx.lineTo(205, 87);
        ctx.lineTo(206, 88);
        ctx.lineTo(206, 89);
        ctx.lineTo(206, 90);
        ctx.lineTo(206, 92);
        ctx.lineTo(207, 93);
        ctx.lineTo(207, 95);
        ctx.lineTo(207, 96);
        ctx.lineTo(207, 97);
        ctx.lineTo(207, 98);
        ctx.lineTo(207, 98);
        ctx.lineTo(207, 99);
        ctx.lineTo(207, 100);
        ctx.lineTo(206, 102);
        ctx.lineTo(200, 106);
        ctx.lineTo(197, 108);
        ctx.lineTo(188, 114);
        ctx.lineTo(185, 116);
        ctx.lineTo(178, 120);
        ctx.lineTo(172, 124);
        ctx.lineTo(169, 125);
        ctx.lineTo(166, 127);
        ctx.lineTo(162, 128);
        ctx.lineTo(158, 129);
        ctx.lineTo(155, 130);
        ctx.lineTo(151, 130);
        ctx.lineTo(148, 131);
        ctx.lineTo(145, 131);
        ctx.lineTo(143, 131);
        ctx.lineTo(141, 131);
        ctx.lineTo(140, 131);
        ctx.lineTo(139, 132);
        ctx.lineTo(139, 132);
        ctx.lineTo(138, 132);
        ctx.lineTo(136, 132);
        ctx.lineTo(134, 132);
        ctx.lineTo(132, 132);
        ctx.lineTo(131, 132);
        ctx.lineTo(130, 132);
        ctx.lineTo(130, 132);
        ctx.lineTo(130, 132);
        ctx.lineTo(130, 132);
        ctx.lineTo(130, 132);
        ctx.stroke();
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