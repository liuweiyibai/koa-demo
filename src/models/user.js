const db = require("../config/db");
const Role = db.import("./role");
const City = db.import("./city");
const Company = db.import("./company");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "",
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      company_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      role_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
      del: {
        type: DataTypes.INTEGER(4),
        allowNull: true,
        defaultValue: "0"
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      job: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      platform: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      area_id: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "user",
      timestamps: false
    }
  );

  // User.belongsTo(Role, {
  //   // 这边的外键
  //   foreignKey: 'role_id',
  //   // 对应对面的哪个键
  //   targetKey: 'id',
  //   as: 'rname'
  // })
  // 源: 调用 sequelize 中关系方法的调用者
  User.hasOne(Role, {
    foreignKey: "id",
    sourceKey: "role_id",
    as: "role"
  });

  User.hasOne(City, {
    foreignKey: "id",
    sourceKey: "area_id",
    as: "city"
  });
  User.belongsTo(Company, {
    // 这边的外键
    foreignKey: "company_id",
    // 对应对面的哪个键
    targetKey: "id",
    as: "company"
  });

  // User.associate = models => {
  //   User.hasOne(models.Role, {
  //     foreignKey: 'id',
  //     sourceKey: 'role_id'
  //   })
  //   User.belongsTo(Role, {
  //     // 这边的外键
  //     foreignKey: 'role_id',
  //     // 对应对面的哪个键
  //     targetKey: 'id',
  //     as: 'rname'
  //   })
  // }
  return User;
};
