module.exports = {
  dialect: 'postgres',
  hoost: 'db',
  username: 'postgres',
  password: 'docker',
  database: 'tarv_transportadora',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
