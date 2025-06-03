
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Create email body
      const emailBody = `
New Professional Website Inquiry

Client Details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company || 'Not provided'}
- Phone: ${data.phone || 'Not provided'}

Project Details:
- Project Type: ${data.projectType}
- Budget Range: ${data.budget}
- Timeline: ${data.timeline}

Message:
${data.message}
      `;

      // Create mailto link
      const subject = encodeURIComponent('Professional Website Services Inquiry');
      const body = encodeURIComponent(emailBody);
      const mailtoLink = `mailto:shaqeelless4@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Email client opened",
        description: "Your default email client should now be open with the pre-filled message.",
      });

      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <div className="text-center mb-8">
        <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-secondary-dark mb-4">
          Need a Professional Website?
        </h2>
        <p className="text-gray-600">
          Let us create a stunning, professional website for your business. Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              {...register('company')}
            />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...register('phone')}
            />
          </div>

          <div>
            <Label htmlFor="projectType">Project Type *</Label>
            <select
              id="projectType"
              {...register('projectType')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select project type</option>
              <option value="business-website">Business Website</option>
              <option value="e-commerce">E-commerce Store</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="blog">Blog/News Site</option>
              <option value="landing-page">Landing Page</option>
              <option value="web-application">Web Application</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="budget">Budget Range *</Label>
            <select
              id="budget"
              {...register('budget')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select budget range</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-2500">$1,000 - $2,500</option>
              <option value="2500-5000">$2,500 - $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-plus">$10,000+</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="timeline">Timeline *</Label>
            <select
              id="timeline"
              {...register('timeline')}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-2-weeks">1-2 weeks</option>
              <option value="1-month">1 month</option>
              <option value="2-3-months">2-3 months</option>
              <option value="flexible">Flexible</option>
            </select>
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="message">Project Details *</Label>
          <Textarea
            id="message"
            placeholder="Please describe your project requirements, goals, and any specific features you need..."
            rows={6}
            {...register('message')}
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          <Send className="h-5 w-5 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>We'll respond to your inquiry within 24 hours</p>
      </div>
    </div>
  );
};
