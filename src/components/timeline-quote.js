import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimelineQuote = ({
  className,
  body,
  name,
  company,
  role,
  profilePic,
}) => {
  const profilePicUrl =
    profilePic && profilePic.src && profilePic.src.publicURL;

  return (
    <div className={classNames('quote', className)}>
      <img alt={name} className="quote__profile-pic" src={profilePicUrl} />
      <div className="quote__content">
        <blockquote
          className="quote__quote"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <span className="quote__attribution">
          {`${name}, ${role}`}
          {company && (
            <>
              {' at'}
              <span className="quote__attribution-company">{company}</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

TimelineQuote.propTypes = {
  className: PropTypes.string,
  profilePic: PropTypes.shape({}).isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string,
};

TimelineQuote.defaultProps = {
  className: null,
  company: null,
};

export default TimelineQuote;
