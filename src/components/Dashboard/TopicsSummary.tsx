
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { students } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TopicsSummaryProps {
  currentSubject: string;
}

const TopicsSummary: React.FC<TopicsSummaryProps> = ({ currentSubject }) => {
  // Get all unique topics for the current subject
  const allTopics: string[] = [];
  students.forEach(student => {
    const subject = student.subjects.find(s => s.subject === currentSubject);
    if (subject) {
      subject.topics.forEach(topic => {
        if (!allTopics.includes(topic.topic)) {
          allTopics.push(topic.topic);
        }
      });
    }
  });

  // Calculate average scores for each topic
  const topicScores = allTopics.map(topicName => {
    let totalScore = 0;
    let count = 0;

    students.forEach(student => {
      const subject = student.subjects.find(s => s.subject === currentSubject);
      if (subject) {
        const topic = subject.topics.find(t => t.topic === topicName);
        if (topic) {
          totalScore += topic.score;
          count++;
        }
      }
    });

    const averageScore = count > 0 ? Math.round(totalScore / count) : 0;
    
    // Classify performance level
    let performanceLevel = '';
    if (averageScore >= 90) performanceLevel = 'Excellent';
    else if (averageScore >= 80) performanceLevel = 'Good';
    else if (averageScore >= 70) performanceLevel = 'Satisfactory';
    else if (averageScore >= 60) performanceLevel = 'Needs Improvement';
    else performanceLevel = 'Requires Attention';

    return {
      topic: topicName,
      averageScore,
      performanceLevel
    };
  });

  return (
    <Card className="border-none shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-buenos">{currentSubject} Topics Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="performance">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>
          <TabsContent value="performance" className="pt-4">
            <div className="space-y-4">
              {topicScores.map(item => (
                <div key={item.topic} className="rounded-lg bg-white p-4 border">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.topic}</h3>
                    <span 
                      className={`text-sm font-medium px-2 py-1 rounded-full ${
                        item.averageScore >= 80 
                          ? 'bg-green-100 text-green-800' 
                          : item.averageScore >= 70 
                            ? 'bg-blue-100 text-blue-800'
                            : item.averageScore >= 60
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {item.averageScore}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Class average</span>
                    <span className="text-gray-600">{item.performanceLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="recommendations" className="pt-4">
            <div className="space-y-4">
              {topicScores.map(item => {
                let recommendation = '';
                
                if (item.averageScore >= 90) {
                  recommendation = 'Challenge students with advanced material';
                } else if (item.averageScore >= 80) {
                  recommendation = 'Maintain current teaching approach';
                } else if (item.averageScore >= 70) {
                  recommendation = 'Provide additional practice exercises';
                } else if (item.averageScore >= 60) {
                  recommendation = 'Consider review sessions';
                } else {
                  recommendation = 'Intensive intervention required';
                }
                
                return (
                  <div key={item.topic} className="rounded-lg bg-ilee-cream p-4">
                    <h3 className="font-semibold mb-2">{item.topic}</h3>
                    <p className="text-sm text-gray-700">{recommendation}</p>
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TopicsSummary;
