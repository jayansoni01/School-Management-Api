import { addSchool, getAllSchools } from "../services/schoolServices.js";
import calculateDistance from "../utils/distanceCalculator.js";


export const addSchoolController = async (req, res) => {
  try {
    await addSchool(req.body);

    res.status(201).json({ message: "School added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding school", error });
  }
};


export const listSchoolsController = async (req, res) => {
  try {
    const userLat = parseFloat(req.query.latitude);
    const userLng = parseFloat(req.query.longitude);

    if (!userLat || !userLng) {
      return res.status(400).json({ message: "User coordinates required" });
    }

    if (isNaN(userLat) || isNaN(userLng)) {
    return res.status(400).json({ message: "Invalid coordinates" });
    }

    const schools = await getAllSchools();

    const schoolsWithDistance = schools.map((school) => {
      const distance = calculateDistance(
        userLat,
        userLng,
        school.latitude,
        school.longitude
      );

      return { ...school, distance };
    });

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schools", error });
  }
};