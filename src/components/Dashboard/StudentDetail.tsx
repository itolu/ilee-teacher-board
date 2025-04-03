
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Student, SubjectPerformance } from '@/data/mockData';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

interface StudentDetailProps {
  student: Student | null;
  currentSubject: string;
}

const StudentDetail: React.FC<StudentDetailProps> = ({ student, currentSubject }) => {
  if (!student) {
    return (
      <Card className="border-none shadow-md h-full flex items-center justify-center">
        <CardContent>
          <p className="text-gray-500 text-center">Select a student to view details</p>
        </CardContent>
      </Card>
    );
  }

  const subjectData = student.subjects.find(s => s.subject === currentSubject) as SubjectPerformance;
  
  // Create data for topic chart
  const topicData = subjectData.topics.map(topic => ({
    name: topic.topic,
    score: topic.score,
  }));

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={student.avatar} 
              alt={student.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <CardTitle className="text-lg font-buenos">{student.name}</CardTitle>
              <p className="text-sm text-gray-600">{currentSubject} Performance</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Progress Overview</h3>
          <div className="bg-ilee-lavender rounded-lg p-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Baseline: {subjectData.baselineScore}%</span>
              <span>Current: {subjectData.averageScore}%</span>
              <span>Target: {subjectData.desiredScore}%</span>
            </div>
            <div className="relative pt-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="absolute h-4 w-4 bg-ilee-purple rounded-full top-0 transform -translate-y-1/2 -translate-x-1/2 border-2 border-white"
                  style={{ left: `${subjectData.baselineScore}%` }}
                ></div>
                <div 
                  className="absolute h-4 w-4 bg-green-500 rounded-full top-0 transform -translate-y-1/2 -translate-x-1/2 border-2 border-white"
                  style={{ left: `${subjectData.averageScore}%` }}
                ></div>
                <div 
                  className="absolute h-4 w-4 bg-blue-500 rounded-full top-0 transform -translate-y-1/2 -translate-x-1/2 border-2 border-white"
                  style={{ left: `${subjectData.desiredScore}%` }}
                ></div>
                <div 
                  className="h-full bg-ilee-purple rounded-full"
                  style={{ 
                    width: `${subjectData.averageScore - subjectData.baselineScore}%`,
                    marginLeft: `${subjectData.baselineScore}%` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">Topic Breakdown</h3>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topicData}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="score" fill="#7d78f7" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="score" position="top" formatter={(value: number) => `${value}%`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">All Subjects Overview</h3>
          <div className="space-y-3">
            {student.subjects.map((subject) => (
              <div key={subject.subject} className="space-y-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm">{subject.subject}</p>
                  <p className="text-sm font-semibold">{subject.averageScore}%</p>
                </div>
                <Progress 
                  value={subject.averageScore} 
                  className="h-2 bg-gray-100"
                  indicatorClassName={subject.subject === currentSubject ? 'bg-ilee-purple' : 'bg-gray-400'}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentDetail;
