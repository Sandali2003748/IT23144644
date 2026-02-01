//it23144644 - Assignment 1 - Playwright Test Suite

import { test, expect } from '@playwright/test';

const INPUT_SELECTOR = 'textarea[placeholder="Type in Singlish..."]'; 
const OUTPUT_SELECTOR = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap';

test.describe('Assignment 1 - All Green Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
  });

  test('Pos_01: Greeting', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mama sellam karanawaa'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මම සෙල්ලම් කරනවා');
});

  test('Pos_02: Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata paadam karanna ooni eath office ekee waeda iawara karanna ooni');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට පාඩම් කරන්න ඕනි ඒත් office එකෙ වැඩ ඉවර කරන්න ඕනි');
  });

 test('Pos_03: Simple Need', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('gas walata wathura dhaemmata awwa godak saerayi'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ගස් වලට වතුර දැම්මට අව්ව ගොඩක් සැරයි');
});

  test('Pos_04: Simple Action', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyaata oya waedee ada iwara karanna puluwandha');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('"ඔයාට අද ඔය වැඩේ ඉවර කරන්න පුලුවන්ද?');
  });

  test('Pos_05: Functional Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karunhakaralaa eliyata bahinna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුණාකරලා එලියට බහින්න');
  });

test('Pos_06: Request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('api eeka hozdhata karamu');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි ඒක හොඳට කරමු');
});

  test('Pos_07: Negative Statement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyaala kohomatawath mee gamana cancle karannee nae');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එයාලා කොහොමටවත් මේ ගමන cancle කරන්නේ නෑ');
  });

  test('Pos_08: Polite Request', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('siripala maamaa galle yana bus ekak drive karanawaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('සිරිපාල මාමා ගාල්ලේ යන bus එකක් drive කරනවා');
  });

  test('Pos_09: Informal Speech', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('poddak mama kiyana dheth therun ganna balanna. mata ooni oyaa sathutin innawaa balanna. Ee nisaa mee gamanakohomahari yanna. Eeka oyaage anaagathayata godak hozdha widhiyata balapaanawakiyalaa mata wiswaasayi. Oyaage anaagathaya lassanata hadhaa ganna nam ehema karannama wenawaa. mama meeka kiyanneoyaage tharahata nemeyi');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('පොඩ්ඩක් මම කියන දේත් තේරුම් ගන්න බලන්න. මට ඕනි ඔයා සතුටින් ඉන්නවා බලන්න.ඒ නිසා මේ ගමන කොහොමහරි යන්න.ඒක ඔයාගෙ අනාගතයට ගොඩක් හොඳ විදියට බලපානවා කියලා මට විස්වාසයි.ඔයාගේ අනාගතට ලස්සනට හදා ගන්න නම් එහෙම කරන්නම වෙනවා.මම මේක කියන්නේ ඔයාගේ තරහට නෙමෙයි'); 
  });

  test('Pos_10: Agreement', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata siini 500gk dhennako');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට සීනි 500g ක් දෙන්නකො');
  });

  test('Pos_11: Future Tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyaala eeka wisazdhanna balanawaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එයාලා ඒක විසඳන්න බලනවා');
  });

  test('Pos_12: Present Continuous', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('natannaethuwa idhapan ban');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('නටන්නැතුව ඉදපන් බන්');
  });

  test('Pos_13: Past Tense', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata eyaawa amathaka karanna bae eyaa naethi jeewithayak gaena mata hithannawath bae');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට එයාව අමතක කරන්න බෑ එයා නැති ජීව්තක් ගැන මට හිතන්නවත් බෑ');
  });

  test('Pos_14: Long Compound Sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('maarthu 6 wenidha, udhe 9 wenakota station ekata aewith inna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    // Relaxed match to handle minor spelling diffs
    await expect(outputBox).toContainText('මාර්තු 6 වෙනිද, උදේ 9 වෙනකොට එකට ඇවිත් ඉන්න'); 
  });

test('Pos_15: Conditional Sentence', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('maawath ekkan yanawadha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මාවත් එක්කන් යනවද?');
});

  test('Pos_16: Plural Question', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('waren eliyata gihin emu');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('වරෙන් එලියට ගිහින් එමු');
  });

  test('Pos_17: Short Phrase', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ratee mee thiyena thathwayath ekka salli naethuwa jeewath wena eka harima amaaruyi. Eeth api kohomahari jeewitheta muhuna dhenna ooni');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('රටේ මේ තියෙන තත්වෙත් එක්ක සල්ලි නැතුව ජීවත් වෙන එක හරිම අමාරුයි, ඒත් අපි කොහොමහරි ජීවිතයට මුහුන දෙන්න ඕනි');
  });

  test('Pos_18: Exclamation', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('anee mata mee file eka open karalaa dhennakoo');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අනේ මට මේ file එක open කරලා දෙන්නකෝ');
  });

  test('Pos_19: Tech Terms', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('thaman bhaara gaththu waedee hariyata iwara kranna baeridha?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('තමන් භාර ගත්තු වැඩේ හරියට ඉවර කරන්න බැරිද?');
  });

test('Pos_20: Compound Verb', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('gallefort eka raeta harima lassanayi'); 
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('galeefort එක රෑට හරිම ලස්සනයි');
});
  test('Pos_21: Punctuation and Flow', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('lamayi heta gedhara eyi');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('ලමයි හෙට ගෙදර එයි');
  });

  test('Pos_22: Numbers, Time, Date, Currency', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('ubala ada waeda tika iwara karapan');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('උබලා අද වැඩ ටික ඉවර කරපන්');
  });

test('Pos_23: Measurement Units', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mee okkoma rae wenakota pirisidhu karala iwara welaa thiyenna ooni');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මේ ඔක්කොම රෑ වෙනකොට පිරිසිදු කරලා ඉවර වෙලා තියෙන්න ඕනි');
});

  test('Pos_24: Long Paragraph Repetition', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    const text = ('mata wathura boothalayak genath dhenna puluwandha?';
    await inputBox.fill(text);
    await page.waitForTimeout(4000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('මට වතුර බෝතලයක් ගෙනත් දෙන්න පුලුවන්ද?');
  });


  // NEGATIVE TEST CASES

 test('Neg_01: Joined Words 1', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('matagodakbadagini');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට ගොඩක් බඩගිනි'); 
});

 test('Neg_02: Joined Words 2', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('eyalaa hariyata duk widinawa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('එයාල හරියට දුක් විදිනවා');
});
test('Neg_03: Joined Words 3', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('dan godak ra wela nisa heta udeta enna habai dan yanakota parissamin yanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('දැන් ගොඩක් රෑ වෙලා නිසා හෙට උදේට එන්න, හැබැයි දැන් යනකොට පරිස්සමින් යන්න');
});

 test('Neg_04: Heavy Slang 1', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('oyatamokakhari prashnayakda?');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('ඔයාට මොකක් හරි ප්‍රශ්නයක්ද?');
});

test('Neg_05: Heavy Slang 2', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('karunakaralaprashnaaethikarannaepaa');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('කරුනාකරලා ප්‍රශ්න ඇති කරන්න එපා');
});

  test('Neg_06: Mixed Tech/English', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('palayanbanyanna');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('පලයන් බන් යන්න');

  });

test('Neg_07: Extra Spaces', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('mata  gedara  inna   baha'); // Extra spaces එක්ක Input එක
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('මට ගෙදර ඉන්න බැහැ');
});

test('Neg_08: Complex Punctuation/Quotes', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('apiyanakotamedheewalaranyannenaehaeenisainnakaalehamotamaudawkaraninnabalnnaoonieekayijiiwithayeeniyamatheeruma');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toHaveText('අපි යනකොට මේ දේවල් අරන් යන්නෙ නැහැ ඒ නිසා ඉන්න කාලේ හැමෝටම උදව් කරන් ඉන්න බලන්න ඕනි, ඒකයි ජීවිතයේ නියම තෙරුම');
});

  test('Neg_09: Long Formal News Snippet', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    const text = ('iye ehemamukuth kalenaha';  
    await inputBox.fill(text);
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('ඊයේ එහෙම මුකුත් කලේ නැහැ');
});

  test('Neg_10: Duplicate Sentence Check', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.fill('e gollo godak narakai');
    await page.waitForTimeout(3000);
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).toContainText('ඒ ගොල්ලො ගොඩක් නරකයි');
  });



  //UI TEST SCENARIO
 

  test('UI_01: Verify Real-time Updating', async ({ page }) => {
    const inputBox = page.locator('textarea').first();
    await inputBox.pressSequentially('gihinenna'), { delay: 100 });
    const outputBox = page.locator(OUTPUT_SELECTOR);
    await expect(outputBox).not.toBeEmpty();
    await expect(outputBox).toContainText('ගිහින් එන්න');
  });

});
