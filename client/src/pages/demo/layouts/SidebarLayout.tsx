import React, { Fragment } from 'react';
import { RightSideBar } from '@/src/shared/layouts/RightSideBar/RightSideBar';
import { LeftSideBar } from '@/src/shared/layouts/RightSideBar/LeftSideContainer';

const SidebarLayout: React.FunctionComponent = () => {
  return (
    <Fragment>
      <RightSideBar>
        <div className="flex justify-center items-center h-screen bg-red-50">
          Right Side Bar Layout
        </div>
      </RightSideBar>
      <LeftSideBar>
        <div className="flex justify-center items-center h-screen bg-red-50">
          Left Side Bar Layout
        </div>
      </LeftSideBar>
    </Fragment>
  );
};

export default SidebarLayout;
