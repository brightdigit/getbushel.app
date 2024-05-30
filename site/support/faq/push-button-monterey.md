---
title: Why does my app crash in Xcode on the Monterey VM when I use a push button?
permalink: false
order: 99
---

We've found that **push buttons crash in Xcode 13.4.1 on a macOS Monterey 12.0.1 virtual machine** - in either *AppKit* or *SwiftUI*. It will throw the following message:

<div class="border-2 p-4">
<code class="text-wrap">
validateComputeFunctionArguments:830: failed assertion `Compute Function(ciKernelMain): writes texture ([0]) whose usage (0x00) doesn't specify MTLTextureUsageShaderWrite (0x02)'
</code>
</div>

<video class="my-4" controls aria-label="An example of an Xcode 13.4.1 project with a push button crashing on macOS Monterey 12.0.1" width="1280" height="720">
        <source src="/media/support/push-button-monterey.mp4" type="video/mp4">
        <source src="/media/support/push-button-monterey.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
<p>If you have trouble viewing the video, you can download it <a href="push-button-monterey.mp4" download>here</a>.</p>

We haven't found this issue when running outside of Xcode or with different button types. If we gather any more information on this we will continue to keep you informed.
