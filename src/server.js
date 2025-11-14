import app from './app.js'
import sequelize from './configs/DBConfig.js';

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection successss!');
        app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
    } catch (error) {
        console.error('Failed connect to database!');
        
    }
})();