
import React, { useState } from 'react';
import { subjects, students, Student } from '@/data/mockData';
import SubjectOverview from './SubjectOverview';
import StudentsList from './StudentsList';
import StudentDetail from './StudentDetail';
import TopicsSummary from './TopicsSummary';

const MainDashboard: React.FC = () => {
  const [currentSubject, setCurrentSubject] = useState<string>(subjects[0]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleSelectStudent = (student: Student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <SubjectOverview 
            currentSubject={currentSubject}
            setCurrentSubject={setCurrentSubject}
          />
          <TopicsSummary currentSubject={currentSubject} />
        </div>
        
        <div className="lg:col-span-1">
          <StudentsList 
            students={students}
            currentSubject={currentSubject}
            selectedStudent={selectedStudent}
            onSelectStudent={handleSelectStudent}
          />
        </div>
        
        <div className="lg:col-span-1">
          <StudentDetail 
            student={selectedStudent}
            currentSubject={currentSubject}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
