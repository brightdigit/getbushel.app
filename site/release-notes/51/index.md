---
tags: release-notes
title: v1.0.0-beta.3
permalink: false
date: 2023-11-11
---

### Getting Closer 🙏

We are continuing to get things for App Store review (not nessecarily release) including uploading the first set of App Store Assets.

### Screens!

There are more fixes to the session window but mostly focused cleaning language and media used throughout the app such as:

#### Onboarding

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=ZHLvOqCHNK52F_-f&amp;controls=0&amp;list=PLmpJxPaZbSnAfEqu8uPkJOIxB8cuLYVy5&amp;autoplay=1&amp;loop=1&amp;mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

#### About

![About Screen](/media/release-notes/51/about-view.webp)

#### Subscription Purchase

![Purchase Screen](/media/release-notes/51/purchase-view.webp)

### Resolved Issues 

Here are the list of issues:

- #192 Added Alerts for "User" Errors or Invalid Restore Images (i.e. Big Sur and DFU issues)
  - Also Issues: #122, #101, #106, #108, #98
- #72 Fixed Auto Start on New Session Window 
  - Also Issues: #140 
- #167 Added Toggle to Auto Close Window on Shutdown
  - Also Issues: #147 
- #177 Fixing Purchase and About View 
  - Also Issues: #21, #60
- #73 Fix Session Window Paused Machine
- #29 Added Appstore Assets 
- #116 Add test coverage report to codecov CI 
- #130 Adding Onboarding Text and Video
- Other Fixes Include: #97 #109 #131 #95

### Next Steps

The focus right now is primarily on getting the app ready for app store submission:
- Audit Other Errors Users Can Encounter and Ensure Legible Alerts
- Accessilbity Audits
- UI Testing
- Testing StoreKit Subscription for Bushel Pro
- Testing the flow of
  - Creating a Image Library
  - Downloading or Importing an IPSW file
  - Building a Machine
  - Setting up the Machine (first user, agreements, etc...)
  - Taking Snapshots
  - Setting up Preferences and Settings
  - Taking More Snapshots
  - Installing Xcode for OS version
  - Taking Event More Snapshots
  - Rolling back to or Exporting from various snapshots

### Known Issues

- #62 Delete ipsw still show as available

