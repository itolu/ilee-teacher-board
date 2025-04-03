
export type Student = {
  id: number;
  name: string;
  avatar: string;
  subjects: SubjectPerformance[];
};

export type SubjectPerformance = {
  subject: string;
  averageScore: number;
  baselineScore: number;
  desiredScore: number;
  topics: TopicPerformance[];
};

export type TopicPerformance = {
  topic: string;
  score: number;
  maxScore: number;
};

export const subjects = [
  "Mathematics",
  "Science",
  "English",
  "History"
];

export const students: Student[] = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "https://ui-avatars.com/api/?name=Emma+Thompson&background=7d78f7&color=fff",
    subjects: [
      {
        subject: "Mathematics",
        averageScore: 82,
        baselineScore: 75,
        desiredScore: 90,
        topics: [
          { topic: "Algebra", score: 85, maxScore: 100 },
          { topic: "Geometry", score: 78, maxScore: 100 },
          { topic: "Statistics", score: 83, maxScore: 100 }
        ]
      },
      {
        subject: "Science",
        averageScore: 88,
        baselineScore: 80,
        desiredScore: 95,
        topics: [
          { topic: "Physics", score: 90, maxScore: 100 },
          { topic: "Chemistry", score: 86, maxScore: 100 },
          { topic: "Biology", score: 88, maxScore: 100 }
        ]
      },
      {
        subject: "English",
        averageScore: 90,
        baselineScore: 85,
        desiredScore: 95,
        topics: [
          { topic: "Grammar", score: 92, maxScore: 100 },
          { topic: "Literature", score: 88, maxScore: 100 },
          { topic: "Writing", score: 90, maxScore: 100 }
        ]
      },
      {
        subject: "History",
        averageScore: 78,
        baselineScore: 70,
        desiredScore: 85,
        topics: [
          { topic: "Ancient History", score: 75, maxScore: 100 },
          { topic: "Modern History", score: 80, maxScore: 100 },
          { topic: "World Wars", score: 79, maxScore: 100 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "James Wilson",
    avatar: "https://ui-avatars.com/api/?name=James+Wilson&background=7d78f7&color=fff",
    subjects: [
      {
        subject: "Mathematics",
        averageScore: 75,
        baselineScore: 65,
        desiredScore: 85,
        topics: [
          { topic: "Algebra", score: 72, maxScore: 100 },
          { topic: "Geometry", score: 80, maxScore: 100 },
          { topic: "Statistics", score: 73, maxScore: 100 }
        ]
      },
      {
        subject: "Science",
        averageScore: 80,
        baselineScore: 75,
        desiredScore: 90,
        topics: [
          { topic: "Physics", score: 78, maxScore: 100 },
          { topic: "Chemistry", score: 82, maxScore: 100 },
          { topic: "Biology", score: 80, maxScore: 100 }
        ]
      },
      {
        subject: "English",
        averageScore: 85,
        baselineScore: 80,
        desiredScore: 90,
        topics: [
          { topic: "Grammar", score: 88, maxScore: 100 },
          { topic: "Literature", score: 82, maxScore: 100 },
          { topic: "Writing", score: 85, maxScore: 100 }
        ]
      },
      {
        subject: "History",
        averageScore: 90,
        baselineScore: 85,
        desiredScore: 95,
        topics: [
          { topic: "Ancient History", score: 92, maxScore: 100 },
          { topic: "Modern History", score: 88, maxScore: 100 },
          { topic: "World Wars", score: 90, maxScore: 100 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Sophia Chen",
    avatar: "https://ui-avatars.com/api/?name=Sophia+Chen&background=7d78f7&color=fff",
    subjects: [
      {
        subject: "Mathematics",
        averageScore: 90,
        baselineScore: 85,
        desiredScore: 95,
        topics: [
          { topic: "Algebra", score: 92, maxScore: 100 },
          { topic: "Geometry", score: 88, maxScore: 100 },
          { topic: "Statistics", score: 90, maxScore: 100 }
        ]
      },
      {
        subject: "Science",
        averageScore: 92,
        baselineScore: 88,
        desiredScore: 98,
        topics: [
          { topic: "Physics", score: 94, maxScore: 100 },
          { topic: "Chemistry", score: 90, maxScore: 100 },
          { topic: "Biology", score: 92, maxScore: 100 }
        ]
      },
      {
        subject: "English",
        averageScore: 78,
        baselineScore: 70,
        desiredScore: 85,
        topics: [
          { topic: "Grammar", score: 80, maxScore: 100 },
          { topic: "Literature", score: 76, maxScore: 100 },
          { topic: "Writing", score: 78, maxScore: 100 }
        ]
      },
      {
        subject: "History",
        averageScore: 85,
        baselineScore: 80,
        desiredScore: 90,
        topics: [
          { topic: "Ancient History", score: 88, maxScore: 100 },
          { topic: "Modern History", score: 82, maxScore: 100 },
          { topic: "World Wars", score: 85, maxScore: 100 }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Michael Brown",
    avatar: "https://ui-avatars.com/api/?name=Michael+Brown&background=7d78f7&color=fff",
    subjects: [
      {
        subject: "Mathematics",
        averageScore: 88,
        baselineScore: 80,
        desiredScore: 95,
        topics: [
          { topic: "Algebra", score: 90, maxScore: 100 },
          { topic: "Geometry", score: 85, maxScore: 100 },
          { topic: "Statistics", score: 89, maxScore: 100 }
        ]
      },
      {
        subject: "Science",
        averageScore: 75,
        baselineScore: 70,
        desiredScore: 85,
        topics: [
          { topic: "Physics", score: 72, maxScore: 100 },
          { topic: "Chemistry", score: 78, maxScore: 100 },
          { topic: "Biology", score: 75, maxScore: 100 }
        ]
      },
      {
        subject: "English",
        averageScore: 80,
        baselineScore: 75,
        desiredScore: 90,
        topics: [
          { topic: "Grammar", score: 78, maxScore: 100 },
          { topic: "Literature", score: 82, maxScore: 100 },
          { topic: "Writing", score: 80, maxScore: 100 }
        ]
      },
      {
        subject: "History",
        averageScore: 82,
        baselineScore: 75,
        desiredScore: 90,
        topics: [
          { topic: "Ancient History", score: 80, maxScore: 100 },
          { topic: "Modern History", score: 84, maxScore: 100 },
          { topic: "World Wars", score: 82, maxScore: 100 }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Olivia Martinez",
    avatar: "https://ui-avatars.com/api/?name=Olivia+Martinez&background=7d78f7&color=fff",
    subjects: [
      {
        subject: "Mathematics",
        averageScore: 70,
        baselineScore: 65,
        desiredScore: 80,
        topics: [
          { topic: "Algebra", score: 68, maxScore: 100 },
          { topic: "Geometry", score: 72, maxScore: 100 },
          { topic: "Statistics", score: 70, maxScore: 100 }
        ]
      },
      {
        subject: "Science",
        averageScore: 85,
        baselineScore: 80,
        desiredScore: 90,
        topics: [
          { topic: "Physics", score: 82, maxScore: 100 },
          { topic: "Chemistry", score: 88, maxScore: 100 },
          { topic: "Biology", score: 85, maxScore: 100 }
        ]
      },
      {
        subject: "English",
        averageScore: 92,
        baselineScore: 88,
        desiredScore: 98,
        topics: [
          { topic: "Grammar", score: 94, maxScore: 100 },
          { topic: "Literature", score: 90, maxScore: 100 },
          { topic: "Writing", score: 92, maxScore: 100 }
        ]
      },
      {
        subject: "History",
        averageScore: 78,
        baselineScore: 70,
        desiredScore: 85,
        topics: [
          { topic: "Ancient History", score: 75, maxScore: 100 },
          { topic: "Modern History", score: 80, maxScore: 100 },
          { topic: "World Wars", score: 79, maxScore: 100 }
        ]
      }
    ]
  }
];

// Calculate class averages for each subject
export const classAverages = subjects.map(subject => {
  const scores = students.map(student => {
    const subjectData = student.subjects.find(s => s.subject === subject);
    return subjectData ? subjectData.averageScore : 0;
  });
  
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
  return {
    subject,
    average: Math.round(average)
  };
});
