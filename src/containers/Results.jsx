export default function Results(props) {
  const { options } = props;

  const calculatePeak = () => {
    console.log(options);
    return (Number(options.panelCount) * Number(options.panelOutput)) / 1000;
  };

  return (
    <div className="w-2/12 height-100 border-r-2 bg-white p-8">
      <h2>Ihre Konfiguration</h2>
      <p>{options.panelCount} Panele</p>
      <p>{calculatePeak()} kWp</p>
    </div>
  );
}
