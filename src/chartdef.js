/* eslint-disable max-len */
function bar1mes(prop) {
  return {
    scales: {
      y: {
        data: { field: 'qMeasureInfo/0' },
        invert: true,
        include: [0]
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: prop.minichart.barpadding },
    },
    components: [{
      type: 'grid-line',
      y: prop.minichart.gridlinehor,
      x: prop.minichart.gridlinever
    }, {
      key: 'exp1',
      type: 'box',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            start: 0,
            end: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        major: { scale: 't' },
        minor: { scale: 'y' },
        box: {
          fill: prop.minichart.colorone.color
        }
      }
    },
    {
      show: prop.minichart.ref.show,
      type: 'ref-line',
      lines: {
        y: [{
          scale: 'y',
          value: prop.minichart.ref.value,
          line: {
            strokeWidth: prop.minichart.ref.strokewidth,
            stroke: prop.minichart.ref.color.color,
          },
          label: {
            background: {
              fill: 'white',
              opacity: 0
            },
            opacity: 0
          }
        }]
      }
    }]
  };
}

function bar2mes(prop) {
  return {
    scales: {
      y: {
        data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] },
        invert: true,
        include: [0]
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: prop.minichart.barpadding, align: prop.minichart.baraligncompare1 },
      v: { data: { extract: { field: 'qDimensionInfo/0' } }, padding: prop.minichart.barpadding, align: prop.minichart.baraligncompare2 }
    },
    components: [{
      type: 'grid-line',
      y: prop.minichart.gridlinehor,
      x: prop.minichart.gridlinever
    }, {
      key: 'exp2',
      type: 'box',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            start: 0,
            end: { field: 'qMeasureInfo/1' },
          }
        }
      },
      settings: {
        major: { scale: 't' },
        minor: { scale: 'y' },
        box: {
          fill: prop.minichart.colortwo.color
        }
      }
    },
    {
      key: 'exp1',
      type: 'box',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            start: 0,
            end: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        major: { scale: 'v' },
        minor: { scale: 'y' },
        box: {
          fill: prop.minichart.colorone.color
        }
      }
    },
    {
      show: prop.minichart.ref.show,
      type: 'ref-line',
      lines: {
        y: [{
          scale: 'y',
          value: prop.minichart.ref.value,
          line: {
            strokeWidth: prop.minichart.ref.strokewidth,
            stroke: prop.minichart.ref.color.color,
          },
          label: {
            background: {
              fill: 'white',
              opacity: 0
            },
            opacity: 0
          }
        }]
      }
    }]
  };
}

function line1mes(prop) {
  return {
    scales: {
      y: {
        data: { field: 'qMeasureInfo/0' },
        invert: true,
        expand: prop.minichart.linescaleexpand
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } } }
    },
    components: [{
      type: 'grid-line',
      y: prop.minichart.gridlinehor,
      x: prop.minichart.gridlinever
    }, {
      key: 'line1',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        coordinates: {
          major: { scale: 't' },
          minor: { scale: 'y', ref: 'v' }
        },
        layers: {
          line: {
            stroke: prop.minichart.colorone.color
          }
        }
      }
    },
    {
      key: 'dot1',
      type: 'point',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        x: { scale: 't' },
        y: { scale: 'y', ref: 'v' },
        fill: prop.minichart.colorone.color,
        size: prop.minichart.dotsize
      }
    },
    {
      show: prop.minichart.ref.show,
      type: 'ref-line',
      lines: {
        y: [{
          scale: 'y',
          value: prop.minichart.ref.value,
          line: {
            strokeWidth: prop.minichart.ref.strokewidth,
            stroke: prop.minichart.ref.color.color,
          },
          label: {
            background: {
              fill: 'white',
              opacity: 0
            },
            opacity: 0
          }
        }]
      }
    }]
  };
}

function line2mes(prop) {
  return {
    scales: {
      y: {
        data: { fields: ['qMeasureInfo/0', 'qMeasureInfo/1'] },
        invert: true,
        include: [0],
        expand: prop.minichart.linescaleexpand
      },
      t: { data: { extract: { field: 'qDimensionInfo/0' } } }
    },
    components: [{
      type: 'grid-line',
      y: prop.minichart.gridlinehor,
      x: prop.minichart.gridlinever
    }, {
      key: 'line1',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        coordinates: {
          major: { scale: 't' },
          minor: { scale: 'y', ref: 'v' }
        },
        layers: {
          line: {
            stroke: prop.minichart.colorone.color
          }
        }
      }
    },
    {
      key: 'dot1',
      type: 'point',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/0' }
          }
        }
      },
      settings: {
        x: { scale: 't' },
        y: { scale: 'y', ref: 'v' },
        fill: prop.minichart.colorone.color,
        size: prop.minichart.dotsize
      }
    },
    {
      key: 'line2',
      type: 'line',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/1' }
          }
        }
      },
      settings: {
        coordinates: {
          major: { scale: 't' },
          minor: { scale: 'y', ref: 'v' }
        },
        layers: {
          line: {
            stroke: prop.minichart.colortwo.color
          }
        }
      }
    },
    {
      key: 'dot2',
      type: 'point',
      data: {
        extract: {
          field: 'qDimensionInfo/0',
          props: {
            v: { field: 'qMeasureInfo/1' }
          }
        }
      },
      settings: {
        x: { scale: 't' },
        y: { scale: 'y', ref: 'v' },
        fill: prop.minichart.colortwo.color,
        size: prop.minichart.dotsize
      }
    },
    {
      show: prop.minichart.ref.show,
      type: 'ref-line',
      lines: {
        y: [{
          scale: 'y',
          value: prop.minichart.ref.value,
          line: {
            strokeWidth: prop.minichart.ref.strokewidth,
            stroke: prop.minichart.ref.color.color,
          },
          label: {
            background: {
              fill: 'white',
              opacity: 0
            },
            opacity: 0
          }
        }]
      }
    }]
  };
}

function gauge1mes(prop) {

}

export default {
  bar1mes,
  bar2mes,
  line1mes,
  line2mes,
  gauge1mes
};



