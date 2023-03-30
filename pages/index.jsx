import { useState } from "react";

const Index = () => {
  const [widthValue, setWidthValue] = useState("");
  const [heightValue, setHeightValue] = useState("");
  const [enteredPixelSize, setEnteredPixelSize] = useState("");
  const [pixelConversion, setPixelConversion] = useState({});
  const [remConversion, setRemConversion] = useState({});
  const handleWidthChange = (event) => {
    setWidthValue(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeightValue(event.target.value);
  };
  const handlePixelChange = (event) => {
    setEnteredPixelSize(event.target.value);
  };

  const convertValues = (height, width, passedPixel) => {
    let pixel = { 1360: "", 1440: "", 1920: "" };
    let rem = { 1360: "", 1440: "", 1920: "" };

    const convertToPixel = (value, scale) => {
      let pixel = value;
      // console.log(pixel, scale);

      return pixel * scale;
    };
    const convertToRem = (pixelValue) => {
      let pixel = pixelValue;

      return pixel * 0.0625;
    };

    const convertFor1360x720 = () => {
      let heightFactor = 720 / height;
      let widthFactor = 1360 / width;
      // console.log(height, width);
      let avgFactor = (heightFactor + widthFactor) / 2;

      let newPixelValue = convertToPixel(passedPixel, avgFactor);
      let remValue = convertToRem(newPixelValue);
      pixel[1360] = newPixelValue;
      rem[1360] = remValue;
      // console.log(pixel[1360], rem[1360]);
    };
    const convertFor1440x900 = () => {
      let heightFactor = 900 / height;
      let widthFactor = 1440 / width;

      let avgFactor = (heightFactor + widthFactor) / 2;
      // console.log(avgFactor);

      let newPixelValue = convertToPixel(passedPixel, avgFactor);
      let remValue = convertToRem(newPixelValue);
      pixel[1440] = newPixelValue;
      rem[1440] = remValue;
      // console.log(passedPixel);
      // console.log(pixel[1360], rem[1360]);
    };
    const convertFor1920x1080 = () => {
      let heightFactor = 1080 / height;
      let widthFactor = 1920 / width;
      let avgFactor = (heightFactor + widthFactor) / 2;
      // console.log(scale);

      let newPixelValue = convertToPixel(passedPixel, avgFactor);
      let remValue = convertToRem(newPixelValue);
      pixel[1920] = newPixelValue;
      rem[1920] = remValue;
      // console.log(pixel[1360], rem[1360]);

      // console.log(passedPixel);
    };

    convertFor1360x720();
    convertFor1440x900();
    convertFor1920x1080();

    setPixelConversion(pixel);
    setRemConversion(rem);

    // console.log(pixel);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 mt-24 font-sans md:px-5">
        <h1 className="text-2xl font-bold text-center">
          Resolution or dimensions of Figma
        </h1>
        <div className="flex flex-col gap-10 mt-5 md:flex-row">
          <input
            type="text"
            name="width"
            id="width"
            placeholder="Enter width here "
            className="p-5 mx-5 border-2 rounded-lg"
            value={widthValue}
            onChange={handleWidthChange}
          />
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Enter Height here "
            className="p-5 mx-5 border-2 rounded-lg"
            value={heightValue}
            onChange={handleHeightChange}
          />
        </div>

        <div className="flex flex-row gap-1 mt-10 md:gap-10 ">
          <input
            type="text"
            placeholder="Enter Pixel Size"
            className="p-2 font-bold text-black rounded-lg bg-slate-200"
            value={enteredPixelSize}
            onChange={handlePixelChange}
          />
          <button
            onClick={() =>
              convertValues(heightValue, widthValue, enteredPixelSize)
            }
            className="p-5 font-bold text-white bg-green-400 rounded-lg hover:opacity-90"
          >
            Convert
          </button>
        </div>
        <div className="mt-10">
          <table>
            <thead>
              <tr>
                <th>Resolution</th>
                <th>Pixel Size</th>
                <th>Rem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg font-medium pb-14">1360x720</td>
                <td className="pl-12 text-2xl font-bold text-green-600 lg:pl-32 pb-14">
                  {pixelConversion[1360].toFixed(3)}
                </td>
                <td className="pl-12 text-2xl font-bold text-yellow-600 lg:pl-32 pb-14">
                  {remConversion[1360].toFixed(3)}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-medium pb-14">1440x900</td>
                <td className="pl-12 text-2xl font-bold text-green-600 lg:pl-32 pb-14">
                  {pixelConversion[1440].toFixed(3)}
                </td>
                <td className="pl-12 text-2xl font-bold text-yellow-600 lg:pl-32 pb-14">
                  {remConversion[1440].toFixed(3)}
                </td>
              </tr>
              <tr>
                <td className="text-lg font-medium pb-14">1920x1080</td>
                <td className="pl-12 text-2xl font-bold text-green-600 lg:pl-32 pb-14">
                  {pixelConversion[1920].toFixed(3)}
                </td>
                <td className="pl-12 text-2xl font-bold text-yellow-600 lg:pl-32 pb-14">
                  {remConversion[1920].toFixed(3)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Index;
