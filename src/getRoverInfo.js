export const getRoverInfo = (coordinates) => {
  const position = { x: parseInt(coordinates[0]), y: parseInt(coordinates[1]) };
  const direction = coordinates[2];
  return { position, direction };
};
