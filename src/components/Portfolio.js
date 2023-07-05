import './portfolio.scss';
import PortfolioList from './portfolioList/PortfolioList';
import { useState, useEffect} from 'react';
import {featuredPortfolio, webPortfolio, mobilePortfolio, contentPortfolio, designPortfolio} from '../data';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(()=>{
      switch (selected) {
        case 'featured':
          setData(featuredPortfolio);
          break;
          case 'web':
            setData(webPortfolio);
            break;
            case 'mobile':
              setData(mobilePortfolio);
              break;
              case 'content':
                setData(contentPortfolio);
                break;
                case 'design':
                  setData(designPortfolio);
                  break;
        default:
          setData(featuredPortfolio);
      }

  },[selected])
  const list = [
    {
      id:"featured",
      title:"Featured"
    },
    {
      id:"web",
      title:"Web App"
    },
    {
      id:"mobile",
      title:"Mobile App"
    },
    {
      id:"content",
      title:"Content"
    },
    {
      id:"design",
      title:"Design"
    },
  ]

  return (
    <div className='portfolio' id='portfolio'>
     <h1>Portfolio</h1>
     <ul>
      {list.map((item)=>(
        <PortfolioList title={item.title} active={item.id===selected} setSelected={setSelected} id={item.id} />
))}
     </ul>

     <div className="container">
      {data.map((d)=>(

        <div className="item">
        <img src={d.img} alt="no imag" />
        <h3>{d.title}</h3>
      </div>
      ))}
      
     </div>
    </div>
  )
}
