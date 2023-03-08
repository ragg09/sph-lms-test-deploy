import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ children }: Props) => {
  const tabList = [
    {
      id: 1,
      tabName: 'Tab 1'
    },
    {
      id: 2,
      tabName: 'Tab 2'
    },
    {
      id: 3,
      tabName: 'Tab 3'
    },
    {
      id: 4,
      tabName: 'Tab 4'
    }
  ];
  const [activeTab, setActiveTab] = useState(1);

  const activateTab = (items: number): void => {
    setActiveTab(items);
  };
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col">
        <div className="flex flex-row space-x-10 pb-6 pt-10 pl-5 h-10 w-screen font font-small text-base border-b-2 text-gray-600">
          {tabList.map((items, index) => (
            <div
            key={items.id}
              className={`${
                activeTab !== items.id ? '' : 'md:underline font-bold'
              } ' cursor-pointer hover:underline underline-offset-1'`}
              onClick={() => {
                activateTab(items.id);
              }}
            >
              {items.tabName}
            </div>
          ))}
        </div>
        <div className="justify-center flex flex-row">
          <div className="pl-5 pt-20 h-auto w-auto font font-medium text-xl justify justify-center">
            Content for Tab {activeTab}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
