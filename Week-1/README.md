1. What is the main functionality of the browser ?
   A. Browser is responsible to render the content received in response for every request made to server. It could be HTML response, CSS or JS as well. When user first enter a website URL (Domain), it finds the DNS associated with that domain using DNS. Once it obtains the IP and set up a connection with it using TCP, then it makes a HTML request for a particular resource on that IP. When server returns the HTML response browser renders it and displays it to the end user.

2. High Level components of a browser
   A. 1. UI: It is the user interface of a browser including navigation panel, field to enter web url. 2. Browser Engine 3. Rendering Engine: This receives the response coming from server and renders in to the browser. It can parse HTML and CSS and display to the end user. 4. Networking: Makes HTTP request to receive any resource. 5. Interpretor: Execute JS code 6. Storage: It stores data like cookies, localStorage etc.

3. Parsing
   A. Parsing is the process of receiving response (Ex HTML) and convert into a tree like structure called DOM, which eventually displays in to the browser.

4. Script Processors & Order of Script Processing
   By default scripts are processed synchronously, so if there is script tag in between HTML, it will pause the rendering of HTML till script file is downloaded. Althought we can change this sequence using defer and async tag. Defer lets script file to be downloaded after DOM is rendered, where as Async tag allows parallel downloading of script file along with DOM content.

5. Tree Construction
   Once we have a DOM, it is combined with CSSOM render tree is created which is used to identify layout of all visible elements that are rendered on screen. It makes sure that rendering is in correct order. Render Tree contains only those nodes which has to be visible on screen.

6. Layout and Painting
   Once Render Tree is created, it needs to know at which position node should be placed. This is done in Layout phase where positions are computed for each node based on viewport width and height. Once the positions are obtained, it finally converts it to pixels and renders on screen, this stage is Painting.
