---
title: Clone Machines from Snapshots
permalink: false
order: 3
---

One of Bushel's most powerful features is the ability to clone virtual machines directly from snapshots. This creates entirely separate machines that you can run independently.

#### How to Clone from a Snapshot

1. Open your virtual machine
2. Navigate to the **Snapshots** section
3. Select any snapshot
4. Click the **Share button** to export it as a new machine

#### Use Cases for Cloning

**Testing and Experimentation**
Create a clone before making risky changes. Test new configurations, software installations, or system updates without affecting your primary development environment.

**Team Collaboration**
Export snapshots of configured development environments and share them with team members. Everyone starts with identical setups, reducing "works on my machine" issues.

**Version Testing**
Maintain clones of your machine at different macOS versions or with different Xcode installations. Quickly switch between environments for compatibility testing.

**Backup and Recovery**
Keep exported snapshots as backups. If your primary machine becomes corrupted, you can immediately start using a cloned version.

**Clean Slate Development**
Create a pristine snapshot after initial setup (macOS + Xcode + tools). Clone it whenever you need a fresh environment for a new project.

The cloned machines are completely independent, so you can run them simultaneously with the original and make different changes to each one.
