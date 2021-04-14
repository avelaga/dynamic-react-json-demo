import { projects, numColumns } from './projects.js';
import Columned from "react-columned";
import './pages.css';

function Portfolio() {
  return (
    <div>
      <div className="content">
        <div className="page-title">PROJECTS</div>
        <Columned columns={numColumns}>
        {projects.map((value, index) => {
        return <a key={index} href={"/"+value["url"]}><img  className="portfolio-img" src={value["cover"]} /></a>
        })}
      </Columned>
      </div>
    </div>
  )
}

export default Portfolio;