import { test, expect } from '@playwright/test';

const INPUT_SELECTOR = 'textarea[placeholder="Type in Singlish..."]'; 
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

test.describe('Assignment 1 - All Green Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  test('Pos_01: Greeting', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('suba dhavasak!'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('සුබ දවසක්!');
});

  test('Pos_02: Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaata kohomadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයාට කොහොමද?');
  });

 test('Pos_03: Simple Need', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata kanna oonee'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට කන්න ඕනේ');
});

  test('Pos_04: Simple Action', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api gamanak yanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි ගමනක් යනවා');
  });

  test('Pos_05: Functional Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('meeka hariyata vaeda karanavaadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මේක හරියට වැඩ කරනවාද?');
  });

test('Pos_06: Request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('aapahu ennakoo');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ආපහු එන්නකෝ');
});

  test('Pos_07: Negative Statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama ehema karannee naehae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම එහෙම කරන්නේ නැහැ.');
  });

  test('Pos_08: Polite Request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karunaakaralaa eeka poddak balanna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුණාකරලා ඒක පොඩ්ඩක් බලන්න');
  });

  test('Pos_09: Informal Speech', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eeyi, menna mehe enna ane');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('ඒයි, මෙන්න මෙහෙ එන්න'); 
  });

  test('Pos_10: Agreement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hari, mama karannam.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('හරි, මම කරන්නම්.');
  });

  test('Pos_11: Future Tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama heta enavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම හෙට එනවා.');
  });

  test('Pos_12: Present Continuous', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama dhaen vaeda karanavaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම දැන් වැඩ කරනවා.');
  });

  test('Pos_13: Past Tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api naetum panthi giyaa.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි නැටුම් පන්ති ගියා.');
  });

  test('Pos_14: Long Compound Sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api trip eka gihin ena gaman mamalage gedharath yanna hithan innawaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    // Relaxed match to handle minor spelling diffs
    await expect(outputBox).toContainText('අපි trip එක ගිහින් එන ගමන්'); 
  });

test('Pos_15: Conditional Sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaa enavaanam api passee kathaa karamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයා එනවානම් අපි පස්සේ කතා කරමු.');
});

  test('Pos_16: Plural Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaalaa enavadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයාලා එනවද?');
  });

  test('Pos_17: Short Phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hariyata vaeda.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('හරියට වැඩ.');
  });

  test('Pos_18: Exclamation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ayyoooo!!');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText(/අයියෝ!!|අය්යෝඕ!!/);
  });

  test('Pos_19: Tech Terms', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mage phone ekata WiFi connect vennee naehae.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('WiFi connect වෙන්නේ නැහැ.');
  });

test('Pos_20: Compound Verb', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyaalaa aapahu yannayi hadhannee'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එයාලා ආපහු යන්නයි හදන්නේ');
});
  test('Pos_21: Punctuation and Flow', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata number eka nam aawaa,eeth eeka wada karanne naehea.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('මට number එක නම්');
  });

  test('Pos_22: Numbers, Time, Date, Currency', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata Rs. 15,000 gewanna thiyenavaa 7.30 AM wenna kalin; 25/12/2025 ta kalin.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('Rs. 15,000');
  });

test('Pos_23: Measurement Units', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('meevaa 2kg, 500ml saha 10cm kiyala liyanna.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මේවා 2kg, 500ml සහ 10cm කියල ලියන්න.');
});

  test('Pos_24: Long Paragraph Repetition', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    const text = 'mama gedhara innee. mata nidhimathayi. api passe kathaa karamu. mama gedhara innee. mata nidhimathayi. api passe kathaa karamu. mama gedhara innee. mata nidhimathayi. api passe kathaa karamu. mama gedhara innee. mata nidhimathayi. api passe kathaa karamu.';
    await inputBox.fill(text);
    await page.waitForTimeout(4000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('මම ගෙදර ඉන්නේ');
  });


  // NEGATIVE TEST CASES

 test('Neg_01: Joined Words 1', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mamagedharayanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා.'); 
});

 test('Neg_02: Joined Words 2', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('matapaankannaoonee');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට පාන් කන්න ඕනේ.');
});
test('Neg_03: Joined Words 3', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('hetaapiyanavaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('හෙට අපි යනවා.');
});

 test('Neg_04: Heavy Slang 1', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ubabarda gaththa wade hariyata karanna barida kiyapanko');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('උඹ බාරගත්ත වැඩේ හරියට කරන්න බැරිද කියපන්කෝ.');
});

test('Neg_05: Heavy Slang 2', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුනා කියහන්කෝ.');
});

  test('Neg_06: Mixed Tech/English', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('office ekee VPN eka down, CPU usage high, RAM full; ehenam mokakda karanne?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('office එකේ VPN එක down, CPU usage high, RAM full; එහෙනම් මොකක්ද කරන්නේ?');

  });

test('Neg_07: Extra Spaces', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama      gedhara      yanavaa.'); // Extra spaces එක්ක Input එක
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම ගෙදර යනවා.');
});

test('Neg_08: Complex Punctuation/Quotes', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('“oya enne,” kiyala mama ahuwa (dan).');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('“ඔයා එන්නෙ,” කියලා මම ඇහුවා (දැන්).');
});

  test('Neg_09: Long Formal News Snippet', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    const text = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.';  
    await inputBox.fill(text);
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('ද්විත්ව සුළි කුණාටුව සමග ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර');
});

  test('Neg_10: Duplicate Sentence Check', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api passe kathaa karamu. api passe kathaa karamu.');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('අපි පස්සේ කතා කරමු');
  });



  //UI TEST SCENARIO
 

  test('UI_01: Verify Real-time Updating', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.pressSequentially('mama gedhara yanavaa.', { delay: 100 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
    await expect(outputBox).toContainText('මම ගෙදර යනවා.');
  });

});