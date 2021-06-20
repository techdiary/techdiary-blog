---
title: 'My Collection of vim'
date: '2021-06-20'
---

### Save read-only edited in vi/vim

```text
w !sudo tee %
What the command does:
:w = Write a file.
!sudo = Call shell sudo command.
tee = The output of the vi/vim write command is redirected using tee.
% = Triggers the use of the current filename.
Simply put, the ‘tee’ command is run as sudo and follows the vi/vim command on the current filename given.
```

#### Navigating vim

* `ctrl u` and  `ctrl d` to scroll **up & down.**
* `G` goes to the **last line**.
* `gg` goes to the **first line**.
* `%`, which moves to the next or previous **related item**.
* Move to the **end of the next word**, use `e`. The opposite is `b`

#### Delete till next character

```haskell
:d]}
```

Here `d` means delete, `]` till you find next character which is `}`