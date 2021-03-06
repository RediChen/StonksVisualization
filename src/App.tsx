import { useState } from "react";
import {
  LineSeries, XYPlot, Crosshair, XAxis, YAxis, LineSeriesPoint
} from "react-vis";
// import dataTemp from './data/data-temp'
import dataTemp2 from './data/data-test01'

const dataHandled = dataTemp2.map(data => ({ x: data.x, y: data.y }));


const App = () => {
  const [focusedPoint, setFocusedPoint] = useState<LineSeriesPoint[]>([]);
  return (
    <div className="panel">
      <div className="monitor">
        <XYPlot xType='time' width={750} height={400} onMouseLeave={() => setFocusedPoint([])}>
          <XAxis />
          <YAxis orientation='right' />
          <LineSeries data={dataHandled} onNearestX={d => setFocusedPoint([d])} />
          <Crosshair values={focusedPoint} />
        </XYPlot>
      </div>
      <h1>TEST</h1>
    </div>
  );
}

export default App;