---
title: Setting up SSH
permalink: false
order: 2
---

![sshd-keygen-wrapper Full Disk Access in Privacy and Security](/media/support/tips-sshd-keygen-wrapper.webp "sshd-keygen-wrapper Full Disk Access in Privacy and Security")

Once you've setup ssh, take note of the ip address this machine is currently. Before you ssh in be sure to give *sshd-keygen-wrapper* **Full Disk Access**. If you don't you will receive an `Operation not permitted` error in the terminal. 

Once you're able to ssh in be sure to **setup your favorite shell or shell customizations** such as [ohmyzsh](https://ohmyz.sh) or [fish](https://fishshell.com).

This is also a good time to **install [homebrew](https://brew.sh) or package manager of your choice.**

If you plan to use git, **be sure to [create and add your ssh key as well to your favorite source code repository.](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)**