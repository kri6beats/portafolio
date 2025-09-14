type HeaderProps = {
    title: string,
    
}
type FooterProps = {
    img: React.ReactNode;
}

export function Header({title,}: HeaderProps){
    return(
      <div>
        <header className="header">
            <h1>{title}</h1>
            
        </header>
      </div>  
    )
}



