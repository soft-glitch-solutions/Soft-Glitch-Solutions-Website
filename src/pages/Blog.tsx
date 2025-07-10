import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import blogData from "../data/blog.json";
import { Footer } from "../components/Footer";
import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Soft Glitch Solutions | Web Development & IT Insights</title>
        <meta name="description" content="Stay updated with the latest web development trends, IT consulting insights, and technology tips from the experts at Soft Glitch Solutions." />
        <meta name="keywords" content="web development blog, IT consulting articles, technology insights, programming tips, digital transformation" />
        <link rel="canonical" href="https://softglitchsolutions.com/blog" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <Navigation />
        <div className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark mb-4">
                {blogData.title}
              </h1>
              <p className="text-xl text-gray-600">{blogData.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogData.posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-secondary-dark mb-4">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">By {post.author}</div>
                      <div className="flex gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
