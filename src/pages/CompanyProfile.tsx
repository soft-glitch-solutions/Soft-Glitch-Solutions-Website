
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
            <title>Company Profile - Soft Glitch Solutions</title>
            <style>
              @media print {
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
                .no-print { display: none !important; }
                .page-break { page-break-before: always; }
                .print-section { page-break-inside: avoid; }
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
                  filename: 'Soft-Glitch-Solutions-Company-Profile.pdf',
                  image: { type: 'jpeg', quality: 0.98 },
                  html2canvas: { scale: 2, useCORS: true },
                  jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
                  pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
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
      name: "Smart Manufacturing Platform",
      client: "TechManufacturing Inc",
      description: "IoT-enabled manufacturing system with real-time monitoring and predictive maintenance",
      technologies: ["React", "IoT Sensors", "Machine Learning", "Cloud Analytics"],
      year: "2024"
    },
    {
      name: "AI-Powered Customer Service",
      client: "ServicePro Group",
      description: "Intelligent customer service automation with natural language processing",
      technologies: ["Python", "TensorFlow", "NLP", "API Integration"],
      year: "2024"
    },
    {
      name: "Digital Supply Chain Solution",
      client: "LogisticsPro",
      description: "End-to-end supply chain digitization with blockchain tracking",
      technologies: ["Blockchain", "React", "Node.js", "RFID Integration"],
      year: "2023"
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
        <title>Company Profile - Soft Glitch Solutions</title>
        <meta name="description" content="Comprehensive company profile for Soft Glitch Solutions - Innovation Company helping businesses build technology" />
        <style>
          {`
            @media print {
              body { margin: 0; padding: 0; }
              .no-print { display: none !important; }
              .print-section { page-break-inside: avoid; }
              .page-break { page-break-before: always; }
              .company-profile-content { box-shadow: none !important; }
            }
            
            .slide-in {
              animation: slideIn 0.6s ease-out forwards;
            }
            
            .fade-in {
              animation: fadeIn 0.8s ease-out forwards;
            }
            
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            .hover-lift {
              transition: transform 0.3s ease;
            }
            
            .hover-lift:hover {
              transform: translateY(-5px);
            }
          `}
        </style>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Side Navigation Panel */}
        <div className="no-print fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 space-y-2">
            <a href="#overview" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Overview</a>
            <a href="#about" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">About</a>
            <a href="#services" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Services</a>
            <a href="#projects" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Projects</a>
            <a href="#policies" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Policies</a>
            <a href="#brand" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Brand</a>
            <a href="#contact" className="block p-2 text-xs hover:bg-primary/10 rounded transition-colors">Contact</a>
          </div>
        </div>

        {/* Print/Download Controls */}
        <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
          <Button onClick={handlePrint} variant="outline" size="sm" className="hover-lift">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleDownloadPDF} size="sm" className="hover-lift">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="company-profile-content max-w-4xl mx-auto p-8">
          {/* Cover Page */}
          <div id="overview" className="text-center mb-16 print-section fade-in">
            <div className="mb-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Soft Glitch Solutions
              </h1>
              <p className="text-2xl text-gray-600 mb-8">Innovation Company</p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 hover-lift">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Company Profile</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Empowering businesses to build technology that drives innovation and growth.
                We specialize in helping companies integrate cutting-edge technology solutions into their operations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-600">Technology Solutions</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-gray-600">Years Innovation</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Business Partners</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover-lift">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-600">Innovation Support</div>
              </div>
            </div>
          </div>

          {/* Company Overview */}
          <div id="about" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">About Soft Glitch Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To revolutionize how businesses integrate technology into their operations, creating 
                    innovative solutions that transform ideas into powerful digital realities. We bridge 
                    the gap between business vision and technological implementation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the premier innovation partner for businesses ready to embrace the future, 
                    recognized for our ability to seamlessly blend cutting-edge technology with practical 
                    business solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Innovation:</strong> Pioneering next-generation technology solutions</li>
                    <li>• <strong>Partnership:</strong> Building lasting relationships with our clients</li>
                    <li>• <strong>Excellence:</strong> Delivering superior technology integration</li>
                    <li>• <strong>Adaptability:</strong> Evolving with emerging technologies</li>
                    <li>• <strong>Impact:</strong> Creating meaningful business transformation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services */}
          <div id="services" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Innovation Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-6 rounded-xl hover-lift">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Technology Integration</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Custom Technology Solutions</li>
                      <li>• Business Process Automation</li>
                      <li>• Cloud Infrastructure Setup</li>
                      <li>• API Development & Integration</li>
                      <li>• Digital Workflow Optimization</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-accent/10 to-accent/20 p-6 rounded-xl hover-lift">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Innovation Consulting</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Technology Strategy Development</li>
                      <li>• Digital Transformation Planning</li>
                      <li>• Innovation Roadmap Creation</li>
                      <li>• Tech Stack Modernization</li>
                      <li>• Scalability Assessment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Projects */}
          <div id="projects" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Innovation Projects</CardTitle>
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
          <div id="policies" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Innovation Guidelines & Policies</CardTitle>
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
          <div id="brand" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Brand Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logo Usage</h3>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl mb-4">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      Soft Glitch Solutions
                    </div>
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
                        <p className="mt-2">#Innovation #[Technology] #SoftGlitchSolutions</p>
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
          <div id="contact" className="page-break">
            <Card className="mb-8 bg-white/80 backdrop-blur-sm shadow-xl border-0 slide-in">
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
                        <span>info@softglitchsolutions.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="w-5 h-5 text-primary" />
                        <span>www.softglitchsolutions.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>123 Innovation Drive, Tech Valley, TV 12345</span>
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
                      <div className="mt-4 p-3 bg-primary/10 rounded-xl">
                        <p className="text-sm text-primary font-medium">
                          Innovation support available 24/7 for urgent technology needs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t print-section">
            <p className="text-gray-600">
              © 2024 Soft Glitch Solutions. All rights reserved. | Empowering businesses through innovation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
