function loadRepo(url, callback) 
{
    const gitHubRequest = new XMLHttpRequest();
    gitHubRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("gitHubReps").innerHTML = this.responseText;
        }
      };
      gitHubRequest.open("GET", "/Users/stephenrogers/Desktop/Woz U/Front End Foundations/FrontEndFinal/FrontEndFinalProject/API.json", true);
      gitHubRequest.send();
    }
      // Finish your request here
      // Don't forget the callback()
  
  
  function loadRepoCallback(gitHubRequest) 
  {
    // Callback function needs to parse the JSON
    // Using the DOM get the element ID from your <ul> in your HTML
    // You will need a forEach to loop through the parsed object
    // Using the DOM create new list elements
    // Plug in the .html_url and .name from the parsed object.  To make this a link you'll need 
    // Append the new list items to the element you retrieved from HTML
  }


var getJSON=document.getElementById











//Change color scheme of page.
  function turnGrey()
    {
        var checkBox = document.getElementById("myCheck");
     if (checkBox.checked == true){
         document.getElementById("original").href="style2.css";
    } 
    else {
        document.getElementById("original").href="style.css";
    }
    }



//hover over element- Image-Shining
document.getElementById("theShining").onmouseover = function() {mouseOver()};
document.getElementById("theShining").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("theShining").src="file:///Users/stephenrogers/Desktop/Woz%20U/Front%20End%20Foundations/FrontEndFinal/FrontEndFinalProject/pictures/shining2.png";
}

function mouseOut() {
    document.getElementById("theShining").src = "file:///Users/stephenrogers/Desktop/Woz%20U/Front%20End%20Foundations/FrontEndFinal/FrontEndFinalProject/pictures/shining.png";
}


