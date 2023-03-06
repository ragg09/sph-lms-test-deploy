/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from 'react';
import Iframe from '@/src/shared/components/Iframe';
import Card from '@/src/shared/components/Card';

const DemoComponent: React.FunctionComponent = () => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <h1>Components Demo Page</h1>
        <br />
        <hr className="w-3/4 mx-auto" />

        <div className="p-4 border">
          <Iframe src="https://www.youtube.com/embed/HGl75kurxok" />

          <div className="mt-[5px]">
            <h1>Props: Iframe</h1>

            <div className="bg-gray-300 p-[5px]">
              <p>className = (string)["auto"] ex. className="border-2"</p>
              <p> width = (string)["auto"] ex. width="100px" | width="70%"</p>
              <p>height = (string)["auto"] ex. height="100px" | height="70%"</p>
              <p>
                src = (string)[required] ex.
                src="https://www.youtube.com/embed/HGl75kurxok"
              </p>
              <p>title = (string)["auto"] ex. title="Relaxing Music"</p>
            </div>
          </div>
        </div>

        <br />
        <hr className="w-3/4 mx-auto" />
      </div>

      <div className="p-4 border -b border-black" id="card">
        <Card height='h-30' title='Sample Card'>
          <main>This is a card component</main>
        </Card>
        <div className="mt-[5px]">
          <h1>Props: Card</h1>
          <div className="bg-gray-300 p-[5px]">
            height: string || ex. height=&apos;h-20&apos; <br />
            title: string || ex. title=&apos;Sample Title&apos; <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DemoComponent;
