export const logTabs = [
  "Day",
  "Health",
  "Spending",
  "Weather",
  "Dream",
] as const;

export const logColors = {
  Day: ["green-500", "emerald-600", "teal-700", "cyan-800", "sky-900"],
  Health: ["red-500", "red-600", "red-700", "red-800", "red-900"],
  Spending: [
    "yellow-500",
    "yellow-600",
    "yellow-700",
    "yellow-800",
    "yellow-900",
  ],
  Weather: ["blue-500", "blue-600", "blue-700", "blue-800", "blue-900"],
  Dream: [
    "fuchsia-500",
    "fuchsia-600",
    "fuchsia-700",
    "fuchsia-800",
    "fuchsia-900",
  ],
};

export const logDescriptions = {
  Day: ["Very Good", "Good", "Neutral", "Bad", "Very Bad"],
  Health: ["Healthy", "Good", "Neutral", "Sick", "Bed Ridden"],
  Spending: [
    "Nothing",
    "Less than Budget",
    "Aligned with Budget",
    "Over than Budget",
    "A Lot",
  ],
  Weather: ["Hot", "Humid", "Mild", "Gloomy", "Rainy"],
  Dream: ["Happy", "Funny", "Scary", "Sad", "Don't Remember"],
};
