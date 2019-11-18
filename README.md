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

## **Top Level KPI**

  The "main" KPI can be defined under "Measures / Top-Level". 
![example 3](https://raw.githubusercontent.com/djaskowiak/data/master/measure-top-def.png)
  * **Measure Settings:** contains styling options for the measure
  * **Title Settings:** contains styling options for the title of the measure
  * **Trend Settings:** contains options to define an icon to display trending
  * **Sheet-navigation:** contains config to jump to a different sheet

## **"describing KPIs" left, center and right**

  It's possible to add up to 3 additional measurer. You can configure them also under "Measures / Left, Center, Right".
![example 4](https://raw.githubusercontent.com/djaskowiak/data/master/measure-left-center.right.png)

  All Measures (Top, Left, Center and Right) will provide you the following configuration parameters.
![example 5](https://raw.githubusercontent.com/djaskowiak/data/master/measure-config-options.png)

## **Charts**

  To create a chart you need at least 1 measure and 1 dimension within the "Data" area. If you like to create a comparison you need to define 2 measures.
![example 6](https://raw.githubusercontent.com/djaskowiak/data/master/chart-data-def.png)

  The look and feel (bar-spacing, colors, grid, width and height, padding etc.) and the chart-typ can be defined under "Minichart"
![example 7](https://raw.githubusercontent.com/djaskowiak/data/master/chart-viz-def.png)

## **etc**

  You can configure also a couple of other definitions (background, horizontal-ruler etc.). If you like to define the background you can choose from 3 different options:

  1. **Define color by Color-Picker**
![example 8](https://raw.githubusercontent.com/djaskowiak/data/master/background-color-def.png)

  2. **Define color by CSS**
![example 9](https://raw.githubusercontent.com/djaskowiak/data/master/background-css-def.png)

  This helps you to define gradients or very specific color configurations. You need to insert the CSS definition as a JSON string.
    
    ```
    ='{"background-image": "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"}'
    ```

  3. **Define a background-picture**
![example 10](https://raw.githubusercontent.com/djaskowiak/data/master/background-picture-def.png)

You can select a picture that is uploaded to the application. To manage the best positioning it is possible to add CSS definition. This also requires a JSON notation. 
    
    ```
    ='{"background-size" : "cover", "background-position" : "center" , "opacity" : "1"}'
    ```

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