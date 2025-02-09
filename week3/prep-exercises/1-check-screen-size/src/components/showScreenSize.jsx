import useScreenSize from "../hooks/useScreenSize.jsx";

function ShowScreenSize() {
  const { width, height } = useScreenSize();

  return (
    <div>
      <h2>Screen Size:</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

export default ShowScreenSize;
