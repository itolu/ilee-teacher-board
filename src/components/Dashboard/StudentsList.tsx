
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Student } from '@/data/mockData';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StudentsListProps {
  students: Student[];
  currentSubject: string;
  selectedStudent: Student | null;
  onSelectStudent: (student: Student) => void;
}

const StudentsList: React.FC<StudentsListProps> = ({ 
  students, 
  currentSubject,
  selectedStudent,
  onSelectStudent
}) => {
  // Sort students by their performance in the current subject
  const sortedStudents = [...students].sort((a, b) => {
    const aSubject = a.subjects.find(s => s.subject === currentSubject);
    const bSubject = b.subjects.find(s => s.subject === currentSubject);
    return (bSubject?.averageScore || 0) - (aSubject?.averageScore || 0);
  });

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-buenos">Students Performance in {currentSubject}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {sortedStudents.map((student) => {
            const subjectData = student.subjects.find(s => s.subject === currentSubject);
            const averageScore = subjectData?.averageScore || 0;
            const baselineScore = subjectData?.baselineScore || 0;
            const improvement = averageScore - baselineScore;
            const isImproving = improvement >= 0;
            
            return (
              <div
                key={student.id}
                onClick={() => onSelectStudent(student)}
                className={`p-4 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  selectedStudent?.id === student.id
                    ? 'bg-ilee-lavender border border-ilee-purple'
                    : 'hover:bg-ilee-lavender/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={student.avatar} 
                    alt={student.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium">{student.name}</h4>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-gray-600">Baseline: {baselineScore}%</span>
                      <span className="mx-1 text-gray-400">→</span>
                      <span className="text-gray-600">Current: {averageScore}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isImproving ? 'text-green-600' : 'text-red-500'}`}>
                    {isImproving ? '+' : ''}{improvement}%
                  </span>
                  <div className={`p-1 rounded ${isImproving ? 'bg-green-100' : 'bg-red-100'}`}>
                    {isImproving ? (
                      <ArrowUp className={`h-3 w-3 ${isImproving ? 'text-green-600' : 'text-red-500'}`} />
                    ) : (
                      <ArrowDown className="h-3 w-3 text-red-500" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentsList;
