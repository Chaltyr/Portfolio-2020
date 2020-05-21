import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: 'Team Work', population: 9 },
  { year: 'Project Management', population: 8 },
  { year: 'Python/Flask/SQL', population: 5 },
  { year: 'React/Javascript', population: 8 },
  { year: 'CSS/HTML', population: 8 },

];

export default class Bars extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          rotated
        >
          <ArgumentAxis />
          <ValueAxis max={0} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Skill set" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
