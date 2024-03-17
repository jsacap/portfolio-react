import React, { lazy, Suspense } from 'react';
const TagList = lazy(() => import('./TagList'));
const CreateTags = lazy(() => import('./CreateTags'));

const TagsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Tags...</div>}>
        <TagList />
      </Suspense>
      <Suspense fallback={<div>Loading Create Tag Form...</div>}>
        <CreateTags />
      </Suspense>
    </div>
  );
};

export default TagsPage;
