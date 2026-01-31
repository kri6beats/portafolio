type HeaderProps = {
    tittle: string,
    
}
type FooterProps = {
    img: React.ReactNode;
}

export function Header({tittle,}: HeaderProps){
    return(
      <div>
        <header className="header">
            <h1>{tittle}</h1>
            
        </header>
      </div>  
    )
}



