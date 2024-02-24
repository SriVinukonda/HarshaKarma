import "../styles/Project.css";

function Project(props) {
    // Send the title name in item props
    let img_src = props.imgSrc;
    // let isdfgs = require(props.imgSrc);
    const src = new URL('../../public/'+props.imgSrc, import.meta.url).href
  return (
    <div className='projectBody'>
    {/* {console.log(img_src)} */}
    <img className="projectImage" src={props.imgSrc}  alt={'failed: '+img_src}></img>
    <p className="projectDescription">{props.desc}</p>
    <p>
      <i>
      Tech: {props.tech}
      </i>   |
       Links: <b><a href={props.repo}>Sourcecode</a></b>
      
    </p>
    </div>
  );
}
// test commit

export default Project;