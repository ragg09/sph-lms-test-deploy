import { Fragment } from 'react';
import type { FC } from 'react';
import GridCard from '@/src/shared/cards/GridCard';
import ListCard from '@/src/shared/cards/ListCard';

export interface TypeOfViewProps {
  typeOfView: string;
  listOfCourses: string[];
}

const ViewAs: FC<TypeOfViewProps> = ({
  typeOfView,
  listOfCourses
}: TypeOfViewProps) => {
  return (
    <Fragment>
      {typeOfView === 'grid'
        ? (<div className="grid grid-cols-3 ">
              {listOfCourses.map((data, index) => (
                <div
                  key={index}
                  className="m-3 drop-shadow-lg h-80 border-2 flex justify-between"
                >
                  <GridCard
                    courseTitle={'Title'}
                    imageSource={'/image1.jpg'}
                    category={'General'}
                    date={'03-01-2023'}
                  ></GridCard>
                </div>
              ))}
            </div>
          )
        : (<div>
              {listOfCourses.map((data, index) => (
                <div key={index} className="m-3">
                  <ListCard
                    courseTitle={'Title'}
                    imageSource={'/image1.jpg'}
                    category={'General'}
                    date={'03-01-2023'}
                  ></ListCard>
                </div>
              ))}
            </div>
          )
      }
    </Fragment>
  );
};

export default ViewAs;
