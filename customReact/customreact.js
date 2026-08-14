

function customRender(reactElement,container)
{
        //  const domElement=document.createElement(reactElement.type)
        //  domElement.innerHTML=reactElement.children
        //  domElement.setAttribute('href',reactElement.props.href)
        //  domElement.setAttribute('target',reactElement.props.target)
        //  container.appendChild(domElement)


      const documentEle=  document.createElement(reactElement.type)

      documentEle.innerHTML=reactElement.children;
      
      for(let prop in reactElement.props)
      {
        if(prop==='children') continue;
          documentEle.setAttribute(prop, reactElement.props[prop])
      }
     container.appendChild(documentEle)


}
//this is whatraect does behind scnes
// function App() {
 

//   return (
//     // <div>

//     //   <First/>
//     // </div>
//     <>
//     <div></div>
//     <h1></h1>
    
//     </>
  
    
//   )
// }
const reactElement=
{
    type:'a',
    props:
    {
        href:"https://google.com",
        target:"_blank"
    },
    children:'click me to visit google'
}

const maincontainer=document.querySelector('#root')


customRender(reactElement,maincontainer)
