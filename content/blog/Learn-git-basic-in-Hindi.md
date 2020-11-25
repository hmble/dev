---
title: "Learn git basic in hindi"
date: 2020-11-20T16:17:46+05:30
slug: "learn-git-basic-in-hindi"
image: "/featured/learn-git-basics-in-hindi"

---
## Git add

git add command ka use working tree changes ko stage karne k liye hota.

- How to add all tracked and untracked files ?

    **command :**

    `$ git add .`

    OR

    `$ git add -A` from root folder where `.git`  file is.

    If aapko koi particular directory path ki files hi add karni ho to you can use

    `$ git add -A <dirpath>`  

- How to add only small part of changed file ?

    **command :**

    `$ git add -p`  

    Git add patch small changes known as `hunk` stage karne k liye use karte hai. This will help us to make small commits for a larger change in file.

    When we run `git add -p` command tab hume kuch options rehte hai

    ```diff
    y - stage this hunk
    n - do not stage this hunk
    q - quit; do not stage this hunk or any of the remaining ones
    a - stage this hunk and all later hunks in the file
    d - do not stage this hunk or any of the later hunks in the file
    g - select a hunk to go to
    / - search for a hunk matching the given regex
    j - leave this hunk undecided, see next undecided hunk
    J - leave this hunk undecided, see next hunk
    k - leave this hunk undecided, see previous undecided hunk
    K - leave this hunk undecided, see previous hunk
    s - split the current hunk into smaller hunks
    e - manually edit the current hunk
    ? - print hel
    ```

    With this options hum patch operation perform kar sakte.

    - NOTE: patch operation sirf selected hunk stage karta hai and remaining unstaged changes still working tree me rehte hai.

    - How to do git add interactively ?

        **command :** 

        `$ git add -i`

        Waise to ye command ka jyada use nahi hota. So maine ise jyada explain nahi kiya. This command gives you few options to run interactively

        ```diff
        *** Commands ***
              1: status       2: update       3: revert       4: add untracked
              5: patch        6: diff         7: quit         8: help
            What now> 1
        ```

        If aapko interactive mode k baare me aur padhna ho to you can visit [official documentation]([https://git-scm.com/docs/git-add#_interactive_mode](https://git-scm.com/docs/git-add#_interactive_mode))

        ## Git commit

        In order to commit snapshot of staged changes hum `git commit` ka use karte.

        - `git commit`

            This command will launch a text editor to add a commit message. By default this launches [vi]([https://en.wikipedia.org/wiki/Vi](https://en.wikipedia.org/wiki/Vi)) text editor. If aapko preferred text editor set karna hai to you can set it by setting `$EDITOR` variable.

            If aap `bash` use kar rahe ho to you can add `export EDITOR=<path-to-editor>` .

            For example to set vim as a default editor for git commit you can add

            `export EDITOR="/usr/bin/vim"` to your `.bashrc`

        - `git commit -m`

            Is command se aap small commit message pass kar sakte. Ye command run karne k baad git text editor launch nahi karega. This comes in handy jab aapko koi small commit message likhna ho.

            For example. `git commit -m "fix suggested changes"`.

        - `git commit -a`

            Ye command tracked files k changes ko automatically stage karke commit message k liye k text editor open karegi. You can use `git commit -am` if aapko small commit message add karna ho to.

        - `git commit --amend`

            Is command se hum staged changes previous commit me add kar sakte hai. You can learn more about this [here]([https://hmble.dev/blog/how-to-add-changes-to-previous-git-commit/](https://hmble.dev/blog/how-to-add-changes-to-previous-git-commit/))

        ## Git push

        After commit changes hum apne local repository k changes remote repository me push karne k liye `git push`  command ka use karte hai. Lets discuss a bit more about this command.

        To push our changes to our remote origin branch we can use

        `git push -u origin <branch-name>`

        here option `-u` hamare current branch ki upstream tracking branch with name `<branch-name>` set karega and then changes us remote branch me push karega. 

        After setting upstream hume next push k liye `-u` flag use karne ki jarurat nahi.

