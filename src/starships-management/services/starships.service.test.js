const StarshipService = require("./starships.service");
const Starship = require("../../shared/models/starship");
const { ConflictError, InternalServerError } = require("../../shared/utils/errors");

describe("Starships Service", () => {

    let starshipsData = []
    let findOneStarshipSpy = jest.spyOn(Starship, "findOne");
    let createStarshipSpy = jest.spyOn(Starship, "create");

    beforeEach(() => {
        starshipsData = [
            {
                name: "CR90 corvette",
                model: "CR90 corvette",
                manufacturer: "Corellian Engineering Corporation",
                cost_in_credits: "3500000",
                crew: "30-165",
                passengers: "600",
                cargo_capacity: "3000000",
                consumables: "1 year",
                starship_class: "corvette",
                url: "https://swapi.py4e.com/api/starships/2/"
            }
        ]

    })


    describe("create", () => {


        it("should throw ConflictError if starship with the same name already exists", async () => {
            const newStarship = starshipsData[0]

            findOneStarshipSpy.mockImplementation(() => {
                return Promise.resolve(starshipsData[0]);
            })
            createStarshipSpy.mockImplementation(() => {
                return Promise.resolve(true);
            });

            try {
                await StarshipService.create(newStarship)
            } catch (error) {

                expect(error).toBeInstanceOf(ConflictError);
                expect(error.message).toBe("Starship already exists");
            }

        });

    });
});
