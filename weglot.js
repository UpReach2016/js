// Weglot Script
document.addEventListener("DOMContentLoaded", function(){
  var weglotScript = document.createElement("script");
  weglotScript.src = "https://cdn.weglot.com/weglot.min.js";
  weglotScript.onload = function() {
    Weglot.initialize({
      api_key: 'wg_8ed35636b4581965c1ea55e40e93592f5'
    });
  };
  document.head.appendChild(weglotScript);
});