# This shell adds commit aliases to git for handling .husky tasks

# 1- skip-commit skipes all tasks
git config alias.skip-commit '!SKIP_HUSKY_TASKS=true git commit'

# 2- lint-commit only runs lint task
git config alias.lint-commit '!HUSKY_LINT=true git commit'

# 3- test-commit only runs test task
git config alias.test-commit '!HUSKY_TESTS=true git commit'

# 4- compile-commit only runs compile task
git config alias.compile-commit '!HUSKY_COMPILE=true git commit'

# 5- add-commit add changes to stage level and them commit
git config alias.add-commit '!HUSKY_COMPILE=true git add . && git commit'
#--------------------------------INSTRUCTIONS------------------------------------#
# Add aliases to Git: 
#- Run this cmd ".\git-alias.sh"
#- Usage: cmd > git skip-commit -m "Your message"
#- Remove Alias: cmd > git config --unset alias.skip-commit