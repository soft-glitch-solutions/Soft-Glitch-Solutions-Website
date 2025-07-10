
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Printer, Mail, Phone, Globe, MapPin } from 'lucide-react';

const CompanyProfile = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Create a new window with the page content for PDF generation
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Company Profile - ProTech Solutions</title>
            <style>
              @media print {
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                .no-print { display: none !important; }
                .page-break { page-break-before: always; }
              }
            </style>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
          </head>
          <body>
            ${document.querySelector('.company-profile-content')?.innerHTML}
            <script>
              setTimeout(() => {
                const element = document.body;
                const opt = {
                  margin: 0.5,
                  filename: 'ProTech-Solutions-Company-Profile.pdf',
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2 },
                  jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save().then(() => {
                  window.close();
                });
              }, 1000);
            </script>
          </body>
        </html>
      `);
    }
  };

  const projects = [
    {
      name: "E-Commerce Platform",
      client: "RetailMax Ltd",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      name: "Healthcare Management System",
      client: "MediCare Group",
      description: "Patient management and appointment scheduling system",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      year: "2023"
    },
    {
      name: "Financial Dashboard",
      client: "InvestPro",
      description: "Real-time financial data visualization and analytics",
      technologies: ["React", "D3.js", "WebSocket", "Redis"],
      year: "2024"
    }
  ];

  const brandColors = [
    { name: "Primary Green", hex: "#1DB954", hsl: "hsl(142, 76%, 36%)" },
    { name: "Light Green", hex: "#34D399", hsl: "hsl(158, 64%, 52%)" },
    { name: "Dark Green", hex: "#059669", hsl: "hsl(158, 100%, 30%)" },
    { name: "Secondary Light", hex: "#F0FDF4", hsl: "hsl(120, 60%, 97%)" },
    { name: "Secondary Dark", hex: "#0F172A", hsl: "hsl(222, 47%, 11%)" }
  ];

  return (
    <>
      <Helmet>
        <title>Company Profile - ProTech Solutions</title>
        <meta name="description" content="Comprehensive company profile for ProTech Solutions - Web Development & IT Consulting" />
        <style>
          {`
            @media print {
              body { margin: 0; padding: 0; }
              .no-print { display: none !important; }
              .print-page { page-break-inside: avoid; }
              .page-break { page-break-before: always; }
              .company-profile-content { box-shadow: none !important; }
            }
          `}
        </style>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-primary-light/5 to-white">
        {/* Print/Download Controls */}
        <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
          <Button onClick={handlePrint} variant="outline" size="sm">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleDownloadPDF} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="company-profile-content max-w-4xl mx-auto p-8">
          {/* Cover Page */}
          <div className="text-center mb-16 print-page">
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-primary mb-4">ProTech Solutions</h1>
              <p className="text-2xl text-gray-600 mb-8">Web Development & IT Consulting</p>
              <div className="w-32 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Company Profile</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Transforming businesses through innovative technology solutions and expert consulting services.
                We specialize in creating cutting-edge web applications and providing comprehensive IT support.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">About ProTech Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses with innovative technology solutions that drive growth, 
                    efficiency, and digital transformation. We are committed to delivering exceptional 
                    value through cutting-edge web development and strategic IT consulting.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading technology partner for businesses seeking digital excellence, 
                    recognized for our innovation, reliability, and commitment to client success.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Innovation:</strong> Embracing new technologies and creative solutions</li>
                    <li>• <strong>Quality:</strong> Delivering excellence in every project</li>
                    <li>• <strong>Reliability:</strong> Building trust through consistent performance</li>
                    <li>• <strong>Collaboration:</strong> Working closely with clients as partners</li>
                    <li>• <strong>Growth:</strong> Continuously learning and evolving</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Our Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Web Development</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Custom Web Applications</li>
                      <li>• E-commerce Solutions</li>
                      <li>• Progressive Web Apps (PWA)</li>
                      <li>• API Development & Integration</li>
                      <li>• Database Design & Management</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-primary">IT Consulting</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Technology Strategy Planning</li>
                      <li>• System Architecture Design</li>
                      <li>• Digital Transformation</li>
                      <li>• Performance Optimization</li>
                      <li>• Security Assessment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Projects */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Featured Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6 py-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{project.year}</span>
                      </div>
                      <p className="text-primary font-medium mb-2">{project.client}</p>
                      <p className="text-gray-700 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Company Policies */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Company Guidelines & Policies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance Policy</h3>
                  <p className="text-gray-700 mb-2">
                    We maintain the highest standards of quality through:
                  </p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Comprehensive testing protocols for all deliverables</li>
                    <li>• Regular code reviews and peer assessments</li>
                    <li>• Continuous integration and deployment practices</li>
                    <li>• Client feedback integration at every project milestone</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data Security & Privacy</h3>
                  <p className="text-gray-700 mb-2">
                    Protecting client data is our top priority:
                  </p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• GDPR and data protection compliance</li>
                    <li>• Secure development practices and encrypted communications</li>
                    <li>• Regular security audits and vulnerability assessments</li>
                    <li>• Confidentiality agreements for all team members</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Project Management Standards</h3>
                  <p className="text-gray-700 mb-2">
                    Our structured approach ensures project success:
                  </p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• Agile development methodology with regular sprints</li>
                    <li>• Clear project timelines and milestone tracking</li>
                    <li>• Regular client communication and progress updates</li>
                    <li>• Comprehensive project documentation and handover</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Guidelines */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Brand Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Usage</h3>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <div className="text-4xl font-bold text-primary mb-2">ProTech Solutions</div>
                    <p className="text-sm text-gray-600">Primary Logo</p>
                  </div>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Maintain clear space equal to the height of the "P" around the logo</li>
                    <li>• Do not stretch, distort, or alter the logo proportions</li>
                    <li>• Use on light backgrounds for optimal contrast</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Color Palette</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {brandColors.map((color, index) => (
                      <div key={index} className="text-center">
                        <div
                          className="w-full h-20 rounded-lg mb-2 border"
                          style={{ backgroundColor: color.hex }}
                        ></div>
                        <div className="text-sm font-medium">{color.name}</div>
                        <div className="text-xs text-gray-600">{color.hex}</div>
                        <div className="text-xs text-gray-500">{color.hsl}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Typography</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold mb-1">Primary Font - Inter Bold</div>
                      <p className="text-gray-600 text-sm">Used for headings and important text</p>
                    </div>
                    <div>
                      <div className="text-lg font-medium mb-1">Secondary Font - Inter Medium</div>
                      <p className="text-gray-600 text-sm">Used for subheadings and emphasis</p>
                    </div>
                    <div>
                      <div className="text-base mb-1">Body Font - Inter Regular</div>
                      <p className="text-gray-600 text-sm">Used for body text and general content</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Templates */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Social Media & Marketing Templates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Post Templates</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-primary">Project Showcase Template</h4>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded text-sm">
                        <p className="font-medium">🚀 New Project Launch!</p>
                        <p className="mt-2">We're excited to share our latest [PROJECT TYPE] for [CLIENT NAME]!</p>
                        <p className="mt-2">✨ Key Features:<br/>• [Feature 1]<br/>• [Feature 2]<br/>• [Feature 3]</p>
                        <p className="mt-2">#WebDevelopment #[Technology] #ProTechSolutions</p>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-primary">Service Highlight Template</h4>
                      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded text-sm">
                        <p className="font-medium">💡 Did you know?</p>
                        <p className="mt-2">[Interesting fact about our services]</p>
                        <p className="mt-2">At ProTech Solutions, we [specific service benefit].</p>
                        <p className="mt-2">Ready to transform your business? Get in touch!</p>
                        <p className="mt-2">#ITConsulting #DigitalTransformation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Brand Voice Guidelines</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Professional yet approachable:</strong> Use clear, jargon-free language</li>
                      <li>• <strong>Solution-focused:</strong> Emphasize benefits and outcomes</li>
                      <li>• <strong>Confident:</strong> Showcase expertise without being boastful</li>
                      <li>• <strong>Collaborative:</strong> Position as a partner, not just a service provider</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="page-break">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>info@protechsolutions.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <span>www.protechsolutions.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>123 Tech Street, Innovation City, TC 12345</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                    <div className="space-y-2 text-gray-700">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="mt-4 p-3 bg-primary/10 rounded">
                        <p className="text-sm text-primary font-medium">
                          Emergency support available 24/7 for critical issues
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t">
            <p className="text-gray-600">
              © 2024 ProTech Solutions. All rights reserved. | Transforming businesses through technology.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
