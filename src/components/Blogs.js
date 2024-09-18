import React from 'react';
import { Link } from 'react-router-dom';
import DataVisualization from '../assests/images/Data Visualization.jpeg';
import Top10AI from '../assests/images/Top10AI.jpeg';
import DashboardBlog from '../assests/images/DashboardBlog.JPG';
import '../assests/styles/Blogs.css'; // Import the CSS for styling

const blogs = [
  {
    id: 1,
    image: DataVisualization,
    title: 'Top 5 data visualization tools you should know',
    category: 'News',
    author: 'Nandan Sahu',
    detailsLink: '#',
  },
  {
    id: 2,
    image: Top10AI,
    title: '10 AI Tools Every Content Creator Should Know About',
    category: 'Data Analyst',
    author: 'Nandan Sahu',
    detailsLink: '#',
  },
  {
    id: 3,
    image: DashboardBlog,
    title: 'Building a Dashboard from Scratch: A Case Study',
    category: 'Data Analysis',
    author: 'Nandan Sahu',
    detailsLink: '#',
  },
  // Add more blog objects as needed
];

const BlogCard = ({ image, title, category, author, detailsLink }) => {
  return (
    <Link to={detailsLink} className="blog-card">
      <div className="blog-image-container">
        <img src={image} alt={title} className="blog-image" />
        <div className="blog-category">{category}</div>
      </div>
      <div className="blog-info">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-author"> by {author}</p>
      </div>
    </Link>
  );
};

const Blogs = () => {
  return (
    <>
    <hr></hr>
    <section id="blogs">
      <h1>Blogs</h1>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.image}
            title={blog.title}
            category={blog.category}
            author={blog.author}
            detailsLink={blog.detailsLink}
            />
          ))}
      </div>
    </section>
 </>
  );
};

export default Blogs;
