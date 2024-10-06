"use client"
import { useState } from 'react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import DownloadResume from '../components/DownloadResume';

const Home = () => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div>
      <h1 className='p-4 bg-blue-300 text-3xl font-bold m-2'>Quotation Builder</h1>

      {/* Form to input resume data */}
      <ResumeForm setResumeData={setResumeData} />

      {/* Preview resume after form submission */}
      {resumeData && (
        <div>
          <ResumePreview data={resumeData} />
          <DownloadResume />
        </div>
      )}
    </div>
  );
};

export default Home;
