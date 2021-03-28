import {Selector} from 'testcafe';

const iframeName = Selector('#mce_0_ifr');
const textArea = Selector('#tinymce');

fixture("iFrame")
    .page('https://the-internet.herokuapp.com/iframe');

test("first-test",async t=>{
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, "Hi! Vishal")
        .expect(textArea.innerText).contains("Vishal")
        .switchToMainWindow();
});