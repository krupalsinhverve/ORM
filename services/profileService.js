const Profile = require("../models/profile.model");

exports.createProfile = async (profileData) => {
  const profile = await Profile.create(profileData);
  return profile;
};

exports.getProfileById = async (id) => {
  return await Profile.findByPk(id);
};

exports.deleteProfile = async (id) => {
  return await Profile.destroy({ where: { id } });
};
