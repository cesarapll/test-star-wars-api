const starWarsApiClient = require("../providers/star-wars-api-client");
const Straship = require("../../shared/models/starship");
const TranslatorService = require("./translator.service");
const { NotFoundError } = require("../../shared/utils/errors");

describe("Translator Service", () => {



    describe("getPersonTranslatedById", () => {

        const getPersonApiSpy = jest.spyOn(starWarsApiClient, "get");

        const personApiReponse = {
            name: "Luke Skywalker",
            height: "172",
            mass: "77",
            hair_color: "blond",
            skin_color: "fair",
            eye_color: "blue",
            birth_year: "19BBY",
            gender: "male",
            homeworld: "https://swapi.py4e.com/api/planets/1/",
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            url: "https://swapi.py4e.com/api/people/1/",
        };

        const translatedObject = {
            nombre: "Luke Skywalker",
            altura: "172",
            masa: "77",
            color_pelo: "blond",
            color_piel: "fair",
            color_ojos: "blue",
            anho_nacimiento: "19BBY",
            genero: "male",
            mundo_natal: "https://swapi.py4e.com/api/planets/1/",
            creado: "2014-12-09T13:50:51.644000Z",
            editado: "2014-12-20T21:17:56.891000Z",
            enlace: "https://swapi.py4e.com/api/people/1/",
        };

        it("should return the translated person object", async () => {
            getPersonApiSpy.mockResolvedValue({ data: personApiReponse });

            const result = await TranslatorService.getPersonTranslatedById(1);

            expect(result).toStrictEqual(translatedObject);
        });
    });
    describe("getFilmTranslatedById", () => {

        const getFilmApiSpy = jest.spyOn(starWarsApiClient, "get");

        const filmApiReponse = {
            title: "A New Hope",
            episode_id: 4,
            opening_crawl:
                "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            director: "George Lucas",
            producer: "Gary Kurtz, Rick McCallum",
            release_date: "1977-05-25",
            created: "2014-12-10T14:23:31.880000Z",
            edited: "2014-12-20T19:49:45.256000Z",
            url: "https://swapi.py4e.com/api/films/1/",
        };

        const translatedObject = {
            titulo: "A New Hope",
            episodio_id: 4,
            apertura_ascendente:
                "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            director: "George Lucas",
            productor: "Gary Kurtz, Rick McCallum",
            fecha_lanzamiento: "1977-05-25",
            creado: "2014-12-10T14:23:31.880000Z",
            editado: "2014-12-20T19:49:45.256000Z",
            enlace: "https://swapi.py4e.com/api/films/1/",
        };

        it("should return the translated film object", async () => {
            getFilmApiSpy.mockResolvedValue({ data: filmApiReponse });

            const result = await TranslatorService.getFilmTranslatedById(1);

            expect(result).toStrictEqual(translatedObject);
        });
    });
    describe("getStarshipTranslatedById", () => {

        const getStarships = jest.spyOn(Straship, "findAll");
        const starshipDbResponse = [
            {
                dataValues: {
                    name: "Death Star II",
                    model: "DS-1 Orbital Battle Station",
                    manufacturer:
                        "Imperial Department of Military Research, Sienar Fleet Systems",
                    cost_in_credits: "1000000000000",
                    crew: "342,953",
                    passengers: "843,342",
                    cargo_capacity: "1000000000000",
                    consumables: "3 years",
                    starship_class: "Deep Space Mobile Battlestation",
                    url: "https://swapi.py4e.com/api/starships/9/",
                },
            },
        ];

        translatedArray = [
            {
                nombre: "Death Star II",
                modelo: "DS-1 Orbital Battle Station",
                fabricante:
                    "Imperial Department of Military Research, Sienar Fleet Systems",
                costo_en_creditos: "1000000000000",
                tripulacion: "342,953",
                pasajeros: "843,342",
                capacidad_carga: "1000000000000",
                consumibles: "3 years",
                clase_nave: "Deep Space Mobile Battlestation",
                enlace: "https://swapi.py4e.com/api/starships/9/",
            },
        ];

        it("should return the translated starships array", async () => {
            getStarships.mockResolvedValue(starshipDbResponse);

            const result = await TranslatorService.getStarshipsTranslated(1);

            translatedArray.forEach((translatedStarship, index) => {
                expect(result[index]).toStrictEqual(translatedStarship);
            });
        });
    });
});
