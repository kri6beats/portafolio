type OrbitProps = {
  src: string;
  angle: number;
};

export const OrbitIcon = ({ src, angle }: OrbitProps) => {
  return (
    <div
      className="orbit-icon"
      style={{
        transform: `
          rotate(${angle}deg)
          translateX(var(--orbit-radius))
          rotate(-${angle}deg)
        `,
      }}
    >
      <img src={src} alt="" />
    </div>
  );
};