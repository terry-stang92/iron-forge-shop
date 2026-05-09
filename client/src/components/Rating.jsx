// Rating.jsx — componente reutilizable de estrellas
// Recibe: value (número del 1-5), text (ej: "4 reviews"), color
// Lo usaremos dentro de ProductCard para mostrar rating de cada producto

const Rating = ({ value, text, color = "#f0c040" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>

      {/* Generamos 5 estrellas — comparamos value contra cada posición */}
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          <i
            style={{ color }}
            className={
              value >= star
                ? "fas fa-star"           // estrella llena
                : value >= star - 0.5
                ? "fas fa-star-half-alt"  // media estrella
                : "far fa-star"           // estrella vacía
            }
          />
        </span>
      ))}

      {/* text es opcional — si no se pasa, no renderiza nada */}
      {text && <span style={{ marginLeft: "6px", fontSize: "14px" }}>{text}</span>}
    </div>
  );
};

export default Rating;
