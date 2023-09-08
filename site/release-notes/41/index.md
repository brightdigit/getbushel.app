---
tags: release-notes
title: v1.0.0-alpha.14
permalink: false
date: 2023-09-11
---

![Screenshot from Bushel Welcome Screen in v1.0.0-alpha.14!](/media/release-notes/v1.0.0-alpha.14.webp "Screenshot from Bushel Welcome Screen in v1.0.0-alpha.14")

### It's been awhile!

While I've been busy most of the year, starting with WWDC in June I've been revamping the application to support only Sonoma. I'm sorry to those of you who were hoping to run the app in Monterey or Ventura but there were plenty of reasons moving forward.

Behind the scenes **most of the Combine and UserDefaults code I used to track your restore images and machines have migrated to Observation and SwiftData making for a smoother experience.** While a lot of messy code has been removed in the process, plenty of code can be reused in this new alpha.

- **New Library Interface** for imporating and downloading restore images
- **More responsive Machine session interface**

### Known Issues

- Missing Machine Interface
- Missing Snapshot Interface
