module.exports = (sequelize, DataTypes) => {
  const WorldCity = sequelize.define(
    'world_city',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      country_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      }
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'world_city'
    }
  )
  return WorldCity
}
