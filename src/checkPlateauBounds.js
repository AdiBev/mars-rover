export const checkPlateauBounds = (x, y, gridArea) => {
  const areaX = gridArea[0];
  const areaY = gridArea[1];

  if (x > areaX || x < 0 || y > areaY || y < 0) {
    return false;
  } else return true;
};
