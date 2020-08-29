////Converts final rover locations array to string
export const handleOutput = (roversLocationArr) => {
  let roversLocation = "";

  roversLocationArr.forEach((rover) => {
    //display each result in new line
    roversLocation += `${rover.x} ${rover.y} ${rover.direction}\n`;
  });
  return roversLocation;
};
