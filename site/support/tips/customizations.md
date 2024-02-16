---
title: Customize Your VM
permalink: false
---

Once the machine is setup, there are a few things I'd recommend doing:

#### Remove Dock Icons

Since [we can't sign-in with our Apple ID,](/support/#apple-account) any application which requires an Apple ID can be removed from the Dock. Besides any other app which you won't be using should be removed.

#### Customize Your Settings

Do you like light or dark mode? Natural scrolling or reverse scrolling? 
It's good to set these up according to your preferences.

#### Disable Updates

![Update Notifications and Badges in macOS Monterey](/media/support/tips-update-notifications.webp "Update Notifications and Badges in macOS Monterey")

If you are using an older version of macOS **you can disable those update notifications and badges** using the following commands:

```bash
defaults write com.apple.systempreferences AttentionPrefBundleIDs 0 && killall Dock
```