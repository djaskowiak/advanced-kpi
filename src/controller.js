/* eslint-disable max-len */
var qlik = window.require('qlik');
/* import $ from 'jquery'; */
import picasso from 'picasso.js';
import picassoQ from 'picasso-plugin-q';
import chartdef from './chartdef';

// eslint-disable-next-line padded-blocks
export default ['$scope', '$element', function ($scope, $element) {

  // Check if app id matches the current app id for In App Pictures
  let app = qlik.currApp($scope);
  let id = app.id;
  let pictureUrl = $scope.layout.prop.background.picture;
  if (!pictureUrl.includes(id) && !pictureUrl.includes('/content/')) {
    let split = pictureUrl.split('/');
    split[2] = id;
    split = split.join('/');
    $scope.layout.prop.background.picture = split;
  }

  picasso.use(picassoQ);

  const ds = [{
    type: 'q',
    key: 'qHyperCube',
    data: $scope.layout.qHyperCube
  }];

  var picassoSettings;

  //picks settings JSON for picasso --> picassoSettings
  function getSettings() {
    var chartType = $scope.layout.prop.minichart.type;
    var amountMes = $scope.layout.qHyperCube.qMeasureInfo.length;

    switch (chartType) {
      case 'bar':
        switch (amountMes) {
          case 1:
            picassoSettings = chartdef.bar1mes($scope.layout.prop);
            break;
          case 2:
            picassoSettings = chartdef.bar2mes($scope.layout.prop);
            break;
        }
        break;
      case 'line':
        switch (amountMes) {
          case 1:
            picassoSettings = chartdef.line1mes($scope.layout.prop);
            break;
          case 2:
            picassoSettings = chartdef.line2mes($scope.layout.prop);
            break;
        }
        break;
      case 'gauge':
        picassoSettings = chartdef.gauge1mes($scope.layout.prop);
        break;
    }
  }

  //function to create picasso chart
  function createChart() {
    getSettings();
    $scope.chart = picasso.chart({
      element: $element.find('.adv-kpi-chart')[0],
      data: ds,
      settings: picassoSettings,
      beforeRender() { qlik.resize(); }
    });
  }

  //Scope for changes within hypercube measures
  $scope.$watch("layout.qHyperCube.qMeasureInfo", function () {
    if ($scope.layout.qHyperCube.qMeasureInfo[0] && $scope.layout.qHyperCube.qDimensionInfo[0]) {
      if ($scope.chart) {
        getSettings();
        $scope.chart.settings = picassoSettings;
        $scope.chart.update($scope.chart);
      } else {
        createChart();
      }
    } else {
      if ($scope.chart) {
        $scope.chart.destroy();
        $scope.chart = false;
      }
    }
  }, true);

  //Scope for changes within hypercube dimension
  $scope.$watch("layout.qHyperCube.qDimensionInfo", function () {
    if ($scope.layout.qHyperCube.qMeasureInfo[0] && $scope.layout.qHyperCube.qDimensionInfo[0]) {
      if ($scope.chart) {
        getSettings();
        $scope.chart.settings = picassoSettings;
        $scope.chart.update($scope.chart);
      } else {
        createChart();
      }
    } else {
      if ($scope.chart) {
        $scope.chart.destroy();
        $scope.chart = false;
      }
    }
  }, true);

  //Scope  for changes within minichart settings
  $scope.$watch("layout.prop", function () {
    if ($scope.chart) {
      getSettings();
      $scope.chart.settings = picassoSettings;
      //console.log(picassoSettings);
      $scope.chart.update($scope.chart);
      qlik.resize();
    }
  }, true);

  //Get initial Settings
  getSettings();

  //Scope CSS definition for background
  $scope.$watch('[layout.prop.background]', function () {
    try {
      if ($scope.layout.prop.background.cssswitch) {
        if ($scope.layout.prop.background.css != '') {
          $scope.backgroundcss = JSON.parse($scope.layout.prop.background.css);
        }
        if ($scope.layout.prop.background.pictureswitch) {
          if ($scope.layout.prop.background.css == '') {
            $scope.backgroundcss = JSON.parse('{"background-image" : "url(' + $scope.layout.prop.background.picture + ')"}');
          } else {
            $scope.backgroundcss["background-image"] = 'url(' + $scope.layout.prop.background.picture + ')';
          }
        }
      } else {
        if ($scope.layout.prop.background.switchfxpick) {
          $scope.backgroundcss = { "background-color": $scope.layout.prop.background.colorfx };
        }
        if ($scope.layout.prop.background.switchfxpick == false) {
          if ($scope.layout.prop.background.color != null) {
            $scope.backgroundcss = { "background-color": $scope.layout.prop.background.color.color };
          }
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, true);

  //Scope CSS definition customCSS
  $scope.$watch('[layout.prop.customcss]', function () {
    try {
      if ($scope.layout.prop.customcss.switch) {
        if ($scope.layout.prop.customcss.css != '') {
          $scope.customcss = $scope.layout.prop.customcss.css.replace(/&/g, "div[tid='" + $scope.layout.qInfo.qId + "']");
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, true);  
}];