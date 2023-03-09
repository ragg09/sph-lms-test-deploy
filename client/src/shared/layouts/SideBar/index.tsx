import React from 'react';
import Link from 'next/link';

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className="space-y-9">
      <div>
        <div>
          <h1 className="text-lg pb-2 font-medium">
            Quick Links | &#160;
            <Link className="text-blue-700" href="/">
              View Trainees
            </Link>
          </h1>
        </div>
        <div className="space-y-1 ml-5">
          <h3 className="underline">
            <Link href="/">Lorem Ipsum1</Link>
          </h3>
          <h3 className="underline">
            <Link href="/">Lorem Ipsum2</Link>
          </h3>
          <h3 className="underline">
            <Link href="/">Lorem Ipsum3</Link>
          </h3>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-lg pb-2 font-medium">Quick Reports</h1>
        </div>
        <div className="space-y-1 ml-5">
          <h3 className="underline">
            <Link href="/">Lorem Ipsum1</Link>
          </h3>
          <h3 className="underline">
            <Link href="/">Lorem Ipsum2</Link>
          </h3>
          <h3 className="underline">
            <Link href="/">Lorem Ipsum3</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
