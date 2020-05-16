



d3.json("samples.json", function(data){
    console.log(data) //.then(function(data));
});

var data = [trace1]

var layout = {
    title: "Bar Chart",
    sample_values: (values),
    otu_ids: (labels),
    type: "bar",
    orientation: 'h'
};

Plotly.newPlot("plot", data, layout);

var layout = {
    title: "Bubble Chart",
    otu_ids: (labels),  
    sample_values: (values),
    type: "bubble",
    orientation: 'h'
};