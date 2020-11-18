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

Soo you commited some changes and now you want to add new changes to same
commit. Well lets use git magic.

```bash
$ git commit --amend --no-edit
```

## Explanation
This command adds staged changes to previous commit without editing commit
message.

{{<note>}}
amending changes to a commit changes its `<sha>`.
{{</note>}}
