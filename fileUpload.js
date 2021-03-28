import {Selector} from 'testcafe';

const uploadId = Selector("#file-upload");
const submitButton = Selector("#file-submit.button");

fixture('first-fixture')
    .page("https://the-internet.herokuapp.com/upload");

test("first-test", async t=>{
    await t
        .setTestSpeed(0.01)
        .setFilesToUpload(uploadId,"C:/Users/visha/Desktop/Resume/New ikorp/without/Vishal Tyagi_CV.docx")
        .click(submitButton);
});