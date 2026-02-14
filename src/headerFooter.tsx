type HeaderProps = {
    tittle: string,
    
}
type FooterProps = {
    description: string;
    children?: React.ReactNode;
    
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

export function Footer({ description, children }: FooterProps) {
  return (
    <footer className="footer">
      <p>{description}</p>
      <div className="footer-icon">
        {children}
      </div>
    </footer>
  );
}



