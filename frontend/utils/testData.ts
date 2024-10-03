export const dropdownData = {
  title: "Select an Option",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
};

export const profileData = {
  title: "Profile",
  options: ["Sign Out"],
};

export const generateTestData = () => {
  const hours = Array.from(
    { length: 24 },
    (_, index) => `${String(index).padStart(2, "0")}:00`
  );

  const sales = Array.from(
    { length: 24 },
    () => Math.floor(Math.random() * 100) + 10
  );

  return { hours, sales };
};
