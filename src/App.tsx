import {LineSeries, XYPlot} from "react-vis";
import dataTemp from './data/data-temp'

const dataHandled:{x: number, y: number}[] = dataTemp.map(data => {
  return {x: data.x, y: data.y};
});

const App = () => {
  return (
    <div className="panel">
      <h1>TEST</h1>
      <div className="wrap">
        <div className="monitor">
          <div>
            <XYPlot width={300} height={200}>
              <LineSeries data={dataHandled} />
            </XYPlot>
          </div>
        </div>
        <div className="monitor">
          <div></div>
        </div>
        <div className="monitor">
          <div></div>
        </div>
        <div className="monitor">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
