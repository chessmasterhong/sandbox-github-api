app.directive('pieChart', function($window) {
    'use strict';

    return {
        restrict: 'A',
        scope: { values: '=' },
        link: function(scope, element, attributes) {
            scope.$watch('values', function(values) {
                if(values) {
                    var val = [];
                    angular.forEach(values, function(v) {
                        val.push(v.commits);
                    });

                    var width = 400;
                    var height = 400;
                    var radius = Math.min(width, height) / 2;
                    var color = $window.d3.scale.category20c();

                    var arc = $window.d3.svg.arc()
                        .outerRadius(radius - 10)
                        .innerRadius(0);

                    var pie = $window.d3.layout.pie()
                        .sort(null)
                        .value(function(d) { return d.commits; });

                    var svg = $window.d3.select('body')
                        .append('svg:svg')
                            //.data([values])
                            .attr('width', width)
                            .attr('height', height)
                        .append('svg:g')
                            .attr('transform', 'translate(' + radius + ',' + radius + ')');

                    var g = svg.selectAll('.arc')
                            .data(pie(val))
                        .enter().append('g')
                            .attr('class', 'arc');

                    g.append('path')
                        .attr('d', arc)
                        .style('fill', function(d) { return color(d.data.commits); });

                    g.append('text')
                        .attr('transform', function(d) { return 'translate(' + radius + ',' + radius + ')'; })
                        .attr('dy', '0.35em')
                        .style('text-anchor', 'middle')
                        .text(function(d) { return d.data.commits; });
                }
            });
        }
    };
});
