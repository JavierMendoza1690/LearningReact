import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
    test("getHeroebyId debe retornar un heroe por id", () => {
      const id = 1;
      const hero = getHeroeById(id);

      expect(hero).toStrictEqual({ id: 1, name: "Batman", owner: "DC" });
    });

    test("getHeroesById debe retornar undefined si no existe", () => {
      const id = 100;
      const hero = getHeroeById(id);

      // expect(hero).toBe(undefined)

      expect(hero).toBeFalsy();
      //tobeFalsy retorna null, undefined o false
    });

    test("getHeroesByOwner Debe retornar un objeto con los heroes del DC", () => {
      const owner = "DC";
      const Heroes = getHeroesByOwner(owner);

      expect(Heroes.length).toBe(3);

      expect(Heroes).toEqual([
        { id: 1, name: "Batman", owner: "DC" },
        { id: 3, name: "Superman", owner: "DC" },
        { id: 4, name: "Flash", owner: "DC" },
      ]);
    });

  test("getHeroesByOwner Debe retornar un objeto con los heroes del Marvel", () => {
    const owner = "Marvel";
    const Heroes = getHeroesByOwner(owner);
   
    expect(Heroes.length).toBe(2);

    expect(Heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
