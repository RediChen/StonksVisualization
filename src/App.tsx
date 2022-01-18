import { useState } from "react";
import {
  LineSeries, XYPlot, Crosshair
} from "react-vis";
import dataTemp from './data/data-temp'

const dataHandled = dataTemp.map(data => ({ x: data.x, y: data.y }));

// todo 實作互動機制 onWhatever

const App = () => {
  const [focus, setFocus] = useState<number[]>([]);
  return (
    <div className="panel">
      <div className="wrap">
        <div className="monitor">
          <XYPlot width={900} height={400} onMouseLeave={() => setFocus([])}>
            <LineSeries data={dataHandled}
              onNearestX={(value, { innerX }) => setFocus([innerX])} />
            <Crosshair value={focus}>
              {/* <div style={{ backgroundColor: "#fff", width: '50px', borderRadius: '50%' }}>ahhh</div> */}
              <div style={{ background: '#fff' }}>
                <h3>Values of crosshair:</h3>
                <p>{focus} NTD</p>
              </div>
            </Crosshair>
          </XYPlot>
        </div>
      </div>
      <h1>TEST: {focus}</h1>
    </div>
  );
}

export default App;