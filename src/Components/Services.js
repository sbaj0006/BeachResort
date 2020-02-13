import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas vel vitae veritatis doloremque, voluptate illo sint dolorem soluta iure culpa, consequuntur perspiciatis distinctio modi ea quod est! Reprehenderit, laboriosam."
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas vel vitae veritatis doloremque, voluptate illo sint dolorem soluta iure culpa, consequuntur perspiciatis distinctio modi ea quod est! Reprehenderit, laboriosam."
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas vel vitae veritatis doloremque, voluptate illo sint dolorem soluta iure culpa, consequuntur perspiciatis distinctio modi ea quod est! Reprehenderit, laboriosam."
      },
      {
        icon: <FaBeer />,
        title: "Strongest bear",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas vel vitae veritatis doloremque, voluptate illo sint dolorem soluta iure culpa, consequuntur perspiciatis distinctio modi ea quod est! Reprehenderit, laboriosam."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
