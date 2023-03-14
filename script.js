function firstViz(){
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://public.tableau.com/views/CrimeAnalysis2020/CRIMINALACTIVITY?:language=en-GB&:display_count=n&:origin=viz_share_link";
  var options = {
    hideTabs: true,
    width: "800px",
    height: "700px",
    onFirstInteractive: function() {
     // The viz is now ready and can be safely used.
   }
  };
  var viz = new tableau.Viz(placeholderDiv, url, options);
}