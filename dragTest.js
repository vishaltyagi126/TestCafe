import {Selector} from 'testcafe';

const checkBox =  Selector("#tried-test-cafe");
const sliderValue = Selector('#slider');

fixture("drag test")
    .page("https://devexpress.github.io/testcafe/example/");

test("first Test", async t=>{
    await t 
        .setTestSpeed(0.01)
        .click(checkBox)
        .drag(sliderValue, 360,0 ,{offsetX: 10, offsetY:10});
});