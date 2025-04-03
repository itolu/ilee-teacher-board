
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { classAverages } from '@/data/mockData';

interface SubjectOverviewProps {
  currentSubject: string;
  setCurrentSubject: (subject: string) => void;
}

const SubjectOverview: React.FC<SubjectOverviewProps> = ({ 
  currentSubject, 
  setCurrentSubject 
}) => {
  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-buenos">Class Average Scores by Subject</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {classAverages.map((item) => (
            <div 
              key={item.subject}
              onClick={() => setCurrentSubject(item.subject)}
              className={`p-4 rounded-lg cursor-pointer transition-colors ${
                currentSubject === item.subject 
                  ? 'bg-ilee-lavender border border-ilee-purple' 
                  : 'hover:bg-ilee-lavender/50'
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{item.subject}</h3>
                <span className="text-ilee-purple font-bold">{item.average}%</span>
              </div>
              <Progress 
                value={item.average} 
                className={`h-2 ${
                  currentSubject === item.subject 
                    ? 'bg-ilee-cream' 
                    : 'bg-gray-100'
                }`}
                indicatorClassName="bg-ilee-purple"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectOverview;
