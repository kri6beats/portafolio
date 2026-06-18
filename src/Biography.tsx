type BiographyProps = {
  tittle: string;
  name: string;
  role: string;
  description: string;
};

type SubtitleProps = {
  tittle: string;
};

export function Biography({
  tittle,
  name,
  role,
  description,
}: BiographyProps) {
  return (
    <div className="biography">
      <h3>{tittle}</h3>

      <h1 className="hero-name">{name}</h1>

      <h2 className="hero-role">{role}</h2>

      <p>{description}</p>
    </div>
  );
}

export function Subtittle({ tittle }: SubtitleProps) {
  return (
    <div className="subtitle-header">
      <h3>{tittle}</h3>
    </div>
  );
}