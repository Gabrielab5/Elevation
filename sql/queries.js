const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:1234@localhost/pokecorp');

const getQueries = () => {
    
    // Exercise 2: Find the heaviest pokemon
    const findHeaviestPokemon = async () => {
        const [results] = await sequelize.query(`
            SELECT name FROM pokemon
            ORDER BY weight DESC
            LIMIT 1;
        `);
        return results[0].name;
    };

    // Exercise 3: Find all pokemon names of a given type
    const findByType = async (type) => {
        const [results] = await sequelize.query(`
            SELECT p.name
            FROM pokemon p
            JOIN pokemon_type pt ON p.pokemon_type_id = pt.id
            WHERE pt.name = '${type}';
        `);
        return results.map(p => p.name);
    };

    // Exercise 4: Find all trainers who own a given pokemon
    const findOwners = async (pokemonName) => {
        const [results] = await sequelize.query(`
            SELECT t.name
            FROM pokemon p
            JOIN pokemon_trainer pt ON p.id = pt.pokemon_id
            JOIN trainer t ON pt.trainer_id = t.id
            WHERE p.name = '${pokemonName}';
        `);
        return results.map(t => t.name);
    };

    // Exercise 5: Find all pokemon owned by a given trainer
    const findRoster = async (trainerName) => {
        const [results] = await sequelize.query(`
            SELECT p.name
            FROM trainer t
            JOIN pokemon_trainer pt ON t.id = pt.trainer_id
            JOIN pokemon p ON pt.pokemon_id = p.id
            WHERE t.name = '${trainerName}';
        `);
        return results.map(p => p.name);
    };

    // Exercise 6: Find the most owned pokemon
    const findMostOwnedPokemon = async () => {
        const [results] = await sequelize.query(`
            SELECT p.name
            FROM pokemon_trainer pt
            JOIN pokemon p ON pt.pokemon_id = p.id
            GROUP BY p.name
            HAVING COUNT(pt.trainer_id) = (
                SELECT COUNT(trainer_id)
                FROM pokemon_trainer
                GROUP BY pokemon_id
                ORDER BY COUNT(trainer_id) DESC
                LIMIT 1
            );
        `);
        return results.map(p => p.name);
    };

    return {
        findHeaviestPokemon,
        findByType,
        findOwners,
        findRoster,
        findMostOwnedPokemon
    };
};

const main = async () => {
    const queries = getQueries();
    
    console.log("Heaviest Pokemon:", await queries.findHeaviestPokemon());
    console.log("Grass-type pokemon:", await queries.findByType("grass"));
    console.log("Owners of Gengar:", await queries.findOwners("Gengar"));
    console.log("Pokemon owned by Ash:", await queries.findRoster("Ash"));
    console.log("Most owned pokemon:", await queries.findMostOwnedPokemon());

    sequelize.close();
};

main();
