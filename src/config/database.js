module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'postgres',
  password: 'docker',
  database: 'tarv_transportadora',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
