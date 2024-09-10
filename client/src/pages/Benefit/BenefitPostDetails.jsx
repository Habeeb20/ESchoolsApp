import React from 'react';

const BenefitPostDetails = ({ post }) => {
  if (!post) return null;

  return (
    <div style={detailsStyles.container}>
      <h2>{post.companyName}</h2>
      <h3>{post.newsTitle}</h3>
      <p><strong>Offer Start:</strong> {post.offerStart}</p>
      <p><strong>Offer End:</strong> {post.offerEnd}</p>
      {post.coverPhoto && (
        <img src={post.coverPhoto} alt="Cover" style={detailsStyles.image} />
      )}
      <p>{post.text}</p>
      <button onClick={() => window.location.reload()} style={detailsStyles.button}>
        Make Another Post
      </button>
    </div>
  );
};

const detailsStyles = {
  container: {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'green',
    color: 'white',
    cursor: 'pointer',
  },
};

export default BenefitPostDetails;
