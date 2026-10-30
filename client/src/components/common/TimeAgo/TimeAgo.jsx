/*!
 * Copyright (c) 2024 PLANKA Software GmbH
 * Licensed under the Fair Use License: https://github.com/plankanban/planka/blob/master/LICENSE.md
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import getDateFormat from '../../../utils/get-date-format';

const TimeAgo = React.memo(({ date }) => {
  const [t] = useTranslation();

  const formattedDate = useCallback(
    (value) =>
      t(`format:${getDateFormat(value)}`, {
        value,
        postProcess: 'formatDate',
      }),
    [t],
  )(date);

  return <span>{formattedDate}</span>;
});

TimeAgo.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  withExpiration: PropTypes.bool,
};

TimeAgo.defaultProps = {
  withExpiration: false,
};

export default TimeAgo;
