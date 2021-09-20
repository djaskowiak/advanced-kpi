/* eslint-disable max-len */
var qlik = window.require('qlik');
import initialProperties from './initial-properties.js';
import template from './template.html';
import definition from './definition.js';
import controller from './controller.js';
// eslint-disable-next-line no-unused-vars
import localCSS from './style.css';

export default {
  initialProperties: initialProperties,
  template: template,
  definition: definition,
  controller: controller,
  support: {
    snapshot: true,
    export: true,
    exportData: true,
    viewData: function (data) {
      if (data.qHyperCube.qMeasureInfo[0] && data.qHyperCube.qDimensionInfo[0]) {
        return true;
      } else {
        return false;
      }
    }
  },
  resize: function ($element, layout) {
    this.paint($element, layout);
    //removing zoom-layer for mobile view
    $element.closest('.qv-gridcell').find('.transparent-overlay').remove();
    return false;
  },
  paint: function ($element, layout) {
    let app = qlik.currApp(this);
    const scope = this.$scope;
    this.$scope.isInEdit = this.options.interactionState == 2;

    //console.log(layout);

    //Display welcome message
    scope.init = false;
    if (layout.prop.measure1.fx != "" || layout.prop.measure2.fx != "" || layout.prop.measure3.fx != "" || layout.prop.measure4.fx != "") {
      scope.init = false;
    } else if (layout.prop.measure1.name != "" || layout.prop.measure2.name != "" || layout.prop.measure3.name != "" || layout.prop.measure4.name != "") {
      scope.init = false;
    } else if (layout.qHyperCube.qMeasureInfo[0] && layout.qHyperCube.qDimensionInfo[0]) {
      scope.init = false;
    } else if (layout.prop.background.switch || layout.prop.customcss.switch) {
      scope.init = false;
    } else {
      scope.init = true;
    }

    // getting chart-offset
    let ChartOffset = ((($element[0].clientHeight / 100) * scope.layout.prop.minichart.area) - $element[0].clientHeight) * -1;

    if (scope.layout.qHyperCube.qDimensionInfo.length > 0 || scope.layout.qHyperCube.qMeasureInfo.length > 0) {
      if (scope.layout.prop.minichart.fullscreen) {
        scope.ChartOffset = { "height": ChartOffset + "px)", "opacity": scope.layout.prop.minichart.opacity };
        scope.KPIPosition = { "postion": "relative", "top": "0px" };
      } else {
        scope.ChartOffset = { "top": `${ChartOffset + 10}` + "px", "height": "calc(100% - " + `${ChartOffset}` + "px)", "opacity": scope.layout.prop.minichart.opacity };
        scope.KPIPosition = { "postion": "relative", "top": "-" + scope.layout.prop.minichart.area * 0.4 + "%" };
      }
    } else {
      scope.KPIPosition = { "postion": "relative", "top": "0px" };
    }

    //refreshing chart
    if (scope.chart) {
      scope.chart.update();
      qlik.Promise.resolve();
    }

    //Actions
    try {
      if (!this.$scope.isInEdit && (layout.prop.actions.jump.switch || layout.prop.actions.variable.switch || layout.prop.actions.bookmark.switch || layout.prop.actions.url.switch)) {
        layout.prop.actions.hover = true;
        //eventlistener for Actions
        $element.find('.adv-kpi-overlay').on("click", function () {
          //apply sheet-navigation
          if (layout.prop.actions.jump.switch) {
            qlik.navigation.gotoSheet(layout.prop.actions.jump.sheet);
          }
          //set variable
          if (layout.prop.actions.variable.switch) {
            app.variable.setContent(layout.prop.actions.variable.var, layout.prop.actions.variable.set);
          }
          //apply bookmark
          if (layout.prop.actions.bookmark.switch) {
            app.bookmark.apply(layout.prop.actions.bookmark.name);
          }
          //open URL
          if (layout.prop.actions.url.switch) {
            if (layout.prop.actions.url.newtabset) {
              window.open(layout.prop.actions.url.set, '_blank');
            } else {
              window.open(layout.prop.actions.url.set, '_self');
            }
          }
        });
      } else {
        layout.prop.actions.hover = false;
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }
};
