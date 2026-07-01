'use client';

import { analyticsData }
from '@/src/constants/analyticsdata';

import KPIComparison
from './kpicomparison';

export default function AnalyticsOverview() {

  return (

    <section>

      <h2
        className="
          mb-6
          text-xl
          font-semibold
        "
      >

        Analytics Overview

      </h2>

      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        {analyticsData.map((item) => (

          <KPIComparison

            key={item.id}

            title={item.metric}

            current={item.current}

            previous={item.previous}

          />

        ))}

      </div>

    </section>

  );

}