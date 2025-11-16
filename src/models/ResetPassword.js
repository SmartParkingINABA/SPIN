import { DataTypes } from 'sequelize'
import sequelize from '../configs/DBConfig.js'

const passwordResetModel = () => {
    const passwordReset = sequelize.define('passwordReset', {
        id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        otp_hash : {
            type:DataTypes.STRING(4),
            allowNull: false
        },
        reset_token_hash : {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        expires_at : {
            type: DataTypes.DATE,
            allowNull: false
        },
        created_at : {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,

        }
    }, {
        tableName: 'password_reset',
        timestamps: false,
        underscored: true
    });

    return passwordReset;
};

export default passwordResetModel;