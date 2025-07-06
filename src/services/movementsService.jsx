import { movementsData } from "../data/movementsData";

const movementsService = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movementsData);
    }, 2000);
  });
};

export default movementsService;
