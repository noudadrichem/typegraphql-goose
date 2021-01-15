import ava, { TestInterface } from "ava"
import { TestContext } from "./test"

const test = <TestInterface<TestContext>>ava

test.before(t => {
  console.log('BEFORE...')
})

test.after(t => {
  console.log("something about t", t.context)
})

test("Test name here...", async t => {
  try {
    t.pass()
  } catch (error) {
    t.fail(error)
  }
})
