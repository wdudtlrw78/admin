import React from 'react';
import Chart from '../../components/Chart';
import FeaturedInfo from '../../components/FeaturedInfo';
import './index.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/WidgetSm';
import WidgetLg from '../../components/WidgetLg';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
