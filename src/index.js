var qlik = window.require('qlik');
var $ = window.require('jquery');
import initialProperties from './initial-properties.js';
import template from './template.html';
import definition from './definition.js';
import controller from './controller.js';
import localCSS from './style.css';
import flexboxgrid from '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

export default {
  initialProperties: initialProperties,
  template: template,
  definition: definition,
  controller: controller,
  paint: function ($element) {
    const app = qlik.currApp(this);
    const scope = this.$scope;
    this.$scope.isInEdit = this.options.interactionState == 2;
    //console.log(scope.layout);
    //console.log($element);

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
  },
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
  }
};
