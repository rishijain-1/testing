import React from 'react';
import Image from 'next/image';
import ProfileCard from './ProfileCard';

const SingleSlugArticle = ({ post }) => {
  console.log(post)
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                <h1>{post.title.rendered}</h1> {/* Post Title */}
                <div
                  className="img-fluid"
                  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
                {/* Replace the static paragraphs and lists with dynamic content */}
                {/* <div className="blog-details-info mt-5">
                  <h3 className="h5">Customer retention is key</h3>
                  <ul className="content-list list-unstyled">
                    {post.key_points &&
                      post.key_points.map((point, index) => (
                        <li key={index}>{point}</li> // Assuming `key_points` is an array in post data
                      ))}
                  </ul>
                  <blockquote className="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                    <p className="text-muted">
                      <i className="fas fa-quote-left me-2 text-primary"></i>
                      {post.quote}{' '}
                    
                      <i className="fas fa-quote-right ms-2 text-primary"></i>
                    </p>
                  </blockquote>
                </div> */}
                {/* <Image
                  width={820}
                  height={351}
                  src={post.image_url || '/tab-feature-img-4.png'} // Use post image if available
                  className="img-fluid mt-4 rounded-custom"
                  alt={post.title.rendered}
                />
                <div className="job-details-info mt-5">
                  <h3 className="h5">
                    Focus on increasing customer retention first
                  </h3>
                  <p>{post.focus_statement}</p>{' '}
                  
                  <ul className="content-list list-unstyled">
                    {post.additional_points &&
                      post.additional_points.map((point, index) => (
                        <li key={index}>{point}</li> // Assuming `additional_points` is an array
                      ))}
                  </ul>
                </div>
                <div className="blog-details-info mt-5">
                  <h3 className="h5">Skill & Experience</h3>
                  <ul className="content-list list-unstyled">
                    {post.skills &&
                      post.skills.map((skill, index) => (
                        <li key={index}>{skill}</li> // Assuming `skills` is an array
                      ))}
                  </ul>
                </div>
                <Image
                  width={820}
                  height={355}
                  src={post.second_image_url || '/tab-feature-img-2.png'} // Use second image if available
                  className="img-fluid mt-5 rounded-custom"
                  alt="apply"
                /> */}
              </div>
            </div>
            <div className="col-lg-4">
              <ProfileCard author={post.yoast_head_json.author} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleSlugArticle;
