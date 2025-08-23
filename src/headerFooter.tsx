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

export function Footer({img}:FooterProps){    
    return (
        <footer className="footer">
            <a target="_blank" href="https://github.com/kri6beats">
                <span>gitHub</span>
            </a>
                <div className="img">{img}</div>
        </footer>
    );
}

