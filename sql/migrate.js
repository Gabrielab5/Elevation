const Sequelize = require('sequelize');
const pokemonData = require('./data');
const sequelize = new Sequelize('mysql://root:1234@localhost/pokecorp');

const PokemonType = sequelize.define('pokemon_type', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, unique: true }
}, { tableName: 'pokemon_type', timestamps: false });

const Trainer = sequelize.define('trainer', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, unique: true }
}, { tableName: 'trainer', timestamps: false });

const Pokemon = sequelize.define('pokemon', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    name: { type: Sequelize.STRING },
    height: { type: Sequelize.DECIMAL },
    weight: { type: Sequelize.DECIMAL }
}, { tableName: 'pokemon', timestamps: false });

const PokemonTrainer = sequelize.define('pokemon_trainer', {
    pokemon_id: { type: Sequelize.INTEGER, references: { model: Pokemon, key: 'id' } },
    trainer_id: { type: Sequelize.INTEGER, references: { model: Trainer, key: 'id' } }
}, { tableName: 'pokemon_trainer', timestamps: false });

const migrateData = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successful.');

        // Sync models to create tables if they don't exist
        await sequelize.sync();

        console.log('Starting data migration...');

        for (const pokemon of pokemonData) {
            // Find or create the pokemon type
            const [type] = await PokemonType.findOrCreate({
                where: { name: pokemon.type }
            });

            // Insert the pokemon, linking to its type
            await Pokemon.create({
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                pokemon_type_id: type.id
            });

            // Iterate through the owners and create trainer-pokemon relationships
            for (const owner of pokemon.ownedBy) {
                const [trainer] = await Trainer.findOrCreate({
                    where: { name: owner.name }
                });

                await PokemonTrainer.create({
                    pokemon_id: pokemon.id,
                    trainer_id: trainer.id
                });
            }
        }

        console.log('Data migration complete!');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        sequelize.close();
    }
};

migrateData();
