import Card from "../cardPokedex/Card";

const CardContainer = ({pokemons}) => {
  
  return (
    <section className="cards">
      {pokemons.map((pokemon, index) => (
        <Card pokemon={pokemon} key={Date.now() + index} />
      ))}
    </section>
  );
};

export default CardContainer;
