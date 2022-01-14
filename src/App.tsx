import {LineSeries, XYPlot} from "react-vis";
import dataTemp from './data/data-temp'

const dataHandled = dataTemp.map(data => ({x: data.x, y: data.y}));

// todo 實作互動機制 onXxxx

const App = () => {
  return (
    <div className="panel">
      <h1>TEST</h1>
      <div className="wrap">
        <div className="monitor">
            <XYPlot width={300} height={200}>
              <LineSeries data={dataHandled} />
            </XYPlot>
        </div>
      </div>
    </div>
  );
}

export default App;
