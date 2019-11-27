define(function () {
  var data = {
    uses: 'data',
    translation: "Common.Data",
    type: "items",
    items: {
      dimensions: {
        uses: "dimensions",
        disabledRef: '',
        min: 0,
        max: 1
      },
      measures: {
        uses: "measures",
        min: 0,
        max: 2
      }
    }
  };


  /* Measure 1 Settings */

  var measure1Fx = {
    ref: "prop.measure1.fx",
    label: "Measure",
    type: "string",
    expression: "always"
  };

  var measure1Name = {
    ref: "prop.measure1.name",
    label: "Measure Title",
    type: "string",
    expression: "optional"
  };

  var measure1Align = {
    ref: "prop.measure1.align",
    label: "Text align",
    type: "string",
    component: "dropdown",
    options: [{
      value: "left",
      label: "left"
    }, {
      value: "center",
      label: "center"
    }, {
      value: "right",
      label: "right"
    }],
    defaultValue: "center"
  };

  var measure1KpiStyleSize = {
    label: "Font Size",
    ref: "prop.measure1.kpi.size",
    type: "string",
    expression: "optional",
    defaultValue: "1.8rem"
  };

  var measure1KpiFont = {
    label: "Font",
    ref: "prop.measure1.kpi.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };


  var measure1KpiStyleBold = {
    label: "bold",
    ref: "prop.measure1.kpi.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure1KpiStyleItalic = {
    label: "italic",
    ref: "prop.measure1.kpi.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure1KpiStyleUnderline = {
    label: "underline",
    ref: "prop.measure1.kpi.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure1KpiStyleColor = {
    ref: "prop.measure1.kpi.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure1TitleStyleSize = {
    label: "Font Size",
    ref: "prop.measure1.title.size",
    type: "string",
    expression: "optional",
    defaultValue: "1.5rem"
  };

  var measure1TitleFont = {
    label: "Font",
    ref: "prop.measure1.title.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };

  var measure1TitleStyleBold = {
    label: "bold",
    ref: "prop.measure1.title.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure1TitleStyleItalic = {
    label: "italic",
    ref: "prop.measure1.title.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure1TitleStyleUnderline = {
    label: "underline",
    ref: "prop.measure1.title.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure1TitleStyleColor = {
    ref: "prop.measure1.title.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure1TrendSwitch = {
    ref: "prop.measure1.trend.switch",
    label: "Show Trend",
    type: "boolean",
    component: "switch",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var measure1TrendSide = {
    ref: "prop.measure1.trend.side",
    label: "Trend Side",
    component: "dropdown",
    type: "string",
    options: [{
      value: "left",
      label: "left"
    }, {
      value: "right",
      label: "right"
    }],
    defaultValue: "right",
    show: function (data) {
      if (data.prop.measure1.trend.switch) { return true; }
    }
  };

  var measure1TrendIcon = {
    type: "string",
    ref: "prop.measure1.trend.icon",
    label: "Icon",
    expression: "optional",
    defaultValue: "triangle-top",
    show: function (data) {
      if (data.prop.measure1.trend.switch) { return true; }
    }
  };

  var measure1TrendIconColor = {
    ref: "prop.measure1.trend.color",
    label: "Color",
    expression: "optional",
    type: "string",
    defaultValue: "#595959",
    show: function (data) {
      if (data.prop.measure1.trend.switch) { return true; }
    }
  };

  var measure1TrendFontSize = {
    ref: "prop.measure1.trend.size",
    label: "Icon Size",
    expression: "optional",
    type: "string",
    defaultValue: "0.9rem",
    show: function (data) {
      if (data.prop.measure1.trend.switch) { return true; }
    }
  };

  var measure1JumpSwitch = {
    label: "Navigate to sheet",
    ref: "prop.measure1.jump.switch",
    type: "string",
    component: "switch",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: "Off"
  };

  var measure1JumpDropdown = {
    label: "Select a sheet",
    type: 'string',
    ref: 'prop.measure1.jump.sheet',
    component: 'dropdown',
    show: function (data) {
      if (data.prop.measure1.jump.switch) { return true; }
    },
    options: async (action, hyperCubeHandler) => {
      const sheets = await hyperCubeHandler.app.getSheetList();
      return sheets.map(sheet => ({
        value: sheet.qInfo.qId,
        label: sheet.qMeta.title,
      }));
    },
  };

  /* Measure 2 Settings */

  var measure2Fx = {
    ref: "prop.measure2.fx",
    label: "Measure",
    type: "string",
    expression: "always"
  };

  var measure2Name = {
    ref: "prop.measure2.name",
    label: "Measure Title",
    type: "string",
    expression: "optional"
  };

  var measure2Align = {
    ref: "prop.measure2.align",
    label: "Text align",
    type: "string",
    component: "dropdown",
    options: [{
      value: "left",
      label: "left"
    }, {
      value: "center",
      label: "center"
    }, {
      value: "right",
      label: "right"
    }],
    defaultValue: "center"
  };

  var measure2KpiStyleSize = {
    label: "Font Size",
    ref: "prop.measure2.kpi.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure2KpiFont = {
    label: "Font",
    ref: "prop.measure2.kpi.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };


  var measure2KpiStyleBold = {
    label: "bold",
    ref: "prop.measure2.kpi.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure2KpiStyleItalic = {
    label: "italic",
    ref: "prop.measure2.kpi.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure2KpiStyleUnderline = {
    label: "underline",
    ref: "prop.measure2.kpi.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure2KpiStyleColor = {
    ref: "prop.measure2.kpi.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure2TitleStyleSize = {
    label: "Font Size",
    ref: "prop.measure2.title.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure2TitleFont = {
    label: "Font",
    ref: "prop.measure2.title.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };

  var measure2TitleStyleBold = {
    label: "bold",
    ref: "prop.measure2.title.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure2TitleStyleItalic = {
    label: "italic",
    ref: "prop.measure2.title.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure2TitleStyleUnderline = {
    label: "underline",
    ref: "prop.measure2.title.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure2TitleStyleColor = {
    ref: "prop.measure2.title.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure2TrendSwitch = {
    ref: "prop.measure2.trend.switch",
    label: "Show Trend",
    type: "boolean",
    component: "switch",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var measure2TrendIcon = {
    type: "string",
    ref: "prop.measure2.trend.icon",
    label: "Icon",
    expression: "optional",
    defaultValue: "triangle-top",
    show: function (data) {
      if (data.prop.measure2.trend.switch) { return true; }
    }
  };

  var measure2TrendIconColor = {
    ref: "prop.measure2.trend.color",
    label: "Color",
    expression: "optional",
    type: "string",
    defaultValue: "#595959",
    show: function (data) {
      if (data.prop.measure2.trend.switch) { return true; }
    }
  };

  var measure2TrendFontSize = {
    ref: "prop.measure2.trend.size",
    label: "Icon Size",
    expression: "optional",
    type: "string",
    defaultValue: "0.9rem",
    show: function (data) {
      if (data.prop.measure2.trend.switch) { return true; }
    }
  };

  /* Measure 3 Settings */

  var measure3Fx = {
    ref: "prop.measure3.fx",
    label: "Measure",
    type: "string",
    expression: "always"
  };

  var measure3Name = {
    ref: "prop.measure3.name",
    label: "Measure Title",
    type: "string",
    expression: "optional"
  };

  var measure3Align = {
    ref: "prop.measure3.align",
    label: "Text align",
    type: "string",
    component: "dropdown",
    options: [{
      value: "left",
      label: "left"
    }, {
      value: "center",
      label: "center"
    }, {
      value: "right",
      label: "right"
    }],
    defaultValue: "center"
  };

  var measure3KpiStyleSize = {
    label: "Font Size",
    ref: "prop.measure3.kpi.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure3KpiFont = {
    label: "Font",
    ref: "prop.measure3.kpi.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };


  var measure3KpiStyleBold = {
    label: "bold",
    ref: "prop.measure3.kpi.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure3KpiStyleItalic = {
    label: "italic",
    ref: "prop.measure3.kpi.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure3KpiStyleUnderline = {
    label: "underline",
    ref: "prop.measure3.kpi.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure3KpiStyleColor = {
    ref: "prop.measure3.kpi.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure3TitleStyleSize = {
    label: "Font Size",
    ref: "prop.measure3.title.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure3TitleFont = {
    label: "Font",
    ref: "prop.measure3.title.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };

  var measure3TitleStyleBold = {
    label: "bold",
    ref: "prop.measure3.title.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure3TitleStyleItalic = {
    label: "italic",
    ref: "prop.measure3.title.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure3TitleStyleUnderline = {
    label: "underline",
    ref: "prop.measure3.title.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure3TitleStyleColor = {
    ref: "prop.measure3.title.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure3TrendSwitch = {
    ref: "prop.measure3.trend.switch",
    label: "Show Trend",
    type: "boolean",
    component: "switch",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var measure3TrendIcon = {
    type: "string",
    ref: "prop.measure3.trend.icon",
    label: "Icon",
    expression: "optional",
    defaultValue: "triangle-top",
    show: function (data) {
      if (data.prop.measure3.trend.switch) { return true; }
    }
  };

  var measure3TrendIconColor = {
    ref: "prop.measure3.trend.color",
    label: "Color",
    expression: "optional",
    type: "string",
    defaultValue: "#595959",
    show: function (data) {
      if (data.prop.measure3.trend.switch) { return true; }
    }
  };

  var measure3TrendFontSize = {
    ref: "prop.measure3.trend.size",
    label: "Icon Size",
    expression: "optional",
    type: "string",
    defaultValue: "0.9rem",
    show: function (data) {
      if (data.prop.measure3.trend.switch) { return true; }
    }
  };

  /* Measure 4 Settings */

  var measure4Fx = {
    ref: "prop.measure4.fx",
    label: "Measure",
    type: "string",
    expression: "always"
  };

  var measure4Name = {
    ref: "prop.measure4.name",
    label: "Measure Title",
    type: "string",
    expression: "optional"
  };

  var measure4Align = {
    ref: "prop.measure4.align",
    label: "Text align",
    type: "string",
    component: "dropdown",
    options: [{
      value: "left",
      label: "left"
    }, {
      value: "center",
      label: "center"
    }, {
      value: "right",
      label: "right"
    }],
    defaultValue: "center"
  };

  var measure4KpiStyleSize = {
    label: "Font Size",
    ref: "prop.measure4.kpi.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure4KpiFont = {
    label: "Font",
    ref: "prop.measure4.kpi.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };


  var measure4KpiStyleBold = {
    label: "bold",
    ref: "prop.measure4.kpi.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure4KpiStyleItalic = {
    label: "italic",
    ref: "prop.measure4.kpi.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure4KpiStyleUnderline = {
    label: "underline",
    ref: "prop.measure4.kpi.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure4KpiStyleColor = {
    ref: "prop.measure4.kpi.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure4TitleStyleSize = {
    label: "Font Size",
    ref: "prop.measure4.title.size",
    type: "string",
    expression: "optional",
    defaultValue: "0.8rem"
  };

  var measure4TitleFont = {
    label: "Font",
    ref: "prop.measure4.title.font",
    type: "string",
    expression: "optional",
    defaultValue: "QlikView Sans,sans-serif"
  };

  var measure4TitleStyleBold = {
    label: "bold",
    ref: "prop.measure4.title.bold",
    type: "string",
    component: "switch",
    options: [{
      value: "400",
      label: "Off"
    }, {
      value: "700",
      label: "On"
    }],
    defaultValue: "400"
  };

  var measure4TitleStyleItalic = {
    label: "italic",
    ref: "prop.measure4.title.italic",
    type: "string",
    component: "switch",
    options: [{
      value: "normal",
      label: "Off"
    }, {
      value: "italic",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure4TitleStyleUnderline = {
    label: "underline",
    ref: "prop.measure4.title.underline",
    type: "string",
    component: "switch",
    options: [{
      value: "none",
      label: "Off"
    }, {
      value: "underline",
      label: "On"
    }],
    defaultValue: "normal"
  };

  var measure4TitleStyleColor = {
    ref: "prop.measure4.title.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "#595959"
  };

  var measure4TrendSwitch = {
    ref: "prop.measure4.trend.switch",
    label: "Show Trend",
    type: "boolean",
    component: "switch",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var measure4TrendIcon = {
    type: "string",
    ref: "prop.measure4.trend.icon",
    label: "Icon",
    expression: "optional",
    defaultValue: "triangle-top",
    show: function (data) {
      if (data.prop.measure4.trend.switch) { return true; }
    }
  };

  var measure4TrendIconColor = {
    ref: "prop.measure4.trend.color",
    label: "Color",
    expression: "optional",
    type: "string",
    defaultValue: "#595959",
    show: function (data) {
      if (data.prop.measure4.trend.switch) { return true; }
    }
  };

  var measure4TrendFontSize = {
    ref: "prop.measure4.trend.size",
    label: "Icon Size",
    expression: "optional",
    type: "string",
    defaultValue: "0.9rem",
    show: function (data) {
      if (data.prop.measure4.trend.switch) { return true; }
    }
  };

  /* Minichart Settings */

  var minichartType = {
    ref: "prop.minichart.type",
    label: "Chart-Type",
    component: "dropdown",
    type: "string",
    options: [{
      value: "line",
      label: "Linechart"
    }, {
      value: "bar",
      label: "Barchart"
    }
      /*{
        value: "gauge",
        label: "Gauge"
      }
    */
    ],
    defaultValue: "bar"
  };

  var minichartGridhor = {
    ref: "prop.minichart.gridlinehor",
    label: "Chart-Grid-Line horizontal",
    component: "dropdown",
    type: "string",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: 't',
      label: "Narrow"
    }, {
      value: 'y',
      label: "Medium"
    }, {
      value: 'w',
      label: "Wide"
    }],
    defaultValue: false
  };

  var minichartGridver = {
    ref: "prop.minichart.gridlinever",
    label: "Chart-Grid-Line vertical",
    component: "dropdown",
    type: "string",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: 't',
      label: "Narrow"
    }, {
      value: 'y',
      label: "Medium"
    }, {
      value: 'w',
      label: "Wide"
    }],
    defaultValue: false
  };

  var minichartColor1 = {
    ref: "prop.minichart.colorone",
    label: "Measure-Color 1",
    component: "color-picker",
    type: "object",
    defaultValue: "#989A97"
  };

  var minichartColor2 = {
    ref: "prop.minichart.colortwo",
    label: "Measure-Color 2",
    component: "color-picker",
    type: "object",
    defaultValue: "#007ACC",
    show: function (data) {
      if (data.qHyperCubeDef.qMeasures.length > 1) { return true; }
    }
  };

  var minichartDotSize = {
    ref: "prop.minichart.dotsize",
    type: "number",
    component: "slider",
    label: "Point size",
    min: 0,
    max: 0.6,
    step: 0.05,
    defaultValue: 0.1,
    show: function (data) {
      if (data.prop.minichart.type == "line") { return true; }
    }
  };

  var minichartLineScaleExpand = {
    ref: "prop.minichart.linescaleexpand",
    type: "number",
    component: "slider",
    label: "Scale expand",
    min: 0,
    max: 2,
    step: 0.1,
    defaultValue: 0.2,
    show: function (data) {
      if (data.prop.minichart.type == "line") { return true; }
    }
  };

  var minichartBarPadding = {
    ref: "prop.minichart.barpadding",
    type: "number",
    component: "slider",
    label: "Bar padding",
    min: 0,
    max: 0.9,
    step: 0.05,
    defaultValue: 0,
    show: function (data) {
      if (data.prop.minichart.type == "bar") { return true; }
    }
  };

  var minichartBarAlignCompare1 = {
    ref: "prop.minichart.baraligncompare1",
    type: "number",
    component: "slider",
    label: "First bar alignment",
    min: 0,
    max: 0.9,
    step: 0.05,
    defaultValue: 0.65,
    show: function (data) {
      if (data.prop.minichart.type == "bar" && data.qHyperCubeDef.qMeasures.length == 2) { return true; }
    }
  };

  var minichartBarAlignCompare2 = {
    ref: "prop.minichart.baraligncompare2",
    type: "number",
    component: "slider",
    label: "Second bar alignment",
    min: 0,
    max: 0.9,
    step: 0.05,
    defaultValue: 0.35,
    show: function (data) {
      if (data.prop.minichart.type == "bar" && data.qHyperCubeDef.qMeasures.length == 2) { return true; }
    }
  };

  var minichartOpacity = {
    ref: "prop.minichart.opacity",
    type: "number",
    component: "slider",
    label: "Chart opacity",
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 1
  };

  var minichartRefShow = {
    ref: "prop.minichart.ref.show",
    type: "boolean",
    component: "switch",
    label: "Show Reference-Line",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var minichartArea = {
    ref: "prop.minichart.area",
    type: "number",
    component: "slider",
    label: "% Chart Area",
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 50
  };

  var minichartRefValue = {
    ref: "prop.minichart.ref.value",
    label: "Value",
    type: "number",
    expression: "optional",
    show: function (data) {
      if (data.prop.minichart.ref.show) { return true; }
    }
  };

  var minichartRefStrokeWidth = {
    ref: "prop.minichart.ref.strokewidth",
    label: "Line-Size",
    type: "string",
    expression: "optional",
    defaultValue: "1px",
    show: function (data) {
      if (data.prop.minichart.ref.show) { return true; }
    }
  };

  var minichartRefColor = {
    ref: "prop.minichart.ref.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: {
      color: "#000000",
      index: "-1"
    },
    show: function (data) {
      if (data.prop.minichart.ref.show) { return true; }
    }
  };

  var minichartFullScreen = {
    ref: "prop.minichart.fullscreen",
    label: "Chart Fullscreen Mode",
    component: "switch",
    type: "boolean",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  /* else */

  var horizontalrulerLineSwitch = {
    ref: "prop.line.switch",
    label: "Show Line",
    component: "switch",
    type: "boolean",
    options: [{
      value: false,
      label: "Off"
    }, {
      value: true,
      label: "On"
    }],
    defaultValue: false
  };

  var horizontalrulerLineType = {
    ref: "prop.line.type",
    label: "Line Type",
    component: "dropdown",
    type: "string",
    options: [{
      value: "style-one",
      label: "style-one"
    }, {
      value: "style-two",
      label: "style-two"
    }, {
      value: "style-three",
      label: "style-three"
    }, {
      value: "style-four",
      label: "style-four"
    }],
    defaultValue: "style-one"
  };

  var luiIconLink = {
    label: "LUI Icon list",
    component: "link",
    url: "https://qlik-oss.github.io/leonardo-ui/icons.html"
  };

  var backgroundswitch = {
    label: "Switch Background",
    component: "switch",
    ref: "prop.background.switch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false
  };

  var backgroundcolor = {
    ref: "prop.background.color",
    label: "Color",
    component: "color-picker",
    type: "object",
    defaultValue: "none",
    show: function (data) {
      if (data.prop.background.switch && data.prop.background.cssswitch != true) { return true; }
    }
  };

  var backgroundcssswitch = {
    label: "Switch to CSS",
    component: "switch",
    ref: "prop.background.cssswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function (data) {
      if (data.prop.background.switch) { return true; }
    }
  };

  var backgroundpictureswitch = {
    label: "Switch to picture",
    component: "switch",
    ref: "prop.background.pictureswitch",
    type: "boolean",
    options: [{
      value: true,
      label: "On"
    }, {
      value: false,
      label: "Off"
    }],
    defaultValue: false,
    show: function (data) {
      if (data.prop.background.cssswitch) { return true; }
    }
  };


  var backgroundpicture = {
    label: "Picture",
    component: "media",
    ref: "prop.background.picture",
    type: "string",
    layoutRef: "prop.background.picture",
    show: function (data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) { return true; }
    }
  };

  var paragraphbackground = {
    label: `You can use a picture and the CSS definition to configure the style of the picture. (e.g. "background-repeat" : "round")`,
    component: 'text',
    show: function (data) {
      if (data.prop.background.pictureswitch && data.prop.background.cssswitch) { return true; }
    }
  };

  var backgroundcss = {
    label: "CSS Definition",
    ref: "prop.background.css",
    type: "string",
    expression: "optional",
    defaultValue: "",
    show: function (data) {
      if (data.prop.background.cssswitch) { return true; }
    }
  };

  var sorting = {
    uses: "sorting"
  };

  var addons = {
    uses: "addons",
    items: {
      dataHandling: {
        uses: "dataHandling"
      }
    }
  };

  var appearance = {
    uses: "settings",
    items: {
      general: {
        items: {
          showTitles: {
            defaultValue: false
          },
          details: {
            show: false
          },
        }
      },
      horizontalruler: {
        type: "items",
        label: "Horizontal-Line",
        items: {
          horizontalrulerLineSwitch: horizontalrulerLineSwitch,
          horizontalrulerLineType: horizontalrulerLineType
        }
      },
      background: {
        type: "items",
        label: "Background",
        items: {
          backgroundswitch: backgroundswitch,
          backgroundcolor: backgroundcolor,
          backgroundcssswitch: backgroundcssswitch,
          backgroundcss: backgroundcss,
          backgroundpictureswitch: backgroundpictureswitch,
          backgroundpicture: backgroundpicture,
          paragraphbackground: paragraphbackground
        }
      }
    }
  };

  var measures = {
    type: "items",
    label: "Measures",
    component: "expandable-items",
    items: {
      measure_top: {
        type: "items",
        label: "Top-Level",
        items: {
          measure1Fx: measure1Fx,
          measure1Name: measure1Name,
          measure1Align: measure1Align,
          measure1KPI: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure1Kpi: {
                type: "items",
                label: "Measure Settings",
                items: {
                  measure1KpiFont: measure1KpiFont,
                  measure1KpiStyleSize: measure1KpiStyleSize,
                  measure1KpiStyleBold: measure1KpiStyleBold,
                  measure1KpiStyleItalic: measure1KpiStyleItalic,
                  measure1KpiStyleColor: measure1KpiStyleColor,
                  measure1KpiStyleUnderline: measure1KpiStyleUnderline
                }
              }
            }
          },
          measure1Label: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure1Title: {
                type: "items",
                label: "Title Settings",
                items: {
                  measure1TitleFont: measure1TitleFont,
                  measure1TitleStyleSize: measure1TitleStyleSize,
                  measure1TitleStyleBold: measure1TitleStyleBold,
                  measure1TitleStyleItalic: measure1TitleStyleItalic,
                  measure1TitleStyleColor: measure1TitleStyleColor,
                  measure1TitleStyleUnderline: measure1TitleStyleUnderline
                }
              }
            }
          },
          measure1Trend: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure1Trend: {
                type: "items",
                label: "Trend Settings",
                items: {
                  measure1TrendSwitch: measure1TrendSwitch,
                  measure1TrendIcon: measure1TrendIcon,
                  luiIconLink: luiIconLink,
                  measure1TrendIconColor: measure1TrendIconColor,
                  measure1TrendSide: measure1TrendSide,
                  measure1TrendFontSize: measure1TrendFontSize
                }
              }
            }
          },
          measure1Jump: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure1Jump: {
                type: "items",
                label: "Sheet-navigation",
                items: {
                  measure1JumpSwitch: measure1JumpSwitch,
                  measure1JumpDropdown: measure1JumpDropdown
                }
              }
            }
          }
        }
      },
      measure_left: {
        type: "items",
        label: "Left",
        items: {
          measure2Fx: measure2Fx,
          measure2Name: measure2Name,
          measure2Align: measure2Align,
          measure2KPI: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure2Kpi: {
                type: "items",
                label: "Measure Settings",
                items: {
                  measure2KpiFont: measure2KpiFont,
                  measure2KpiStyleSize: measure2KpiStyleSize,
                  measure2KpiStyleBold: measure2KpiStyleBold,
                  measure2KpiStyleItalic: measure2KpiStyleItalic,
                  measure2KpiStyleColor: measure2KpiStyleColor,
                  measure2KpiStyleUnderline: measure2KpiStyleUnderline
                }
              }
            }
          },
          measure2Label: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure2Title: {
                type: "items",
                label: "Title Settings",
                items: {
                  measure2TitleFont: measure2TitleFont,
                  measure2TitleStyleSize: measure2TitleStyleSize,
                  measure2TitleStyleBold: measure2TitleStyleBold,
                  measure2TitleStyleItalic: measure2TitleStyleItalic,
                  measure2TitleStyleColor: measure2TitleStyleColor,
                  measure2TitleStyleUnderline: measure2TitleStyleUnderline
                }
              }
            }
          },
          measure2Trend: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure2Trend: {
                type: "items",
                label: "Trend Settings",
                items: {
                  measure2TrendSwitch: measure2TrendSwitch,
                  measure2TrendIcon: measure2TrendIcon,
                  luiIconLink: luiIconLink,
                  measure2TrendIconColor: measure2TrendIconColor,
                  measure2TrendFontSize: measure2TrendFontSize
                }
              }
            }
          }
        }
      },
      measure_center: {
        type: "items",
        label: "Center",
        items: {
          measure3Fx: measure3Fx,
          measure3Name: measure3Name,
          measure3Align: measure3Align,
          measure3KPI: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure3Kpi: {
                type: "items",
                label: "Measure Settings",
                items: {
                  measure3KpiFont: measure3KpiFont,
                  measure3KpiStyleSize: measure3KpiStyleSize,
                  measure3KpiStyleBold: measure3KpiStyleBold,
                  measure3KpiStyleItalic: measure3KpiStyleItalic,
                  measure3KpiStyleColor: measure3KpiStyleColor,
                  measure3KpiStyleUnderline: measure3KpiStyleUnderline
                }
              }
            }
          },
          measure3Label: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure3Title: {
                type: "items",
                label: "Title Settings",
                items: {
                  measure3TitleFont: measure3TitleFont,
                  measure3TitleStyleSize: measure3TitleStyleSize,
                  measure3TitleStyleBold: measure3TitleStyleBold,
                  measure3TitleStyleItalic: measure3TitleStyleItalic,
                  measure3TitleStyleColor: measure3TitleStyleColor,
                  measure3TitleStyleUnderline: measure3TitleStyleUnderline
                }
              }
            }
          },
          measure3Trend: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure3Trend: {
                type: "items",
                label: "Trend Settings",
                items: {
                  measure3TrendSwitch: measure3TrendSwitch,
                  measure3TrendIcon: measure3TrendIcon,
                  luiIconLink: luiIconLink,
                  measure3TrendIconColor: measure3TrendIconColor,
                  measure3TrendFontSize: measure3TrendFontSize
                }
              }
            }
          }
        }
      },
      measure_right: {
        type: "items",
        label: "Right",
        items: {
          measure4Fx: measure4Fx,
          measure4Name: measure4Name,
          measure4Align: measure4Align,
          measure4KPI: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure4Kpi: {
                type: "items",
                label: "Measure Settings",
                items: {
                  measure4KpiFont: measure4KpiFont,
                  measure4KpiStyleSize: measure4KpiStyleSize,
                  measure4KpiStyleBold: measure4KpiStyleBold,
                  measure4KpiStyleItalic: measure4KpiStyleItalic,
                  measure4KpiStyleColor: measure4KpiStyleColor,
                  measure4KpiStyleUnderline: measure4KpiStyleUnderline
                }
              }
            }
          },
          measure4Label: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure4Title: {
                type: "items",
                label: "Title Settings",
                items: {
                  measure4TitleFont: measure4TitleFont,
                  measure4TitleStyleSize: measure4TitleStyleSize,
                  measure4TitleStyleBold: measure4TitleStyleBold,
                  measure4TitleStyleItalic: measure4TitleStyleItalic,
                  measure4TitleStyleColor: measure4TitleStyleColor,
                  measure4TitleStyleUnderline: measure4TitleStyleUnderline
                }
              }
            }
          },
          measure4Trend: {
            component: "expandable-items",
            grouped: true,
            items: {
              headermeasure4Trend: {
                type: "items",
                label: "Trend Settings",
                items: {
                  measure4TrendSwitch: measure4TrendSwitch,
                  measure4TrendIcon: measure4TrendIcon,
                  luiIconLink: luiIconLink,
                  measure4TrendIconColor: measure4TrendIconColor,
                  measure4TrendFontSize: measure4TrendFontSize
                }
              }
            }
          }
        }
      }
    }
  };

  var minichart = {
    type: "items",
    label: "Mini-Chart",
    component: "items",
    items: {
      minichartType: minichartType,
      minichartArea: minichartArea,
      minichartGridhor: minichartGridhor,
      minichartGridver: minichartGridver,
      minichartColor1: minichartColor1,
      minichartColor2: minichartColor2,
      minichartOpacity: minichartOpacity,
      minichartDotSize: minichartDotSize,
      minichartBarPadding: minichartBarPadding,
      minichartBarAlignCompare1: minichartBarAlignCompare1,
      minichartBarAlignCompare2: minichartBarAlignCompare2,
      minichartLineScaleExpand: minichartLineScaleExpand,
      minichartRefShow: minichartRefShow,
      minichartRefValue: minichartRefValue,
      minichartRefStrokeWidth: minichartRefStrokeWidth,
      minichartRefColor: minichartRefColor,
      minichartFullScreen: minichartFullScreen
    }
  };

  var aboutDefinition = {
    component: 'items',
    label: 'About',
    items: {
      header: {
        label: 'Advanced KPI',
        style: 'header',
        component: 'text'
      },
      paragraph1: {
        label: `Advanced KPI is a visualization to give you more options to design your KPI Objects.`,
        component: 'text'
      },
      paragraph2: {
        label: 'Advanced KPI is based upon an extension created by Dennis Jaskowiak.',
        component: 'text'
      }
    }
  };

  return {
    type: "items",
    component: "accordion",
    items: {
      data: data,
      sorting: sorting,
      addons: addons,
      appearance: appearance,
      measures: measures,
      minichart: minichart,
      aboutDefinition: aboutDefinition
    }
  };
});