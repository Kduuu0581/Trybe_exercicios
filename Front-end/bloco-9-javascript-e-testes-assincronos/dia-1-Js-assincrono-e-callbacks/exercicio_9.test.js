// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectError = new Error("Não temos pokémon para você:(");

    function callback(error, result) {
      expect(error).toEqual(expectError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === "Ratata", callback);
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    const expectMessage =
      "Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf";

    function callback(error, result) {
      expect(result).toEqual(expectMessage);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === "Bulbasaur", callback);
  });
});
