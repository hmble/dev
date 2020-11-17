---
title: "What is git add command ?"
date: 2020-11-16T10:57:33+05:30
slug: "git-add"
draft: false
description: "Git add command is used to add current working changes to index tree."

series: "Learn git basics"
---

Before learning git add hum kuch git related terms k baare me jaan lete hai.

Git have four different areas of code in current repository.

- **Working tree:**
  This is our current working directory.

- **Index area or Staging area:**
  This is where version of code gets staged to store in history. Hum git add
  command ka use working copy of code ko stage karne k liye use karte taki hum
  changes ko history me save kar sake.

- **Local repository:**
  This is where our local history gets stored.

- **Remote repository:**
  This is where we share our local history on remote server taki dusre
  developers contribute kar sake.
  

  ![image for git tree](/images/git-tree.png)


We use `git add` command to add our working changes to staging area.

- **To add selected files :**

```bash
$ git add <filenames> 
```

- **To add all tracked files :**
```bash
$ git add -A 
```

OR we can use a shorthand `.` for -A

```bash
$ git add .
``` 

We can also use path regex with `git add` to add only files matching certain
path regex.

Lets say we want to add all `.txt` files in folder we add them by using regex
pattern

```bash
$ git add \*.txt
```



