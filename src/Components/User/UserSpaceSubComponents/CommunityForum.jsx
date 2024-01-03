// Forum.js

import React, { useState } from 'react';
import '../../../assets/styles/forum.css'; // Import the CSS file for Forum styling
import ForumPost from './ForumPost'; // Import the ForumPost component

const CommunityForum = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React programming.', content: 'This is the first post', user: 'Khalil Ankri', views: 5, timestamp: '2 hours ago', userProfilePic: 'algorm.jpg' },
    { id: 2, title: 'JavaScript Fundamentals', description: 'Explore the core concepts of JavaScript.', content: 'Another post here', user: 'Ahmed Amin', views: 10, timestamp: '1 day ago', userProfilePic: 'how.png' },
    { id: 3, title: 'Web Development Best Practices', description: 'Discuss the best practices in web development.', content: 'A third post for the forum', user: 'Mouad Khartouch', views: 8, timestamp: '3 days ago', userProfilePic: 'algorm.jpg' },
    { id: 4, title: 'React State Management', description: 'Explore state management in React applications.', content: 'A Fourth Post for the forum', user: 'Hamza Khribech', views: 3, timestamp: '5 days ago', userProfilePic: 'algorm.jpg' },
    { id: 5, title: 'React Hooks Explained', description: 'Deep dive into React hooks for functional components.', content: 'Exploring the power of hooks in React development.', user: 'Amina Khan', views: 15, timestamp: '1 week ago', userProfilePic: 'profile5.jpg' },
    { id: 6, title: 'Responsive Web Design Techniques', description: 'Learn how to create responsive web designs using CSS.', content: 'Tips and tricks for building responsive user interfaces.', user: 'Sara Smith', views: 12, timestamp: '2 weeks ago', userProfilePic: 'profile6.jpg' },
    { id: 7, title: 'Building a RESTful API with Node.js', description: 'Step-by-step guide to create a RESTful API using Node.js.', content: 'Covering the essentials of building robust APIs.', user: 'John Doe', views: 20, timestamp: '3 weeks ago', userProfilePic: 'profile7.jpg' },
    { id: 8, title: 'Vue.js vs. React: A Comparison', description: 'Analyzing the differences between Vue.js and React.', content: 'Pros and cons of both frameworks for frontend development.', user: 'Liam Miller', views: 18, timestamp: '1 month ago', userProfilePic: 'profile8.jpg' },
    { id: 9, title: 'CSS-in-JS Solutions for Styled Components', description: 'Explore various CSS-in-JS libraries for styling React components.', content: 'Choosing the right solution for your styling needs.', user: 'Emma Watson', views: 25, timestamp: '2 months ago', userProfilePic: 'profile9.jpg' },
    { id: 10, title: 'GraphQL: A Modern API for Frontend Development', description: 'Introduction to GraphQL and its benefits in frontend development.', content: 'Understanding the query language revolutionizing API design.', user: 'Alex Turner', views: 22, timestamp: '3 months ago', userProfilePic: 'profile10.jpg' }

  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
    content: '',
    userProfilePic: '', // Added userProfilePic field
  });

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();

    // Create a new post with a unique ID, the entered content, user, views, and timestamp
    const newPostObject = {
      id: posts.length + 1,
      title: newPost.title,
      description: newPost.description,
      content: newPost.content,
      user: 'NewUser', // You can set a default user or get it from somewhere else
      views: 0,
      timestamp: 'Just now',
      userProfilePic: newPost.userProfilePic,
    };

    // Update the state with the new post
    setPosts([...posts, newPostObject]);

    // Clear the new post input fields
    setNewPost({
      title: '',
      description: '',
      content: '',
      userProfilePic: '',
    });
  };

  return (
    <div className='ForumContainer'>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e3a8a', margin: '30px'}}> Community Forum</h1>

      <form onSubmit={handlePostSubmit} className='formContainer'>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          name='title'
          value={newPost.title}
          onChange={handlePostChange}
        />

        <label htmlFor='description'>Description:</label>
        <textarea
          type='text'
          id='description'
          name='description'
          value={newPost.description}
          onChange={handlePostChange}
        />

        

        <button type='submit' className='PostButton'>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text"> Post </span>
        </button>
      </form>

      <div className='PostList'>
        {/* Display existing posts */}
        {posts.map((post) => (
          <ForumPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
