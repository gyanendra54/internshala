
import React from 'react';
import TabsWidget from './TabsWidget';
import GalleryWidget from './GalleryWidget';

const RightPanel = () => {
  return (
    <div className="w-full lg:w-1/2 p-4 mt-6 ">
      <TabsWidget /> 
      <div className="my-4 border-t border-gray-600"></div>    
      <GalleryWidget />
      <div className="my-4 border-t border-gray-600"></div> 
    </div>
  );
};

export default RightPanel;
