
import { CourseId } from "../types";

export interface BookingData {
  name: string;
  email: string;
  courseId: CourseId;
  courseTitle: string;
  date: string;
  paymentMethod: string;
}

export const sendBookingConfirmation = async (data: BookingData): Promise<boolean> => {
  try {
    // Call the backend API endpoint
    const response = await fetch('/api/send-confirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        courseTitle: data.courseTitle, // Ensure this matches backend expectation
        date: data.date,
        paymentMethod: data.paymentMethod
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Server responded with error:", errorData);
      throw new Error('Failed to send email confirmation');
    }

    const result = await response.json();
    return result.success === true;

  } catch (error) {
    console.error('Email service error:', error);
    // In a real production app, you might want to log this to a monitoring service
    throw error;
  }
};
