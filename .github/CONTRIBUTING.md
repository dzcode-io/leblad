# Contributing

Contributions are always welcome. Before contributing please read the
[code of conduct](https://github.com/dzcode-io/leblad/blob/master/.github/CODE_OF_CONDUCT.md) &
[search the issue tracker](https://github.com/dzcode-io/leblad/issues); your issue
may have already been discussed or fixed in `develop`.  To contribute:

- Fortk [dzcode-io/leblad](https://github.com/dzcode-io/leblad) repository (see: [How to fork a repository on Github](https://help.github.com/articles/fork-a-repo/)).
- Install packages.
- Check if there's a dataset update by running `npm run update-dataset`
- Do your magic :smiley:, and please make sure that all tests are passing (run `npm test`)
- Commit your changes (we would be supper happy if you use [commitzen](https://egghead.io/lessons/javascript-writing-conventional-commits-with-commitizen)).
- [Send a pull request](https://help.github.com/articles/using-pull-requests/) and point it to `develop` branch.

We try to follow the [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) development model. Which means that we have a `develop` branch and `master` branch. All development is done under feature branches, which are (when finished) merged into the development branch. When a new version is released we merge the `develop` branch into the `master` branch.

## Git flow

If you would like to use [git flow tools](http://danielkummer.github.io/git-flow-cheatsheet/) you are more than welcome to. We use it and it's pretty nifty. If you see a `feature\` prefix on a comment then that is git flow automating branch creation. It does need more typing than just plain git so we suggest creating shell aliases for the commands.

## Do you have a suggestion?

Feature requests should be submitted in the
[issue tracker](https://github.com/dzcode-io/leblad/issues/new/choose), with a description of
the expected behavior & use case.
Before submitting a request, please search for similar ones in the
[closed issues](https://github.com/dzcode-io/leblad/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Did you find a bug?

When logging a bug, please be sure to answer the following:

- A clear and concise description of what the bug is
- If at all possible, an _isolated_ way to reproduce the behavior
- The behavior you expect to see, and the actual behavior

## Do you have a question?

The issue tracker is for **issues**, in other words, bugs and suggestions.
If you have a _question_, please contact us via [EMail](mailto:contact@dzcode.io) or any of our social links.
