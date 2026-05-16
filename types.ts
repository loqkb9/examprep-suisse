export enum CourseId {
  PYTHON = 'python'
}

export interface CourseData {
  id: CourseId;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  format: string;
  level: string;
  price: string;
  duration: string;
  image: string;
}

export interface BookingDetails {
  name: string;
  email: string;
  courseId: CourseId;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}