import React, { useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import Introduction from '../components/introduction';
import SEO from '../components/seo';
import About from '../components/about';
import Skills from '../components/skills';
import Work from '../components/work';
import Contact from '../components/contact';

const IndexPage = ({ data }) => {
  const [headerActive, setHeaderActive] = useState(false);

  return (
    <Layout headerActive={headerActive}>
      <SEO />
      <Introduction
        background={data.introduction.background}
        name={data.introduction.name}
        tagline={data.introduction.tagline}
        navigationItems={data.global.navigation}
        socialMediaLinks={data.global.socialMediaFull}
        setHeaderActive={setHeaderActive}
        id="top"
      />
      <About
        body={data.about.body}
        id="about"
        profilePicImage={data.about.profilePic.src}
        profilePicAlt={data.about.profilePic.alt}
      />
      <Skills
        id="skills"
        introductionTitle={data.skills.introduction.title}
        introductionBody={data.skills.introduction.body}
        introductionBackground={data.skills.introduction.background}
        mainSkillsTitle={data.skills.mainSkills.title}
        mainSkillsSkills={data.skills.mainSkills.skills}
        workflowTitle={data.skills.workflow.title}
        workflowSkills={data.skills.workflow.skills}
        softwareTitle={data.skills.software.title}
        softwareSkills={data.skills.software.skills}
      />
      <Work
        id="work"
        introductionTitle={data.work.introduction.title}
        introductionBody={data.work.introduction.body}
        introductionBackground={data.work.introduction.background}
        timeline={data.work.timeline}
      />
      <Contact
        id="contact"
        introductionTitle={data.contact.introduction.title}
        introductionBody={data.contact.introduction.body}
        introductionBackground={data.contact.introduction.background}
        submitSuccessMessage={data.contact.form.contactSuccess}
        submitFailedMessage={data.contact.form.contactFailed}
      />
    </Layout>
  );
};

export const query = graphql`
  query homePageQuery {
    global: globalJson {
      navigation {
        link
        text
      }
      socialMediaFull {
        name
        url
      }
    }
    introduction: introductionJson {
      background {
        alt
        src {
          childImageSharp {
            gatsbyImageData(width: 1440)
          }
        }
      }
      name
      tagline
    }
    about: aboutJson {
      body
      profilePic {
        alt
        src {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
    skills: skillsJson {
      introduction {
        body
        title
        background {
          alt
          src {
            childImageSharp {
              gatsbyImageData(width: 1440)
            }
          }
        }
      }
      mainSkills {
        title
        skills {
          body
          subTitle
          title
        }
      }
      workflow {
        title
        skills {
          title
          body
        }
      }
      software {
        title
        skills {
          title
        }
      }
    }
    work: workJson {
      introduction {
        body
        title
        background {
          alt
          src {
            childImageSharp {
              gatsbyImageData(width: 1440)
            }
          }
        }
      }
      timeline {
        perm {
          period
          company
          url
          role
          introduction
          responsibilities {
            body
          }
          logo {
            alt
            src {
              publicURL
            }
          }
        }
        freelancing {
          startDate
          startTitle
          remote {
            title
            period
            modules {
              module
              noBorder
              data {
                ... on TimelineQuote {
                  body
                  company
                  name
                  role
                  profilePic {
                    alt
                    src {
                      publicURL
                    }
                  }
                }
                ... on TimelineContent {
                  body
                }
                ... on TimelineCompanyGrid {
                  companies {
                    url
                    slug
                    name
                    logo {
                      alt
                      src {
                        publicURL
                      }
                    }
                  }
                }
              }
            }
          }
          contracting {
            yearStarting
            contracts {
              slug
              company
              url
              slug
              logoTitle
              logo {
                src {
                  publicURL
                }
              }
              modules {
                module
                data {
                  ... on TimelineQuote {
                    body
                    company
                    name
                    role
                    profilePic {
                      alt
                      src {
                        publicURL
                      }
                    }
                  }
                  ... on TimelineContent {
                    body
                  }
                }
              }
            }
          }
        }
      }
    }
    contact: contactJson {
      introduction {
        body
        title
        background {
          alt
          src {
            childImageSharp {
              gatsbyImageData(width: 1440)
            }
          }
        }
      }
      form {
        contactSuccess
        contactFailed
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default IndexPage;
