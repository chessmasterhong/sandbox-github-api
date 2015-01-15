app.directive('pieChart', function($window) {
    'use strict';

    return {
        restrict: 'A',
        scope: { values: '=' },
        link: function(scope, element, attributes) {
            scope.$watch('values', function(values) {
                if(values) {
                    //var val = [];
                    //angular.forEach(values, function(v) {
                    //    val.push(v.commits);
                    //});

                    var width = 400;
                    var height = 400;
                    var radius = Math.min(width, height) / 2;
                    var color = $window.d3.scale.category20c();

                    var svg = $window.d3.select('body')
                        .append('svg:svg')
                            .data([values])
                            .attr('width', width)
                            .attr('height', height)
                        .append('svg:g')
                            .attr('transform', 'translate(' + radius + ',' + radius + ')');

                    var pie = $window.d3.layout.pie()
                        .sort(null)
                        .value(function(d) { return d.commits; });

                    var arc = $window.d3.svg.arc()
                        //.innerRadius(0)
                        .outerRadius(radius);

                    var arcs = svg.selectAll('g.slice')
                        .data(pie)
                        .enter().append('svg:g')
                            .attr('class', 'slice');

                    arcs.append('svg:path')
                        .attr('fill', function(d, i) {
                            return color(i);
                        })
                        .attr('d', function(d) {
                            return arc(d);
                        });

                    arcs.append('svg:text')
                        .attr('transform', function(d) {
                            d.innerRadius = 0;
                            d.outerRadius = radius;
                            return 'translate(' + arc.centroid(d) + ')';
                        })
                        .attr('text-anchor', 'middle')
                        .text(function(d, i) {
                            return values[i].name;
                        });
                }
            }, true);
        }
    };
});
