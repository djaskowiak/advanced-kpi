# Advanced KPI <img src="https://github.com/djaskowiak/advanced-kpi/blob/master/assets/advanced-kpi.png" width="45" height="35" />

This project is about creating a smart KPI object for Qlik Sense that fits to 90% of the needs of the users. From an information design perspective, the KPI object is one of the most important objects when we want to display information. For most of the users it is an indicator providing a variety of information on the first view within a couple of seconds.


# Installation

You can download the extension [here](https://github.com/djaskowiak/advanced-kpi/releases). Upload to Qlik Sense server or extract to appropriate Qlik Sense Desktop folder.

* Qlik Sense Desktop: unzip to a directory under [My Documents]/Qlik/Sense/Extensions.

* Qlik Sense Server: import the zip file in the QMC.

# Demo

You can [donwload](https://github.com/djaskowiak/advanced-kpi/raw/master/demo/Advanced-KPI%20examples.qvf) a Qlik Sense Demo app to see a couple of possible charts.

![example 1](https://raw.githubusercontent.com/djaskowiak/data/master/example-kpi-1.png)

This example shows how results could look like with one single measure by using the possible  configuration options. 

![example 2](https://raw.githubusercontent.com/djaskowiak/data/master/example-kpi-2.png)

It's possible to add more KPIs. They are called "explaining KPIs". You will find them in the accordion under "Measures".

# Concept

- Top Level KPI

  The "main" KPI can be defined under Measures / Top-Level. 
![example 3](https://raw.githubusercontent.com/djaskowiak/data/master/measure-top-def.png)
  * Measure Settings: contains styling options for the measure
  * Title Settings: contains styling options for the title of the measure
  * Trend Settings: contains options to define an icon to display trending
  * Sheet-navigation: contains config to jump to a different sheet


- "describing KPIs" left, center and right

- Charts

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