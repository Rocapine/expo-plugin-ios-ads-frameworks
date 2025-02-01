# expo-plugin-ios-ads-frameworks

An Expo plugin to add iOS ad-related frameworks (AdSupport, AdServices, StoreKit, AppTrackingTransparency) required by MMPs and ad SDKs like Adjust or AppsFlyer.

## Features

This plugin automatically adds the following frameworks to your Expo project's iOS build:

- **AdSupport.framework** – Provides access to advertising identifiers.
- **AdServices.framework** – Supports ad campaign attribution tracking.
- **StoreKit.framework** – Enables in-app purchases and subscriptions.
- **AppTrackingTransparency.framework** – Manages user consent for app tracking.

## Installation

1. Install the plugin

```bash
npm install expo-plugin-ios-ads-frameworks
```

2. Add expo-plugin-ios-ads-frameworks into the plugins array inside the app.json file of your app:

```
...
"plugins": [
      "expo-plugin-ios-ads-frameworks",
    ],
...
```

3. Optionnal, configure the frameworks you want to add to your project:

```
"plugins": [
  [
    "expo-plugin-ios-ads-frameworks",
    {
      "REQUIRED_FRAMEWORKS": ["AdSupport.framework", "AdServices.framework", "StoreKit.framework"]
    }
  ]
]
```
