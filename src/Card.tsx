 
type CardProps = {
  name: string;
  description: string;
  img: string;
  link: string;
  children?: React.ReactNode;
};


export function Card({ name, description, img ,link,children}: CardProps){
  return (
    <div className="card">
    <a href={link} target="_blank" rel="noopener noreferrer" >
      <img src={img}  className="card-img" alt="image" />
    </a>
      <h3 >{name}</h3>
      <p>{description}</p>
      <div className="card-icon">{children}</div> 
    </div>
    
    
  );
}