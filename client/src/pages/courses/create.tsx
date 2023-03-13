import React from 'react';
import Container from '@/src/shared/layouts/Container';
import Breadcrumbs from '@/src/shared/components/Breadcrumbs';
import InputField from '@/src/shared/components/InputField';
import Textfield from '@/src/shared/components/TextField';
import Button from '@/src/shared/components/Button';
import Footer from '@/src/shared/components/Footer';
import { useRouter } from 'next/router';

const CoursesCreate: React.FC = () => {
  const router = useRouter();
  const handleCancel = (): void => {
    router.back();
  };
  const paths = [
    {
      text: 'Courses',
      url: '/courses'
    },
    {
      text: 'Create',
      url: '/courses/create'
    }
  ];
  return (
    <Container>
      <Breadcrumbs
        paths={paths}
      />
      <div className="flex flex-col mt-10">
        <form>
          <div className="text-2xl font-bold">Create Course</div>
          <div className="mt-12">
            <div className="block">
              <InputField
                placeholder={'E.g. TypeScript 101'}
                type="text"
                width="20%"
                height="50px"
                label="Course Name"
                id="course-name"
              />
            </div>
            <div className="block">
              <Textfield
                className="text-xl border border-black rounded-lg rows"
                resizable={false}
                width={30}
                height={2}
                label="Course Description"
              />
            </div>
          </div>
          <Footer alignment="right">
            <Button text={'Cancel'} color="#9ca3af" onClick={handleCancel} />
            <Button text={'Create'} color="#325184"/>
          </Footer>
        </form>
      </div>
    </Container>
  );
};

export default CoursesCreate;
