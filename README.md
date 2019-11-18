# Advanced KPI <img src="https://github.com/djaskowiak/advanced-kpi/blob/master/assets/advanced-kpi.png" width="45" height="35" />

This project is about creating a smart KPI object for Qlik Sense that fits to 90% of the needs of the users. From an information design perspective, the KPI object is one of the most important objects when we want to display information. For most of the users it is an indicator providing a variety of information on the first view within a couple of seconds.


# Installation

You can download the extension [here](https://github.com/djaskowiak/advanced-kpi/releases). Upload to Qlik Sense server or extract to appropriate Qlik Sense Desktop folder.

Qlik Sense Desktop: unzip to a directory under [My Documents]/Qlik/Sense/Extensions.

Qlik Sense Server: import the zip file in the QMC.


# Demo

You can [donwload]() a Qlik Sense Demo app to see a couple of possible charts.

# Developing the extension

If you want to do code changes to the extension follow these simple steps to get going.

1. Get Qlik Sense Desktop
2. Create a new app and add advanced-kpi to a sheet.
3. Clone the repository
4. Run `npm install`
5. Run `npm run build` - to build a dev-version to the /dist folder.
6. Move the content of the /dist folder to the extension directory. Usually in `C:/Users/<user>/Documents/Qlik/Sense/Extensions/advanced-kpi`.

# Original authors
[github.com/djaskowiak](https://github.com/djaskowiak)

# License
Released under the [MIT License](LICENSE).