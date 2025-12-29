import { fireEvent, render, screen } from '@testing-library/react';

import { Text } from '../../../antOverrides/text';
import { NavigationTabs } from '../../navigationTabs';

describe('NavigationTabs', () => {
  it('renders the default tabs and their content correctly', () => {
    render(
      <NavigationTabs defaultTabKey="tab1">
        <NavigationTabs.Tab tabKey="tab1" title="Tab 1">
          <Text>Content for Tab 1</Text>
        </NavigationTabs.Tab>
        <NavigationTabs.Tab tabKey="tab2" title="Tab 2">
          <Text>Content for Tab 2</Text>
        </NavigationTabs.Tab>
        <NavigationTabs.Tab tabKey="tab3" title="Tab 3">
          <Text>Content for Tab 3</Text>
        </NavigationTabs.Tab>
      </NavigationTabs>,
    );

    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();

    expect(screen.queryByText('Content for Tab 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Content for Tab 3')).not.toBeInTheDocument();

    // Click on tab 2
    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
  });
  it('renders extra content', () => {
    render(
      <NavigationTabs
        defaultTabKey="tab1"
        extraBeforeItem={<Text>Before Tabs</Text>}
        extraAfterItem={<Text>After Tabs</Text>}
      >
        <NavigationTabs.Tab tabKey="tab1" title="Tab 1">
          <Text>Content for Tab 1</Text>
        </NavigationTabs.Tab>
        <NavigationTabs.Tab tabKey="tab2" title="Tab 2">
          <Text>Content for Tab 2</Text>
        </NavigationTabs.Tab>
      </NavigationTabs>,
    );

    // Verify extra content is rendered
    expect(screen.getByText('Before Tabs')).toBeInTheDocument();
    expect(screen.getByText('After Tabs')).toBeInTheDocument();

    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
  });
  it('renders custom style', () => {
    render(
      <NavigationTabs defaultTabKey="tab1">
        <NavigationTabs.Tab
          tabKey="tab1"
          title={(color) => <Text style={{ color }}>Dynamic Tab 1</Text>}
        >
          <Text>Dynamic content for Tab 1</Text>
        </NavigationTabs.Tab>
        <NavigationTabs.Tab
          tabKey="tab2"
          title={(color) => <Text style={{ color }}>Dynamic Tab 2</Text>}
        >
          <Text>Dynamic content for Tab 2</Text>
        </NavigationTabs.Tab>
      </NavigationTabs>,
    );

    const tab1 = screen.getByText('Dynamic Tab 1');
    expect(tab1).toHaveStyle('color: rgb(201, 37, 45)');
  });
});
