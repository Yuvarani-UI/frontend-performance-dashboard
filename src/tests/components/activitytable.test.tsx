import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import StatsCard from '@/src/components/dashboard/statscard';
import { store } from '@/src/store';

describe('StatsCard', () => {
  it('renders title', () => {
    const { getByText } = render(
      <Provider store={store}>
        <StatsCard
          title="LCP"
          value="2.3s"
          status="Good"
        />
      </Provider>,
    );

    expect(
      getByText('LCP'),
    ).toBeInTheDocument();
  });

  it('renders value', () => {
    const { getByText } = render(
      <Provider store={store}>
        <StatsCard
          title="LCP"
          value="2.3s"
          status="Good"
        />
      </Provider>,
    );

    expect(
      getByText('2.3s'),
    ).toBeInTheDocument();
  });
});