---
title: "How to add changes to previous git commit ?"
date: 2020-11-18T10:22:00+05:30
slug: "how-to-add-changes-to-previous-git-commit"
image: "/featured/how-to-add-changes-to-previous-git-commit"
tags: git
description: "Learn how to add changes to previous commit without editing commit
message"
unsplash: 
  id: "YSVI6tLRrz4"
  name: "Rod Long" 
  crediturl: "https://source.unsplash.com/YSVI6tLRrz4"

---

{{<unsplash>}}

Sooo aapne koi changes commit kiye aur ab aapko us commit me aur changes add
karne hai, well lets use magic of git.

```bash
$ git commit --amend --no-edit
```

## Explanation
This command adds staged changes to previous commit without editing commit
message.

{{<note>}}
Previous commit me changes amend karne se us commit ka `<sha>` change hota hai.
{{</note>}}
