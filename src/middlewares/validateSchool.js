const validateSchool = (req, res, next) => {
  let { name, address, latitude, longitude } = req.body;

  if (typeof name !== "string" || typeof address !== "string") {
    return res.status(400).json({
      message: "Name and address must be strings"
    });
  }

  name = name.trim();
  address = address.trim();

  if (
    !name ||
    !address ||
    latitude === undefined ||
    longitude === undefined ||
    latitude === "" ||
    longitude === ""
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  const lat = Number(latitude);
  const lng = Number(longitude);

  if (isNaN(lat) || isNaN(lng)) {
    return res.status(400).json({
      message: "Latitude and longitude must be valid numbers"
    });
  }

  if (lat < -90 || lat > 90) {
    return res.status(400).json({
      message: "Latitude must be between -90 and 90"
    });
  }

  if (lng < -180 || lng > 180) {
    return res.status(400).json({
      message: "Longitude must be between -180 and 180"
    });
  }

  req.body = {
    name,
    address,
    latitude: lat,
    longitude: lng
  };

  next();
};
export default validateSchool;