import React, { useState } from 'react';

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 h-48
     overflow-hidden">
      <div className="flex justify-around pb-2 bg-black rounded-2xl">
        <button
          className={` p-2 ${activeTab === 'about' ? 'text-white bg-gray-800 rounded-2xl mt-1' : 'text-gray-300'}`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`  p-2 ${activeTab === 'experience' ? 'text-white bg-gray-800 rounded-lg mt-1' : 'text-gray-300'}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </button>
        <button
          className={` p-2 ${activeTab === 'recommended' ? 'text-white bg-gray-800 rounded-lg mt-1' : 'text-gray-300'}`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="text-gray-300 mt-4 h-20 overflow-y-auto custom-scrollbar">
        {activeTab === 'about' && (
          <p className='text-gray-400'>
            Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
          </p>
        )}
        {activeTab === 'experience' && <p>My work experience...</p>}
        {activeTab === 'recommended' && <p>Recommended resources...</p>}
      </div>
    </div>
  );
};

export default TabsWidget;
