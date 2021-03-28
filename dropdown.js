import {Selector} from 'testcafe';

const dropdownName = Selector("#preferred-interface");
const options = dropdownName.find("option");

fixture("first-fixture")
    .page("https://devexpress.github.io/testcafe/example/")

test("first-test", async t => {
    await t
        .click(dropdownName)
        .click(options.withText("Both"));

});