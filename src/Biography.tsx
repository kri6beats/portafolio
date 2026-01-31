type BiographyProps = {
    tittle: string;
    description: string;
}

type SubtitleProps = {
    tittle: string;
}


export function Biography({tittle,description}:BiographyProps) {
    
    return (
        
        <div className="biography">
            <h3>{tittle}</h3>
            <p>{description}</p>
        </div>

    );
}

export function Subtittle({tittle}:SubtitleProps) {
    return (
        <div className="subtitle-header">
            <h3>{tittle}</h3>
        </div>
    );
}