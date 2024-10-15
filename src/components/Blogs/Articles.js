/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Articles = ({ posts }) => {
  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
        <div className="row">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="col-lg-6 col-md-12">
                <div className="single-article feature-article rounded-custom my-3">
                  <Link href={`/${post.slug}`}> {/* Updated link without legacyBehavior */}
                    <div className="article-img">
                      <img
                        src={post.featured_media_src_url || "/default-image.jpg"} // Replace with actual image source if available
                        alt={post.title.rendered}
                        className="img-fluid"
                      />
                    </div>
                  </Link>
                  <div className="article-content p-4">
                    <div className="article-category mb-4 d-block">
                      <a
                        href="#!"
                        className="d-inline-block text-dark badge bg-primary-soft"
                      >
                        {post.categories && post.categories[0]} {/* Assuming categories is an array */}
                      </a>
                    </div>
                    <Link href={`/${post.slug}`}> {/* Updated link without legacyBehavior */}
                      <h2 className="h5 article-title limit-2-line-text">
                        {post.title.rendered}
                      </h2>
                    </Link>
                    <p className="limit-2-line-text">
                      {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")} {/* Remove HTML tags from excerpt */}
                    </p>

                    <a href="#!">
                      <div className="d-flex align-items-center pt-4">
                        <div className="avatar">
                          <img
                            src={post.author_image_url || "/default-avatar.jpg"} // Replace with author image if available
                            alt="author"
                            width="40"
                            className="img-fluid rounded-circle me-3"
                          />
                        </div>
                        <div className="avatar-info">
                          <h6 className="mb-0 avatar-name">{post.yoast_head_json.author}</h6>
                          <span className="small fw-medium text-muted">
                            {new Date(post.date).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                              })}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Articles;
