# Advanced KPI <img src="https://github.com/djaskowiak/advanced-kpi/blob/master/assets/advanced-kpi.png" width="45" height="35" />

This project is about creating a smart KPI object for Qlik Sense that fits to 90% of the needs of the users. From an information design perspective, the KPI object is one of the most important objects when we want to display information. For most of the users it is an indicator providing a variety of information on the first view within a couple of seconds.

### Important !
Please keep in mind, the files you find within the GitHub Repository are the "**uncompiled**" project files. These files can be downloaded to create your own version of "advanced-kpi". A description can be found here ([Developing the extension](#dev)). Under the ["**Releases**"](https://github.com/djaskowiak/advanced-kpi/releases) tab you can find the compiled version. This zip package can be imported into Qlik Sense.


# Installation

You can download the extension [here](https://github.com/djaskowiak/advanced-kpi/releases). Upload to Qlik Sense server or extract to appropriate Qlik Sense Desktop folder.

* Qlik Sense Desktop: unzip to a directory under [My Documents]/Qlik/Sense/Extensions.

* Qlik Sense Server: import the zip file in the QMC.

# Demo

[![Advanced KPI Object](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-05%2010_28_15-Window.png)](https://youtu.be/i2NlWX7plM4)

You can [donwload](https://github.com/djaskowiak/advanced-kpi/raw/master/demo/Advanced-KPI%20examples.qvf) a Qlik Sense Demo app to see a couple of possible charts.

![example 1](https://raw.githubusercontent.com/djaskowiak/data/master/example-kpi-1.png)

This example shows how results could look like with one single measure by using the possible  configuration options. 

![example 2](https://raw.githubusercontent.com/djaskowiak/data/master/example-kpi-2.png)

It's possible to add more KPIs. They are called "explaining KPIs". You will find them in the accordion under "Measures".

# Table of contents
1. [Concept](#concept)
 - [Top Level KPI](#toplevelkpi)
 - [describing KPIs" left, center and right](#leftcenterright)
 - [charts](#charts)
 - [etc](#etc)
   - [Define color by Color-Picker](#colorpicker)
   - [Define color by CSS](#colorbycss)
   - [Define a background-picture](#bgpicture)
   - [Define a horizontal-ruler](#horizontalruler)
   - [Define "Custom object CSS](#customobjectcss)
   - [Define "Actions](#actions)
2. [Developing the extension](#dev)
3. [Original authors](#authors)
4. [License](#license)


# Concept <a name="concept"></a>

## **Top Level KPI** <a name="toplevelkpi"></a>

  The "main" KPI can be defined under "Measures / Top-Level". 
![example 3](https://raw.githubusercontent.com/djaskowiak/data/master/measure-top-def.png)
  * **Measure Settings:** contains styling options for the measure
  * **Title Settings:** contains styling options for the title of the measure
  * **Trend Settings:** contains options to define an icon to display trending
  * **Sheet-navigation:** contains config to jump to a different sheet

## **"describing KPIs" left, center and right** <a name="leftcenterright"></a>

  It's possible to add up to 3 additional measurers. For configuration go to "Measures / Left, Center, Right".
![example 4](https://raw.githubusercontent.com/djaskowiak/data/master/measure-left-center.right.png)

  All Measures (Top, Left, Center and Right) will provide you with the following configuration parameters.
![example 5](https://raw.githubusercontent.com/djaskowiak/data/master/measure-config-options.png)

## **Charts** <a name="charts"></a>

  To create a chart you need at least 1 measure and 1 dimension within the "Data" area. If you like to create a comparison you need to define 2 measures.
![example 6](https://raw.githubusercontent.com/djaskowiak/data/master/chart-data-def.png)

  The look and feel (bar-spacing, colors, grid, width and height, padding etc.) and the chart-typ can be defined under "Mini-Chart"
![example 7](https://raw.githubusercontent.com/djaskowiak/data/master/chart-viz-def.png)

  * **Chart-Type:** define the chart-type you want to use
  * **% Chart Area:** changes the proportion  of the chart and the KPI area
  * **Chart-Grid-Line horizontal:** enables the horizontal chart-grid
  * **Chart-Grid-Line vertical:** enables the vertical chart-grid
  * **Measure-Color 1 & 2:** defines the color of the graph
  * **Chart opacity:** changes the opacity of the whole chart-area
  * **Bar padding:** defines the spacing between the bar
  * **First & Second bar alignment:** positioning of the corresponding bars
  * **Show Reference-Line:** enables the reference-line
  * **Chart Fullscreen Mode:** sets the chart to fullscreen. It'll cover the whole background-area of the object.

## **etc** <a name="etc"></a>

  You can configure also a couple of other definitions (background, horizontal-ruler etc.). If you like to define the background you can choose from 3 different options:

  1. **Define color by Color-Picker** <a name="colorpicker"></a>
![example 8](https://raw.githubusercontent.com/djaskowiak/data/master/background-color-def.png)

  2. **Define color by CSS** <a name="colorbycss"></a>
![example 9](https://raw.githubusercontent.com/djaskowiak/data/master/background-css-def.png)

  This helps you to define gradients or very specific color configurations. You need to insert the `CSS` definition as a `JSON` string.
    
  ```
  example:

  ='{"background-image": "linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)"}'
  ```

  3. **Define a background-picture** <a name="bgpicture"></a>
![example 10](https://raw.githubusercontent.com/djaskowiak/data/master/background-picture-def.png)

You can select a picture that has been uploaded to the application. To manage the best positioning it is possible to add `CSS` definition. This also requires `JSON` notation. 
    
  ```
  example:

  ='{"background-size" : "cover", "background-position" : "center" , "opacity" : "1"}'
  ```

  4. **Define a horizontal-ruler** <a name="horizontalruler"></a>
![example 11](https://raw.githubusercontent.com/djaskowiak/data/master/horizontal-ruler-def.png)

A `horizontal-ruler` helps you to separate the main KPI from the rest of the object. To enable a horizontal-ruler just activate the cswitch under "Appearance / Horizontal-Line". Now you can choose from a couple of pre-defined designs.

  5. **Define "Custom object CSS** <a name="customobjectcss"></a>

| Menu |  Object |
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-23%2019_29_29-Window.png)  |  ![](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-23%2019_28_44-Window.png)

You can define "**Custom object CSS**". his gives you the possibility to write CSS for the whole object and sheet. If you like to write specific CSS for just your created object it is possible to use the CSS selector "&". It will be replaced by "**div[tid="objID"]**" to define code that effects just a single object. 

In this example I used the following code to set a border with a radius and to overwrite theme CSS setting:
  ```
  & .qv-inner-object {
    border: 3px solid #fff;
    border-radius: 20px;
} 

& .qv-object-advanced-kpi {
    border-radius: 25px !important;
}

& article {
    border: 0px !important;
}
  ```

 6. **Define "Actions** <a name="actions"></a>

| Menu |  Object |
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-23%2019_27_53-Window.png)  |  ![](https://raw.githubusercontent.com/djaskowiak/data/master/2019-12-23%2019_28_27-Window.png)

With the "**Actions**" section it is possible to define events that will be executed as soon as a user clicks on the KPI object. The follwoing funtions are included:

- "**Sheet-navigation**" - jumps to a defined worksheet
- "**Set Variable**" - sets a variable to a defined value. (It's possible to use an expression to define the value)
- "**Apply Bookmark**" - applies a selected bookmark
- "**Open URL**" - opens a defined URL

This actions can be combined. Just turn the dedicated switch to on to enable the function. Functions will be executed in a top-down order.

# Developing the extension <a name="dev"></a>

If you want to do code changes to the extension follow these simple steps to get going.

1. Get Qlik Sense Desktop
2. Create a new app and add advanced-kpi to a sheet.
3. Clone the repository
4. Run `npm install`
5. Run `npm run build` - to build a dev-version to the /dist folder.
6. Move the content of the /dist folder to the extension directory. Usually in `C:/Users/<user>/Documents/Qlik/Sense/Extensions/advanced-kpi`.

# Original authors <a name="authors"></a>
[github.com/djaskowiak](https://github.com/djaskowiak)

# License <a name="license"></a>
Released under the [MIT License](LICENSE).