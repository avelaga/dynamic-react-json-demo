# How to dynamically render React pages and content from JSON

![](https://miro.medium.com/max/4800/1*3scodXYddKGGSm81-kmBag.png)

When I create portfolio websites for myself and friends, I always want to avoid hardcoding the projects and information for each and instead use a more dynamic way of managing the data, but haven’t developed a way until recently. This is the system I’ve developed to allow the dynamic instantiation of web pages and their content from a single JSON data structure, making it easier and cleaner to edit the information later on.
### Organize the data
I first organized the content I wanted to display in a JSON data structure in the following way:

```
export const projects = [
{    
"url": "project1",    
"imgs": [p1, p2, p3],    
"cover": p1,    
"text": "this is my first project and i'm so proud of it."  
},
{    
"url": "project2",    
"imgs": [p4, p5,p6],    
"cover": p4,    
"text": "now this one will blow your mind even more than the past."  }
]
```

You can customize it to include the fields you need. Notice how I’ve included not only text and an array of images to display for each page, but also a custom url.
### Create an overview page
In my example I structured the site to have a portfolio page with a picture to respresent each project which then links to a dedicated page with more information on that particular project.
In the portfolio page, I imported the JSON structure and then mapped through it like this:

```
{projects.map((value, index) => {        
   return <a key={index} href={"/"+value["url"]}><img className="portfolio-img" src={value["cover"]} /></a>
})}
```

This dynamically renders the cover page for each project into a gallery and hyperlinks each image to it’s own dedicated project page.
### Set up React Router to take in a project ID
I’m using React Router in App.js to redirect urls to their appropriate pages. React Router has a feature that allows url parameters to be passed to a component as props which is what I’m using to tell the project page which project it’s supposed to render. The JSX of my App.js is the following:

```
<Router>      
   <Switch>
      <Route exact path='/' exact component={Portfolio} />
      <Route exact path='/:id' exact component={Project} />             
      <Route component={ErrorPage} />
   </Switch>
</Router>
```

The url parameter is denoted by the colon after the backslash and the following word is the variable name itself, I chose to use id but you can make it whatever you want. Just remember that’s the variable name you’ll need to use to access the prop in the component.
### Render the project page based on the url parameter
Finally, we render the content of the project page based on the url parameter which tells us which part of the JSON information to use. My Project page code is the following:
```
function Project() {  
const [imgs, setImgs] = useState([]);  
const [text, setText] = useState("");  
const [id, setId] = useState(useParams().id);    
useEffect(() => {    
   for(var i = 0; i < projects.length; i++) {      
      var obj = projects[i];      
      if(obj.url == id){        
         setImgs(obj.imgs);        
         setText(obj.text);      
      }     
   }  
}); 

return (    
   <div className="content">    
      <div className="page-title">{id}</div>    
      <div className="project-text">{text}</div>        
      {imgs.map((value, index) => {      
         return <img key={index} className="project-img" src={value} />
    })}    
   </div>  
)}
```

When the component mounts, useEffect runs which is when I loop through the JSON structure, find the object in the list with the matching url of the url parameter the page received, and then save that relevant content in state. The JSX then makes use of those state variables when it renders the content of the page.
Note that I accessed my url parameter with useParams().id. Make sure that whatever variable name you used in App.js is the one you use to access the parameter, in my case id.
### That’s it!
That’s the approach I developed to dynamically render pages. It can be expanded much more beyond the way I organized my JSON to control even more of the site. I’ve made a full demo repo as well that you’re free to use.

If you found this helpful you can follow me on [Instagram](https://instagram.com/abhi.velaga) to keep up with my latest work.

*I’m currently an undergraduate at the University of Texas at Austin studying Computer Science and Studio Art. You can find more information about me and my work at my site — [abhi.work](https://abhi.work).*
