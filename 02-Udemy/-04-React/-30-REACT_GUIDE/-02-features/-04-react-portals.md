## react portals 
don't change the how react code structured but change how the dom is structured 

[1] you need a place that you want to put the component in 
  create a new root element in the index.html file like 
  <div id="backdrop-root"></div>

[2] let the component know it should portal to that place
  import ReactDOM from "react-dom"

  {ReactDom.createPortal(the react node[jsx component] , the root element selected like document.getElementById())}
