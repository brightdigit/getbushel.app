---
tags: release-notes
title: v1.0.0-alpha.4
permalink: false
date: 2022-10-15
---

![Screenshot from Bushel v1.0.0-alpha.4!](/media/release-notes/v1.0.0-alpha.4.webp "Screenshot from Bushel v1.0.0-alpha.4")

- **Dropdown in machine setup view now shows previously used restore images**
- Improved interface and flow for creating virtual machines
- Keeps track of opened images, libraries, and machines

### Known Issues

- Certain restore images may not work due to sandboxing limitation. **If building the machine does nothing:** 
    - select a different restore image or 
    - re-open the restore library to grant sandboxing access to the image
